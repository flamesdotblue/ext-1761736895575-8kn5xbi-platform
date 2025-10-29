import React from 'react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/50 bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="group inline-flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-gradient-to-br from-fuchsia-500 via-cyan-400 to-emerald-400 text-black font-bold">AR</span>
          <span className="text-sm tracking-widest uppercase text-white/80 group-hover:text-white transition">Graphic Designer</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#work" className="text-white/70 hover:text-white transition">Work</a>
          <a href="#contact" className="text-white/70 hover:text-white transition">Contact</a>
          <a href="#home" className="px-3 py-1.5 rounded-md bg-white text-black hover:bg-white/90 transition">Hire Me</a>
        </nav>
      </div>
    </header>
  );
}
