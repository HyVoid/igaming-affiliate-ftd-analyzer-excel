import React, { useState, useMemo } from 'react';
import { ConfigRules, EnrichedRecord } from '../types';
import { formatCurrency, formatSignedPercent } from '../utils/engine';
import {
  ShieldCheck,
  AlertTriangle,
  GitCommit,
  Filter,
  CheckCircle2,
  ExternalLink,
  Sliders,
} from 'lucide-react';

interface DecisionEngineViewProps {
  records: EnrichedRecord[];
  config: ConfigRules;
  onSelectVendor: (record: EnrichedRecord) => void;
}

export const DecisionEngineView: React.FC<DecisionEngineViewProps> = ({
  records,
  config,
  onSelectVendor,
}) => {
  const [filterAction, setFilterAction] = useState<string>('ALL');
  const [filterMilestone, setFilterMilestone] = useState<string>('ALL');
  const [search, setSearch] = useState<string>('');

  const filteredRecords = useMemo(() => {
    return records.filter((r) => {
      if (search.trim()) {
        const q = search.toLowerCase();
        const matchName = r.vendorName.toLowerCase().includes(q);
        const matchId = r.recordId.toLowerCase().includes(q);
        if (!matchName && !matchId) return false;
      }
      if (filterAction !== 'ALL' && r.decision.actionRecommendation !== filterAction) {
        return false;
      }
      if (filterMilestone !== 'ALL' && r.kpi.checkpointMilestone !== filterMilestone) {
        return false;
      }
      return true;
    });
  }, [records, filterAction, filterMilestone, search]);

  return (
    <div className="space-y-8 page-enter pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pt-2">
        <div>
          <span className="text-[11px] font-semibold tracking-wider uppercase text-[var(--color-muted)]">
            Sheet 04 // Rule-Based Cascade Engine
          </span>
          <h1 className="font-heading text-[28px] font-bold text-[var(--color-primary)] tracking-display leading-tight">
            Tiered Decision &amp; Governance Engine
          </h1>
          <p className="text-[13px] text-slate-600 max-w-3xl mt-1">
            Deterministic 3-tier decision architecture: sample adequacy verification, external risk &amp; fraud gating,
            followed by benchmark margin scoring. Every budget adjustment includes a verifiable audit trail.
          </p>
        </div>

        <div className="text-[12px] bg-white px-3.5 py-2 rounded-lg border border-slate-200 shadow-2xs text-slate-600">
          Sample Thresholds: D3 ≥ {config.minFtdD3} | D4 ≥ {config.minFtdD4} | D7 ≥ {config.minFtdD7} FTDs
        </div>
      </div>

      {/* 3-Tier Architecture Flow Visualizer */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Tier 1 Card */}
        <div className="saas-card p-5 border-t-2 border-slate-400 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-[11px] uppercase font-semibold text-slate-500 mb-2">
              <span>Tier 1: Sample Gating</span>
              <ShieldCheck className="w-4 h-4 text-slate-600" />
            </div>
            <h3 className="font-heading text-[16px] font-bold text-[var(--color-primary)]">
              Evidence Sufficiency
            </h3>
            <p className="text-[12px] text-slate-600 mt-1.5 leading-relaxed">
              Prevents premature over-reaction to small-number randomness. If FTD volume has not reached milestone
              thresholds (10/15/30), budget expansion or termination is strictly prohibited.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
            Output: <strong className="text-slate-800">✅ Passed</strong> or <strong className="text-amber-800">⚠️ Insufficient Evidence</strong>
          </div>
        </div>

        {/* Tier 2 Card */}
        <div className="saas-card p-5 border-t-2 border-amber-500 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-[11px] uppercase font-semibold text-amber-700 mb-2">
              <span>Tier 2: Risk Containment</span>
              <AlertTriangle className="w-4 h-4 text-amber-600" />
            </div>
            <h3 className="font-heading text-[16px] font-bold text-[var(--color-primary)]">
              Anomaly &amp; Fraud Gate
            </h3>
            <p className="text-[12px] text-slate-600 mt-1.5 leading-relaxed">
              Disentangles agency performance from external shocks (e.g. Meta pixel lag, account bans) and synthetic
              bot traffic. Second-deposit conversions below {Math.round(config.minRechargeRate * 100)}% route to manual audit.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
            Output: <strong className="text-red-700">🚫 Blocked</strong>, <strong className="text-amber-700">🔍 Review</strong>, or <strong className="text-slate-800">🟢 Normal</strong>
          </div>
        </div>

        {/* Tier 3 Card */}
        <div className="saas-card p-5 border-t-2 border-[var(--color-accent)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-[11px] uppercase font-semibold text-blue-700 mb-2">
              <span>Tier 3: Economic Action</span>
              <GitCommit className="w-4 h-4 text-[var(--color-accent)]" />
            </div>
            <h3 className="font-heading text-[16px] font-bold text-[var(--color-primary)]">
              Benchmark Margin Match
            </h3>
            <p className="text-[12px] text-slate-600 mt-1.5 leading-relaxed">
              Evaluates C/FTD against target benchmark. Candidates beating the line by &ge;15% receive SCALE (+30%
              budget). Those exceeding the line by &ge;25% receive STOP (-100% budget).
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
            Output: <strong className="text-blue-700">SCALE</strong>, <strong className="text-slate-800">KEEP</strong>, <strong className="text-red-700">STOP</strong>
          </div>
        </div>
      </div>

      {/* Decision Engine Data Table */}
      <div className="saas-card-static overflow-hidden">
        {/* Table Filters */}
        <div className="p-5 border-b border-slate-100 flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-white">
          <div>
            <h2 className="font-heading text-[18px] font-bold text-[var(--color-primary)] tracking-heading">
              Cascaded Decision Matrix
            </h2>
            <p className="text-[12px] text-slate-500">
              Live deterministic calculation outputs across all evaluated vendor cohorts.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Milestone Filter */}
            <select
              value={filterMilestone}
              onChange={(e) => setFilterMilestone(e.target.value)}
              className="text-[12px] px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white focus:outline-none"
            >
              <option value="ALL">All Milestones</option>
              <option value="Day 3">Day 3</option>
              <option value="Day 4">Day 4</option>
              <option value="Day 7">Day 7</option>
              <option value="Day 30">Day 30</option>
              <option value="Routine Observation">Routine</option>
            </select>

            {/* Action Filter */}
            <select
              value={filterAction}
              onChange={(e) => setFilterAction(e.target.value)}
              className="text-[12px] px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white focus:outline-none"
            >
              <option value="ALL">All Actions</option>
              <option value="SCALE">SCALE Candidates</option>
              <option value="KEEP">KEEP (Steady/Protected)</option>
              <option value="STOP">STOP (Discontinue)</option>
              <option value="REVIEW">REVIEW (Risk Gate)</option>
            </select>

            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search vendor / ID..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-44 text-[12px] pl-3 pr-8 py-1.5 rounded-lg border border-slate-200 bg-white focus:outline-none"
              />
              <Filter className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-2.5 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Table Body */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[var(--table-header-bg)] border-b-2 border-[var(--table-header-sep)] text-[11px] uppercase font-semibold text-[var(--color-primary)] tracking-table-head">
                <th className="py-3 px-4">Vendor &amp; ID</th>
                <th className="py-3 px-3">Milestone</th>
                <th className="py-3 px-3">Tier 1: Sample Gating</th>
                <th className="py-3 px-3">Tier 2: Risk Gate</th>
                <th className="py-3 px-3 text-right">Target C/FTD</th>
                <th className="py-3 px-3 text-right">Actual C/FTD</th>
                <th className="py-3 px-3 text-right">Deviation</th>
                <th className="py-3 px-3 text-center">Final Action</th>
                <th className="py-3 px-3 text-right">Budget Adj</th>
                <th className="py-3 px-4">Trigger Evidence</th>
                <th className="py-3 px-3 text-center">View</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-[12.5px]">
              {filteredRecords.length === 0 ? (
                <tr>
                  <td colSpan={11} className="py-10 text-center text-slate-400">
                    No records found matching current criteria.
                  </td>
                </tr>
              ) : (
                filteredRecords.map((record) => {
                  const decision = record.decision;
                  const isScale = decision.actionRecommendation === 'SCALE';
                  const isStop = decision.actionRecommendation === 'STOP';
                  const isReview = decision.actionRecommendation === 'REVIEW';

                  return (
                    <tr
                      key={record.id}
                      className={`hover:bg-slate-50/70 transition-colors ${
                        isStop ? 'bg-red-50/20' : isScale ? 'bg-blue-50/15' : ''
                      }`}
                    >
                      <td className="py-3 px-4 font-medium text-[var(--color-primary)]">
                        <div>{record.vendorName}</div>
                        <div className="text-[10px] text-slate-400 font-mono">{record.recordId}</div>
                      </td>

                      <td className="py-3 px-3">
                        <span className="font-medium text-slate-800">{record.kpi.checkpointMilestone}</span>
                        <div className="text-[10px] text-slate-400">{record.market} · {record.platform}</div>
                      </td>

                      {/* Tier 1 */}
                      <td className="py-3 px-3">
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium ${
                            decision.isSamplePassed
                              ? 'bg-slate-100 text-slate-800'
                              : 'bg-amber-100 text-amber-900 font-semibold'
                          }`}
                        >
                          {decision.sampleSufficiency}
                        </span>
                      </td>

                      {/* Tier 2 */}
                      <td className="py-3 px-3">
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium ${
                            decision.isRiskBlocked
                              ? 'bg-red-100 text-red-900 font-semibold'
                              : decision.isRiskReview
                              ? 'bg-amber-100 text-amber-900 font-semibold'
                              : decision.isProtected
                              ? 'bg-blue-50 text-blue-800'
                              : 'bg-slate-50 text-slate-700'
                          }`}
                        >
                          {decision.riskGateStatus}
                        </span>
                      </td>

                      {/* Target C/FTD */}
                      <td className="py-3 px-3 text-right font-medium text-slate-600">
                        {formatCurrency(decision.targetBenchmarkCFTD, config.currencySymbol)}
                      </td>

                      {/* Actual C/FTD */}
                      <td className="py-3 px-3 text-right font-semibold text-slate-900">
                        {formatCurrency(record.kpi.cFTD, config.currencySymbol)}
                      </td>

                      {/* Deviation */}
                      <td className="py-3 px-3 text-right font-medium text-[11.5px]">
                        {decision.perfDeviationRate <= 0 ? (
                          <span className="text-slate-600">
                            {formatSignedPercent(decision.perfDeviationRate)}
                          </span>
                        ) : (
                          <span className="text-slate-600 font-semibold">
                            {formatSignedPercent(decision.perfDeviationRate)}
                          </span>
                        )}
                      </td>

                      {/* Final Action */}
                      <td className="py-3 px-3 text-center">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.8 rounded-full text-[11px] font-bold tracking-wide uppercase ${
                            isScale
                              ? 'bg-blue-600 text-white shadow-2xs'
                              : isStop
                              ? 'bg-red-600 text-white shadow-2xs'
                              : isReview
                              ? 'bg-amber-100 text-amber-900 border border-amber-300'
                              : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {decision.actionRecommendation}
                        </span>
                      </td>

                      {/* Budget Factor */}
                      <td className="py-3 px-3 text-right font-semibold">
                        {isScale ? (
                          <span className="text-blue-700">
                            {formatSignedPercent(decision.budgetAdjFactor)}
                          </span>
                        ) : isStop ? (
                          <span className="text-red-700">
                            {formatSignedPercent(decision.budgetAdjFactor)}
                          </span>
                        ) : (
                          <span className="text-slate-400">0.0%</span>
                        )}
                      </td>

                      {/* Trigger Reason */}
                      <td className="py-3 px-4 text-[11px] text-slate-600 max-w-xs leading-normal">
                        {decision.triggerReason}
                      </td>

                      {/* View details */}
                      <td className="py-3 px-3 text-center">
                        <button
                          onClick={() => onSelectVendor(record)}
                          className="interactive-cell p-1.5 rounded-md hover:bg-slate-200 text-slate-600"
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
    </div>
  );
};
