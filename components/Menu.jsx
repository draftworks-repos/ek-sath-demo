"use client";
import { useState } from "react";
import menu from "@/data/menu";
export default function Menu() {
  const tabs = Object.keys(menu);
  const [t, setT] = useState(tabs[0]);
  return (
    <section id="menu" className="mx-auto max-w-5xl px-6 py-32">
      <p className="text-xs uppercase tracking-[0.35em] text-amber">The menu</p>
      <h2 className="mt-3 font-display text-5xl font-light md:text-7xl">Made slowly, <em>shared</em> often.</h2>
      <div className="mt-12 flex flex-wrap gap-2">
        {tabs.map((k) => (
          <button key={k} onClick={() => setT(k)}
            className={`rounded-full border px-5 py-1.5 text-sm transition ${t === k ? "border-amber bg-amber text-ink" : "border-cream/20 text-cream/70 hover:border-cream/50"}`}>
            {k}
          </button>
        ))}
      </div>
      <ul className="mt-10 grid gap-x-16 md:grid-cols-2">
        {menu[t].map(([n, pr]) => (
          <li key={n} className="flex items-baseline gap-3 border-b border-cream/10 py-4">
            <span className="text-lg">{n}</span>
            <span className="flex-1 border-b border-dotted border-cream/20" />
            <span className="font-display text-amber">₹{pr}</span>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-xs text-cream/40">Sample prices. Almond / oat milk available.</p>
    </section>
  );
}
