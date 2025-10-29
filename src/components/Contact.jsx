import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const message = form.get('message');

    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    const mailto = `mailto:hello@alexrivera.design?subject=${subject}&body=${body}`;

    setStatus('Opening email client...');
    window.location.href = mailto;
    setTimeout(() => setStatus(''), 3000);
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_300px_at_20%_0%,rgba(244,63,94,0.08),transparent)]" />
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
            <Mail className="h-3.5 w-3.5" />
            Let’s collaborate
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl font-semibold">Tell me about your project</h2>
          <p className="mt-3 text-white/70 max-w-xl">
            I work with startups, cultural institutions, and studios to craft identities, editorial systems, and campaigns. Share a few details and I’ll get back within 24–48 hours.
          </p>
          <ul className="mt-6 space-y-2 text-white/70 text-sm">
            <li>• Brand identity and visual systems</li>
            <li>• Editorial design and type-driven layouts</li>
            <li>• Campaign art direction and key visuals</li>
          </ul>
        </div>
        <form onSubmit={handleSubmit} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm text-white/80">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 outline-none ring-0 focus:border-white/30"
                placeholder="Jane Doe"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm text-white/80">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 outline-none ring-0 focus:border-white/30"
                placeholder="jane@email.com"
              />
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <label htmlFor="message" className="text-sm text-white/80">Project details</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 outline-none ring-0 focus:border-white/30"
              placeholder="Scope, timeline, budget, inspiration..."
            />
          </div>
          <button
            type="submit"
            className="mt-5 inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-black hover:bg-white/90 transition"
          >
            Send inquiry <Send className="h-4 w-4" />
          </button>
          {status && <p className="mt-3 text-sm text-white/70">{status}</p>}
        </form>
      </div>
    </section>
  );
}
