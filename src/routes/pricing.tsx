import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Check } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — NeuroRead" },
      { name: "description", content: "Free, Premium, and Organization plans. Choose what fits — start reading today." },
      { property: "og:title", content: "Pricing — NeuroRead" },
      { property: "og:description", content: "Simple plans for individuals, families, and organizations." },
    ],
  }),
  component: PricingPage,
});

const tiers = [
  {
    name: "Free",
    price: "$0",
    desc: "Perfect for trying NeuroRead.",
    features: ["5 simplified articles per day", "Distraction-free reader", "Dyslexia-friendly font", "Basic topics"],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Premium",
    price: "$6",
    period: "/mo",
    desc: "For everyday readers who want it all.",
    features: ["Unlimited simplifications", "Adjustable reading levels", "Text-to-speech audio", "Offline access", "Ad-free experience"],
    cta: "Go Premium",
    featured: true,
  },
  {
    name: "Organizations",
    price: "Let's talk",
    desc: "For schools, therapy centers & employers.",
    features: ["B2B licensing", "Bulk seats & SSO", "Educator dashboards", "Custom topics & sources", "Priority support"],
    cta: "Contact us",
    featured: false,
  },
];

function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="mx-auto max-w-5xl px-5 py-16 text-center lg:py-24">
        <span className="text-sm uppercase tracking-widest text-coral">Pricing</span>
        <h1 className="mt-4 font-display text-5xl font-black sm:text-6xl">
          Simple plans. Real access.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-ink/75">
          Start free. Upgrade when you're ready. Bring your whole school or team.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`card-soft flex flex-col p-8 ${
                t.featured ? "bg-coral text-primary-foreground" : ""
              }`}
            >
              <h3 className={`font-display text-2xl font-bold ${t.featured ? "" : ""}`}>
                {t.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-5xl font-black">{t.price}</span>
                {t.period && <span className="opacity-70">{t.period}</span>}
              </div>
              <p className={`mt-2 ${t.featured ? "text-primary-foreground/85" : "text-ink/70"}`}>
                {t.desc}
              </p>
              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check size={18} className="mt-1 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium ${
                  t.featured
                    ? "bg-ink text-cream"
                    : "border-2 border-ink bg-cream text-ink hover:bg-accent"
                }`}
              >
                {t.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
