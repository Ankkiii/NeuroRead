import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t-2 border-ink bg-ink text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-coral text-2xl font-bold">
              N
            </span>
            <span className="font-display text-2xl font-bold">NeuroRead</span>
          </div>
          <p className="mt-4 max-w-md text-cream/70">
            Where news meets inclusivity. Simplified, personalized news for every mind.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg">Product</h4>
          <ul className="mt-4 space-y-2 text-cream/70">
            <li><Link to="/solution" className="hover:text-coral">Solution</Link></li>
            <li><Link to="/how-it-works" className="hover:text-coral">How it works</Link></li>
            <li><Link to="/pricing" className="hover:text-coral">Pricing</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg">Company</h4>
          <ul className="mt-4 space-y-2 text-cream/70">
            <li><Link to="/audience" className="hover:text-coral">Who it's for</Link></li>
            <li><Link to="/contact" className="hover:text-coral">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10 px-5 py-6 text-center text-sm text-cream/50">
        © {new Date().getFullYear()} NeuroRead. Built for every mind.
      </div>
    </footer>
  );
}
