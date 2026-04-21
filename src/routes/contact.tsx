import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import ctaImg from "@/assets/cta-kids.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — NeuroRead" },
      { name: "description", content: "Partner with NeuroRead to bring inclusive news to schools, workplaces, and families." },
      { property: "og:title", content: "Contact — NeuroRead" },
      { property: "og:description", content: "Let's make news accessible together." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="mx-auto grid max-w-7xl items-start gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <span className="text-sm uppercase tracking-widest text-coral">Get in touch</span>
          <h1 className="mt-4 font-display text-5xl font-black sm:text-6xl">
            Let's build inclusive news together.
          </h1>
          <p className="mt-6 text-lg text-ink/75">
            Whether you're a school, a workplace, a family, or a curious reader — we'd
            love to hear from you.
          </p>
          <div className="mt-8 flex items-center gap-3 rounded-2xl border-2 border-ink bg-card p-5">
            <Mail size={20} />
            <a href="mailto:hello@neuroread.app" className="font-medium hover:text-coral">
              hello@neuroread.app
            </a>
          </div>
          <img
            src={ctaImg}
            alt="Two cheerful children — one playing ukulele, one jumping with joy"
            width={1280}
            height={896}
            loading="lazy"
            className="mt-8 rounded-[2rem] border-2 border-ink"
          />
        </div>

        <div className="card-soft p-8 sm:p-10">
          {submitted ? (
            <div className="py-10 text-center">
              <CheckCircle2 size={48} className="mx-auto text-teal" />
              <h2 className="mt-4 font-display text-3xl font-bold">Thanks!</h2>
              <p className="mt-2 text-ink/70">
                We've got your message and will be in touch soon.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-5"
            >
              <h2 className="font-display text-3xl font-bold">Send us a note</h2>
              <Field label="Your name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <div>
                <label className="mb-2 block text-sm font-medium">I'm reaching out as</label>
                <select className="w-full rounded-2xl border-2 border-ink bg-card px-4 py-3 outline-none focus:ring-4 focus:ring-coral/30">
                  <option>An individual reader</option>
                  <option>A parent or guardian</option>
                  <option>An educator or therapist</option>
                  <option>An employer or organization</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Message</label>
                <textarea
                  rows={4}
                  required
                  className="w-full rounded-2xl border-2 border-ink bg-card px-4 py-3 outline-none focus:ring-4 focus:ring-coral/30"
                  placeholder="Tell us a bit about what you're looking for…"
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Send message <Send size={18} />
              </button>
            </form>
          )}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-2xl border-2 border-ink bg-card px-4 py-3 outline-none focus:ring-4 focus:ring-coral/30"
      />
    </div>
  );
}
