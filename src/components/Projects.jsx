import React from 'react';

const projects = [
  {
    title: 'Neon Grid Festival',
    desc: 'Campaign identity, poster series, motion assets',
    tags: ['Identity', 'Poster', 'Motion'],
    image:
      'https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Mono Studio',
    desc: 'Minimalist mark system and stationery kit',
    tags: ['Brand', 'Print'],
    image:
      'https://images.unsplash.com/photo-1553268881-f6081c979da2?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNb25vJTIwU3R1ZGlvfGVufDB8MHx8fDE3NjE3MzY5Njd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Aurora Cosmetics',
    desc: 'Packaging illustration and color direction',
    tags: ['Packaging', 'Illustration'],
    image:
      'https://images.unsplash.com/photo-1561450863-83d1391238bb?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBdXJvcmElMjBDb3NtZXRpY3N8ZW58MHwwfHx8MTc2MTczNjk2N3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Arcade Type Specimen',
    desc: 'Experimental editorial design and print layout',
    tags: ['Editorial', 'Typography'],
    image:
      'https://images.unsplash.com/photo-1721372261034-525a25737f5f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBcmNhZGUlMjBUeXBlJTIwU3BlY2ltZW58ZW58MHwwfHx8MTc2MTczNjk2N3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Horizon Conference',
    desc: 'Event branding and wayfinding system',
    tags: ['Wayfinding', 'Brand'],
    image:
      'https://images.unsplash.com/photo-1731087357396-0fbd4fd3ab23?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIb3Jpem9uJTIwQ29uZmVyZW5jZXxlbnwwfDB8fHwxNzYxNzM2OTY2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Pulse Music Issue',
    desc: 'Magazine art direction and cover series',
    tags: ['Editorial', 'Art Direction'],
    image:
      'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Projects() {
  return (
    <section id="work" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_400px_at_50%_-10%,rgba(56,189,248,0.08),transparent)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">Selected Work</h2>
            <p className="mt-2 text-white/70 max-w-2xl">
              A snapshot of identities, editorial layouts, and campaigns designed for tech-forward brands and cultural events.
            </p>
          </div>
          <a href="#contact" className="hidden sm:inline-block text-sm text-white/70 hover:text-white underline underline-offset-4">
            Start a project
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading={i < 3 ? 'eager' : 'lazy'}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium">{p.title}</h3>
                <p className="mt-1 text-sm text-white/70">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
