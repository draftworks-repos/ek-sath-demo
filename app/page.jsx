import ScrollStory from "@/components/ScrollStory";
import Menu from "@/components/Menu";

const MAPS = "https://maps.google.com/?cid=9882613272771081200";
const locs = [
  ["OG · Nehru Nagar West", "Vidya Vihar Colony, Nehru Nagar, Bhilai 490020", "+91 81098 00010", "tel:+918109800010"],
  ["Nehru Nagar East", "Aveer Arcade, Nehru Nagar East, Bhilai", "+91 93291 01717", "tel:+919329101717"], // TODO confirm number
];

export default function Home() {
  return (
    <main>
      <nav className="fixed inset-x-0 top-0 z-40 flex items-center justify-between px-6 py-5 md:px-16">
        <a href="#top" className="font-display text-xl tracking-tight">ek saath</a>
        <div className="flex gap-6 text-sm text-cream/80">
          <a href="#menu">Menu</a><a href="#culture">Culture</a><a href="#visit">Visit</a>
        </div>
      </nav>

      <ScrollStory />
      <Menu />

      <section id="culture" className="bg-cream py-32 text-ink">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-xs uppercase tracking-[0.35em] text-ink/50">एक साथ — together</p>
          {["Coffee.", "Culture.", "Conversation."].map((w, i) => (
            <h2 key={w} className="font-display text-6xl font-light leading-none md:text-9xl"
              style={{ marginLeft: `${i * 6}%` }}>{w}</h2>
          ))}
          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {[["bg-mint", "Multi-roaster, so there’s always something new to taste."],
              ["bg-blush", "Artisanal pizza from the oven, made for sharing."],
              ["bg-ink text-cream", "Open ceilings, warm light, regulars known by name."]].map(([c, t]) => (
              <div key={t} className={`${c} aspect-[4/5] rounded-3xl p-8 text-xl`}>{t}</div>
            ))}
          </div>
          {/* MOCKUP: swap cards for real photography */}
        </div>
      </section>

      <section id="visit" className="mx-auto max-w-5xl px-6 py-32">
        <p className="text-xs uppercase tracking-[0.35em] text-amber">Visit</p>
        <h2 className="mt-3 font-display text-5xl font-light md:text-7xl">Pull up a chair.</h2>
        <p className="mt-4 text-cream/60">Open every day, 11:00 AM – 11:00 PM.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {locs.map(([n, a, ph, tel]) => (
            <div key={n} className="rounded-3xl border border-cream/10 bg-cream/[0.03] p-8">
              <h3 className="font-display text-2xl">{n}</h3>
              <p className="mt-2 text-cream/60">{a}</p>
              <div className="mt-6 flex gap-3 text-sm">
                <a href={tel} className="rounded-full bg-amber px-5 py-2 text-ink">{ph}</a>
                <a href={MAPS} target="_blank" className="rounded-full border border-cream/25 px-5 py-2">Directions</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-cream/10 px-6 py-10 text-center text-sm text-cream/50">
        <a href="https://instagram.com/eksaathindia" target="_blank">@eksaathindia</a> · Specialty Coffee &amp; Pizzeria, Bhilai
      </footer>
    </main>
  );
}
