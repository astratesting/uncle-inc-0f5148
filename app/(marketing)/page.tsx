import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      <Nav />
      <Hero />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo to-cyan flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2 L12 12 L20 12" />
              <path d="M12 12 L8 16" />
            </svg>
          </div>
          <span className="text-lg font-bold tracking-tight">Uncle Inc.</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-[var(--muted)]">
          <Link href="#features" className="hover:text-[var(--fg)] transition-colors">Features</Link>
          <Link href="#pricing" className="hover:text-[var(--fg)] transition-colors">Pricing</Link>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/sign-in" className="text-sm text-[var(--muted)] hover:text-[var(--fg)] transition-colors px-3 py-2">Sign in</Link>
          <Link href="/sign-up" className="text-sm bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">Get started</Link>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-indigo/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-[300px] h-[300px] rounded-full bg-cyan/5 blur-[100px] pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-indigo/10 border border-indigo/20 text-indigo-light text-xs font-medium px-4 py-1.5 rounded-full mb-8">
          <span className="w-1.5 h-1.5 bg-cyan rounded-full animate-pulse" />
          Now in public beta
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
          Launch Your MVP<br />
          <span className="gradient-text">in Days, Not Months</span>
        </h1>
        <p className="text-lg sm:text-xl text-[var(--muted)] max-w-2xl mx-auto mb-10 leading-relaxed">
          Uncle Inc. is the AI-assisted development platform that turns your idea into a working product. Generate code, test with real users, and iterate faster than ever before.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/sign-up" className="w-full sm:w-auto bg-gradient-to-r from-indigo to-cyan text-white px-8 py-3.5 rounded-lg font-semibold text-base hover:opacity-90 transition-all glow-ring">Start Building Free</Link>
          <Link href="#features" className="w-full sm:w-auto text-[var(--muted)] hover:text-[var(--fg)] px-8 py-3.5 rounded-lg font-medium border border-[var(--border)] hover:border-indigo/50 transition-all">See how it works →</Link>
        </div>
        <p className="mt-5 text-sm text-[var(--muted)]">No credit card required · Free tier forever</p>
      </div>
    </section>
  );
}

const FEATURES = [
  { icon: "✨", title: "AI-Powered Code Gen", desc: "Describe your product in plain language and watch Uncle Inc. generate production-ready Next.js code with full-stack capabilities." },
  { icon: "👥", title: "Instant User Testing", desc: "Share your prototype with our vetted tester community and get actionable feedback within hours, not weeks." },
  { icon: "📊", title: "Built-in Analytics", desc: "Track user behavior, conversion funnels, and engagement metrics from day one. Data-driven decisions, not guesswork." },
  { icon: "⚡", title: "One-Click Deploy", desc: "Push to production instantly. Your MVP goes live on Vercel with SSL, CDN, and preview deployments automatically configured." },
  { icon: "🏠", title: "Founder Dashboard", desc: "Manage projects, view analytics, and track feedback all from a single, beautifully designed command center." },
  { icon: "🔄", title: "Real Feedback Loop", desc: "Auto-translate user behavior into prioritized sprint tasks. Build what your users actually want, iteration by iteration." },
];

function Features() {
  return (
    <section id="features" className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Everything You Need to <span className="gradient-text">Ship Fast</span></h2>
        <p className="text-[var(--muted)] text-lg max-w-xl mx-auto">From idea to deployed product. Uncle Inc. bundles every tool a founder needs into one cohesive platform.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURES.map((f) => (
          <div key={f.title} className="group p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] hover:border-indigo/40 hover:bg-[#16161f] transition-all duration-300">
            <div className="text-2xl mb-4">{f.icon}</div>
            <h3 className="font-semibold text-[var(--fg)] text-lg mb-2">{f.title}</h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const PLANS = [
  { name: "Starter", price: "Free", period: "forever", desc: "Perfect for solo founders testing an idea.", cta: "Start for free", href: "/sign-up", featured: false, features: ["1 project", "AI code generation", "Basic analytics", "Community testing", "Public deployments"] },
  { name: "Pro", price: "$49", period: "/month", desc: "For founders shipping real products.", cta: "Start Pro trial", href: "/sign-up", featured: true, features: ["Unlimited projects", "Advanced AI code gen", "Full analytics suite", "Private testing panels", "Custom domains", "Priority support"] },
  { name: "Team", price: "$149", period: "/month", desc: "For startups scaling with a team.", cta: "Contact sales", href: "/sign-up", featured: false, features: ["Everything in Pro", "Up to 10 team members", "Team analytics", "SSO / SAML", "Dedicated support", "99.9% SLA"] },
];

function Pricing() {
  return (
    <section id="pricing" className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Simple, Transparent <span className="gradient-text">Pricing</span></h2>
        <p className="text-[var(--muted)] text-lg max-w-xl mx-auto">Start free, upgrade when you need more power. No hidden fees, no surprises.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {PLANS.map((plan) => (
          <div key={plan.name} className={`relative rounded-2xl p-8 flex flex-col ${plan.featured ? "bg-gradient-to-b from-indigo/20 to-[var(--card)] border-2 border-indigo/50 glow-ring" : "bg-[var(--card)] border border-[var(--border)]"}`}>
            {plan.featured && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo to-cyan text-white text-xs font-semibold px-4 py-1 rounded-full">Most Popular</div>}
            <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
            <div className="mb-2"><span className="text-4xl font-bold">{plan.price}</span><span className="text-[var(--muted)] text-sm">{plan.period}</span></div>
            <p className="text-sm text-[var(--muted)] mb-6">{plan.desc}</p>
            <ul className="space-y-3 mb-8 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-[var(--muted)]">
                  <svg className="w-5 h-5 text-teal mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  {f}
                </li>
              ))}
            </ul>
            <Link href={plan.href} className={`block text-center py-3 rounded-lg font-semibold text-sm transition-all ${plan.featured ? "bg-gradient-to-r from-indigo to-cyan text-white hover:opacity-90" : "bg-white/5 text-[var(--fg)] hover:bg-white/10 border border-[var(--border)]"}`}>{plan.cta}</Link>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="relative rounded-3xl bg-gradient-to-br from-indigo/30 via-[var(--card)] to-cyan/10 border border-[var(--border)] p-12 md:p-16 text-center overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to <span className="gradient-text">Ship Your MVP?</span></h2>
          <p className="text-[var(--muted)] text-lg mb-8 max-w-lg mx-auto">Join founders who are launching faster with Uncle Inc. Start building today — no credit card required.</p>
          <Link href="/sign-up" className="inline-block bg-gradient-to-r from-indigo to-cyan text-white px-8 py-3.5 rounded-lg font-semibold text-base hover:opacity-90 transition-all glow-ring">Start Building Free →</Link>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--muted)]">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-gradient-to-br from-indigo to-cyan flex items-center justify-center">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 2 L12 12 L20 12"/></svg>
          </div>
          <span>© {new Date().getFullYear()} Uncle Inc.</span>
        </div>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-[var(--fg)] transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-[var(--fg)] transition-colors">Terms</Link>
          <a href="mailto:hello@uncleinc.dev" className="hover:text-[var(--fg)] transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
