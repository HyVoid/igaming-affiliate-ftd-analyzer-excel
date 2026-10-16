import React, { useState } from 'react';
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
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  ShieldCheck,
} from 'lucide-react';

export type ActiveTab =
  | '05_Exec_Dashboard'
  | '04_Decision_Engine'
  | '03_KPI_Engine'
  | '02_Raw_Input'
  | '01_Config_Rules';

interface SidebarProps {
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

export const Sidebar: React.FC<SidebarProps> = ({
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
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems: {
    id: ActiveTab;
    num: string;
    label: string;
    sublabel: string;
    icon: React.ReactNode;
    badge?: number;
    badgeVariant?: 'red' | 'neutral';
  }[] = [
    {
      id: '05_Exec_Dashboard',
      num: '05',
      label: 'Exec Dashboard',
      sublabel: 'Cockpit & Backtesting',
      icon: <LayoutDashboard className="w-4 h-4 shrink-0" />,
    },
    {
      id: '04_Decision_Engine',
      num: '04',
      label: 'Decision Engine',
      sublabel: '3-Tier Gating Pipeline',
      icon: <GitBranch className="w-4 h-4 shrink-0" />,
      badge: anomalyCount > 0 ? anomalyCount : undefined,
      badgeVariant: 'red',
    },
    {
      id: '03_KPI_Engine',
      num: '03',
      label: 'KPI Engine',
      sublabel: 'Cohort & CP Score',
      icon: <BarChart3 className="w-4 h-4 shrink-0" />,
    },
    {
      id: '02_Raw_Input',
      num: '02',
      label: 'Raw Input',
      sublabel: '21-Col Integrity Probes',
      icon: <Database className="w-4 h-4 shrink-0" />,
      badge: recordCount,
      badgeVariant: 'neutral',
    },
    {
      id: '01_Config_Rules',
      num: '01',
      label: 'Config Rules',
      sublabel: 'Benchmarks & Multipliers',
      icon: <Sliders className="w-4 h-4 shrink-0" />,
    },
  ];

  const handleTabClick = (id: ActiveTab) => {
    setActiveTab(id);
    setIsMobileOpen(false);
  };

  const currentTabObj = navItems.find((n) => n.id === activeTab);

  return (
    <>
      {/* Mobile Top Header (< md viewports) */}
      <div className="md:hidden sticky top-0 z-40 bg-white border-b border-[var(--nav-border)] h-[56px] px-4 flex items-center justify-between shadow-xs">
        <div className="flex items-center space-x-2.5">
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="p-1.5 rounded-lg text-slate-600 hover:bg-slate-100 active:scale-95 transition-all"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <div className="w-7 h-7 rounded-md bg-[var(--color-primary)] flex items-center justify-center text-white font-bold text-xs">
            iG
          </div>
          <span className="font-heading text-[15px] font-bold text-[var(--color-primary)] tracking-tight">
            {currentTabObj?.num} {currentTabObj?.label}
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={onOpenBulkCsv}
            className="px-2 py-1 text-[11px] font-medium rounded border border-slate-200 text-slate-700 bg-slate-50"
          >
            CSV
          </button>
          <button
            onClick={onExportBackup}
            className="px-2 py-1 text-[11px] font-medium rounded border border-slate-200 text-slate-700 bg-slate-50"
          >
            Export
          </button>
        </div>
      </div>

      {/* Backdrop for Mobile Drawer */}
      {isMobileOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-xs"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 md:sticky md:top-0 h-screen bg-white border-r border-[var(--color-border)] shadow-sm flex flex-col justify-between transition-all duration-200 ease-in-out ${
          isCollapsed ? 'md:w-[72px]' : 'md:w-[260px]'
        } ${
          isMobileOpen
            ? 'translate-x-0 w-[280px]'
            : '-translate-x-full md:translate-x-0'
        }`}
      >
        {/* Top: Brand & Workspace info */}
        <div>
          {/* Header */}
          <div className="h-[64px] px-4 flex items-center justify-between border-b border-slate-100">
            <div className="flex items-center space-x-3 overflow-hidden">
              <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)] shrink-0 flex items-center justify-center text-white font-bold text-sm shadow-xs">
                iG
              </div>
              {!isCollapsed && (
                <div className="flex flex-col min-w-0">
                  <span className="font-heading text-[14px] font-bold text-[var(--color-primary)] tracking-tight truncate leading-tight">
                    iGaming Analyzer
                  </span>
                  <span className="text-[10px] uppercase font-semibold text-[var(--color-muted)] tracking-wider truncate leading-none mt-0.5">
                    Vendor Decision Hub
                  </span>
                </div>
              )}
            </div>

            {/* Collapse toggle (Desktop only) */}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="hidden md:flex p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              {isCollapsed ? (
                <ChevronRight className="w-4 h-4" />
              ) : (
                <ChevronLeft className="w-4 h-4" />
              )}
            </button>

            {/* Close button (Mobile only) */}
            <button
              onClick={() => setIsMobileOpen(false)}
              className="md:hidden p-1 rounded-md text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Auto-saved badge */}
          {!isCollapsed ? (
            <div className="mx-3 mt-3 px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-[11px] text-slate-600 flex items-center space-x-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <div className="truncate">
                <span className="text-slate-400">Saved: </span>
                <span className="font-medium text-slate-800">{lastSavedText}</span>
              </div>
            </div>
          ) : (
            <div className="flex justify-center mt-3" title={`Last saved: ${lastSavedText}`}>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
          )}

          {/* Navigation Section */}
          <div className="mt-4 px-2">
            {!isCollapsed && (
              <div className="px-2 mb-1.5 text-[10px] uppercase font-semibold text-[var(--color-muted)] tracking-table-head">
                Workbook Sheets
              </div>
            )}

            <nav className="space-y-1">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleTabClick(item.id)}
                    className={`w-full flex items-center rounded-lg transition-all text-left ${
                      isCollapsed ? 'justify-center p-2.5' : 'px-3 py-2.5'
                    } ${
                      isActive
                        ? 'bg-blue-50/70 text-[var(--color-accent)] font-semibold border-l-3 border-[var(--color-accent)] shadow-2xs'
                        : 'text-slate-700 hover:bg-slate-100/70 hover:text-slate-900'
                    }`}
                    title={isCollapsed ? `${item.num} ${item.label}` : undefined}
                  >
                    <div
                      className={`${
                        isActive ? 'text-[var(--color-accent)]' : 'text-slate-500'
                      }`}
                    >
                      {item.icon}
                    </div>

                    {!isCollapsed && (
                      <div className="ml-2.5 flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-[12.5px] truncate">
                            {item.label}
                          </span>
                          {item.badge !== undefined && (
                            <span
                              className={`ml-1 text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                                item.badgeVariant === 'red'
                                  ? 'bg-red-100 text-red-800'
                                  : 'bg-slate-200 text-slate-700'
                              }`}
                            >
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <div className="text-[10px] text-slate-400 truncate font-normal leading-tight">
                          {item.sublabel}
                        </div>
                      </div>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Bottom Section: Action Utilities & LocalStorage Notice */}
        <div className="p-3 border-t border-slate-100 bg-white space-y-2">
          {!isCollapsed && (
            <div className="px-1 text-[10px] uppercase font-semibold text-[var(--color-muted)] tracking-table-head mb-1">
              Data Management
            </div>
          )}

          <div className="space-y-1">
            {/* Bulk CSV button */}
            <button
              onClick={() => {
                onOpenBulkCsv();
                setIsMobileOpen(false);
              }}
              className={`w-full flex items-center rounded-md text-[12px] font-medium text-slate-700 hover:bg-slate-100 transition-colors ${
                isCollapsed ? 'justify-center p-2' : 'px-2.5 py-1.5'
              }`}
              title="Bulk CSV Import"
            >
              <FileSpreadsheet className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
              {!isCollapsed && <span className="ml-2">Bulk CSV Import</span>}
            </button>

            {/* Export Backup button */}
            <button
              onClick={() => {
                onExportBackup();
                setIsMobileOpen(false);
              }}
              className={`w-full flex items-center rounded-md text-[12px] font-medium text-slate-700 hover:bg-slate-100 transition-colors ${
                isCollapsed ? 'justify-center p-2' : 'px-2.5 py-1.5'
              }`}
              title="Export Backup (JSON)"
            >
              <Download className="w-4 h-4 text-slate-600 shrink-0" />
              {!isCollapsed && <span className="ml-2">Export Backup</span>}
            </button>

            {/* Import Backup button */}
            <button
              onClick={() => {
                onOpenImportBackup();
                setIsMobileOpen(false);
              }}
              className={`w-full flex items-center rounded-md text-[12px] font-medium text-slate-700 hover:bg-slate-100 transition-colors ${
                isCollapsed ? 'justify-center p-2' : 'px-2.5 py-1.5'
              }`}
              title="Import Backup (JSON)"
            >
              <Upload className="w-4 h-4 text-slate-600 shrink-0" />
              {!isCollapsed && <span className="ml-2">Import Backup</span>}
            </button>

            {/* Reset Data button */}
            <button
              onClick={() => {
                onResetData();
                setIsMobileOpen(false);
              }}
              className={`w-full flex items-center rounded-md text-[12px] font-medium text-slate-500 hover:text-red-700 hover:bg-red-50 transition-colors ${
                isCollapsed ? 'justify-center p-2' : 'px-2.5 py-1.5'
              }`}
              title="Reset Data to Benchmark Baseline"
            >
              <RotateCcw className="w-4 h-4 shrink-0 text-slate-400" />
              {!isCollapsed && <span className="ml-2">Reset Data</span>}
            </button>
          </div>

          {/* Privacy Security Note */}
          {!isCollapsed && (
            <div className="pt-2 border-t border-slate-100 text-[10px] text-slate-400 flex items-start space-x-1.5 leading-tight">
              <ShieldCheck className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
              <span>
                100% Client-Side. No user data leaves your browser.
              </span>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};
