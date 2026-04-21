import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Type, ListChecks, Headphones, Heart, EyeOff, Zap } from "lucide-react";
import solutionImg from "@/assets/solution-tent.jpg";

export const Route = createFileRoute("/solution")({
  head: () => ({
    meta: [
      { title: "Our Solution — NeuroRead" },
      { name: "description", content: "How NeuroRead adapts the news to neurodiverse readers using AI, simplified text, and accessible layouts." },
      { property: "og:title", content: "Our Solution — NeuroRead" },
      { property: "og:description", content: "AI-powered, accessible news for neurodiverse minds." },
    ],
  }),
  component: SolutionPage,
});

const items = [
  { icon: Type, title: "Adjustable reading levels", text: "Pick the level that feels right — from quick summaries to fuller depth." },
  { icon: ListChecks, title: "Bullet-point summaries", text: "Key points up top, so the main idea lands instantly." },
  { icon: EyeOff, title: "Distraction-free layouts", text: "No ads, pop-ups, or chasing links. Just the article." },
  { icon: Heart, title: "Dyslexia-friendly fonts", text: "Lexend by default — proven to improve reading speed." },
  { icon: Headphones, title: "Listen, don't read", text: "Clear text-to-speech with natural pacing." },
  { icon: Zap, title: "Personalized feeds", text: "News matched to topics you actually care about." },
];

function SolutionPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <span className="text-sm uppercase tracking-widest text-coral">Our Solution</span>
          <h1 className="mt-4 font-display text-5xl font-black sm:text-6xl">
            Built around how you actually read.
          </h1>
          <p className="mt-6 text-lg text-ink/75">
            NeuroRead uses AI and natural language processing to rewrite real news in a
            way that works for ADHD, dyslexic, and autistic readers — without losing the
            story.
          </p>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 blob bg-secondary/40" />
          <img
            src={solutionImg}
            alt="A child reading peacefully on a tablet inside a cozy tent"
            width={1024}
            height={1024}
            loading="lazy"
            className="relative rounded-[2.5rem] border-2 border-ink shadow-[10px_10px_0_0_var(--ink)]"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((f) => (
            <div key={f.title} className="card-soft p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-ink bg-sun">
                <f.icon size={22} />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold">{f.title}</h3>
              <p className="mt-2 text-ink/70">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-20">
        <div className="rounded-[2.5rem] border-2 border-ink bg-secondary/30 p-10 sm:p-14">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Before & after, in one tap.
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border-2 border-ink bg-card p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-coral">Original</div>
              <p className="mt-3 text-ink/80">
                "An idiosyncratic concatenation of multifaceted stimuli often precipitates
                cognitive overload in susceptible individuals."
              </p>
            </div>
            <div className="rounded-2xl border-2 border-ink bg-card p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-teal">NeuroRead</div>
              <p className="mt-3 text-lg text-ink">
                Too many things at once can overwhelm some people's brains.
              </p>
            </div>
          </div>
          <Link to="/how-it-works" className="btn-primary mt-8">See how it works</Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
