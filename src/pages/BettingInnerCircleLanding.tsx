export default function BettingInnerCircleLanding() {
  // ————————————————
  // Quick config (edit these tokens to match your brand)
  // ————————————————
  const brand = {
    name: "Betting Inner Circle",
    domain: "bettinginnercircle.com",
    palette: {
      bg: "#0B0F14",
      surface: "#11161C",
      card: "#0E1319",
      ink: "#F5F7FA",
      inkDim: "#A8B0BA",
      gold: "#E3B341",
      electric: "#38BDF8",
      success: "#22C55E",
      warn: "#F59E0B",
      border: "#1F2732",
    },
    hero: {
      title: "Unlock Elite Betting Opportunities",
      subtitle:
        "Multiple ways to win—member picks, curated pools, and live alerts designed for disciplined, long‑term growth.",
      cta: "Enter the Inner Circle",
      disclaimer: "Past performance is not indicative of future results.",
    },
    value: [
      {
        title: "Done‑For‑You Picks",
        body: "Daily selections with rationale and bankroll notes.",
        icon: "chip",
      },
      {
        title: "Curated Pools",
        body: "Structured plays with predefined rules and transparent tracking.",
        icon: "shield",
      },
      {
        title: "High‑Upside Plays",
        body: "Select parlays with clear unit sizing and risk labels.",
        icon: "bolt",
      },
    ],
    kpis: [
      { label: "90‑day win rate", value: "58%", tone: "success" as const },
      { label: "Avg. odds", value: "+142" },
      { label: "Sample size", value: "312 picks" },
    ],
    plans: [
      {
        name: "Starter",
        price: "$49",
        cadence: "/mo",
        features: [
          "Daily member picks",
          "Push + email alerts",
          "Bankroll calculator",
        ],
        cta: "Join Starter",
        featured: false,
      },
      {
        name: "Pro",
        price: "$129",
        cadence: "/mo",
        features: [
          "Everything in Starter",
          "Curated Pools access",
          "Historical ledger download",
          "Priority support",
        ],
        cta: "Join Pro",
        featured: true,
      },
      {
        name: "Lifetime",
        price: "$799",
        cadence: " one‑time",
        features: [
          "Lifetime Pro access",
          "Private Q&A sessions",
          "Early access to drops",
        ],
        cta: "Get Lifetime",
        featured: false,
      },
    ],
    faq: [
      {
        q: "Do you guarantee returns?",
        a: "No. We share picks, process, and tools. All betting carries risk. Use responsible bankroll management.",
      },
      {
        q: "What regions are supported?",
        a: "Check your local laws and sportsbook availability. We do not offer legal advice.",
      },
      {
        q: "Can I cancel anytime?",
        a: "Yes—manage your subscription from your account portal.",
      },
      {
        q: "Do you show historical performance?",
        a: "Yes—Pro includes a downloadable ledger and rolling 30/90‑day snapshots.",
      },
    ],
  } as const

  // Utility: classnames
  const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(" ")

  // Inline SVG icon set (simple, no deps)
  const Icon = ({ name, className = "w-5 h-5" }: { name: string; className?: string }) => {
    const stroke = brand.palette.ink
    const common = { fill: "none", stroke, strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const }
    switch (name) {
      case "chip":
        return (
          <svg viewBox="0 0 24 24" className={className} aria-hidden>
            <rect x="7" y="7" width="10" height="10" rx="2" {...common} />
            <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M17 7l2-2M5 19l2-2" {...common} />
          </svg>
        )
      case "shield":
        return (
          <svg viewBox="0 0 24 24" className={className} aria-hidden>
            <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" {...common} />
            <path d="M9 12l2 2 4-4" {...common} />
          </svg>
        )
      case "bolt":
        return (
          <svg viewBox="0 0 24 24" className={className} aria-hidden>
            <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" {...common} />
          </svg>
        )
      case "check":
        return (
          <svg viewBox="0 0 24 24" className={className} aria-hidden>
            <path d="M20 6L9 17l-5-5" {...common} />
          </svg>
        )
      case "spark":
        return (
          <svg viewBox="0 0 24 24" className={className} aria-hidden>
            <path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l4 4M15 15l4 4M5 19l4-4M15 9l4-4" {...common} />
          </svg>
        )
      case "bell":
        return (
          <svg viewBox="0 0 24 24" className={className} aria-hidden>
            <path d="M15 17H9a5 5 0 01-5-5V9a8 8 0 1116 0v3a5 5 0 01-5 5z" {...common} />
            <path d="M9 17a3 3 0 006 0" {...common} />
          </svg>
        )
      default:
        return null
    }
  }

  // Styles
  const s = brand.palette

  return (
    <main className="min-h-screen" style={{ background: `radial-gradient(1200px 800px at 80% -10%, rgba(56,189,248,.08), transparent 70%), radial-gradient(900px 600px at -10% 20%, rgba(227,179,65,.10), transparent 60%), ${s.bg}` }}>
      {/* App Bar */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b" style={{ borderColor: s.border }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 group" aria-label={brand.name}>
            <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-white/5 ring-1 ring-white/10">
              <Icon name="spark" className="w-4 h-4" />
            </span>
            <span className="font-semibold tracking-tight" style={{ color: s.ink }}>{brand.name}</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm" style={{ color: s.inkDim }}>
            <a href="#value" className="hover:opacity-80">How it Works</a>
            <a href="#kpis" className="hover:opacity-80">Performance</a>
            <a href="#pricing" className="hover:opacity-80">Pricing</a>
            <a href="#faq" className="hover:opacity-80">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#login" className="px-3 py-2 rounded-lg text-sm font-medium ring-1 hover:bg-white/5" style={{ color: s.ink, borderColor: s.border }}>Log in</a>
            <a href="#join" className="px-4 py-2 rounded-full text-sm font-semibold shadow transition-transform hover:-translate-y-0.5" style={{ background: s.gold, color: "#0A0A0A" }}>{brand.hero.cta}</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight" style={{ color: s.ink }}>{brand.hero.title}</h1>
            <p className="mt-5 text-lg leading-relaxed" style={{ color: s.inkDim }}>{brand.hero.subtitle}</p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#pricing" className="px-5 py-3 rounded-full font-semibold shadow-lg transition-transform hover:-translate-y-0.5" style={{ background: s.gold, color: "#0A0A0A" }}>{brand.hero.cta}</a>
              <a href="#kpis" className="px-5 py-3 rounded-full font-semibold ring-1" style={{ color: s.ink, borderColor: s.border }}>See performance</a>
            </div>
            <p className="mt-4 text-xs" style={{ color: s.inkDim }}>{brand.hero.disclaimer}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-xs" style={{ color: s.inkDim }}>
              <span className="inline-flex items-center gap-2"><Icon name="bell" /> Mobile push + email alerts</span>
              <span>•</span>
              <span>Transparent tracking</span>
              <span>•</span>
              <span>Bankroll guidance included</span>
            </div>
          </div>
          <div>
            {/* Membership card mock */}
            <div className="relative rounded-2xl p-6 shadow-xl" style={{ background: s.card, border: `1px solid ${s.border}` }}>
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm" style={{ color: s.inkDim }}>Members‑Only Access</div>
                <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold" style={{ background: "rgba(34,197,94,.1)", color: s.success, border: `1px solid rgba(34,197,94,.3)` }}>
                  Live Right Now
                  <span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: s.success }} />
                </span>
              </div>
              <div className="text-2xl font-bold" style={{ color: s.ink }}>MyEliteBets Feed</div>
              <ul className="mt-4 space-y-3">
                {[
                  {
                    league: "NBA",
                    pick: "Celtics -3.5 @ -110",
                    note: "1.5u — matchup edge + rest advantage",
                  },
                  {
                    league: "NFL",
                    pick: "49ers ML @ -135",
                    note: "1u — injury model favors SF",
                  },
                  {
                    league: "UCL",
                    pick: "Over 2.5 @ +105",
                    note: "1u — chance creation trend",
                  },
                ].map((row, i) => (
                  <li key={i} className="grid grid-cols-12 items-center gap-3 rounded-xl p-3" style={{ background: "rgba(255,255,255,.02)", border: `1px solid ${s.border}` }}>
                    <div className="col-span-2 text-xs font-medium uppercase tracking-wide" style={{ color: s.inkDim }}>{row.league}</div>
                    <div className="col-span-6 font-semibold" style={{ color: s.ink }}>{row.pick}</div>
                    <div className="col-span-4 text-sm" style={{ color: s.inkDim }}>{row.note}</div>
                  </li>
                ))}
              </ul>
              <a href="#pricing" className="mt-6 inline-flex items-center justify-center w-full rounded-xl px-4 py-3 font-semibold shadow" style={{ background: s.gold, color: "#0A0A0A" }}>Get Instant Access</a>
              <p className="mt-3 text-[11px]" style={{ color: s.inkDim }}>Screens simulated. For illustration only.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video */}
      <section id="video" className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Heading - always on top */}
          <div className="text-center lg:text-left mb-8">
            <h2 className="text-3xl font-extrabold" style={{ color: s.ink }}>Watch how it works (2 min)</h2>
            <p className="mt-3 text-base leading-relaxed" style={{ color: s.inkDim }}>
              A quick walkthrough of the members‑only picks feed, curated pools, alerts, and bankroll tools so you know exactly what you're getting before you join.
            </p>
          </div>

          {/* Video + Details Grid */}
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              {/* Self-hosted video player */}
              <div className="relative w-full overflow-hidden rounded-2xl ring-1 shadow-xl" style={{ background: "#000", borderColor: s.border }}>
                <video
                  className="w-full h-auto"
                  src="/videos/titodurojaye_1757434013_3717933015835221723_1518464127.mp4"
                  controls
                  playsInline
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ul className="space-y-3 text-sm" style={{ color: s.inkDim }}>
                {[
                  "See the live picks flow and unit sizing",
                  "Understand pool rules and transparent tracking",
                  "Get a preview of alerts and the bankroll calculator",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded bg-white/5 ring-1 ring-white/10"><Icon name="check" className="w-3.5 h-3.5" /></span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#pricing" className="px-5 py-3 rounded-full font-semibold shadow transition-transform hover:-translate-y-0.5" style={{ background: s.gold, color: "#0A0A0A" }}>Get Access</a>
                <a href="#kpis" className="px-5 py-3 rounded-full font-semibold ring-1" style={{ color: s.ink, borderColor: s.border }}>See performance</a>
              </div>
              <p className="mt-3 text-[11px]" style={{ color: s.inkDim }}>Past performance is not indicative of future results. Only wager what you can afford to lose.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section id="value" className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {brand.value.map((v, i) => (
              <div key={i} className="rounded-2xl p-6 h-full" style={{ background: s.surface, border: `1px solid ${s.border}` }}>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg" style={{ background: "rgba(227,179,65,.12)", border: `1px solid rgba(227,179,65,.4)` }}>
                    <Icon name={v.icon} className="w-5 h-5" />
                  </span>
                  <h3 className="text-lg font-semibold" style={{ color: s.ink }}>{v.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: s.inkDim }}>{v.body}</p>
                <p className="mt-4 text-[11px]" style={{ color: s.inkDim }}>Includes unit sizing + risk labels.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KPIs / Performance */}
      <section id="kpis" className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-6 md:p-8 grid sm:grid-cols-3 gap-6" style={{ background: s.card, border: `1px solid ${s.border}` }}>
            {brand.kpis.map((k, i) => (
              <div key={i} className="text-center">
                <div className={cx("text-3xl font-extrabold", (k as any).tone === "success" && "text-green-400")} style={{ color: (k as any).tone ? undefined : s.ink }}>{k.value}</div>
                <div className="mt-1 text-sm" style={{ color: s.inkDim }}>{k.label}</div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs" style={{ color: s.inkDim }}>Snapshot for demonstration. Provide sample size, methodology, and time window. Past performance ≠ future results.</p>
        </div>
      </section>

      {/* Proof strip */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs" style={{ color: s.inkDim }}>
            <span className="inline-flex items-center gap-2"><Icon name="check" /> 10k+ alerts sent</span>
            <span>•</span>
            <span>Transparent ledger</span>
            <span>•</span>
            <span>Mobile push + email</span>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold" style={{ color: s.ink }}>Choose your access</h2>
            <p className="mt-3 text-sm" style={{ color: s.inkDim }}>Membership includes picks feed, alerts, bankroll tools, and community updates.</p>
          </div>
          <div className="mt-10 grid lg:grid-cols-3 gap-6">
            {brand.plans.map((p, i) => (
              <div key={i} className={cx("rounded-2xl p-6 flex flex-col", p.featured ? "ring-2" : "ring-1")} style={{ background: s.surface, borderColor: s.border, boxShadow: p.featured ? `0 0 0 2px ${s.gold}` : undefined }}>
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold" style={{ color: s.ink }}>{p.name}</h3>
                  {p.featured && (
                    <span className="text-[11px] font-semibold rounded-full px-2 py-1" style={{ background: "rgba(227,179,65,.12)", color: s.gold, border: `1px solid rgba(227,179,65,.35)` }}>Most Popular</span>
                  )}
                </div>
                <div className="mt-4 flex items-end gap-1">
                  <div className="text-3xl font-extrabold" style={{ color: s.ink }}>{p.price}</div>
                  <div className="text-sm" style={{ color: s.inkDim }}>{p.cadence}</div>
                </div>
                <ul className="mt-4 space-y-2 text-sm" style={{ color: s.inkDim }}>
                  {p.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2"><Icon name="check" className="w-4 h-4" /> {f}</li>
                  ))}
                </ul>
                <a href="#join" className="mt-6 inline-flex items-center justify-center rounded-xl px-4 py-3 font-semibold shadow hover:-translate-y-0.5 transition-transform" style={{ background: s.gold, color: "#0A0A0A" }}>{p.cta}</a>
                <p className="mt-3 text-[11px]" style={{ color: s.inkDim }}>Cancel anytime from your account portal.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold" style={{ color: s.ink }}>Frequently asked questions</h2>
          <dl className="mt-8 divide-y" style={{ borderColor: s.border, color: s.ink }}>
            {brand.faq.map((f, i) => (
              <div key={i} className="py-5">
                <dt className="font-semibold">{f.q}</dt>
                <dd className="mt-2 text-sm" style={{ color: s.inkDim }}>{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-8 lg:p-10 text-center" style={{ background: s.card, border: `1px solid ${s.border}` }}>
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-extrabold tracking-tight" style={{ color: s.ink }}>Ready to enter the Circle?</h2>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: s.inkDim }}>
                Get instant access to member picks, curated pools, and bankroll tools. Join now and receive your first alerts today.
              </p>
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-4 text-left">
              {[
                { t: "Member Picks Feed", d: "Daily selections with rationale + unit sizing." },
                { t: "Curated Pools", d: "Structured plays with transparent tracking." },
                { t: "Bankroll Tools", d: "Calculator, staking guide, and risk labels." },
              ].map((item, i) => (
                <div key={i} className="rounded-xl p-4" style={{ background: "rgba(255,255,255,.02)", border: `1px solid ${s.border}` }}>
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg" style={{ background: "rgba(227,179,65,.12)", border: `1px solid rgba(227,179,65,.35)` }}>
                      <Icon name="check" className="w-4 h-4" />
                    </span>
                    <div>
                      <div className="font-semibold" style={{ color: s.ink }}>{item.t}</div>
                      <div className="text-sm mt-1" style={{ color: s.inkDim }}>{item.d}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#join" className="px-6 py-3 rounded-full font-semibold shadow hover:-translate-y-0.5 transition-transform" style={{ background: s.gold, color: "#0A0A0A" }}>Join the Inner Circle</a>
              <a href="#pricing" className="px-6 py-3 rounded-full font-semibold ring-1" style={{ color: s.ink, borderColor: s.border }}>See plans</a>
            </div>

            <p className="mt-4 text-[11px]" style={{ color: s.inkDim }}>
              Past performance is not indicative of future results. Only wager what you can afford to lose.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t" style={{ borderColor: s.border }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm" style={{ color: s.inkDim }}>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </div>
          <div className="text-xs" style={{ color: s.inkDim }}>
            Betting involves risk. Only wager what you can afford to lose. Past performance does not guarantee future results. <a href="#terms" className="underline decoration-dotted">Terms</a> · <a href="#privacy" className="underline decoration-dotted">Privacy</a>
          </div>
        </div>
      </footer>
    </main>
  )
}


