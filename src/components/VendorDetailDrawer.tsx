import React from 'react';
import { EnrichedRecord, RawRecord, AccountStatus, FraudRiskTag } from '../types';
import { formatCurrency, formatPercent, formatSignedPercent } from '../utils/engine';
import {
  X,
  ShieldCheck,
  AlertTriangle,
  GitCommit,
  Layers,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';

interface VendorDetailDrawerProps {
  record: EnrichedRecord | null;
  currencySymbol: string;
  onClose: () => void;
  onUpdateRecord: (updated: RawRecord) => void;
}

export const VendorDetailDrawer: React.FC<VendorDetailDrawerProps> = ({
  record,
  currencySymbol,
  onClose,
  onUpdateRecord,
}) => {
  if (!record) return null;

  const kpi = record.kpi;
  const decision = record.decision;
  const isScale = decision.actionRecommendation === 'SCALE';
  const isStop = decision.actionRecommendation === 'STOP';
  const isReview = decision.actionRecommendation === 'REVIEW';

  const handleStatusChange = (field: keyof RawRecord, val: any) => {
    onUpdateRecord({
      ...record,
      [field]: val,
    });
  };

  // Funnel steps
  const funnelSteps = [
    { label: 'Impressions', count: record.impressions, sub: 'Ad views' },
    {
      label: 'Clicks',
      count: record.clicks,
      sub: record.impressions > 0 ? `${((record.clicks / record.impressions) * 100).toFixed(2)}% CTR` : '0%',
    },
    {
      label: 'Registrations (NAR)',
      count: record.narCount,
      sub: record.clicks > 0 ? `${((record.narCount / record.clicks) * 100).toFixed(1)}% CVR` : '0%',
    },
    {
      label: '1st Deposit (FTD)',
      count: record.ftdCount,
      sub: `${formatPercent(kpi.regToFtdRate)} of NAR`,
    },
    {
      label: '2nd Deposit (STD)',
      count: record.stdCount,
      sub: `${formatPercent(kpi.ftdToStdRate)} of FTD`,
    },
    {
      label: '3rd Deposit (TTD)',
      count: record.ttdCount,
      sub: record.stdCount > 0 ? `${formatPercent(record.ttdCount / record.stdCount)} of STD` : '0%',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/40 backdrop-blur-xs flex justify-end">
      <div className="w-full max-w-2xl bg-white h-full shadow-2xl flex flex-col page-enter">
        {/* Drawer Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-heading text-[20px] font-bold text-[var(--color-primary)]">
                {record.vendorName}
              </span>
              <span
                className={`inline-flex px-2.5 py-0.5 rounded-full text-[10.5px] font-bold uppercase tracking-wider ${
                  isScale
                    ? 'bg-blue-600 text-white'
                    : isStop
                    ? 'bg-red-600 text-white'
                    : isReview
                    ? 'bg-amber-100 text-amber-900 border border-amber-300'
                    : 'bg-slate-200 text-slate-800'
                }`}
              >
                {decision.actionRecommendation}
              </span>
            </div>
            <div className="text-[11px] font-mono text-slate-500 mt-0.5">{record.recordId}</div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-[13px]">
          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
            <div>
              <span className="text-[10.5px] uppercase font-semibold text-slate-400 block">Market</span>
              <span className="font-semibold text-slate-800">{record.market}</span>
            </div>
            <div>
              <span className="text-[10.5px] uppercase font-semibold text-slate-400 block">Platform</span>
              <span className="font-semibold text-slate-800">{record.platform}</span>
            </div>
            <div>
              <span className="text-[10.5px] uppercase font-semibold text-slate-400 block">Observation Node</span>
              <span className="font-bold text-[var(--color-primary)]">{kpi.checkpointMilestone}</span>
              <span className="text-[10.5px] text-slate-500 ml-1">({kpi.daysActive}d)</span>
            </div>
            <div>
              <span className="text-[10.5px] uppercase font-semibold text-slate-400 block">CP Score</span>
              <span className="font-heading font-bold text-[18px] text-[var(--color-primary)]">
                {kpi.cpScore.toFixed(1)} / 100
              </span>
            </div>
          </div>

          {/* 3-Tier Gating Audit Summary */}
          <div className="space-y-3">
            <h4 className="font-heading text-[16px] font-bold text-[var(--color-primary)] flex items-center">
              <Layers className="w-4 h-4 mr-1.5 text-[var(--color-accent)]" />
              Cascaded Governance Audit
            </h4>

            <div className="space-y-2 text-[12.5px]">
              {/* Tier 1 */}
              <div className="p-3 rounded-lg border border-slate-200 flex items-start justify-between bg-white">
                <div className="flex items-start space-x-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800">Tier 1: Sample Gating:</strong>{' '}
                    <span>{decision.sampleSufficiency}</span>
                  </div>
                </div>
                <span className="text-[11px] text-slate-500 font-medium">
                  {record.ftdCount} FTDs recorded
                </span>
              </div>

              {/* Tier 2 */}
              <div className="p-3 rounded-lg border border-slate-200 flex items-start justify-between bg-white">
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800">Tier 2: Risk Gating:</strong>{' '}
                    <span>{decision.riskGateStatus}</span>
                  </div>
                </div>
                <span className="text-[11px] text-slate-500 font-medium">
                  STD/FTD: {formatPercent(kpi.ftdToStdRate)}
                </span>
              </div>

              {/* Tier 3 */}
              <div className="p-3 rounded-lg border border-slate-200 bg-white space-y-1.5">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-2">
                    <GitCommit className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800">Tier 3: Recommended Action:</strong>{' '}
                      <span className="font-bold text-[var(--color-primary)]">
                        {decision.actionRecommendation}
                      </span>
                    </div>
                  </div>
                  <span className="text-[12px] font-bold">
                    Budget: {formatSignedPercent(decision.budgetAdjFactor)}
                  </span>
                </div>
                <div className="text-[12px] text-slate-600 pl-6">
                  {decision.triggerReason}
                </div>
              </div>
            </div>
          </div>

          {/* Funnel Progression Bar */}
          <div className="space-y-3">
            <h4 className="font-heading text-[16px] font-bold text-[var(--color-primary)]">
              Player Conversion Funnel
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {funnelSteps.map((step, idx) => (
                <div key={idx} className="p-3 rounded-lg border border-slate-200 bg-white">
                  <div className="text-[10.5px] uppercase font-semibold text-slate-500">{step.label}</div>
                  <div className="font-heading text-[20px] font-bold text-[var(--color-primary)] my-0.5">
                    {step.count.toLocaleString()}
                  </div>
                  <div className="text-[11px] text-[var(--color-accent)] font-medium">{step.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Retention Cohort Metrics */}
          <div className="space-y-3">
            <h4 className="font-heading text-[16px] font-bold text-[var(--color-primary)]">
              Player Retention Progression
            </h4>
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 rounded-lg border border-slate-200 bg-white text-center">
                <span className="text-[11px] text-slate-500 block">D2 Retention</span>
                <span className="font-heading text-[22px] font-bold text-[var(--color-primary)]">
                  {formatPercent(kpi.d2RetentionRate)}
                </span>
                <span className="text-[10px] text-slate-400 block">{record.d2RetainedCount} active users</span>
              </div>
              <div className="p-3 rounded-lg border border-slate-200 bg-white text-center">
                <span className="text-[11px] text-slate-500 block">D3 Retention</span>
                <span className="font-heading text-[22px] font-bold text-[var(--color-primary)]">
                  {formatPercent(kpi.d3RetentionRate)}
                </span>
                <span className="text-[10px] text-slate-400 block">{record.d3RetainedCount} active users</span>
              </div>
              <div className="p-3 rounded-lg border border-slate-200 bg-white text-center">
                <span className="text-[11px] text-slate-500 block">D7 Retention</span>
                <span className="font-heading text-[22px] font-bold text-[var(--color-primary)]">
                  {record.kpi.daysActive >= 7 ? formatPercent(kpi.d7RetentionRate) : 'N/A (<7d)'}
                </span>
                <span className="text-[10px] text-slate-400 block">{record.d7RetainedCount} active users</span>
              </div>
            </div>
          </div>

          {/* Quick Gating Overrides / Notes */}
          <div className="space-y-3 pt-2 border-t border-slate-100">
            <h4 className="font-heading text-[16px] font-bold text-[var(--color-primary)]">
              Live Gating &amp; Risk Adjustments
            </h4>
            <div className="grid grid-cols-2 gap-3 text-[12px]">
              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                  Ad Account Status
                </label>
                <select
                  value={record.accountStatus}
                  onChange={(e) => handleStatusChange('accountStatus', e.target.value as AccountStatus)}
                  className="w-full p-2 rounded-lg border border-slate-300 editable-cell-input font-medium"
                >
                  <option value="NORMAL">NORMAL (Clean)</option>
                  <option value="FLAGGED">FLAGGED (Restricted)</option>
                  <option value="BANNED">BANNED (Blocked)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                  Fraud Tag
                </label>
                <select
                  value={record.fraudRiskTag}
                  onChange={(e) => handleStatusChange('fraudRiskTag', e.target.value as FraudRiskTag)}
                  className="w-full p-2 rounded-lg border border-slate-300 editable-cell-input font-medium"
                >
                  <option value="NONE">NONE</option>
                  <option value="SUSPECTED">SUSPECTED (Audit)</option>
                  <option value="CONFIRMED">CONFIRMED (Fraud)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                Auditor &amp; Executive Notes
              </label>
              <textarea
                rows={3}
                value={record.analystNotes}
                onChange={(e) => handleStatusChange('analystNotes', e.target.value)}
                className="w-full p-2.5 rounded-lg border border-slate-300 editable-cell-input text-[12px]"
                placeholder="Log internal findings, creative changes, or review outcomes..."
              />
            </div>
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="px-6 py-3.5 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
          <span className="text-[11px] text-slate-400">
            Changes propagate live to all dependent formulas.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[var(--color-primary)] text-white text-[12.5px] font-medium hover:bg-slate-800"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
