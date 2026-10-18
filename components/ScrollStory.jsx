"use client";
import { useEffect, useRef, useState } from "react";
const N = 96;
const beats = [
  [0, .16, "ek saath · एक साथ", "Every great cup begins raw."],
  [.16, .38, "01 — Roast", "Fire, patience, and the first crack."],
  [.38, .6, "02 — Break", "Pulled apart to its finest."],
  [.6, .76, "03 — Become", "Where grounds turn to gold."],
  [.76, 1.01, "04 — Pour", "Poured for you. Come sit, ek saath."],
];
export default function ScrollStory() {
  const wrap = useRef(), cv = useRef(), imgs = useRef([]);
  const [p, setP] = useState(0), [ready, setReady] = useState(0);
  useEffect(() => {
    const c = cv.current, x = c.getContext("2d");
    let cur = 0, s = 0, raf;
    const draw = (i) => {
      const im = imgs.current[i];
      if (!im || !im.complete || !im.naturalWidth) return;
      const k = Math.max(c.width / im.width, c.height / im.height);
      x.drawImage(im, (c.width - im.width * k) / 2, (c.height - im.height * k) / 2, im.width * k, im.height * k);
    };
    const size = () => {
      const d = Math.min(devicePixelRatio || 1, 2);
      c.width = innerWidth * d; c.height = innerHeight * d; draw(cur);
    };
    size(); addEventListener("resize", size);
    for (let i = 0; i < N; i++) {
      const im = new Image();
      im.src = `/frames/f${String(i + 1).padStart(3, "0")}.webp`;
      im.onload = () => { setReady((r) => r + 1); if (i === cur) draw(i); };
      imgs.current[i] = im;
    }
    const tick = () => {
      const r = wrap.current.getBoundingClientRect();
      const t = Math.min(1, Math.max(0, -r.top / (r.height - innerHeight)));
      s += (t - s) * 0.12; // eased scrubbing
      const i = Math.round(s * (N - 1));
      if (i !== cur) { cur = i; draw(i); }
      setP((v) => (Math.abs(v - s) > 0.002 ? s : v));
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => { cancelAnimationFrame(raf); removeEventListener("resize", size); };
  }, []);
  return (
    <section ref={wrap} id="top" className="relative" style={{ height: "600vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden bg-ink">
        <canvas ref={cv} className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,#080c0c_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/90 to-transparent" />
        {beats.map(([a, b, k, t]) => {
          const o = Math.max(0, Math.min(1, (p - a) / 0.04, (b - p) / 0.04));
          return (
            <div key={k} className="absolute bottom-[10vh] left-6 max-w-2xl md:left-16"
              style={{ opacity: o, transform: `translateY(${(1 - o) * 24}px)` }}>
              <p className="mb-3 text-xs uppercase tracking-[0.35em] text-amber">{k}</p>
              <h1 className="font-display text-4xl font-light leading-[1.05] md:text-7xl">{t}</h1>
            </div>
          );
        })}
        <div className="absolute right-6 top-1/2 h-24 w-px -translate-y-1/2 bg-cream/15 md:right-10">
          <div className="w-px bg-amber" style={{ height: `${p * 100}%` }} />
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-cream/50"
          style={{ opacity: p < 0.03 ? 1 : 0 }}>Scroll</div>
        {ready < N && (
          <div className="absolute inset-0 z-10 grid place-items-center bg-ink">
            <p className="font-display italic text-cream/70">Brewing… {Math.round((ready / N) * 100)}%</p>
          </div>
        )}
      </div>
    </section>
  );
}
