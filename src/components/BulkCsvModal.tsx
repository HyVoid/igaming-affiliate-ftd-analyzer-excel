import React, { useState } from 'react';
import { RawRecord, AccountStatus, FraudRiskTag } from '../types';
import { generateRecordId } from '../utils/engine';
import { X, FileText, Upload, AlertCircle, Check, Copy } from 'lucide-react';

interface BulkCsvModalProps {
  isOpen: boolean;
  onClose: () => void;
  onImport: (newRecords: RawRecord[], mode: 'append' | 'replace') => void;
  existingCount: number;
}

const SAMPLE_CSV = `vendorName,market,platform,launchDate,dataDate,spendAmount,impressions,clicks,narCount,ftdCount,ftdAmount,stdCount,ttdCount,d2RetainedCount,d3RetainedCount,d7RetainedCount,day30ActualRevenue,accountStatus,fraudRiskTag,analystNotes
DeltaStream,Market A,Meta,2026-10-10,2026-10-14,920,45000,1200,95,28,1120,12,5,34,22,0,0,NORMAL,NONE,Good creative conversion
QuantumPlay,Market B,TikTok,2026-10-11,2026-10-14,540,68000,1950,110,24,600,9,3,31,19,0,0,NORMAL,NONE,Live casino campaign
ApexVenture,Market A,TikTok,2026-10-12,2026-10-14,750,52000,1100,60,18,540,2,0,10,5,0,0,NORMAL,SUSPECTED,2nd deposit suspiciously low`;

