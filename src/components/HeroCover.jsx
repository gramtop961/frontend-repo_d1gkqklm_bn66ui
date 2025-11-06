import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroCover = () => {
  return (
    <section className="relative w-full overflow-hidden rounded-3xl bg-[#0a0f1a] text-white">
      <div className="relative h-[320px] sm:h-[420px] md:h-[520px]">
        <Spline
          scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Gradient overlays to improve contrast; they don't block interactions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0a0f1acc] via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0f1a]" />
      </div>

      <div className="absolute inset-0 flex items-end">
        <div className="w-full p-6 sm:p-8">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              AroVia • Health & Wellness
            </span>
            <h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
              Understand your food. Elevate your health.
            </h1>
            <p className="mt-3 text-sm text-white/80 sm:text-base">
              Scan any product to reveal ingredients, nutrients, benefits, and safe consumption tips — in simple language.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCover;
