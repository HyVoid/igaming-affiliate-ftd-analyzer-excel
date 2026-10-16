import React from 'react';
import {
  Download,
  Upload,
  FileSpreadsheet,
  RotateCcw,
  CheckCircle2,
  Sliders,
  Database,
  BarChart3,
  GitBranch,
  LayoutDashboard,
} from 'lucide-react';

export type ActiveTab = '05_Exec_Dashboard' | '04_Decision_Engine' | '03_KPI_Engine' | '02_Raw_Input' | '01_Config_Rules';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  lastSavedText: string;
  onExportBackup: () => void;
  onOpenImportBackup: () => void;
  onOpenBulkCsv: () => void;
  onResetData: () => void;
  recordCount: number;
  anomalyCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  lastSavedText,
  onExportBackup,
  onOpenImportBackup,
  onOpenBulkCsv,
  onResetData,
  recordCount,
  anomalyCount,
}) => {
  const tabs: { id: ActiveTab; label: string; icon: React.ReactNode; badge?: number }[] = [
    {
      id: '05_Exec_Dashboard',
      label: '05 Exec Dashboard',
      icon: <LayoutDashboard className="w-4 h-4 mr-1.5" />,
    },
    {
      id: '04_Decision_Engine',
      label: '04 Decision Engine',
      icon: <GitBranch className="w-4 h-4 mr-1.5" />,
      badge: anomalyCount > 0 ? anomalyCount : undefined,
    },
    {
      id: '03_KPI_Engine',
      label: '03 KPI Engine',
      icon: <BarChart3 className="w-4 h-4 mr-1.5" />,
    },
    {
      id: '02_Raw_Input',
      label: '02 Raw Input',
      icon: <Database className="w-4 h-4 mr-1.5" />,
      badge: recordCount,
    },
    {
      id: '01_Config_Rules',
      label: '01 Config Rules',
      icon: <Sliders className="w-4 h-4 mr-1.5" />,
    },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[var(--nav-bg)] border-b border-[var(--nav-border)] h-[56px] px-6 flex items-center justify-between shadow-xs">
      {/* Brand identity */}
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)] flex items-center justify-center text-white font-bold text-sm shadow-xs">
          iG
        </div>
        <div className="flex flex-col">
          <span className="font-heading text-[15px] font-bold text-[var(--color-primary)] tracking-tight leading-tight">
            iGaming Vendor Performance & Decision Analyzer
          </span>
          <span className="text-[10px] uppercase font-semibold text-[var(--color-muted)] tracking-wider leading-none">
            Master Cohort &amp; Gating System
          </span>
        </div>
      </div>

      {/* Sheet Tabs */}
      <nav className="flex items-center h-full space-x-1">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative h-[56px] px-3.5 flex items-center text-[12.5px] font-medium transition-all ${
                isActive
                  ? 'text-[var(--color-primary)] font-semibold'
                  : 'text-[var(--nav-text-inactive)] hover:text-[var(--color-primary)]'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
              {tab.badge !== undefined && (
                <span
                  className={`ml-1.5 text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
                    tab.id === '04_Decision_Engine' && anomalyCount > 0
                      ? 'bg-red-100 text-red-800'
                      : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {tab.badge}
                </span>
              )}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[var(--color-accent)] rounded-t" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Action utilities & Last Saved */}
      <div className="flex items-center space-x-2">
        {/* Last Saved Indicator */}
        <div className="hidden lg:flex items-center text-[11px] text-[var(--color-muted)] mr-2 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-1.5" />
          <span>Last saved: <strong className="text-slate-800 font-medium">{lastSavedText}</strong></span>
        </div>

        {/* Bulk CSV button */}
        <button
          onClick={onOpenBulkCsv}
          className="inline-flex items-center px-2.5 py-1.5 rounded-md text-[11.5px] font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-all active:scale-95 shadow-2xs"
          title="Import raw vendor data from CSV file or text"
        >
          <FileSpreadsheet className="w-3.5 h-3.5 mr-1 text-[var(--color-accent)]" />
          <span>Bulk CSV</span>
        </button>

        {/* Export Backup button */}
        <button
          onClick={onExportBackup}
          className="inline-flex items-center px-2.5 py-1.5 rounded-md text-[11.5px] font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-all active:scale-95 shadow-2xs"
          title="Export complete database backup as JSON"
        >
          <Download className="w-3.5 h-3.5 mr-1 text-slate-600" />
          <span>Export</span>
        </button>

        {/* Import Backup button */}
        <button
          onClick={onOpenImportBackup}
          className="inline-flex items-center px-2.5 py-1.5 rounded-md text-[11.5px] font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-all active:scale-95 shadow-2xs"
          title="Restore database backup from JSON file"
        >
          <Upload className="w-3.5 h-3.5 mr-1 text-slate-600" />
          <span>Import</span>
        </button>

        {/* Reset Data button */}
        <button
          onClick={onResetData}
          className="inline-flex items-center px-2.5 py-1.5 rounded-md text-[11.5px] font-medium text-slate-600 hover:text-red-700 hover:bg-red-50 border border-slate-200 transition-all active:scale-95 shadow-2xs"
          title="Reset all tables to standard initial benchmark dataset"
        >
          <RotateCcw className="w-3.5 h-3.5 mr-1 text-slate-400" />
          <span>Reset</span>
        </button>
      </div>
    </header>
  );
};
