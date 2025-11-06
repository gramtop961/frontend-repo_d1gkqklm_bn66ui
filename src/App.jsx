import React, { useEffect, useState } from 'react';
import HeroCover from './components/HeroCover';
import HeaderBar from './components/HeaderBar';
import BottomNav from './components/BottomNav';
import { SectionHeader, VideoCarousel, BlogGrid, ScanCTA } from './components/SectionCards';

function App() {
  const [tab, setTab] = useState('home');
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [dark]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      <HeaderBar darkMode={dark} onToggleTheme={() => setDark((d) => !d)} />

      <main className="mx-auto max-w-5xl px-4 pb-24">
        {tab === 'home' && (
          <>
            <HeroCover />

            <div className="mt-8 space-y-8">
              <section>
                <ScanCTA onScan={() => setTab('scan')} />
              </section>

              <section>
                <SectionHeader title="Health Videos" actionLabel="See all" onAction={() => setTab('videos')} />
                <VideoCarousel />
              </section>

              <section>
                <SectionHeader title="Latest Blogs" actionLabel="See all" onAction={() => setTab('blogs')} />
                <BlogGrid />
              </section>
            </div>
          </>
        )}

        {tab === 'scan' && (
          <section className="mt-2">
            <HeroCover />
            <div className="mx-auto mt-6 max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-xl font-semibold">Food Scan</h2>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Upload an image or scan a barcode to analyze ingredients and nutrients.</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <button className="rounded-xl border border-dashed border-emerald-300 bg-emerald-50 px-4 py-10 text-emerald-700 hover:bg-emerald-100 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300">Upload Photo</button>
                <button className="rounded-xl border border-dashed border-teal-300 bg-teal-50 px-4 py-10 text-teal-700 hover:bg-teal-100 dark:border-teal-800 dark:bg-teal-950/40 dark:text-teal-300">Scan Barcode</button>
              </div>
              <div className="mt-6 rounded-xl bg-slate-50 p-4 text-sm text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                AI-powered analysis will show: name, ingredients, major nutrients, benefits, cautions, and safe consumption tips.
              </div>
            </div>
          </section>
        )}

        {tab === 'videos' && (
          <section className="mt-2">
            <SectionHeader title="Wellness Videos" />
            <VideoCarousel />
          </section>
        )}

        {tab === 'blogs' && (
          <section className="mt-2">
            <SectionHeader title="Health & Nutrition Blogs" />
            <BlogGrid />
          </section>
        )}

        {tab === 'profile' && (
          <section className="mt-2">
            <div className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-xl font-semibold">Your Profile</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm text-slate-600 dark:text-slate-300">Name</label>
                  <input className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-400 dark:border-slate-700 dark:bg-slate-950" />
                </div>
                <div>
                  <label className="text-sm text-slate-600 dark:text-slate-300">Age</label>
                  <input type="number" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-400 dark:border-slate-700 dark:bg-slate-950" />
                </div>
                <div>
                  <label className="text-sm text-slate-600 dark:text-slate-300">Height (cm)</label>
                  <input type="number" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-400 dark:border-slate-700 dark:bg-slate-950" />
                </div>
                <div>
                  <label className="text-sm text-slate-600 dark:text-slate-300">Weight (kg)</label>
                  <input type="number" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-400 dark:border-slate-700 dark:bg-slate-950" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm text-slate-600 dark:text-slate-300">Gender</label>
                  <select className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-400 dark:border-slate-700 dark:bg-slate-950">
                    <option>Prefer not to say</option>
                    <option>Female</option>
                    <option>Male</option>
                    <option>Non-binary</option>
                  </select>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <button className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">Logout</button>
                <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-700">Save</button>
              </div>
            </div>
          </section>
        )}
      </main>

      <BottomNav current={tab} onChange={(k) => setTab(k)} />
    </div>
  );
}

export default App;
