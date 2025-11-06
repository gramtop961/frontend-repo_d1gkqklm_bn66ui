import React from 'react';
import { Search, Bell, Moon, Sun } from 'lucide-react';

const HeaderBar = ({ darkMode, onToggleTheme }) => {
  return (
    <header className="sticky top-0 z-30 mb-4 w-full backdrop-blur">
      <div className="mx-auto max-w-5xl px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-emerald-600 shadow-inner" />
            <div>
              <p className="text-xs font-medium text-emerald-600">AroVia</p>
              <h1 className="-mt-0.5 text-lg font-semibold text-slate-800 dark:text-white">Health & Wellness</h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
              <Search size={18} />
            </button>
            <button className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
              <Bell size={18} />
            </button>
            <button
              onClick={onToggleTheme}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderBar;
