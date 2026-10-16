import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { ConfigRules, RawRecord, EnrichedRecord } from './types';
import { initialConfigRules, initialRawRecords } from './data/seedData';
import { enrichRecords } from './utils/engine';
import { Sidebar, ActiveTab } from './components/Sidebar';
import { ExecDashboardView } from './components/ExecDashboardView';
import { DecisionEngineView } from './components/DecisionEngineView';
import { KpiEngineView } from './components/KpiEngineView';
import { RawInputView } from './components/RawInputView';
import { ConfigRulesView } from './components/ConfigRulesView';
import { BulkCsvModal } from './components/BulkCsvModal';
import { ImportBackupModal } from './components/ImportBackupModal';
import { VendorDetailDrawer } from './components/VendorDetailDrawer';
import { ShieldCheck, RotateCcw } from 'lucide-react';

const STORAGE_KEY_CONFIG = 'igaming_vendor_config_v1';
const STORAGE_KEY_RECORDS = 'igaming_vendor_records_v1';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('05_Exec_Dashboard');
  const [config, setConfig] = useState<ConfigRules>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_CONFIG);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to load saved config', e);
    }
    return initialConfigRules;
  });

  const [rawRecords, setRawRecords] = useState<RawRecord[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_RECORDS);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to load saved records', e);
    }
    return initialRawRecords;
  });

  const [lastSaved, setLastSaved] = useState<string>('Just now');
  const [isBulkCsvOpen, setIsBulkCsvOpen] = useState<boolean>(false);
  const [isImportBackupOpen, setIsImportBackupOpen] = useState<boolean>(false);
  const [isResetConfirmOpen, setIsResetConfirmOpen] = useState<boolean>(false);
  const [selectedRecordId, setSelectedRecordId] = useState<string | null>(null);

  // Auto-save to localStorage whenever config or rawRecords change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_CONFIG, JSON.stringify(config));
      localStorage.setItem(STORAGE_KEY_RECORDS, JSON.stringify(rawRecords));
      const now = new Date();
      const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      setLastSaved(`Today at ${timeStr}`);
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }, [config, rawRecords]);

  // Reactive enrichment of records across all sheets
  const enrichedRecords: EnrichedRecord[] = useMemo(() => {
    return enrichRecords(rawRecords, config);
  }, [rawRecords, config]);

  const selectedRecord = useMemo(() => {
    if (!selectedRecordId) return null;
    return enrichedRecords.find((r) => r.id === selectedRecordId) || null;
  }, [selectedRecordId, enrichedRecords]);

  // Operations for Raw Records
  const handleUpdateRecord = useCallback((updated: RawRecord) => {
    setRawRecords((prev) => prev.map((r) => (r.id === updated.id ? updated : r)));
  }, []);

  const handleAddRecord = useCallback((newRecord: RawRecord) => {
    setRawRecords((prev) => [newRecord, ...prev]);
  }, []);

  const handleDeleteRecord = useCallback((id: string) => {
    setRawRecords((prev) => prev.filter((r) => r.id !== id));
    if (selectedRecordId === id) setSelectedRecordId(null);
  }, [selectedRecordId]);

  const handleDuplicateRecord = useCallback((record: RawRecord) => {
    const duplicated: RawRecord = {
      ...record,
      id: `rec-${Date.now()}`,
      recordId: record.recordId + '_COPY',
      vendorName: record.vendorName + ' (Copy)',
    };
    setRawRecords((prev) => [duplicated, ...prev]);
  }, []);

  // Export Backup
  const handleExportBackup = () => {
    const backupData = {
      version: '1.0',
      exportedAt: new Date().toISOString(),
      config,
      records: rawRecords,
    };
    const jsonStr = JSON.stringify(backupData, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `igaming_vendor_backup_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Restore Backup
  const handleRestoreBackup = (importedConfig: ConfigRules, importedRecords: RawRecord[]) => {
    if (importedConfig && importedConfig.benchmarks) {
      setConfig(importedConfig);
    }
    if (importedRecords && Array.isArray(importedRecords)) {
      setRawRecords(importedRecords);
    }
  };

  // Bulk CSV Import
  const handleBulkCsvImport = (newRecords: RawRecord[], mode: 'append' | 'replace') => {
    if (mode === 'replace') {
      setRawRecords(newRecords);
    } else {
      setRawRecords((prev) => [...newRecords, ...prev]);
    }
  };

  // Reset to initial seed data
  const handleConfirmReset = () => {
    setConfig(initialConfigRules);
    setRawRecords(initialRawRecords);
    localStorage.removeItem(STORAGE_KEY_CONFIG);
    localStorage.removeItem(STORAGE_KEY_RECORDS);
    setIsResetConfirmOpen(false);
  };

  const anomalyCount = useMemo(() => {
    return enrichedRecords.filter((r) => r.decision.actionRecommendation === 'STOP' || r.decision.actionRecommendation === 'REVIEW').length;
  }, [enrichedRecords]);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex flex-col md:flex-row selection:bg-blue-100 selection:text-blue-900">
      {/* Left Vertical Sidebar */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        lastSavedText={lastSaved}
        onExportBackup={handleExportBackup}
        onOpenImportBackup={() => setIsImportBackupOpen(true)}
        onOpenBulkCsv={() => setIsBulkCsvOpen(true)}
        onResetData={() => setIsResetConfirmOpen(true)}
        recordCount={rawRecords.length}
        anomalyCount={anomalyCount}
      />

      {/* Main Content Area Container */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Main Workspace (centered, max-w-[1400px], 40px left/right padding) */}
        <main className="flex-1 w-full max-w-[1400px] mx-auto px-6 sm:px-10 py-6">
          {activeTab === '05_Exec_Dashboard' && (
            <ExecDashboardView
              records={enrichedRecords}
            config={config}
            onSelectVendor={(r) => setSelectedRecordId(r.id)}
          />
        )}

        {activeTab === '04_Decision_Engine' && (
          <DecisionEngineView
            records={enrichedRecords}
            config={config}
            onSelectVendor={(r) => setSelectedRecordId(r.id)}
          />
        )}

        {activeTab === '03_KPI_Engine' && (
          <KpiEngineView
            records={enrichedRecords}
            config={config}
            onSelectVendor={(r) => setSelectedRecordId(r.id)}
          />
        )}

        {activeTab === '02_Raw_Input' && (
          <RawInputView
            records={enrichedRecords}
            config={config}
            onUpdateRecord={handleUpdateRecord}
            onAddRecord={handleAddRecord}
            onDeleteRecord={handleDeleteRecord}
            onDuplicateRecord={handleDuplicateRecord}
          />
        )}

        {activeTab === '01_Config_Rules' && (
          <ConfigRulesView
            config={config}
            onUpdateConfig={setConfig}
          />
        )}
      </main>

      {/* Footer: Privacy notice */}
      <footer className="w-full border-t border-[var(--color-border)] bg-white py-6 mt-12">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between text-[12px] text-[var(--color-muted)] gap-3">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-slate-500 shrink-0" />
            <span>
              All data storage is maintained strictly within your browser&apos;s localStorage. The application itself does not retain or transmit any user data to external servers.
            </span>
          </div>
          <div className="text-[11px] font-mono text-slate-400">
            v2.4 // Enterprise Grade Decision Suite
          </div>
        </div>
      </footer>
    </div>

      {/* Slide-over Detail Drawer */}
      <VendorDetailDrawer
        record={selectedRecord}
        currencySymbol={config.currencySymbol}
        onClose={() => setSelectedRecordId(null)}
        onUpdateRecord={handleUpdateRecord}
      />

      {/* Bulk CSV Modal */}
      <BulkCsvModal
        isOpen={isBulkCsvOpen}
        onClose={() => setIsBulkCsvOpen(false)}
        onImport={handleBulkCsvImport}
        existingCount={rawRecords.length}
      />

      {/* Import Backup Modal */}
      <ImportBackupModal
        isOpen={isImportBackupOpen}
        onClose={() => setIsImportBackupOpen(false)}
        onRestore={handleRestoreBackup}
      />

      {/* Reset Confirmation Dialog */}
      {isResetConfirmOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 space-y-4">
            <div className="flex items-center space-x-3 text-red-600">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <RotateCcw className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h3 className="font-heading text-[18px] font-bold text-slate-900">
                  Reset All Data to Baseline?
                </h3>
                <p className="text-[12px] text-slate-500">
                  This will reload standard initial sample cohorts and reset rules to default.
                </p>
              </div>
            </div>

            <p className="text-[12.5px] text-slate-600 leading-normal">
              Any custom vendor edits or custom benchmark rows in local storage will be overwritten with the verified seed dataset. Consider downloading an "Export Backup" first.
            </p>

            <div className="flex items-center justify-end space-x-3 pt-2">
              <button
                onClick={() => setIsResetConfirmOpen(false)}
                className="px-4 py-2 rounded-lg text-[12.5px] font-medium text-slate-600 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmReset}
                className="px-4 py-2 rounded-lg text-[12.5px] font-semibold text-white bg-red-600 hover:bg-red-700 shadow-xs"
              >
                Confirm Reset
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
