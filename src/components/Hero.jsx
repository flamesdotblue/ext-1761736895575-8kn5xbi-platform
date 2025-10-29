import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Palette } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
            <Palette className="h-3.5 w-3.5" />
            Visual Identity • Editorial • Brand Systems
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
            Alex Rivera — crafting bold, playful visuals for modern brands
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/75">
            I design identities, campaigns, and print/digital experiences that feel tactile and alive. Scroll to explore selected projects.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-black hover:bg-white/90 transition"
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-5 py-3 text-white hover:bg-white/10 transition"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
