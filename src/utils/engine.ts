import {
  ConfigRules,
  RawRecord,
  ComputedKpi,
  ComputedDecision,
  EnrichedRecord,
  BacktestSummary,
  CheckpointMilestone,
  ActionRecommendation,
  BenchmarkItem
} from '../types';

export function daysBetween(startDateStr: string, endDateStr: string): number {
  if (!startDateStr || !endDateStr) return 0;
  const start = new Date(startDateStr);
  const end = new Date(endDateStr);
  if (isNaN(start.getTime()) || isNaN(end.getTime())) return 0;
  const diffTime = end.getTime() - start.getTime();
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}

export function generateRecordId(
  launchDate: string,
  vendorName: string,
  market: string,
  platform: string,
  index: number
): string {
  const cleanDate = (launchDate || '2026-10-01').replace(/-/g, '');
  const cleanVendor = (vendorName || 'Vendor').replace(/\s+/g, '');
  const cleanMarket = (market || 'MarketA').replace(/\s+/g, '');
  const cleanPlatform = (platform || 'Meta').replace(/\s+/g, '');
  const pad = String(index).padStart(3, '0');
  return `${cleanDate}_${cleanVendor}_${cleanMarket}_${cleanPlatform}_${pad}`;
}

export function validateRow(record: RawRecord): { status: string; isValid: boolean } {
  if (!record.vendorName.trim()) {
    return { status: '⚠️ Incomplete: Vendor Name is required', isValid: false };
  }
  if (record.dataDate < record.launchDate) {
    return { status: '❌ Error: Data Date prior to Launch Date', isValid: false };
  }
  if (record.spendAmount < 0) {
    return { status: '❌ Error: Spend cannot be negative', isValid: false };
  }
  if (record.ftdCount > record.narCount) {
    return { status: '❌ Error: First Deposits (FTD) exceeds Registrations (NAR)', isValid: false };
  }
  if (record.stdCount > record.ftdCount) {
    return { status: '❌ Error: Second Deposits (STD) exceeds First Deposits (FTD)', isValid: false };
  }
  if (record.ttdCount > record.stdCount) {
    return { status: '❌ Error: Third Deposits (TTD) exceeds Second Deposits (STD)', isValid: false };
  }
  return { status: '✅ Valid', isValid: true };
}

export function findBenchmark(market: string, platform: string, benchmarks: BenchmarkItem[]): BenchmarkItem {
  const found = benchmarks.find(
    (b) => b.market.toLowerCase() === market.toLowerCase() && b.platform.toLowerCase() === platform.toLowerCase()
  );
  if (found) return found;

  // Fallback if not found
  return (
    benchmarks[0] || {
      id: 'default',
      market,
      platform,
      targetCFTD: 40.0,
      targetCNAR: 10.0,
      targetD3Ret: 0.2,
      targetCPScore: 70.0,
    }
  );
}

