import React, { useState, useMemo } from 'react';
import {
  ConfigRules,
  EnrichedRecord,
  ActionRecommendation,
} from '../types';
import { formatCurrency, formatSignedPercent, computeBacktest } from '../utils/engine';
import {
  TrendingUp,
  AlertOctagon,
  HelpCircle,
  BarChart2,
  Filter,
  CheckCircle,
  ExternalLink,
  Info,
} from 'lucide-react';

interface ExecDashboardViewProps {
  records: EnrichedRecord[];
  config: ConfigRules;
  onSelectVendor: (record: EnrichedRecord) => void;
}

export const ExecDashboardView: React.FC<ExecDashboardViewProps> = ({
  records,
  config,
  onSelectVendor,
}) => {
  const [filterAction, setFilterAction] = useState<string>('PRIORITY');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // 1. First Screen: Macro KPI Summaries
  const totalBatches = records.length;
  const scaleCount = records.filter((r) => r.decision.actionRecommendation === 'SCALE').length;
  const stopCount = records.filter((r) => r.decision.actionRecommendation === 'STOP').length;
  const reviewCount = records.filter((r) => r.decision.actionRecommendation === 'REVIEW').length;
  const keepCount = records.filter((r) => r.decision.actionRecommendation === 'KEEP').length;

  const totalSpend = records.reduce((sum, r) => sum + r.spendAmount, 0);
  const totalFtd = records.reduce((sum, r) => sum + r.ftdCount, 0);
  const portfolioAvgCFTD = totalFtd > 0 ? totalSpend / totalFtd : 0;

  // 2. Second Screen: Focus list filtering
  const focusList = useMemo(() => {
    return records
      .filter((r) => {
        // Text filter
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = r.vendorName.toLowerCase().includes(q);
          const matchMarket = r.market.toLowerCase().includes(q);
          const matchPlatform = r.platform.toLowerCase().includes(q);
          if (!matchName && !matchMarket && !matchPlatform) return false;
        }

        // Action filter
        if (filterAction === 'PRIORITY') {
          return (
            r.decision.actionRecommendation === 'SCALE' ||
            r.decision.actionRecommendation === 'STOP' ||
            r.decision.actionRecommendation === 'REVIEW'
          );
        }
        if (filterAction === 'SCALE') return r.decision.actionRecommendation === 'SCALE';
        if (filterAction === 'STOP') return r.decision.actionRecommendation === 'STOP';
        if (filterAction === 'REVIEW') return r.decision.actionRecommendation === 'REVIEW';
        if (filterAction === 'KEEP') return r.decision.actionRecommendation === 'KEEP';
        return true;
      })
      .sort((a, b) => b.kpi.cpScore - a.kpi.cpScore);
  }, [records, filterAction, searchQuery]);

  // 3. Third Screen: Backtesting Matrix
  const backtest = useMemo(() => computeBacktest(records), [records]);

  return (
    <div className="space-y-8 page-enter pb-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pt-2">
        <div>
          <span className="text-[11px] font-semibold tracking-wider uppercase text-[var(--color-muted)]">
            Sheet 05 // Executive Review Cockpit
          </span>
          <h1 className="font-heading text-[28px] font-bold text-[var(--color-primary)] tracking-display leading-tight">
            Executive Decision &amp; Backtest Cockpit
          </h1>
          <p className="text-[13px] text-slate-600 max-w-3xl mt-1">
            Bi-weekly budget review console for 50+ traffic vendors. Automated triage across minimum sample gates,
            risk containment, and unit-economic benchmarks.
          </p>
        </div>

        <div className="flex items-center space-x-2 text-[12px] bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs">
          <span className="text-slate-500">Benchmark Tolerance:</span>
          <span className="font-medium text-slate-800">
            Scale ≤ {Math.round(config.scaleCostRatio * 100)}% | Stop ≥ {Math.round(config.stopCostRatio * 100)}%
          </span>
        </div>
      </div>

      {/* Screen 1: Scorecards (KPI Row) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* KPI 1: Total Batches */}
        <div className="saas-card p-5 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[var(--color-muted)] text-[11px] uppercase tracking-wider font-semibold">
            <span>Review Cohorts</span>
            <BarChart2 className="w-4 h-4 text-slate-400" />
          </div>
          <div className="my-2">
            <span className="font-heading text-[36px] font-bold text-[var(--color-primary)] tracking-display leading-none">
              {totalBatches}
            </span>
          </div>
          <div className="text-[11px] text-[var(--color-muted)] flex items-center justify-between">
            <span>Active vendors</span>
            <span>{keepCount} in steady state</span>
          </div>
        </div>

        {/* KPI 2: SCALE */}
        <div className="saas-card p-5 flex flex-col justify-between border-t-2 border-[var(--color-accent)]">
          <div className="flex items-center justify-between text-[var(--color-muted)] text-[11px] uppercase tracking-wider font-semibold">
            <span>Scale Candidates</span>
            <TrendingUp className="w-4 h-4 text-[var(--color-accent)]" />
          </div>
          <div className="my-2">
            <span className="font-heading text-[36px] font-bold text-[var(--color-primary)] tracking-display leading-none">
              {scaleCount}
            </span>
          </div>
          <div className="text-[11px] text-[var(--color-muted)] flex items-center justify-between">
            <span>Rec: +30% budget</span>
            <span>Top Tier CP Score</span>
          </div>
        </div>

        {/* KPI 3: STOP (Anomaly) */}
        <div className="saas-card p-5 flex flex-col justify-between border-t-2 border-red-500">
          <div className="flex items-center justify-between text-[var(--color-muted)] text-[11px] uppercase tracking-wider font-semibold">
            <span>Stop / Discontinue</span>
            <AlertOctagon className="w-4 h-4 text-red-500" />
          </div>
          <div className="my-2">
            <span className="font-heading text-[36px] font-bold text-red-700 tracking-display leading-none">
              {stopCount}
            </span>
          </div>
          <div className="text-[11px] text-[var(--color-muted)] flex items-center justify-between">
            <span>Capital drain halted</span>
            <span>C/FTD &gt; 125% target</span>
          </div>
        </div>

        {/* KPI 4: REVIEW */}
        <div className="saas-card p-5 flex flex-col justify-between border-t-2 border-amber-500">
          <div className="flex items-center justify-between text-[var(--color-muted)] text-[11px] uppercase tracking-wider font-semibold">
            <span>Risk Intervention</span>
            <HelpCircle className="w-4 h-4 text-amber-500" />
          </div>
          <div className="my-2">
            <span className="font-heading text-[36px] font-bold text-[var(--color-primary)] tracking-display leading-none">
              {reviewCount}
            </span>
          </div>
          <div className="text-[11px] text-[var(--color-muted)] flex items-center justify-between">
            <span>Fraud / 2nd Dep anomaly</span>
            <span>Manual audit req.</span>
          </div>
        </div>

        {/* KPI 5: Portfolio C/FTD */}
        <div className="saas-card p-5 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[var(--color-muted)] text-[11px] uppercase tracking-wider font-semibold">
            <span>Weighted C/FTD</span>
            <span className="text-slate-400 font-serif text-sm">{config.currencySymbol}</span>
          </div>
          <div className="my-2">
            <span className="font-heading text-[36px] font-bold text-[var(--color-primary)] tracking-display leading-none">
              {formatCurrency(portfolioAvgCFTD, config.currencySymbol)}
            </span>
          </div>
          <div className="text-[11px] text-[var(--color-muted)] flex items-center justify-between">
            <span>Total spend: {formatCurrency(totalSpend, config.currencySymbol)}</span>
            <span>{totalFtd} FTDs</span>
          </div>
        </div>
      </div>

      {/* Insight & Recommendation Block */}
      <div className="insight-block p-5 text-slate-800 space-y-2">
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-[13px] text-[var(--color-primary)] flex items-center">
            <Info className="w-4 h-4 text-[var(--color-accent)] mr-1.5" />
            Executive Capital Allocation Directive
          </span>
          <span className="text-[10px] uppercase tracking-wider bg-blue-100 text-blue-800 font-semibold px-2 py-0.5 rounded-full">
            Actionable
          </span>
        </div>
        <p className="text-[13px] leading-relaxed text-slate-700">
          In this review cycle, <strong>{scaleCount} vendors</strong> have achieved top-decile acquisition efficiency
          with acquisition cost at least 15% below market benchmarks and healthy second-deposit rates. Conversely,{' '}
          <strong>{stopCount} vendors</strong> breach the 125% cost threshold or have triggered risk gating.
          Immediate budget termination on halted accounts recovers approximately{' '}
          <strong>
            {formatCurrency(
              records
                .filter((r) => r.decision.actionRecommendation === 'STOP')
                .reduce((s, r) => s + r.spendAmount, 0),
              config.currencySymbol
            )}
          </strong>{' '}
          in prospective weekly bleed, freeing up capital to fund +30% expansion for high-margin scale candidates.
        </p>
      </div>

      {/* Screen 2: High Priority Focus List */}
      <div className="saas-card-static overflow-hidden">
        {/* Table Toolbar */}
        <div className="p-5 border-b border-slate-100 flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-white">
          <div>
            <h2 className="font-heading text-[18px] font-bold text-[var(--color-primary)] tracking-heading">
              Priority Decision Focus List
            </h2>
            <p className="text-[12px] text-slate-500">
              Ranked by Comprehensive CP Score. Showing cohorts requiring executive authorization or intervention.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Filter Buttons */}
            <div className="inline-flex rounded-lg border border-slate-200 p-0.5 bg-slate-50 text-[11.5px]">
              <button
                onClick={() => setFilterAction('PRIORITY')}
                className={`px-2.5 py-1 rounded-md font-medium transition-all ${
                  filterAction === 'PRIORITY'
                    ? 'bg-white text-[var(--color-primary)] shadow-2xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Actionable ({scaleCount + stopCount + reviewCount})
              </button>
              <button
                onClick={() => setFilterAction('SCALE')}
                className={`px-2.5 py-1 rounded-md font-medium transition-all ${
                  filterAction === 'SCALE'
                    ? 'bg-white text-[var(--color-primary)] shadow-2xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                SCALE ({scaleCount})
              </button>
              <button
                onClick={() => setFilterAction('STOP')}
                className={`px-2.5 py-1 rounded-md font-medium transition-all ${
                  filterAction === 'STOP'
                    ? 'bg-white text-red-700 shadow-2xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                STOP ({stopCount})
              </button>
              <button
                onClick={() => setFilterAction('REVIEW')}
                className={`px-2.5 py-1 rounded-md font-medium transition-all ${
                  filterAction === 'REVIEW'
                    ? 'bg-white text-amber-700 shadow-2xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                REVIEW ({reviewCount})
              </button>
              <button
                onClick={() => setFilterAction('ALL')}
                className={`px-2.5 py-1 rounded-md font-medium transition-all ${
                  filterAction === 'ALL'
                    ? 'bg-white text-[var(--color-primary)] shadow-2xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All ({totalBatches})
              </button>
            </div>

            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search vendor or market..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-48 text-[12px] pl-3 pr-8 py-1.5 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
              />
              <Filter className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-2.5 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[var(--table-header-bg)] border-b-2 border-[var(--table-header-sep)] text-[11px] uppercase font-semibold text-[var(--color-primary)] tracking-table-head">
                <th className="py-3 px-4">Vendor &amp; Campaign</th>
                <th className="py-3 px-3">Market / Channel</th>
                <th className="py-3 px-3">Milestone</th>
                <th className="py-3 px-3 text-right">Spend</th>
                <th className="py-3 px-3 text-right">C/FTD</th>
                <th className="py-3 px-3 text-right w-36">CP Score</th>
                <th className="py-3 px-3 text-center">Action</th>
                <th className="py-3 px-3 text-right">Budget Adj</th>
                <th className="py-3 px-4">Trigger Rationale</th>
                <th className="py-3 px-3 text-center">Inspect</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-[12.5px]">
              {focusList.length === 0 ? (
                <tr>
                  <td colSpan={10} className="py-10 text-center text-slate-400">
                    No vendor cohorts matching the selected filter.
                  </td>
                </tr>
              ) : (
                focusList.map((record) => {
                  const action = record.decision.actionRecommendation;
                  const isStop = action === 'STOP';
                  const isScale = action === 'SCALE';
                  const isReview = action === 'REVIEW';

                  return (
                    <tr
                      key={record.id}
                      className={`hover:bg-slate-50/80 transition-colors ${
                        isStop ? 'bg-red-50/30' : isScale ? 'bg-blue-50/20' : ''
                      }`}
                    >
                      <td className="py-3 px-4 font-medium text-[var(--color-primary)]">
                        <div>{record.vendorName}</div>
                        <div className="text-[10px] text-slate-400 font-mono">{record.recordId}</div>
                      </td>

                      <td className="py-3 px-3 text-slate-700">
                        <div className="font-medium">{record.market}</div>
                        <div className="text-[11px] text-slate-400">{record.platform}</div>
                      </td>

                      <td className="py-3 px-3">
                        <span className="inline-flex px-2 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-700">
                          {record.kpi.checkpointMilestone}
                        </span>
                        <div className="text-[10px] text-slate-400 mt-0.5">{record.kpi.daysActive} days active</div>
                      </td>

                      <td className="py-3 px-3 text-right font-medium text-slate-800">
                        {formatCurrency(record.spendAmount, config.currencySymbol)}
                      </td>

                      <td className="py-3 px-3 text-right">
                        <div className="font-medium text-slate-900">
                          {formatCurrency(record.kpi.cFTD, config.currencySymbol)}
                        </div>
                        <div className="text-[10px] text-slate-400">
                          vs {formatCurrency(record.decision.targetBenchmarkCFTD, config.currencySymbol)}
                        </div>
                      </td>

                      {/* CP Score with inline data bar */}
                      <td className="py-3 px-3 text-right">
                        <div className="flex items-center justify-end space-x-2">
                          <span className="font-heading font-bold text-sm text-[var(--color-primary)]">
                            {record.kpi.cpScore.toFixed(1)}
                          </span>
                          <div className="w-16 data-bar-track">
                            <div
                              className="data-bar-fill"
                              style={{ width: `${Math.min(100, record.kpi.cpScore)}%` }}
                            />
                          </div>
                        </div>
                      </td>

                      {/* Action Pill Badge */}
                      <td className="py-3 px-3 text-center">
                        <span
                          className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase ${
                            isScale
                              ? 'bg-blue-600 text-white shadow-2xs'
                              : isStop
                              ? 'bg-red-600 text-white shadow-2xs'
                              : isReview
                              ? 'bg-amber-100 text-amber-900 border border-amber-300'
                              : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {action}
                        </span>
                      </td>

                      {/* Budget Adj Factor */}
                      <td className="py-3 px-3 text-right font-semibold">
                        {isScale ? (
                          <span className="text-blue-700">
                            {formatSignedPercent(record.decision.budgetAdjFactor)}
                          </span>
                        ) : isStop ? (
                          <span className="text-red-700">
                            {formatSignedPercent(record.decision.budgetAdjFactor)}
                          </span>
                        ) : (
                          <span className="text-slate-400">0.0%</span>
                        )}
                      </td>

                      {/* Trigger Rationale */}
                      <td className="py-3 px-4 text-[11.5px] text-slate-600 max-w-xs leading-normal">
                        {record.decision.triggerReason}
                      </td>

                      {/* Inspect button */}
                      <td className="py-3 px-3 text-center">
                        <button
                          onClick={() => onSelectVendor(record)}
                          className="interactive-cell p-1.5 rounded-md hover:bg-slate-200 text-slate-600"
                          title="Open Cohort Deep Dive"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Screen 3: Historical Early Decision Backtest Matrix */}
      <div className="saas-card-static p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <h2 className="font-heading text-[18px] font-bold text-[var(--color-primary)] tracking-heading">
              Historical Early Decision Backtest Matrix (Day 30 Realized ROI)
            </h2>
            <p className="text-[12px] text-slate-500">
              Evaluates predictive validity of Day 3, 4, and 7 decisions against completed Day 30 actual revenues.
            </p>
          </div>
          <span className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full">
            Mature Cohort Window: ≥ 30 Days
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[var(--table-header-bg)] border-b-2 border-[var(--table-header-sep)] text-[11px] uppercase font-semibold text-[var(--color-primary)] tracking-table-head">
                <th className="py-3 px-4">Early Recommendation</th>
                <th className="py-3 px-3 text-center">Historical Batches</th>
                <th className="py-3 px-3 text-right">Avg Day 30 Revenue</th>
                <th className="py-3 px-3 text-right">Day 30 ROI</th>
                <th className="py-3 px-4">Backtest Conclusion</th>
                <th className="py-3 px-4 text-right">Model Accuracy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-[13px]">
              {/* SCALE row */}
              <tr className="hover:bg-slate-50/60">
                <td className="py-3.5 px-4 font-semibold text-[var(--color-primary)]">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-100 text-blue-900 mr-2">
                    SCALE
                  </span>
                  Early Expansion Cohorts
                </td>
                <td className="py-3.5 px-3 text-center font-medium">{backtest.scaleBatches}</td>
                <td className="py-3.5 px-3 text-right font-medium">
                  {formatCurrency(backtest.scaleAvgRevenue, config.currencySymbol)}
                </td>
                <td className="py-3.5 px-3 text-right font-semibold text-slate-800">
                  {(backtest.scaleRoi * 100).toFixed(1)}%
                </td>
                <td className="py-3.5 px-4 text-slate-700 text-[12px] font-medium">
                  {backtest.scaleConclusion}
                </td>
                <td className="py-3.5 px-4 text-right font-heading text-[18px] font-bold text-[var(--color-primary)]">
                  {(backtest.scaleAccuracyRate * 100).toFixed(1)}%
                </td>
              </tr>

              {/* STOP row */}
              <tr className="hover:bg-slate-50/60">
                <td className="py-3.5 px-4 font-semibold text-[var(--color-primary)]">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-red-100 text-red-900 mr-2">
                    STOP
                  </span>
                  Early Cutoff Cohorts
                </td>
                <td className="py-3.5 px-3 text-center font-medium">{backtest.stopBatches}</td>
                <td className="py-3.5 px-3 text-right font-medium">
                  {formatCurrency(backtest.stopAvgRevenue, config.currencySymbol)}
                </td>
                <td className="py-3.5 px-3 text-right font-semibold text-slate-800">
                  {(backtest.stopRoi * 100).toFixed(1)}%
                </td>
                <td className="py-3.5 px-4 text-slate-700 text-[12px] font-medium">
                  {backtest.stopConclusion}
                </td>
                <td className="py-3.5 px-4 text-right font-heading text-[18px] font-bold text-[var(--color-primary)]">
                  {(backtest.stopAccuracyRate * 100).toFixed(1)}%
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Methodology Footer Note */}
        <div className="pt-2 text-[11.5px] text-slate-500 flex items-start space-x-2">
          <CheckCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
          <span>
            <strong>Audited Methodology:</strong> A SCALE decision is counted as an accurate prediction when Day 30
            realized revenue equals or exceeds cumulative marketing spend (ROI ≥ 1.0). A STOP decision is verified as
            effective loss mitigation when Day 30 revenue remains below 60% of spend (ROI &lt; 0.6).
          </span>
        </div>
      </div>
    </div>
  );
};
