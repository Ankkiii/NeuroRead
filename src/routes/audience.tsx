import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { User, Users, GraduationCap, Building2 } from "lucide-react";
import audienceImg from "@/assets/audience-telescope.jpg";

export const Route = createFileRoute("/audience")({
  head: () => ({
    meta: [
      { title: "Who It's For — NeuroRead" },
      { name: "description", content: "Built for neurodiverse adults and children, parents, educators, therapists, and inclusive employers." },
      { property: "og:title", content: "Who It's For — NeuroRead" },
      { property: "og:description", content: "Inclusive news for individuals, families, schools, and workplaces." },
    ],
  }),
  component: AudiencePage,
});

const groups = [
  { icon: User, title: "Neurodiverse adults & kids", text: "Anyone who wants an easier way to stay informed without overwhelm." },
  { icon: Users, title: "Parents & guardians", text: "Help neurodiverse children explore the world with content they can actually digest." },
  { icon: GraduationCap, title: "Teachers & therapists", text: "Bring current events into lessons and therapy with confidence." },
  { icon: Building2, title: "Inclusive employers", text: "Support neurodiverse staff with accessible workplace news resources." },
];

function AudiencePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <span className="text-sm uppercase tracking-widest text-coral">Who it's for</span>
          <h1 className="mt-4 font-display text-5xl font-black sm:text-6xl">
            Made for curious minds — every kind of curious.
          </h1>
          <p className="mt-6 text-lg text-ink/75">
            Whether you're a reader, a parent, an educator, or an employer building an
            inclusive workplace, NeuroRead meets you where you are.
          </p>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 blob bg-sun/50" />
          <img
            src={audienceImg}
            alt="A child looking through a telescope at the stars"
            width={1024}
            height={1024}
            loading="lazy"
            className="relative rounded-[2.5rem] border-2 border-ink shadow-[10px_10px_0_0_var(--ink)]"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          {groups.map((g) => (
            <div key={g.title} className="card-soft p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-ink bg-coral text-primary-foreground">
                <g.icon size={26} />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold">{g.title}</h3>
              <p className="mt-2 text-ink/70">{g.text}</p>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
