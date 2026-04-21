import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — NeuroRead" },
      { name: "description", content: "Five simple steps: pick topics, fetch articles, simplify with AI, extract key points, read or listen distraction-free." },
      { property: "og:title", content: "How It Works — NeuroRead" },
      { property: "og:description", content: "From topics to your perfect read in seconds." },
    ],
  }),
  component: HowItWorksPage,
});

const steps = [
  { n: "01", title: "Pick your topics", text: "Tech, sports, world news, arts — choose what lights you up." },
  { n: "02", title: "We fetch the articles", text: "NeuroRead pulls fresh stories from trusted news sources." },
  { n: "03", title: "AI simplifies it", text: "Articles are rewritten to match your selected reading level." },
  { n: "04", title: "Key points appear", text: "Main ideas surface as clear bullet summaries with visuals." },
  { n: "05", title: "Read or listen", text: "Distraction-free layout, dyslexia-friendly font, or text-to-speech." },
];

function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="mx-auto max-w-5xl px-5 py-16 text-center lg:py-24">
        <span className="text-sm uppercase tracking-widest text-coral">How it works</span>
        <h1 className="mt-4 font-display text-5xl font-black sm:text-6xl">
          From headline to "got it" — in seconds.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-ink/75">
          Five simple steps turn the chaos of the news into something calm, clear, and genuinely yours.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-20">
        <ol className="space-y-6">
          {steps.map((s, i) => (
            <li key={s.n} className="card-soft flex flex-col gap-4 p-7 sm:flex-row sm:items-center sm:gap-8">
              <div
                className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl border-2 border-ink font-display text-3xl font-black"
                style={{ background: i % 2 === 0 ? "var(--coral)" : "var(--teal)", color: i % 2 === 0 ? "var(--primary-foreground)" : "var(--ink)" }}
              >
                {s.n}
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold">{s.title}</h3>
                <p className="mt-1 text-ink/70">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 text-center">
          <Link to="/pricing" className="btn-primary">See pricing</Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
