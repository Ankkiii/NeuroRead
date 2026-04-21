import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowRight, Sparkles, Brain, Volume2, Layout } from "lucide-react";
import heroImg from "@/assets/hero-reading.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NeuroRead — Where news meets inclusivity" },
      {
        name: "description",
        content:
          "NeuroRead simplifies the news for ADHD, dyslexia, and autistic readers using AI — adjustable reading levels, distraction-free layouts, and audio.",
      },
      { property: "og:title", content: "NeuroRead — Where news meets inclusivity" },
      {
        property: "og:description",
        content: "Inclusive, simplified news for every mind.",
      },
    ],
  }),
  component: HomePage,
});

const features = [
  { icon: Brain, title: "AI Simplification", text: "Articles rewritten to your reading level in real time." },
  { icon: Layout, title: "Distraction-free", text: "No ads, no pop-ups. Just calm, focused reading." },
  { icon: Volume2, title: "Listen, don't read", text: "Crisp text-to-speech for auditory learners." },
  { icon: Sparkles, title: "Personalized feed", text: "News tailored to topics that interest you." },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 blob bg-accent/40" />
        <div className="pointer-events-none absolute -right-24 top-40 h-80 w-80 blob bg-secondary/30" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-sun px-4 py-1.5 text-sm font-medium">
              <Sparkles size={16} /> For every kind of mind
            </span>
            <h1 className="mt-6 font-display text-5xl font-black leading-[1.05] sm:text-6xl lg:text-7xl">
              News that{" "}
              <span className="relative inline-block">
                <span className="relative z-10">fits how you read.</span>
                <span className="absolute bottom-2 left-0 z-0 h-4 w-full bg-coral/40" />
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink/75">
              NeuroRead simplifies real-world news for ADHD, dyslexic, and autistic readers
              — with adjustable reading levels, calm layouts, and clear audio.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Try NeuroRead <ArrowRight size={18} />
              </Link>
              <Link to="/how-it-works" className="btn-ghost">
                See how it works
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-ink/70">
              <Stat value="1.3B" label="neurodiverse readers" />
              <Stat value="700M" label="people with dyslexia" />
              <Stat value="100%" label="distraction-free" />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 blob bg-coral/20" />
            <img
              src={heroImg}
              alt="A diverse group of children and adults happily reading together"
              width={1536}
              height={1152}
              className="relative rounded-[2.5rem] border-2 border-ink shadow-[10px_10px_0_0_var(--ink)]"
            />
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-ink py-20 text-cream">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <span className="text-sm uppercase tracking-widest text-coral">The Problem</span>
          <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
            Try reading this. Quickly.
          </h2>
          <blockquote className="mx-auto mt-8 max-w-3xl rounded-3xl border-2 border-cream/20 bg-cream/5 p-8 text-left text-lg italic">
            "Despite unprecedented geopolitical oscillations, the juxtaposition of economic
            paradigms catalyzed a precipitous depreciation in nascent markets."
          </blockquote>
          <p className="mt-8 text-lg text-cream/80">
            Now imagine reading that with ADHD, dyslexia, or sensory overwhelm.
            <br />
            <span className="text-coral">That's a daily reality for 1 in 7 people.</span>
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="text-center">
          <span className="text-sm uppercase tracking-widest text-coral">What we do</span>
          <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
            One read. Your way.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="card-soft p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-ink bg-accent">
                <f.icon size={22} />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold">{f.title}</h3>
              <p className="mt-2 text-ink/70">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-20">
        <div className="overflow-hidden rounded-[2.5rem] border-2 border-ink bg-coral p-10 text-primary-foreground shadow-[10px_10px_0_0_var(--ink)] sm:p-16">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="font-display text-4xl font-black sm:text-5xl">
                Make news accessible for everyone you love.
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/90">
                Partner with us to bring NeuroRead to schools, workplaces, and families.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-medium text-cream transition-transform hover:-translate-y-0.5"
              >
                Join the mission <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl font-bold text-ink">{value}</div>
      <div className="text-xs uppercase tracking-wider">{label}</div>
    </div>
  );
}
