import React, { useState } from 'react';
import { ConfigRules, RawRecord } from '../types';
import { X, Upload, FileJson, AlertCircle } from 'lucide-react';

interface ImportBackupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRestore: (importedConfig: ConfigRules, importedRecords: RawRecord[]) => void;
}

export const ImportBackupModal: React.FC<ImportBackupModalProps> = ({
  isOpen,
  onClose,
  onRestore,
}) => {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [parsedData, setParsedData] = useState<{
    config?: ConfigRules;
    records?: RawRecord[];
  } | null>(null);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMsg(null);
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        if (!json.records || !Array.isArray(json.records)) {
          setErrorMsg('Invalid backup file: "records" array is missing.');
          return;
        }
        setParsedData(json);
      } catch (err: any) {
        setErrorMsg('Invalid JSON structure: ' + err.message);
      }
    };
    reader.readAsText(file);
  };

  const handleConfirmRestore = () => {
    if (!parsedData || !parsedData.records) return;
    onRestore(parsedData.config || ({} as any), parsedData.records);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs">
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center space-x-2">
            <FileJson className="w-5 h-5 text-[var(--color-accent)]" />
            <h3 className="font-heading text-[18px] font-bold text-[var(--color-primary)]">
              Restore System Backup (JSON)
            </h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-md text-slate-400 hover:text-slate-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          <p className="text-[12.5px] text-slate-600">
            Select a verified system backup (.json) file generated via "Export Backup". Restoring will replace your
            current active configuration parameters and vendor cohort records.
          </p>

          {errorMsg && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-800 text-[12px] flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-[var(--color-accent)] transition-colors">
            <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <label className="cursor-pointer font-medium text-[13px] text-[var(--color-accent)] hover:underline">
              <span>Choose Backup JSON file</span>
              <input type="file" accept=".json,application/json" onChange={handleFileUpload} className="hidden" />
            </label>
            <div className="text-[11px] text-slate-400 mt-1">.json configuration package</div>
          </div>

          {parsedData && parsedData.records && (
            <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200 text-emerald-900 text-[12px] space-y-1">
              <div className="font-bold">Verified Backup Archive:</div>
              <div>• Vendor Cohort Records: <strong>{parsedData.records.length}</strong></div>
              <div>
                • Target Matrix Rows:{' '}
                <strong>{parsedData.config?.benchmarks?.length ?? 'Using default'}</strong>
              </div>
              <div>• Reporting Currency: <strong>{parsedData.config?.currencySymbol ?? '$'}</strong></div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-[12.5px] font-medium text-slate-600 hover:bg-slate-200"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirmRestore}
            disabled={!parsedData}
            className="px-5 py-2 rounded-lg text-[12.5px] font-semibold text-white bg-[var(--color-primary)] hover:bg-slate-800 disabled:opacity-50 transition-all shadow-xs"
          >
            Restore Backup
          </button>
        </div>
      </div>
    </div>
  );
};