export function computeKpi(record: RawRecord, config: ConfigRules): ComputedKpi {
  const daysDiff = daysBetween(record.launchDate, record.dataDate);
  const daysActive = Math.max(1, daysDiff + 1);

  let checkpointMilestone: CheckpointMilestone = 'Routine Observation';
  if (daysActive === 3) checkpointMilestone = 'Day 3';
  else if (daysActive === 4) checkpointMilestone = 'Day 4';
  else if (daysActive === 7) checkpointMilestone = 'Day 7';
  else if (daysActive >= 30) checkpointMilestone = 'Day 30';

  const cFTD = record.ftdCount > 0 ? record.spendAmount / record.ftdCount : 0;
  const cNAR = record.narCount > 0 ? record.spendAmount / record.narCount : 0;
  const regToFtdRate = record.narCount > 0 ? record.ftdCount / record.narCount : 0;
  const ftdToStdRate = record.ftdCount > 0 ? record.stdCount / record.ftdCount : 0;

  const d2RetentionRate = record.narCount > 0 ? record.d2RetainedCount / record.narCount : 0;
  const d3RetentionRate = record.narCount > 0 ? record.d3RetainedCount / record.narCount : 0;
  const d7RetentionRate = record.narCount > 0 ? record.d7RetainedCount / record.narCount : 0;
  const avgFtdAmount = record.ftdCount > 0 ? record.ftdAmount / record.ftdCount : 0;

  // Comprehensive CP Score calculation:
  // (Target_C_FTD / cFTD * 50) + (FTD_to_STD_Rate / (Min_Recharge * 2) * 25) + (D3_Retention / Target_D3_Ret * 25)
  const benchmark = findBenchmark(record.market, record.platform, config.benchmarks);
  const costScore = cFTD > 0 ? (benchmark.targetCFTD / cFTD) * 50 : 25;
  const minRech = config.minRechargeRate || 0.15;
  const rechScore = (ftdToStdRate / (minRech * 2)) * 25;
  const tgtD3 = benchmark.targetD3Ret || 0.2;
  const retScore = (d3RetentionRate / tgtD3) * 25;

  const cpScore = Math.round(Math.min(100, Math.max(0, costScore + rechScore + retScore)) * 10) / 10;

  return {
    daysActive,
    checkpointMilestone,
    cFTD: Math.round(cFTD * 100) / 100,
    cNAR: Math.round(cNAR * 100) / 100,
    regToFtdRate: Math.round(regToFtdRate * 10000) / 10000,
    ftdToStdRate: Math.round(ftdToStdRate * 10000) / 10000,
    d2RetentionRate: Math.round(d2RetentionRate * 10000) / 10000,
    d3RetentionRate: Math.round(d3RetentionRate * 10000) / 10000,
    d7RetentionRate: Math.round(d7RetentionRate * 10000) / 10000,
    avgFtdAmount: Math.round(avgFtdAmount * 100) / 100,
    cpScore,
  };
}

