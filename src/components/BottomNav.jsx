import React from 'react';
import { Home, Scan, Video, BookOpen, User } from 'lucide-react';

const tabs = [
  { key: 'home', label: 'Home', icon: Home },
  { key: 'scan', label: 'Scan', icon: Scan },
  { key: 'videos', label: 'Videos', icon: Video },
  { key: 'blogs', label: 'Blogs', icon: BookOpen },
  { key: 'profile', label: 'Profile', icon: User },
];

const BottomNav = ({ current = 'home', onChange }) => {
  return (
    <nav className="fixed inset-x-0 bottom-4 z-40 mx-auto w-full max-w-3xl px-4">
      <div className="mx-auto grid grid-cols-5 items-center rounded-2xl border border-slate-200 bg-white/90 p-2 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-slate-800 dark:bg-slate-900/70">
        {tabs.map((t) => {
          const Icon = t.icon;
          const active = current === t.key;
          return (
            <button
              key={t.key}
              onClick={() => onChange?.(t.key)}
              className={`group relative flex items-center justify-center gap-2 rounded-xl px-2 py-2 text-xs font-medium transition-colors ${
                active
                  ? 'text-emerald-600 dark:text-emerald-400'
                  : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              <span className={`absolute inset-0 -z-[1] rounded-xl transition ${
                active ? 'bg-emerald-50 dark:bg-emerald-900/20' : ''
              }`} />
              <Icon size={20} />
              <span className="hidden sm:inline">{t.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
