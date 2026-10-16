import React, { useState } from 'react';
import {
  ConfigRules,
  EnrichedRecord,
  RawRecord,
  AccountStatus,
  FraudRiskTag,
} from '../types';
import { generateRecordId } from '../utils/engine';
import {
  Plus,
  Trash2,
  Copy,
  AlertCircle,
  CheckCircle2,
  Filter,
  Save,
  Info,
} from 'lucide-react';

interface RawInputViewProps {
  records: EnrichedRecord[];
  config: ConfigRules;
  onUpdateRecord: (updated: RawRecord) => void;
  onAddRecord: (newRecord: RawRecord) => void;
  onDeleteRecord: (id: string) => void;
  onDuplicateRecord: (record: RawRecord) => void;
}

export const RawInputView: React.FC<RawInputViewProps> = ({
  records,
  config,
  onUpdateRecord,
  onAddRecord,
  onDeleteRecord,
  onDuplicateRecord,
}) => {
  const [search, setSearch] = useState<string>('');
  const [showErrorsOnly, setShowErrorsOnly] = useState<boolean>(false);

  // Quick field editor
  const handleFieldChange = (
    record: EnrichedRecord,
    field: keyof RawRecord,
    val: string | number
  ) => {
    const updated: RawRecord = {
      ...record,
      [field]: val,
    };

    // If dates, vendor, market, platform change, update recordId
    if (
      field === 'launchDate' ||
      field === 'vendorName' ||
      field === 'market' ||
      field === 'platform'
    ) {
      const idx = records.findIndex((r) => r.id === record.id) + 1;
      updated.recordId = generateRecordId(
        updated.launchDate,
        updated.vendorName,
        updated.market,
        updated.platform,
        idx
      );
    }

    onUpdateRecord(updated);
  };

  const handleAddNew = () => {
    const now = new Date();
    const todayStr = now.toISOString().split('T')[0];
    const newIdx = records.length + 1;

    const newRecord: RawRecord = {
      id: `rec-${Date.now()}`,
      recordId: generateRecordId(todayStr, 'New Agency', 'Market A', 'Meta', newIdx),
      vendorName: 'New Agency',
      market: 'Market A',
      platform: 'Meta',
      launchDate: todayStr,
      dataDate: todayStr,
      spendAmount: 500.0,
      impressions: 25000,
      clicks: 800,
      narCount: 60,
      ftdCount: 15,
      ftdAmount: 450.0,
      stdCount: 5,
      ttdCount: 2,
      d2RetainedCount: 20,
      d3RetainedCount: 12,
      d7RetainedCount: 0,
      day30ActualRevenue: 0,
      accountStatus: 'NORMAL',
      fraudRiskTag: 'NONE',
      analystNotes: 'Initial cohort test batch.',
    };

    onAddRecord(newRecord);
  };

  const filtered = records.filter((r) => {
    if (showErrorsOnly && r.isValid) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      return (
        r.vendorName.toLowerCase().includes(q) ||
        r.recordId.toLowerCase().includes(q) ||
        r.market.toLowerCase().includes(q) ||
        r.platform.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const errorCount = records.filter((r) => !r.isValid).length;

  return (
    <div className="space-y-8 page-enter pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pt-2">
        <div>
          <span className="text-[11px] font-semibold tracking-wider uppercase text-[var(--color-muted)]">
            Sheet 02 // Primary Data Entry &amp; Integrity Layer
          </span>
          <h1 className="font-heading text-[28px] font-bold text-[var(--color-primary)] tracking-display leading-tight">
            Raw Input &amp; Data Validation Probes
          </h1>
          <p className="text-[13px] text-slate-600 max-w-3xl mt-1">
            Direct spreadsheet entry layer. Cells highlighted with pale yellow (#FFFDE7) are editable with immediate
            reactive propagation to all analytical models. Column V validates logical consistency in real-time.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={handleAddNew}
            className="inline-flex items-center px-3.5 py-2 rounded-lg text-[12.5px] font-medium text-white bg-[var(--color-primary)] hover:bg-slate-800 transition-all shadow-xs"
          >
            <Plus className="w-4 h-4 mr-1.5" />
            <span>Add New Cohort Row</span>
          </button>
        </div>
      </div>

      {/* Validation Probe Warning Alert if Errors exist */}
      {errorCount > 0 && (
        <div className="anomaly-block p-4 flex items-center justify-between text-red-900">
          <div className="flex items-center space-x-2.5">
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
            <div>
              <div className="font-bold text-[13px]">
                {errorCount} row(s) failed integrity validation (Column V Probe)
              </div>
              <div className="text-[12px] text-red-700">
                Inverted funnels or date anomalies detected. Please correct the values to restore accurate formula flow.
              </div>
            </div>
          </div>
          <button
            onClick={() => setShowErrorsOnly(!showErrorsOnly)}
            className="text-[12px] font-semibold px-3 py-1 rounded-md bg-red-100 hover:bg-red-200 text-red-900 transition-colors"
          >
            {showErrorsOnly ? 'Show All Rows' : 'Filter Errors Only'}
          </button>
        </div>
      )}

      {/* Main Table Container */}
      <div className="saas-card-static overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white">
          <div className="flex items-center space-x-3 text-[12.5px]">
            <span className="font-semibold text-slate-800">
              Total Cohort Records: <strong>{records.length}</strong>
            </span>
            <span className="text-slate-300">|</span>
            <span className="inline-flex items-center text-[11px] text-slate-500">
              <span className="w-3 h-3 rounded-sm bg-[#FFFDE7] border border-amber-300 mr-1.5" />
              Editable Cell Indicator
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search raw rows..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-56 text-[12px] pl-3 pr-8 py-1.5 rounded-lg border border-slate-200 bg-white focus:outline-none"
              />
              <Filter className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-2.5 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Dense Excel-like Table */}
        <div className="overflow-x-auto max-h-[700px]">
          <table className="w-full text-left border-collapse text-[12px]">
            <thead className="sticky top-0 z-20">
              <tr className="bg-[var(--table-header-bg)] border-b-2 border-[var(--table-header-sep)] text-[10.5px] uppercase font-semibold text-[var(--color-primary)] tracking-table-head shadow-xs">
                <th className="py-2.5 px-3 bg-slate-100/90 min-w-[150px]">Col A: Record ID (Auto)</th>
                <th className="py-2.5 px-3 bg-amber-50/70 min-w-[170px]">Col B: Vendor Name</th>
                <th className="py-2.5 px-2 bg-amber-50/70 min-w-[110px]">Col C: Market</th>
                <th className="py-2.5 px-2 bg-amber-50/70 min-w-[95px]">Col D: Platform</th>
                <th className="py-2.5 px-2 bg-amber-50/70 min-w-[110px]">Col E: Launch Date</th>
                <th className="py-2.5 px-2 bg-amber-50/70 min-w-[110px]">Col F: Data Date</th>
                <th className="py-2.5 px-2 bg-amber-50/70 min-w-[95px] text-right">Col G: Spend ({config.currencySymbol})</th>
                <th className="py-2.5 px-2 bg-amber-50/70 min-w-[85px] text-right">Col H: Impr</th>
                <th className="py-2.5 px-2 bg-amber-50/70 min-w-[80px] text-right">Col I: Clicks</th>
                <th className="py-2.5 px-2 bg-amber-50/70 min-w-[80px] text-right">Col J: NAR</th>
                <th className="py-2.5 px-2 bg-amber-50/70 min-w-[80px] text-right">Col K: FTD</th>
                <th className="py-2.5 px-2 bg-amber-50/70 min-w-[90px] text-right">Col L: FTD Amount</th>
                <th className="py-2.5 px-2 bg-amber-50/70 min-w-[80px] text-right">Col M: STD</th>
                <th className="py-2.5 px-2 bg-amber-50/70 min-w-[80px] text-right">Col N: TTD</th>
                <th className="py-2.5 px-2 bg-amber-50/70 min-w-[75px] text-right">Col O: D2 Ret</th>
                <th className="py-2.5 px-2 bg-amber-50/70 min-w-[75px] text-right">Col P: D3 Ret</th>
                <th className="py-2.5 px-2 bg-amber-50/70 min-w-[75px] text-right">Col Q: D7 Ret</th>
                <th className="py-2.5 px-2 bg-amber-50/70 min-w-[105px] text-right">Col R: Day30 Rev</th>
                <th className="py-2.5 px-2 bg-amber-50/70 min-w-[105px]">Col S: Account</th>
                <th className="py-2.5 px-2 bg-amber-50/70 min-w-[110px]">Col T: Fraud Tag</th>
                <th className="py-2.5 px-3 bg-amber-50/70 min-w-[160px]">Col U: Analyst Notes</th>
                <th className="py-2.5 px-3 bg-slate-100 min-w-[190px]">Col V: Validation Probe</th>
                <th className="py-2.5 px-2 bg-slate-100 min-w-[70px] text-center">Row Ops</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filtered.map((record, index) => {
                const isValid = record.isValid;
                return (
                  <tr
                    key={record.id}
                    className={`hover:bg-slate-100/50 ${
                      !isValid ? 'bg-red-50/40' : index % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'
                    }`}
                  >
                    {/* Col A: Record ID (Auto) */}
                    <td className="py-2 px-3 font-mono text-[11px] text-slate-500 select-all whitespace-nowrap">
                      {record.recordId}
                    </td>

                    {/* Col B: Vendor Name */}
                    <td className="p-1">
                      <input
                        type="text"
                        value={record.vendorName}
                        onChange={(e) => handleFieldChange(record, 'vendorName', e.target.value)}
                        className="w-full text-[12px] px-2 py-1 rounded editable-cell-input border border-transparent font-medium"
                      />
                    </td>

                    {/* Col C: Market */}
                    <td className="p-1">
                      <select
                        value={record.market}
                        onChange={(e) => handleFieldChange(record, 'market', e.target.value)}
                        className="w-full text-[12px] px-1.5 py-1 rounded editable-cell-input border border-transparent"
                      >
                        <option value="Market A">Market A</option>
                        <option value="Market B">Market B</option>
                        <option value="Market C">Market C</option>
                      </select>
                    </td>

                    {/* Col D: Platform */}
                    <td className="p-1">
                      <select
                        value={record.platform}
                        onChange={(e) => handleFieldChange(record, 'platform', e.target.value)}
                        className="w-full text-[12px] px-1.5 py-1 rounded editable-cell-input border border-transparent"
                      >
                        <option value="Meta">Meta</option>
                        <option value="TikTok">TikTok</option>
                        <option value="Google">Google</option>
                      </select>
                    </td>

                    {/* Col E: Launch Date */}
                    <td className="p-1">
                      <input
                        type="date"
                        value={record.launchDate}
                        onChange={(e) => handleFieldChange(record, 'launchDate', e.target.value)}
                        className="w-full text-[11px] px-1.5 py-1 rounded editable-cell-input border border-transparent"
                      />
                    </td>

                    {/* Col F: Data Date */}
                    <td className="p-1">
                      <input
                        type="date"
                        value={record.dataDate}
                        onChange={(e) => handleFieldChange(record, 'dataDate', e.target.value)}
                        className="w-full text-[11px] px-1.5 py-1 rounded editable-cell-input border border-transparent"
                      />
                    </td>

                    {/* Col G: Spend */}
                    <td className="p-1">
                      <input
                        type="number"
                        step="0.01"
                        value={record.spendAmount}
                        onChange={(e) =>
                          handleFieldChange(record, 'spendAmount', parseFloat(e.target.value) || 0)
                        }
                        className="w-full text-[12px] px-1.5 py-1 text-right rounded editable-cell-input border border-transparent font-medium"
                      />
                    </td>

                    {/* Col H: Impressions */}
                    <td className="p-1">
                      <input
                        type="number"
                        value={record.impressions}
                        onChange={(e) =>
                          handleFieldChange(record, 'impressions', parseInt(e.target.value, 10) || 0)
                        }
                        className="w-full text-[12px] px-1.5 py-1 text-right rounded editable-cell-input border border-transparent"
                      />
                    </td>

                    {/* Col I: Clicks */}
                    <td className="p-1">
                      <input
                        type="number"
                        value={record.clicks}
                        onChange={(e) =>
                          handleFieldChange(record, 'clicks', parseInt(e.target.value, 10) || 0)
                        }
                        className="w-full text-[12px] px-1.5 py-1 text-right rounded editable-cell-input border border-transparent"
                      />
                    </td>

                    {/* Col J: NAR */}
                    <td className="p-1">
                      <input
                        type="number"
                        value={record.narCount}
                        onChange={(e) =>
                          handleFieldChange(record, 'narCount', parseInt(e.target.value, 10) || 0)
                        }
                        className="w-full text-[12px] px-1.5 py-1 text-right rounded editable-cell-input border border-transparent font-medium"
                      />
                    </td>

                    {/* Col K: FTD */}
                    <td className="p-1">
                      <input
                        type="number"
                        value={record.ftdCount}
                        onChange={(e) =>
                          handleFieldChange(record, 'ftdCount', parseInt(e.target.value, 10) || 0)
                        }
                        className="w-full text-[12px] px-1.5 py-1 text-right rounded editable-cell-input border border-transparent font-semibold"
                      />
                    </td>

                    {/* Col L: FTD Amount */}
                    <td className="p-1">
                      <input
                        type="number"
                        step="0.01"
                        value={record.ftdAmount}
                        onChange={(e) =>
                          handleFieldChange(record, 'ftdAmount', parseFloat(e.target.value) || 0)
                        }
                        className="w-full text-[12px] px-1.5 py-1 text-right rounded editable-cell-input border border-transparent"
                      />
                    </td>

                    {/* Col M: STD */}
                    <td className="p-1">
                      <input
                        type="number"
                        value={record.stdCount}
                        onChange={(e) =>
                          handleFieldChange(record, 'stdCount', parseInt(e.target.value, 10) || 0)
                        }
                        className="w-full text-[12px] px-1.5 py-1 text-right rounded editable-cell-input border border-transparent"
                      />
                    </td>

                    {/* Col N: TTD */}
                    <td className="p-1">
                      <input
                        type="number"
                        value={record.ttdCount}
                        onChange={(e) =>
                          handleFieldChange(record, 'ttdCount', parseInt(e.target.value, 10) || 0)
                        }
                        className="w-full text-[12px] px-1.5 py-1 text-right rounded editable-cell-input border border-transparent"
                      />
                    </td>

                    {/* Col O: D2 Retained */}
                    <td className="p-1">
                      <input
                        type="number"
                        value={record.d2RetainedCount}
                        onChange={(e) =>
                          handleFieldChange(record, 'd2RetainedCount', parseInt(e.target.value, 10) || 0)
                        }
                        className="w-full text-[12px] px-1.5 py-1 text-right rounded editable-cell-input border border-transparent"
                      />
                    </td>

                    {/* Col P: D3 Retained */}
                    <td className="p-1">
                      <input
                        type="number"
                        value={record.d3RetainedCount}
                        onChange={(e) =>
                          handleFieldChange(record, 'd3RetainedCount', parseInt(e.target.value, 10) || 0)
                        }
                        className="w-full text-[12px] px-1.5 py-1 text-right rounded editable-cell-input border border-transparent"
                      />
                    </td>

                    {/* Col Q: D7 Retained */}
                    <td className="p-1">
                      <input
                        type="number"
                        value={record.d7RetainedCount}
                        onChange={(e) =>
                          handleFieldChange(record, 'd7RetainedCount', parseInt(e.target.value, 10) || 0)
                        }
                        className="w-full text-[12px] px-1.5 py-1 text-right rounded editable-cell-input border border-transparent"
                      />
                    </td>

                    {/* Col R: Day30 Actual Revenue */}
                    <td className="p-1">
                      <input
                        type="number"
                        step="0.01"
                        value={record.day30ActualRevenue}
                        onChange={(e) =>
                          handleFieldChange(
                            record,
                            'day30ActualRevenue',
                            parseFloat(e.target.value) || 0
                          )
                        }
                        placeholder="Optional"
                        className="w-full text-[12px] px-1.5 py-1 text-right rounded editable-cell-input border border-transparent"
                      />
                    </td>

                    {/* Col S: Account Status */}
                    <td className="p-1">
                      <select
                        value={record.accountStatus}
                        onChange={(e) =>
                          handleFieldChange(record, 'accountStatus', e.target.value as AccountStatus)
                        }
                        className={`w-full text-[11px] px-1.5 py-1 rounded font-medium ${
                          record.accountStatus === 'BANNED'
                            ? 'bg-red-100 text-red-900 border border-red-300'
                            : record.accountStatus === 'FLAGGED'
                            ? 'bg-amber-100 text-amber-900 border border-amber-300'
                            : 'editable-cell-input border border-transparent'
                        }`}
                      >
                        <option value="NORMAL">NORMAL</option>
                        <option value="FLAGGED">FLAGGED</option>
                        <option value="BANNED">BANNED</option>
                      </select>
                    </td>

                    {/* Col T: Fraud Tag */}
                    <td className="p-1">
                      <select
                        value={record.fraudRiskTag}
                        onChange={(e) =>
                          handleFieldChange(record, 'fraudRiskTag', e.target.value as FraudRiskTag)
                        }
                        className={`w-full text-[11px] px-1.5 py-1 rounded font-medium ${
                          record.fraudRiskTag === 'CONFIRMED'
                            ? 'bg-red-100 text-red-900 border border-red-300'
                            : record.fraudRiskTag === 'SUSPECTED'
                            ? 'bg-amber-100 text-amber-900 border border-amber-300'
                            : 'editable-cell-input border border-transparent'
                        }`}
                      >
                        <option value="NONE">NONE</option>
                        <option value="SUSPECTED">SUSPECTED</option>
                        <option value="CONFIRMED">CONFIRMED</option>
                      </select>
                    </td>

                    {/* Col U: Analyst Notes */}
                    <td className="p-1">
                      <input
                        type="text"
                        value={record.analystNotes}
                        onChange={(e) => handleFieldChange(record, 'analystNotes', e.target.value)}
                        placeholder="Notes..."
                        className="w-full text-[11.5px] px-2 py-1 rounded editable-cell-input border border-transparent"
                      />
                    </td>

                    {/* Col V: Validation Status Probe (Automated Formula) */}
                    <td className="py-2 px-3 text-[11.5px] font-medium whitespace-nowrap">
                      {isValid ? (
                        <span className="text-emerald-700 flex items-center">
                          <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                          ✅ Valid
                        </span>
                      ) : (
                        <span className="text-red-700 font-semibold" title={record.validationStatus}>
                          {record.validationStatus}
                        </span>
                      )}
                    </td>

                    {/* Row Ops */}
                    <td className="py-2 px-2 text-center whitespace-nowrap">
                      <div className="flex items-center justify-center space-x-1">
                        <button
                          onClick={() => onDuplicateRecord(record)}
                          className="p-1 text-slate-400 hover:text-slate-700 rounded hover:bg-slate-200"
                          title="Duplicate row"
                        >
                          <Copy className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => onDeleteRecord(record.id)}
                          className="p-1 text-slate-400 hover:text-red-700 rounded hover:bg-red-100"
                          title="Delete row"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
