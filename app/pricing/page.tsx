import Link from "next/link";
import { Manrope } from "next/font/google";
import { PublicHeader } from "@/components/public-header";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const pricingPlans = [
  {
    name: "Starter",
    description: "Free for small teams, essential CRM features.",
    price: "$0",
    cadence: "/mo",
    features: ["Up to 3 users", "Basic contact management", "Email tracking"],
    action: "Start for free",
    highlighted: false,
  },
  {
    name: "Professional",
    description: "Advanced reporting, team management, and 2FA.",
    price: "$49",
    cadence: "/mo per user",
    features: ["Everything in Starter", "AI-powered analytics", "Automated workflows", "Enhanced security (2FA)"],
    action: "Get Professional",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "Custom integrations, dedicated support, and full branding.",
    price: "Custom",
    cadence: "",
    features: ["Unlimited users", "Dedicated account manager", "Custom API integrations", "White-label branding"],
    action: "Contact Sales",
    highlighted: false,
  },
];

const comparisonRows = [
  ["CRM Foundation", "check", "check", "check"],
  ["Advanced Reporting", "remove", "check", "check"],
  ["API Access", "Limited", "Standard", "Custom/Unlimited"],
  ["Security (2FA/SSO)", "2FA only", "check", "SSO + Custom"],
  ["Support", "Community", "24/7 Email", "Dedicated Lead"],
];

const faqs = [
  {
    question: "Can I change my plan at any time?",
    answer:
      "Yes, you can upgrade or downgrade your plan directly from your dashboard. If you upgrade, the new rate will be prorated. If you downgrade, your credit will be applied to future billing cycles.",
  },
  {
    question: "Do you offer a free trial for the Professional plan?",
    answer:
      "Absolutely. You can try the Professional plan free for 14 days with no credit card required. After the trial, you can choose to continue or move to the Starter plan.",
  },
  {
    question: "What kind of security measures do you have in place?",
    answer:
      "All data is encrypted at rest and in transit. The platform supports 2FA and is designed to scale toward enterprise controls like SSO.",
  },
];