export function computeDecision(
  record: RawRecord,
  kpi: ComputedKpi,
  config: ConfigRules
): ComputedDecision {
  const benchmark = findBenchmark(record.market, record.platform, config.benchmarks);
  const targetCFTD = benchmark.targetCFTD;
  const scaleLine = targetCFTD * config.scaleCostRatio; // e.g. target * 0.85
  const stopLine = targetCFTD * config.stopCostRatio;   // e.g. target * 1.25

  // Tier 1: Sample Sufficiency
  let sampleSufficiency = 'Routine Observation';
  let isSamplePassed = true;

  if (kpi.checkpointMilestone === 'Day 3') {
    if (record.ftdCount >= config.minFtdD3) {
      sampleSufficiency = '✅ Sample Met';
      isSamplePassed = true;
    } else {
      sampleSufficiency = `⚠️ Insufficient Evidence (FTD < ${config.minFtdD3})`;
      isSamplePassed = false;
    }
  } else if (kpi.checkpointMilestone === 'Day 4') {
    if (record.ftdCount >= config.minFtdD4) {
      sampleSufficiency = '✅ Sample Met';
      isSamplePassed = true;
    } else {
      sampleSufficiency = `⚠️ Insufficient Evidence (FTD < ${config.minFtdD4})`;
      isSamplePassed = false;
    }
  } else if (kpi.checkpointMilestone === 'Day 7') {
    if (record.ftdCount >= config.minFtdD7) {
      sampleSufficiency = '✅ Sample Met';
      isSamplePassed = true;
    } else {
      sampleSufficiency = `⚠️ Insufficient Evidence (FTD < ${config.minFtdD7})`;
      isSamplePassed = false;
    }
  } else if (kpi.checkpointMilestone === 'Day 30') {
    sampleSufficiency = '✅ Sample Met';
    isSamplePassed = true;
  }

  // Tier 2: Risk Gate
  let riskGateStatus = '🟢 Normal';
  let isRiskBlocked = false;
  let isRiskReview = false;
  let isProtected = false;

  if (record.accountStatus === 'BANNED') {
    riskGateStatus = '🚫 Blocked: Ad Account Banned';
    isRiskBlocked = true;
  } else if (record.accountStatus === 'FLAGGED') {
    riskGateStatus = '⚠️ Alert: Ad Account Restricted';
  } else if (record.fraudRiskTag === 'CONFIRMED') {
    riskGateStatus = '🚫 Blocked: Confirmed Fraud Traffic';
    isRiskBlocked = true;
  } else if (record.fraudRiskTag === 'SUSPECTED') {
    riskGateStatus = '🔍 Manual Review: Suspected Fraud Activity';
    isRiskReview = true;
  } else if (record.ftdCount >= 10 && kpi.ftdToStdRate < config.minRechargeRate) {
    riskGateStatus = `🔍 Manual Review: Abnormally Low 2nd Deposit (<${Math.round(config.minRechargeRate * 100)}%)`;
    isRiskReview = true;
  } else if (record.spendAmount < config.minSpendProtection) {
    riskGateStatus = '🛡️ Protected: Spend below testing floor';
    isProtected = true;
  }

  // Tier 3: Action, Reason, Budget Factor
  const perfDeviationRate = targetCFTD > 0 ? (kpi.cFTD - targetCFTD) / targetCFTD : 0;

  let actionRecommendation: ActionRecommendation = 'KEEP';
  let triggerReason = 'Stable Performance: Acquisition cost is within normal tolerance band';
  let budgetAdjFactor = 0;

  if (isRiskBlocked) {
    actionRecommendation = 'STOP';
    triggerReason = `Risk Gating: ${riskGateStatus}`;
    budgetAdjFactor = config.stopBudgetFactor - 1; // -1.0 (-100%)
  } else if (isRiskReview) {
    actionRecommendation = 'REVIEW';
    triggerReason = `Risk Intervention: ${riskGateStatus}`;
    budgetAdjFactor = 0;
  } else if (!isSamplePassed) {
    actionRecommendation = 'KEEP';
    triggerReason = `Insufficient Sample: ${sampleSufficiency}`;
    budgetAdjFactor = 0;
  } else if (kpi.cFTD <= scaleLine) {
    actionRecommendation = 'SCALE';
    const percentDiff = Math.round((1 - config.scaleCostRatio) * 100);
    triggerReason = `High Efficiency: C/FTD is ≥${percentDiff}% below target benchmark`;
    budgetAdjFactor = config.scaleBudgetFactor - 1; // +0.30 (+30%)
  } else if (kpi.cFTD >= stopLine && isProtected) {
    actionRecommendation = 'KEEP';
    triggerReason = `Testing Protection: Cost exceeded stop threshold but cumulative spend has not reached protection floor (${config.currencySymbol}${config.minSpendProtection})`;
    budgetAdjFactor = 0;
  } else if (kpi.cFTD >= stopLine) {
    actionRecommendation = 'STOP';
    const percentAbove = Math.round((config.stopCostRatio - 1) * 100);
    triggerReason = `Cost Deterioration: C/FTD exceeds stop threshold by ≥${percentAbove}%`;
    budgetAdjFactor = config.stopBudgetFactor - 1; // -1.0 (-100%)
  } else {
    actionRecommendation = 'KEEP';
    triggerReason = 'Stable Performance: Acquisition cost is within normal tolerance band';
    budgetAdjFactor = 0;
  }

  return {
    sampleSufficiency,
    isSamplePassed,
    riskGateStatus,
    isRiskBlocked,
    isRiskReview,
    isProtected,
    targetBenchmarkCFTD: targetCFTD,
    perfDeviationRate: Math.round(perfDeviationRate * 10000) / 10000,
    actionRecommendation,
    triggerReason,
    budgetAdjFactor,
  };
}

export function enrichRecords(records: RawRecord[], config: ConfigRules): EnrichedRecord[] {
  return records.map((record) => {
    const validation = validateRow(record);
    const kpi = computeKpi(record, config);
    const decision = computeDecision(record, kpi, config);
    return {
      ...record,
      kpi,
      decision,
      validationStatus: validation.status,
      isValid: validation.isValid,
    };
  });
}

