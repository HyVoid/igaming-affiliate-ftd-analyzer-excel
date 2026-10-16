import React, { useState } from 'react';
import { ConfigRules, BenchmarkItem } from '../types';
import { Plus, Trash2, Check, Sliders, Shield, Target, HelpCircle } from 'lucide-react';

interface ConfigRulesViewProps {
  config: ConfigRules;
  onUpdateConfig: (newConfig: ConfigRules) => void;
}

export const ConfigRulesView: React.FC<ConfigRulesViewProps> = ({ config, onUpdateConfig }) => {
  const [newMarket, setNewMarket] = useState('Market C');
  const [newPlatform, setNewPlatform] = useState('Google');
  const [newTargetCFTD, setNewTargetCFTD] = useState(30.0);
  const [newTargetCNAR, setNewTargetCNAR] = useState(8.0);
  const [newTargetD3Ret, setNewTargetD3Ret] = useState(20.0);
  const [newTargetCP, setNewTargetCP] = useState(65.0);

  const handleGlobalChange = <K extends keyof ConfigRules>(key: K, value: ConfigRules[K]) => {
    onUpdateConfig({
      ...config,
      [key]: value,
    });
  };

  const handleBenchmarkChange = (id: string, field: keyof BenchmarkItem, value: any) => {
    const updated = config.benchmarks.map((b) => {
      if (b.id === id) {
        return { ...b, [field]: value };
      }
      return b;
    });
    onUpdateConfig({ ...config, benchmarks: updated });
  };

  const handleAddBenchmark = () => {
    const newBm: BenchmarkItem = {
      id: `bm-${Date.now()}`,
      market: newMarket,
      platform: newPlatform,
      targetCFTD: newTargetCFTD,
      targetCNAR: newTargetCNAR,
      targetD3Ret: newTargetD3Ret / 100,
      targetCPScore: newTargetCP,
    };
    onUpdateConfig({
      ...config,
      benchmarks: [...config.benchmarks, newBm],
    });
  };

  const handleDeleteBenchmark = (id: string) => {
    onUpdateConfig({
      ...config,
      benchmarks: config.benchmarks.filter((b) => b.id !== id),
    });
  };

  return (
    <div className="space-y-8 page-enter pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pt-2">
        <div>
          <span className="text-[11px] font-semibold tracking-wider uppercase text-[var(--color-muted)]">
            Sheet 01 // Global Rule &amp; Governance Center
          </span>
          <h1 className="font-heading text-[28px] font-bold text-[var(--color-primary)] tracking-display leading-tight">
            Parameter Configuration Center
          </h1>
          <p className="text-[13px] text-slate-600 max-w-3xl mt-1">
            Single point of truth. All currency masks, minimum sample limits, action cost thresholds, and regional
            benchmarks are maintained here and propagate live to every sheet in the system.
          </p>
        </div>

        <div className="text-[12px] bg-white px-3.5 py-1.5 rounded-lg border border-slate-200 shadow-2xs text-slate-600 flex items-center">
          <Check className="w-3.5 h-3.5 text-emerald-600 mr-1.5" />
          <span>Hot-reload enabled: instantaneous recalculation</span>
        </div>
      </div>

      {/* Grid of Rule Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Section 1: Global Currency & Protection */}
        <div className="saas-card p-6 space-y-4">
          <div className="flex items-center space-x-2 text-[var(--color-primary)] border-b border-slate-100 pb-3">
            <Sliders className="w-4 h-4 text-[var(--color-accent)]" />
            <h2 className="font-heading text-[17px] font-bold tracking-heading">
              Global Platform Parameters
            </h2>
          </div>

          <div className="space-y-4 text-[12.5px]">
            <div>
              <label className="block text-[11px] uppercase font-semibold text-slate-600 tracking-wider mb-1">
                Reporting Currency Symbol ($B$3)
              </label>
              <input
                type="text"
                value={config.currencySymbol}
                onChange={(e) => handleGlobalChange('currencySymbol', e.target.value)}
                className="w-full text-[13px] px-3 py-1.5 rounded-md editable-cell-input border border-slate-300 font-semibold"
                placeholder="$"
              />
              <span className="text-[10.5px] text-slate-400 mt-1 block">
                Controls all currency displays across dashboard and tables (e.g. $, €, ¥, £).
              </span>
            </div>

            <div>
              <label className="block text-[11px] uppercase font-semibold text-slate-600 tracking-wider mb-1">
                Minimum Testing Spend Floor ($C$4)
              </label>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-slate-700">{config.currencySymbol}</span>
                <input
                  type="number"
                  step="50"
                  value={config.minSpendProtection}
                  onChange={(e) =>
                    handleGlobalChange('minSpendProtection', parseFloat(e.target.value) || 0)
                  }
                  className="w-full text-[13px] px-3 py-1.5 rounded-md editable-cell-input border border-slate-300 font-semibold"
                />
              </div>
              <span className="text-[10.5px] text-slate-400 mt-1 block">
                Vendors with spend below this floor are protected from STOP actions to prevent premature cutoff.
              </span>
            </div>
          </div>
        </div>

        {/* Section 2: Sample Gating */}
        <div className="saas-card p-6 space-y-4">
          <div className="flex items-center space-x-2 text-[var(--color-primary)] border-b border-slate-100 pb-3">
            <Shield className="w-4 h-4 text-emerald-600" />
            <h2 className="font-heading text-[17px] font-bold tracking-heading">
              Minimum Sample Gates (FTD)
            </h2>
          </div>

          <div className="space-y-4 text-[12.5px]">
            <div>
              <label className="block text-[11px] uppercase font-semibold text-slate-600 tracking-wider mb-1">
                Day 3 Minimum FTD Threshold ($C$8)
              </label>
              <input
                type="number"
                value={config.minFtdD3}
                onChange={(e) => handleGlobalChange('minFtdD3', parseInt(e.target.value, 10) || 1)}
                className="w-full text-[13px] px-3 py-1.5 rounded-md editable-cell-input border border-slate-300 font-semibold"
              />
              <span className="text-[10.5px] text-slate-400 mt-1 block">
                FTD &lt; {config.minFtdD3} triggers "Insufficient Evidence" on Day 3.
              </span>
            </div>

            <div>
              <label className="block text-[11px] uppercase font-semibold text-slate-600 tracking-wider mb-1">
                Day 4 Minimum FTD Threshold ($C$9)
              </label>
              <input
                type="number"
                value={config.minFtdD4}
                onChange={(e) => handleGlobalChange('minFtdD4', parseInt(e.target.value, 10) || 1)}
                className="w-full text-[13px] px-3 py-1.5 rounded-md editable-cell-input border border-slate-300 font-semibold"
              />
              <span className="text-[10.5px] text-slate-400 mt-1 block">
                FTD &lt; {config.minFtdD4} triggers "Insufficient Evidence" on Day 4.
              </span>
            </div>

            <div>
              <label className="block text-[11px] uppercase font-semibold text-slate-600 tracking-wider mb-1">
                Day 7 Minimum FTD Threshold ($C$10)
              </label>
              <input
                type="number"
                value={config.minFtdD7}
                onChange={(e) => handleGlobalChange('minFtdD7', parseInt(e.target.value, 10) || 1)}
                className="w-full text-[13px] px-3 py-1.5 rounded-md editable-cell-input border border-slate-300 font-semibold"
              />
              <span className="text-[10.5px] text-slate-400 mt-1 block">
                FTD &lt; {config.minFtdD7} triggers "Insufficient Evidence" on Day 7.
              </span>
            </div>
          </div>
        </div>

        {/* Section 3: Action Multipliers & Fraud Floor */}
        <div className="saas-card p-6 space-y-4">
          <div className="flex items-center space-x-2 text-[var(--color-primary)] border-b border-slate-100 pb-3">
            <Target className="w-4 h-4 text-purple-600" />
            <h2 className="font-heading text-[17px] font-bold tracking-heading">
              Action Multipliers &amp; Fraud
            </h2>
          </div>

          <div className="space-y-4 text-[12.5px]">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[10.5px] uppercase font-semibold text-slate-600 tracking-wider mb-1">
                  Scale Ceiling Ratio
                </label>
                <div className="flex items-center">
                  <input
                    type="number"
                    step="0.05"
                    value={config.scaleCostRatio}
                    onChange={(e) =>
                      handleGlobalChange('scaleCostRatio', parseFloat(e.target.value) || 0.85)
                    }
                    className="w-full text-[13px] px-2 py-1.5 rounded-md editable-cell-input border border-slate-300 font-semibold text-right"
                  />
                  <span className="ml-1.5 font-bold text-slate-500 text-[11px]">
                    ({(config.scaleCostRatio * 100).toFixed(0)}%)
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-[10.5px] uppercase font-semibold text-slate-600 tracking-wider mb-1">
                  Scale Budget Mult
                </label>
                <div className="flex items-center">
                  <input
                    type="number"
                    step="0.05"
                    value={config.scaleBudgetFactor}
                    onChange={(e) =>
                      handleGlobalChange('scaleBudgetFactor', parseFloat(e.target.value) || 1.3)
                    }
                    className="w-full text-[13px] px-2 py-1.5 rounded-md editable-cell-input border border-slate-300 font-semibold text-right"
                  />
                  <span className="ml-1.5 font-bold text-blue-700 text-[11px]">
                    (+{((config.scaleBudgetFactor - 1) * 100).toFixed(0)}%)
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[10.5px] uppercase font-semibold text-slate-600 tracking-wider mb-1">
                  Stop Floor Ratio
                </label>
                <div className="flex items-center">
                  <input
                    type="number"
                    step="0.05"
                    value={config.stopCostRatio}
                    onChange={(e) =>
                      handleGlobalChange('stopCostRatio', parseFloat(e.target.value) || 1.25)
                    }
                    className="w-full text-[13px] px-2 py-1.5 rounded-md editable-cell-input border border-slate-300 font-semibold text-right"
                  />
                  <span className="ml-1.5 font-bold text-slate-500 text-[11px]">
                    ({(config.stopCostRatio * 100).toFixed(0)}%)
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-[10.5px] uppercase font-semibold text-slate-600 tracking-wider mb-1">
                  Stop Budget Mult
                </label>
                <div className="flex items-center">
                  <input
                    type="number"
                    step="0.1"
                    value={config.stopBudgetFactor}
                    onChange={(e) =>
                      handleGlobalChange('stopBudgetFactor', parseFloat(e.target.value) || 0)
                    }
                    className="w-full text-[13px] px-2 py-1.5 rounded-md editable-cell-input border border-slate-300 font-semibold text-right"
                  />
                  <span className="ml-1.5 font-bold text-red-700 text-[11px]">
                    (-100%)
                  </span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[11px] uppercase font-semibold text-slate-600 tracking-wider mb-1">
                Anti-Fraud Repeat Deposit Floor ($C$16)
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  step="0.01"
                  value={config.minRechargeRate}
                  onChange={(e) =>
                    handleGlobalChange('minRechargeRate', parseFloat(e.target.value) || 0.15)
                  }
                  className="w-24 text-[13px] px-3 py-1.5 rounded-md editable-cell-input border border-slate-300 font-semibold text-right"
                />
                <span className="font-semibold text-slate-700 text-[12px]">
                  = {(config.minRechargeRate * 100).toFixed(1)}% STD/FTD conversion
                </span>
              </div>
              <span className="text-[10.5px] text-slate-400 mt-1 block">
                FTD ≥ 10 with repeat recharge rate below this threshold triggers manual fraud audit.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Target Benchmark Matrix (A19:E23) */}
      <div className="saas-card-static p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
          <div>
            <h2 className="font-heading text-[18px] font-bold text-[var(--color-primary)] tracking-heading">
              Market &amp; Platform Benchmark Target Matrix (A19:E23)
            </h2>
            <p className="text-[12px] text-slate-500">
              Composite keys used for XLOOKUP matching in the computation engine. Modify thresholds or add new regions below.
            </p>
          </div>
          <span className="text-[11px] bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium">
            Active Targets: {config.benchmarks.length} Matrix Rows
          </span>
        </div>

        {/* Matrix Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[var(--table-header-bg)] border-b-2 border-[var(--table-header-sep)] text-[11px] uppercase font-semibold text-[var(--color-primary)] tracking-table-head">
                <th className="py-2.5 px-4">Dimension Key (Market_Platform)</th>
                <th className="py-2.5 px-3">Market</th>
                <th className="py-2.5 px-3">Platform</th>
                <th className="py-2.5 px-3 text-right">Target C/FTD ({config.currencySymbol})</th>
                <th className="py-2.5 px-3 text-right">Target C/NAR ({config.currencySymbol})</th>
                <th className="py-2.5 px-3 text-right">Target D3 Ret (%)</th>
                <th className="py-2.5 px-3 text-right">Target CP Score</th>
                <th className="py-2.5 px-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-[12.5px]">
              {config.benchmarks.map((bm) => (
                <tr key={bm.id} className="hover:bg-slate-50/70">
                  <td className="py-2.5 px-4 font-mono font-medium text-[11.5px] text-slate-700">
                    {bm.market}_{bm.platform}
                  </td>
                  <td className="py-2.5 px-3">
                    <input
                      type="text"
                      value={bm.market}
                      onChange={(e) => handleBenchmarkChange(bm.id, 'market', e.target.value)}
                      className="px-2 py-1 rounded editable-cell-input text-[12px] font-medium border border-transparent w-28"
                    />
                  </td>
                  <td className="py-2.5 px-3">
                    <input
                      type="text"
                      value={bm.platform}
                      onChange={(e) => handleBenchmarkChange(bm.id, 'platform', e.target.value)}
                      className="px-2 py-1 rounded editable-cell-input text-[12px] font-medium border border-transparent w-24"
                    />
                  </td>
                  <td className="py-2.5 px-3 text-right">
                    <input
                      type="number"
                      step="0.5"
                      value={bm.targetCFTD}
                      onChange={(e) =>
                        handleBenchmarkChange(bm.id, 'targetCFTD', parseFloat(e.target.value) || 0)
                      }
                      className="px-2 py-1 rounded editable-cell-input text-[12px] font-semibold text-right border border-transparent w-24"
                    />
                  </td>
                  <td className="py-2.5 px-3 text-right">
                    <input
                      type="number"
                      step="0.5"
                      value={bm.targetCNAR}
                      onChange={(e) =>
                        handleBenchmarkChange(bm.id, 'targetCNAR', parseFloat(e.target.value) || 0)
                      }
                      className="px-2 py-1 rounded editable-cell-input text-[12px] text-right border border-transparent w-20"
                    />
                  </td>
                  <td className="py-2.5 px-3 text-right">
                    <div className="flex items-center justify-end">
                      <input
                        type="number"
                        step="1"
                        value={Math.round(bm.targetD3Ret * 100)}
                        onChange={(e) =>
                          handleBenchmarkChange(
                            bm.id,
                            'targetD3Ret',
                            (parseFloat(e.target.value) || 0) / 100
                          )
                        }
                        className="px-2 py-1 rounded editable-cell-input text-[12px] text-right border border-transparent w-16"
                      />
                      <span className="ml-1 text-slate-500 font-medium">%</span>
                    </div>
                  </td>
                  <td className="py-2.5 px-3 text-right">
                    <input
                      type="number"
                      step="1"
                      value={bm.targetCPScore}
                      onChange={(e) =>
                        handleBenchmarkChange(bm.id, 'targetCPScore', parseFloat(e.target.value) || 0)
                      }
                      className="px-2 py-1 rounded editable-cell-input text-[12px] font-semibold text-right border border-transparent w-20"
                    />
                  </td>
                  <td className="py-2.5 px-3 text-center">
                    <button
                      onClick={() => handleDeleteBenchmark(bm.id)}
                      className="p-1 rounded text-slate-400 hover:text-red-700 hover:bg-red-50"
                      title="Delete benchmark row"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add New Benchmark Form */}
        <div className="mt-4 p-4 rounded-lg bg-slate-50 border border-slate-200 text-[12px] space-y-3">
          <div className="font-semibold text-slate-700 flex items-center">
            <Plus className="w-3.5 h-3.5 mr-1 text-[var(--color-accent)]" />
            Add New Benchmark Target Dimension
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-3">
            <div>
              <label className="block text-[10px] uppercase font-semibold text-slate-500 mb-1">
                Market
              </label>
              <input
                type="text"
                value={newMarket}
                onChange={(e) => setNewMarket(e.target.value)}
                className="w-full px-2 py-1 bg-white border border-slate-300 rounded text-[12px]"
                placeholder="Market C"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase font-semibold text-slate-500 mb-1">
                Platform
              </label>
              <input
                type="text"
                value={newPlatform}
                onChange={(e) => setNewPlatform(e.target.value)}
                className="w-full px-2 py-1 bg-white border border-slate-300 rounded text-[12px]"
                placeholder="Google"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase font-semibold text-slate-500 mb-1">
                Target C/FTD
              </label>
              <input
                type="number"
                value={newTargetCFTD}
                onChange={(e) => setNewTargetCFTD(parseFloat(e.target.value) || 0)}
                className="w-full px-2 py-1 bg-white border border-slate-300 rounded text-[12px] text-right"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase font-semibold text-slate-500 mb-1">
                Target C/NAR
              </label>
              <input
                type="number"
                value={newTargetCNAR}
                onChange={(e) => setNewTargetCNAR(parseFloat(e.target.value) || 0)}
                className="w-full px-2 py-1 bg-white border border-slate-300 rounded text-[12px] text-right"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase font-semibold text-slate-500 mb-1">
                Target D3 Ret %
              </label>
              <input
                type="number"
                value={newTargetD3Ret}
                onChange={(e) => setNewTargetD3Ret(parseFloat(e.target.value) || 0)}
                className="w-full px-2 py-1 bg-white border border-slate-300 rounded text-[12px] text-right"
              />
            </div>
            <div className="flex items-end">
              <button
                onClick={handleAddBenchmark}
                className="w-full px-3 py-1.5 rounded-md font-medium text-white bg-[var(--color-primary)] hover:bg-slate-800 text-[12px] shadow-2xs"
              >
                Insert Row
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
