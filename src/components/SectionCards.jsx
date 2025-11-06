import React from 'react';
import { Play, Scan, ArrowRight } from 'lucide-react';

export const SectionHeader = ({ title, actionLabel, onAction }) => (
  <div className="mb-3 flex items-end justify-between">
    <h2 className="text-lg font-semibold text-slate-800 dark:text-white">{title}</h2>
    {actionLabel && (
      <button
        onClick={onAction}
        className="inline-flex items-center gap-1 text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400"
      >
        {actionLabel}
        <ArrowRight size={16} />
      </button>
    )}
  </div>
);

export const VideoCarousel = () => {
  const items = new Array(6).fill(0).map((_, i) => ({
    id: i,
    title: `Healthy Habit ${i + 1}`,
    thumb: `https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1200&auto=format&fit=crop`
  }));

  return (
    <div className="no-scrollbar flex snap-x gap-4 overflow-x-auto pb-2">
      {items.map((v) => (
        <div key={v.id} className="group relative h-40 w-64 shrink-0 snap-start overflow-hidden rounded-xl bg-slate-200">
          <img src={v.thumb} alt={v.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent" />
          <button className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold shadow backdrop-blur">
            <Play size={14} /> Play
          </button>
        </div>
      ))}
    </div>
  );
};

export const BlogGrid = () => {
  const posts = [
    {
      id: 1,
      title: 'Understanding Nutrition Labels',
      excerpt: 'Decode serving size, calories, macros, and daily values at a glance.',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'Hydration: How Much Water Do You Need?',
      excerpt: 'Learn simple strategies to stay hydrated throughout the day.',
      image: 'https://images.unsplash.com/photo-1612134678926-7592c521aa52?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIeWRyYXRpb24lM0ElMjBIb3clMjBNdWNoJTIwV2F0ZXJ8ZW58MHwwfHx8MTc2MjQxNTExMnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
    },
    {
      id: 3,
      title: 'Balanced Plate Method',
      excerpt: 'An easy visual guide to portioning carbs, protein, and veg.',
      image: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=1200&auto=format&fit=crop'
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {posts.map((p) => (
        <article key={p.id} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
          <img src={p.image} alt={p.title} className="h-40 w-full object-cover" />
          <div className="p-4">
            <h3 className="text-base font-semibold text-slate-800 dark:text-white">{p.title}</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{p.excerpt}</p>
            <button className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400">
              Read more <ArrowRight size={16} />
            </button>
          </div>
        </article>
      ))}
    </div>
  );
};

export const ScanCTA = ({ onScan }) => (
  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50 to-white p-5 dark:from-emerald-900/20 dark:via-teal-900/10 dark:to-slate-900">
    <div className="absolute right-0 top-0 -mr-10 -mt-10 h-40 w-40 rounded-full bg-emerald-200/40 blur-2xl" />
    <div className="relative flex items-center justify-between gap-4">
      <div>
        <h3 className="text-lg font-semibold text-emerald-800 dark:text-emerald-300">Scan your food</h3>
        <p className="mt-1 text-sm text-emerald-900/70 dark:text-emerald-200/70">Barcode or photo — get instant, easy-to-read insights.</p>
      </div>
      <button
        onClick={onScan}
        className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-white shadow hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
      >
        <Scan size={18} /> Start scan
      </button>
    </div>
  </div>
);