function CheckIcon({ filled = false }: { filled?: boolean }) {
  return (
    <span
      className="material-symbols-outlined text-[#137FEC]"
      style={filled ? { fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" } : undefined}
    >
      check_circle
    </span>
  );
}

export default function PricingPage() {
  return (
    <main className={`${manrope.variable} min-h-screen bg-[#faf8ff] text-slate-900`}>
      <PublicHeader active="pricing" />

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-[140px] lg:px-8">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-slate-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-slate-600">
            Pricing Plans
          </span>
          <h1 className="mt-6 text-5xl font-black tracking-tight text-slate-950 md:text-6xl" style={{ fontFamily: "var(--font-manrope), Inter, sans-serif" }}>
            Simple and transparent pricing
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Choose the plan that&apos;s right for your business, from ambitious startups to global enterprises.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <span className="text-sm font-semibold text-slate-500">Monthly</span>
            <button type="button" className="flex h-7 w-14 items-center rounded-full bg-slate-200 p-1">
              <span className="ml-auto size-5 rounded-full bg-[#137FEC] shadow-md" />
            </button>
            <span className="text-sm font-semibold text-slate-900">
              Annual <span className="text-[#137FEC]">(Save 20%)</span>
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-3xl border bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:-translate-y-1 ${
                plan.highlighted ? "border-[#137FEC] md:scale-105" : "border-slate-200"
              }`}
            >
              {plan.highlighted ? (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#137FEC] px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-blue-500/30">
                  Recommended
                </div>
              ) : null}

              <div className="mb-8">
                <h2 className="text-2xl font-bold tracking-tight text-slate-950" style={{ fontFamily: "var(--font-manrope), Inter, sans-serif" }}>
                  {plan.name}
                </h2>
                <p className="mt-2 text-slate-600">{plan.description}</p>
              </div>

              <div className="mb-8 flex items-end gap-2">
                <span className="text-5xl font-black text-slate-950">{plan.price}</span>
                {plan.cadence ? <span className="pb-1 text-slate-500">{plan.cadence}</span> : null}
              </div>

              <ul className="mb-10 flex-1 space-y-4">
                {plan.features.map((feature, index) => (
                  <li key={feature} className="flex items-center gap-3 text-slate-700">
                    <CheckIcon filled={plan.highlighted && index === 0} />
                    <span className={index === 0 && plan.highlighted ? "font-semibold" : undefined}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={`w-full rounded-xl px-5 py-3 text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-[#137FEC] text-white shadow-lg shadow-blue-500/25 hover:bg-[#0f6ed0]"
                    : plan.name === "Enterprise"
                      ? "border border-slate-300 text-slate-800 hover:bg-slate-50"
                      : "border border-[#137FEC] text-[#137FEC] hover:bg-blue-50"
                }`}
              >
                {plan.action}
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
          <div className="border-b border-slate-200 px-6 py-5">
            <h2 className="text-3xl font-black tracking-tight text-slate-950" style={{ fontFamily: "var(--font-manrope), Inter, sans-serif" }}>
              Compare all features
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="w-1/4 px-6 py-4 text-sm font-semibold text-slate-700">Features</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">Starter</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">Professional</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, rowIndex) => (
                  <tr key={row[0]} className={rowIndex % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                    <td className="border-b border-slate-100 px-6 py-4 font-semibold text-slate-800">{row[0]}</td>
                    {row.slice(1).map((value, cellIndex) => (
                      <td key={`${row[0]}-${cellIndex}`} className="border-b border-slate-100 px-6 py-4 text-center text-slate-600">
                        {value === "check" ? <CheckIcon filled /> : value === "remove" ? <span className="material-symbols-outlined text-slate-300">remove</span> : value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 lg:px-8">
        <h2 className="text-center text-3xl font-black tracking-tight text-slate-950" style={{ fontFamily: "var(--font-manrope), Inter, sans-serif" }}>
          Frequently asked questions
        </h2>
        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-bold text-slate-950">{faq.question}</h3>
                <span className="material-symbols-outlined text-slate-400">expand_more</span>
              </div>
              <p className="mt-4 text-slate-600 leading-7">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#137FEC] px-8 py-14 text-white shadow-2xl shadow-blue-500/25 md:px-12">
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_top_right,_white_0%,_transparent_38%),radial-gradient(circle_at_bottom_left,_white_0%,_transparent_32%)]" />
          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-black tracking-tight md:text-5xl" style={{ fontFamily: "var(--font-manrope), Inter, sans-serif" }}>
                Ready to boost your sales efficiency?
              </h2>
              <p className="mt-4 text-lg leading-8 text-blue-50">
                Join teams that have transformed their CRM experience with Nexus Sales.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/register" className="rounded-xl bg-white px-6 py-4 text-sm font-semibold text-[#137FEC] shadow-lg transition-transform hover:-translate-y-0.5">
                Start My Free Trial
              </Link>
              <Link href="/login" className="rounded-xl border border-white/40 px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-1">
            <div className="text-2xl font-black text-slate-950">Nexus Sales</div>
            <p className="mt-5 text-sm leading-7 text-slate-500">Pricing designed for growing teams that need clarity and scale.</p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">Product</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><Link href="/" className="hover:text-[#137FEC]">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-[#137FEC]">Pricing</Link></li>
              <li><Link href="/health" className="hover:text-[#137FEC]">Health</Link></li>
              <li><Link href="/status" className="hover:text-[#137FEC]">Status</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">Company</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><Link href="/login" className="hover:text-[#137FEC]">Login</Link></li>
              <li><Link href="/register" className="hover:text-[#137FEC]">Register</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">Support</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><Link href="/health" className="hover:text-[#137FEC]">System health</Link></li>
              <li><Link href="/status" className="hover:text-[#137FEC]">Operational status</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}