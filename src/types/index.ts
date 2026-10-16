export interface BenchmarkItem {
  id: string;
  market: string;
  platform: string;
  targetCFTD: number;
  targetCNAR: number;
  targetD3Ret: number; // e.g. 0.22 for 22%
  targetCPScore: number;
}

export interface ConfigRules {
  currencySymbol: string;
  minSpendProtection: number;
  minFtdD3: number;
  minFtdD4: number;
  minFtdD7: number;
  scaleCostRatio: number; // 0.85
  scaleBudgetFactor: number; // 1.30 (+30%)
  stopCostRatio: number; // 1.25
  stopBudgetFactor: number; // 0.00 (-100%)
  minRechargeRate: number; // 0.15 (15%)
  benchmarks: BenchmarkItem[];
}

export type AccountStatus = 'NORMAL' | 'FLAGGED' | 'BANNED';
export type FraudRiskTag = 'NONE' | 'SUSPECTED' | 'CONFIRMED';
export type ActionRecommendation = 'SCALE' | 'KEEP' | 'STOP' | 'REVIEW';
export type CheckpointMilestone = 'Day 3' | 'Day 4' | 'Day 7' | 'Day 30' | 'Routine Observation';

export interface RawRecord {
  id: string;
  recordId: string;
  vendorName: string;
  market: string;
  platform: string;
  launchDate: string; // YYYY-MM-DD
  dataDate: string; // YYYY-MM-DD
  spendAmount: number;
  impressions: number;
  clicks: number;
  narCount: number;
  ftdCount: number;
  ftdAmount: number;
  stdCount: number;
  ttdCount: number;
  d2RetainedCount: number;
  d3RetainedCount: number;
  d7RetainedCount: number;
  day30ActualRevenue: number;
  accountStatus: AccountStatus;
  fraudRiskTag: FraudRiskTag;
  analystNotes: string;
}

export interface ComputedKpi {
  daysActive: number;
  checkpointMilestone: CheckpointMilestone;
  cFTD: number;
  cNAR: number;
  regToFtdRate: number;
  ftdToStdRate: number;
  d2RetentionRate: number;
  d3RetentionRate: number;
  d7RetentionRate: number;
  avgFtdAmount: number;
  cpScore: number;
}

export interface ComputedDecision {
  sampleSufficiency: string;
  isSamplePassed: boolean;
  riskGateStatus: string;
  isRiskBlocked: boolean;
  isRiskReview: boolean;
  isProtected: boolean;
  targetBenchmarkCFTD: number;
  perfDeviationRate: number;
  actionRecommendation: ActionRecommendation;
  triggerReason: string;
  budgetAdjFactor: number; // e.g. +0.3, -1.0, 0
}

export interface EnrichedRecord extends RawRecord {
  kpi: ComputedKpi;
  decision: ComputedDecision;
  validationStatus: string;
  isValid: boolean;
}

export interface BacktestSummary {
  scaleBatches: number;
  scaleAvgRevenue: number;
  scaleRoi: number;
  scaleAccuracyRate: number;
  scaleConclusion: string;

  stopBatches: number;
  stopAvgRevenue: number;
  stopRoi: number;
  stopAccuracyRate: number;
  stopConclusion: string;
}