export function computeBacktest(enrichedRecords: EnrichedRecord[]): BacktestSummary {
  // Only mature records: daysActive >= 30 and day30ActualRevenue > 0
  const mature = enrichedRecords.filter((r) => r.kpi.daysActive >= 30 && r.day30ActualRevenue > 0);

  const scaleBatches = mature.filter((r) => r.decision.actionRecommendation === 'SCALE');
  const stopBatches = mature.filter((r) => r.decision.actionRecommendation === 'STOP');

  // Scale accuracy: revenue >= spend (profitable or breakeven)
  const scaleHits = scaleBatches.filter((r) => r.day30ActualRevenue >= r.spendAmount).length;
  const scaleSpendTotal = scaleBatches.reduce((sum, r) => sum + r.spendAmount, 0);
  const scaleRevTotal = scaleBatches.reduce((sum, r) => sum + r.day30ActualRevenue, 0);
  const scaleRoi = scaleSpendTotal > 0 ? scaleRevTotal / scaleSpendTotal : 0;
  const scaleAvgRevenue = scaleBatches.length > 0 ? scaleRevTotal / scaleBatches.length : 0;
  const scaleAccuracyRate = scaleBatches.length > 0 ? scaleHits / scaleBatches.length : 0;
  const scaleConclusion =
    scaleAccuracyRate >= 0.75
      ? '🎯 Early scaling model is highly robust'
      : scaleBatches.length === 0
      ? 'Awaiting mature samples'
      : '⚠️ False positives detected; consider tightening scale threshold';

  // Stop accuracy: revenue < spend * 0.6 (successfully averted wasteful spend)
  const stopHits = stopBatches.filter((r) => r.day30ActualRevenue < r.spendAmount * 0.6).length;
  const stopSpendTotal = stopBatches.reduce((sum, r) => sum + r.spendAmount, 0);
  const stopRevTotal = stopBatches.reduce((sum, r) => sum + r.day30ActualRevenue, 0);
  const stopRoi = stopSpendTotal > 0 ? stopRevTotal / stopSpendTotal : 0;
  const stopAvgRevenue = stopBatches.length > 0 ? stopRevTotal / stopBatches.length : 0;
  const stopAccuracyRate = stopBatches.length > 0 ? stopHits / stopBatches.length : 0;
  const stopConclusion =
    stopAccuracyRate >= 0.8
      ? '🛡️ Successfully blocked substantial wasteful spend'
      : stopBatches.length === 0
      ? 'Awaiting mature samples'
      : '⚠️ Premature stoppage detected; consider loosening stop threshold';

  return {
    scaleBatches: scaleBatches.length,
    scaleAvgRevenue: Math.round(scaleAvgRevenue * 100) / 100,
    scaleRoi: Math.round(scaleRoi * 1000) / 1000,
    scaleAccuracyRate: Math.round(scaleAccuracyRate * 1000) / 1000,
    scaleConclusion,

    stopBatches: stopBatches.length,
    stopAvgRevenue: Math.round(stopAvgRevenue * 100) / 100,
    stopRoi: Math.round(stopRoi * 1000) / 1000,
    stopAccuracyRate: Math.round(stopAccuracyRate * 1000) / 1000,
    stopConclusion,
  };
}

export function formatCurrency(amount: number, symbol: string = '$'): string {
  if (isNaN(amount) || amount === null || amount === undefined) return `${symbol}0.00`;
  return `${symbol}${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export function formatPercent(rate: number): string {
  if (isNaN(rate) || rate === null || rate === undefined) return '0.0%';
  return `${(rate * 100).toFixed(1)}%`;
}

export function formatSignedPercent(rate: number): string {
  if (isNaN(rate) || rate === null || rate === undefined || rate === 0) return '0.0%';
  const prefix = rate > 0 ? '+' : '';
  return `${prefix}${(rate * 100).toFixed(1)}%`;
}