export const BulkCsvModal: React.FC<BulkCsvModalProps> = ({
  isOpen,
  onClose,
  onImport,
  existingCount,
}) => {
  const [csvText, setCsvText] = useState('');
  const [importMode, setImportMode] = useState<'append' | 'replace'>('append');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [previewRows, setPreviewRows] = useState<any[]>([]);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyTemplate = () => {
    navigator.clipboard.writeText(SAMPLE_CSV);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      setCsvText(text);
      parsePreview(text);
    };
    reader.readAsText(file);
  };

  const parsePreview = (text: string) => {
    setErrorMsg(null);
    try {
      const lines = text
        .trim()
        .split('\n')
        .map((l) => l.trim())
        .filter((l) => l.length > 0);

      if (lines.length < 2) {
        setPreviewRows([]);
        return;
      }

      const headers = lines[0].split(',').map((h) => h.trim().toLowerCase());
      const rows: any[] = [];

      for (let i = 1; i < Math.min(lines.length, 6); i++) {
        const parts = lines[i].split(',').map((p) => p.trim());
        const rowObj: any = {};
        headers.forEach((h, idx) => {
          rowObj[h] = parts[idx] || '';
        });
        rows.push(rowObj);
      }
      setPreviewRows(rows);
    } catch (err: any) {
      setErrorMsg('Failed to parse CSV preview: ' + err.message);
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setCsvText(text);
    parsePreview(text);
  };

  const handleExecuteImport = () => {
    setErrorMsg(null);
    try {
      const lines = csvText
        .trim()
        .split('\n')
        .map((l) => l.trim())
        .filter((l) => l.length > 0);

      if (lines.length < 2) {
        setErrorMsg('CSV must contain a header line and at least one data row.');
        return;
      }

      const headers = lines[0].split(',').map((h) => h.trim().toLowerCase());
      const parsedRecords: RawRecord[] = [];

      for (let i = 1; i < lines.length; i++) {
        const parts = lines[i].split(',').map((p) => p.trim());
        const row: any = {};
        headers.forEach((h, idx) => {
          row[h] = parts[idx] !== undefined ? parts[idx] : '';
        });

        const vendorName = row.vendorname || row.vendor || 'Vendor ' + i;
        const market = row.market || 'Market A';
        const platform = row.platform || 'Meta';
        const launchDate = row.launchdate || new Date().toISOString().split('T')[0];
        const dataDate = row.datadate || launchDate;

        const spendAmount = parseFloat(row.spendamount || row.spend || '0') || 0;
        const impressions = parseInt(row.impressions || '0', 10) || 0;
        const clicks = parseInt(row.clicks || '0', 10) || 0;
        const narCount = parseInt(row.narcount || row.nar || '0', 10) || 0;
        const ftdCount = parseInt(row.ftdcount || row.ftd || '0', 10) || 0;
        const ftdAmount = parseFloat(row.ftdamount || '0') || ftdCount * 30;
        const stdCount = parseInt(row.stdcount || row.std || '0', 10) || 0;
        const ttdCount = parseInt(row.ttdcount || row.ttd || '0', 10) || 0;
        const d2RetainedCount = parseInt(row.d2retainedcount || row.d2 || '0', 10) || 0;
        const d3RetainedCount = parseInt(row.d3retainedcount || row.d3 || '0', 10) || 0;
        const d7RetainedCount = parseInt(row.d7retainedcount || row.d7 || '0', 10) || 0;
        const day30ActualRevenue = parseFloat(row.day30actualrevenue || row.day30revenue || '0') || 0;

        let accountStatus: AccountStatus = 'NORMAL';
        const rawAcc = (row.accountstatus || '').toUpperCase();
        if (rawAcc === 'BANNED') accountStatus = 'BANNED';
        else if (rawAcc === 'FLAGGED') accountStatus = 'FLAGGED';

        let fraudRiskTag: FraudRiskTag = 'NONE';
        const rawFraud = (row.fraudrisktag || row.fraud || '').toUpperCase();
        if (rawFraud === 'CONFIRMED') fraudRiskTag = 'CONFIRMED';
        else if (rawFraud === 'SUSPECTED') fraudRiskTag = 'SUSPECTED';

        const analystNotes = row.analystnotes || row.notes || 'Imported via Bulk CSV';

        const recordId = generateRecordId(
          launchDate,
          vendorName,
          market,
          platform,
          (importMode === 'append' ? existingCount : 0) + i
        );

        parsedRecords.push({
          id: `rec-${Date.now()}-${i}`,
          recordId,
          vendorName,
          market,
          platform,
          launchDate,
          dataDate,
          spendAmount,
          impressions,
          clicks,
          narCount,
          ftdCount,
          ftdAmount,
          stdCount,
          ttdCount,
          d2RetainedCount,
          d3RetainedCount,
          d7RetainedCount,
          day30ActualRevenue,
          accountStatus,
          fraudRiskTag,
          analystNotes,
        });
      }

      if (parsedRecords.length === 0) {
        setErrorMsg('No valid records could be extracted.');
        return;
      }

      onImport(parsedRecords, importMode);
      onClose();
    } catch (err: any) {
      setErrorMsg('Error executing CSV import: ' + err.message);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center space-x-2">
            <FileText className="w-5 h-5 text-[var(--color-accent)]" />
            <h3 className="font-heading text-[18px] font-bold text-[var(--color-primary)]">
              Bulk CSV Vendor Data Import
            </h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-md text-slate-400 hover:text-slate-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4 overflow-y-auto">
          {errorMsg && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-800 text-[12px] flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Upload or Sample Template */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200 text-[12px]">
            <div className="flex items-center space-x-2">
              <label className="cursor-pointer inline-flex items-center px-3 py-1.5 rounded-md bg-white border border-slate-300 font-medium text-slate-700 hover:bg-slate-100 shadow-2xs">
                <Upload className="w-3.5 h-3.5 mr-1.5 text-slate-600" />
                Upload .CSV File
                <input type="file" accept=".csv,text/csv" onChange={handleFileUpload} className="hidden" />
              </label>
              <span className="text-slate-400 text-[11px]">or paste CSV text below</span>
            </div>

            <button
              onClick={handleCopyTemplate}
              className="inline-flex items-center text-[11.5px] text-[var(--color-accent)] hover:underline font-medium"
            >
              {copied ? <Check className="w-3.5 h-3.5 mr-1 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 mr-1" />}
              {copied ? 'Template Copied!' : 'Copy Sample CSV Format'}
            </button>
          </div>

          {/* Textarea */}
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-600 mb-1">
              CSV Content (Comma-Separated)
            </label>
            <textarea
              rows={8}
              value={csvText}
              onChange={handleTextChange}
              placeholder="Paste comma-delimited rows here..."
              className="w-full text-[12px] font-mono p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)] bg-slate-50/50"
            />
          </div>

          {/* Import Mode Radio */}
          <div className="flex items-center space-x-6 text-[12.5px] pt-1">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="importMode"
                value="append"
                checked={importMode === 'append'}
                onChange={() => setImportMode('append')}
                className="text-[var(--color-accent)]"
              />
              <span className="font-medium text-slate-800">
                Append to existing database ({existingCount} rows)
              </span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="importMode"
                value="replace"
                checked={importMode === 'replace'}
                onChange={() => setImportMode('replace')}
                className="text-red-600"
              />
              <span className="text-red-700 font-medium">
                Replace entire database
              </span>
            </label>
          </div>

          {/* Parsed Preview */}
          {previewRows.length > 0 && (
            <div className="space-y-1.5 pt-2 border-t border-slate-100">
              <div className="text-[11px] uppercase font-semibold text-slate-500">
                Preview ({previewRows.length} sample rows parsed):
              </div>
              <div className="overflow-x-auto text-[11px] bg-slate-50 p-2 rounded border border-slate-200">
                <table className="w-full text-left font-mono">
                  <thead>
                    <tr className="text-slate-500 border-b border-slate-200">
                      <th className="p-1">Vendor</th>
                      <th className="p-1">Market</th>
                      <th className="p-1">Platform</th>
                      <th className="p-1">Spend</th>
                      <th className="p-1">FTD</th>
                    </tr>
                  </thead>
                  <tbody>
                    {previewRows.map((r, i) => (
                      <tr key={i} className="border-b border-slate-100 last:border-0">
                        <td className="p-1 font-medium text-slate-800">{r.vendorname || r.vendor}</td>
                        <td className="p-1">{r.market}</td>
                        <td className="p-1">{r.platform}</td>
                        <td className="p-1">${r.spendamount || r.spend}</td>
                        <td className="p-1">{r.ftdcount || r.ftd}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-[12.5px] font-medium text-slate-600 hover:bg-slate-200"
          >
            Cancel
          </button>
          <button
            onClick={handleExecuteImport}
            disabled={!csvText.trim()}
            className="px-5 py-2 rounded-lg text-[12.5px] font-semibold text-white bg-[var(--color-primary)] hover:bg-slate-800 disabled:opacity-50 transition-all shadow-xs"
          >
            Execute CSV Import
          </button>
        </div>
      </div>
    </div>
  );
};
