import React, { useState, useMemo } from 'react';
import { ConfigRules, EnrichedRecord } from '../types';
import { formatCurrency, formatPercent } from '../utils/engine';
import { Filter, ExternalLink, HelpCircle, ArrowUpDown } from 'lucide-react';

interface KpiEngineViewProps {
  records: EnrichedRecord[];
  config: ConfigRules;
  onSelectVendor: (record: EnrichedRecord) => void;
}

export const KpiEngineView: React.FC<KpiEngineViewProps> = ({
  records,
  config,
  onSelectVendor,
}) => {
  const [search, setSearch] = useState<string>('');
  const [filterMarket, setFilterMarket] = useState<string>('ALL');
  const [sortField, setSortField] = useState<'cpScore' | 'cFTD' | 'spendAmount' | 'daysActive'>('cpScore');
  const [sortAsc, setSortAsc] = useState<boolean>(false);

  const sortedRecords = useMemo(() => {
    return records
      .filter((r) => {
        if (search.trim()) {
          const q = search.toLowerCase();
          const matchName = r.vendorName.toLowerCase().includes(q);
          const matchId = r.recordId.toLowerCase().includes(q);
          if (!matchName && !matchId) return false;
        }
        if (filterMarket !== 'ALL' && r.market !== filterMarket) {
          return false;
        }
        return true;
      })
      .sort((a, b) => {
        let valA = 0;
        let valB = 0;
        if (sortField === 'cpScore') {
          valA = a.kpi.cpScore;
          valB = b.kpi.cpScore;
        } else if (sortField === 'cFTD') {
          valA = a.kpi.cFTD;
          valB = b.kpi.cFTD;
        } else if (sortField === 'spendAmount') {
          valA = a.spendAmount;
          valB = b.spendAmount;
        } else if (sortField === 'daysActive') {
          valA = a.kpi.daysActive;
          valB = b.kpi.daysActive;
        }
        return sortAsc ? valA - valB : valB - valA;
      });
  }, [records, search, filterMarket, sortField, sortAsc]);

  const toggleSort = (field: 'cpScore' | 'cFTD' | 'spendAmount' | 'daysActive') => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(false);
    }
  };

  return (
    <div className="space-y-8 page-enter pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pt-2">
        <div>
          <span className="text-[11px] font-semibold tracking-wider uppercase text-[var(--color-muted)]">
            Sheet 03 // Cohort &amp; Derived Metric Engine
          </span>
          <h1 className="font-heading text-[28px] font-bold text-[var(--color-primary)] tracking-display leading-tight">
            Cohort Performance &amp; Funnel Health
          </h1>
          <p className="text-[13px] text-slate-600 max-w-3xl mt-1">
            Standardized day-interval aggregations (Day 3/4/7/30). Computes unit economics, funnel conversion velocity,
            second-deposit retention, and multi-factor CP Score.
          </p>
        </div>

        {/* Formula Explainer Pill */}
        <div className="text-[11.5px] bg-white px-3.5 py-2 rounded-lg border border-slate-200 shadow-2xs text-slate-600 flex items-center space-x-1.5">
          <HelpCircle className="w-3.5 h-3.5 text-[var(--color-accent)]" />
          <span>CP Score Formula: 50% Cost Target + 25% 2nd Dep + 25% D3 Retention</span>
        </div>
      </div>

      {/* Main KPI Table */}
      <div className="saas-card-static overflow-hidden">
        {/* Table Filters */}
        <div className="p-5 border-b border-slate-100 flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-white">
          <div>
            <h2 className="font-heading text-[18px] font-bold text-[var(--color-primary)] tracking-heading">
              Cohort Economics Registry ({sortedRecords.length} records)
            </h2>
            <p className="text-[12px] text-slate-500">
              Click any column header with arrows to sort. Click the inspect icon to open cohort funnel details.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Market Filter */}
            <select
              value={filterMarket}
              onChange={(e) => setFilterMarket(e.target.value)}
              className="text-[12px] px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white focus:outline-none"
            >
              <option value="ALL">All Markets</option>
              <option value="Market A">Market A (Tier 1)</option>
              <option value="Market B">Market B (Emerging)</option>
            </select>

            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search vendor / channel..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-48 text-[12px] pl-3 pr-8 py-1.5 rounded-lg border border-slate-200 bg-white focus:outline-none"
              />
              <Filter className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-2.5 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Dense Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[var(--table-header-bg)] border-b-2 border-[var(--table-header-sep)] text-[11px] uppercase font-semibold text-[var(--color-primary)] tracking-table-head">
                <th className="py-3 px-4">Vendor &amp; Cohort</th>
                <th className="py-3 px-3">Market / Channel</th>
                <th
                  className="py-3 px-3 cursor-pointer select-none hover:text-[var(--color-accent)]"
                  onClick={() => toggleSort('daysActive')}
                >
                  <div className="flex items-center space-x-1">
                    <span>Days / Checkpoint</span>
                    <ArrowUpDown className="w-3 h-3" />
                  </div>
                </th>
                <th
                  className="py-3 px-3 text-right cursor-pointer select-none hover:text-[var(--color-accent)]"
                  onClick={() => toggleSort('spendAmount')}
                >
                  <div className="flex items-center justify-end space-x-1">
                    <span>Spend</span>
                    <ArrowUpDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="py-3 px-3 text-right">FTD Count</th>
                <th
                  className="py-3 px-3 text-right cursor-pointer select-none hover:text-[var(--color-accent)]"
                  onClick={() => toggleSort('cFTD')}
                >
                  <div className="flex items-center justify-end space-x-1">
                    <span>C/FTD</span>
                    <ArrowUpDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="py-3 px-3 text-right">C/NAR</th>
                <th className="py-3 px-3 text-right">Reg-to-FTD</th>
                <th className="py-3 px-3 text-right">FTD-to-STD</th>
                <th className="py-3 px-3 text-right">D2 Ret</th>
                <th className="py-3 px-3 text-right">D3 Ret</th>
                <th className="py-3 px-3 text-right">D7 Ret</th>
                <th className="py-3 px-3 text-right">Avg FTD</th>
                <th
                  className="py-3 px-4 text-right cursor-pointer select-none hover:text-[var(--color-accent)] w-36"
                  onClick={() => toggleSort('cpScore')}
                >
                  <div className="flex items-center justify-end space-x-1">
                    <span>CP Score</span>
                    <ArrowUpDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="py-3 px-3 text-center">Inspect</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-[12.5px]">
              {sortedRecords.length === 0 ? (
                <tr>
                  <td colSpan={15} className="py-10 text-center text-slate-400">
                    No records found matching criteria.
                  </td>
                </tr>
              ) : (
                sortedRecords.map((record) => {
                  const kpi = record.kpi;
                  const isLow2ndDep = record.ftdCount >= 10 && kpi.ftdToStdRate < config.minRechargeRate;

                  return (
                    <tr key={record.id} className="hover:bg-slate-50/70 transition-colors">
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
                          {kpi.checkpointMilestone}
                        </span>
                        <div className="text-[10px] text-slate-400 mt-0.5">{kpi.daysActive} days active</div>
                      </td>

                      <td className="py-3 px-3 text-right font-medium text-slate-800">
                        {formatCurrency(record.spendAmount, config.currencySymbol)}
                      </td>

                      <td className="py-3 px-3 text-right font-medium text-slate-900">
                        {record.ftdCount}
                      </td>

                      {/* C/FTD */}
                      <td className="py-3 px-3 text-right">
                        <div className="font-semibold text-slate-900">
                          {formatCurrency(kpi.cFTD, config.currencySymbol)}
                        </div>
                        <div className="text-[10px] text-slate-400">
                          tgt {formatCurrency(record.decision.targetBenchmarkCFTD, config.currencySymbol)}
                        </div>
                      </td>

                      {/* C/NAR */}
                      <td className="py-3 px-3 text-right text-slate-700">
                        {formatCurrency(kpi.cNAR, config.currencySymbol)}
                      </td>

                      {/* Reg-to-FTD Rate */}
                      <td className="py-3 px-3 text-right text-slate-700">
                        {formatPercent(kpi.regToFtdRate)}
                      </td>

                      {/* FTD-to-STD Repeat Rate (Anomaly Highlight if < 15%) */}
                      <td className="py-3 px-3 text-right">
                        <span
                          className={`font-medium ${
                            isLow2ndDep
                              ? 'text-red-700 font-bold bg-red-50 px-1.5 py-0.5 rounded'
                              : 'text-slate-800'
                          }`}
                        >
                          {formatPercent(kpi.ftdToStdRate)}
                        </span>
                      </td>

                      {/* D2 Ret */}
                      <td className="py-3 px-3 text-right text-slate-600">
                        {kpi.daysActive >= 2 ? formatPercent(kpi.d2RetentionRate) : '-'}
                      </td>

                      {/* D3 Ret */}
                      <td className="py-3 px-3 text-right text-slate-600">
                        {kpi.daysActive >= 3 ? formatPercent(kpi.d3RetentionRate) : '-'}
                      </td>

                      {/* D7 Ret */}
                      <td className="py-3 px-3 text-right text-slate-600">
                        {kpi.daysActive >= 7 ? formatPercent(kpi.d7RetentionRate) : '-'}
                      </td>

                      {/* Avg FTD Amount */}
                      <td className="py-3 px-3 text-right text-slate-700">
                        {formatCurrency(kpi.avgFtdAmount, config.currencySymbol)}
                      </td>

                      {/* CP Score */}
                      <td className="py-3 px-4 text-right">
                        <div className="flex items-center justify-end space-x-2">
                          <span className="font-heading font-bold text-sm text-[var(--color-primary)]">
                            {kpi.cpScore.toFixed(1)}
                          </span>
                          <div className="w-16 data-bar-track">
                            <div
                              className="data-bar-fill"
                              style={{ width: `${Math.min(100, kpi.cpScore)}%` }}
                            />
                          </div>
                        </div>
                      </td>

                      {/* Action */}
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
