import { Manrope } from "next/font/google";
import Link from "next/link";
import { PublicHeader } from "@/components/public-header";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const industryCards = [
  {
    label: "Retail & E-commerce",
    title: "Unified Commerce Intelligence",
    description:
      "Connect offline and online touchpoints to create a single source of truth for every customer journey.",
    points: ["Omnichannel Data Sync", "Personalized Loyalty Tracking"],
    href: "/pricing",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDlY_GUGOOJ3tOhUhNwB-e5AHLGRxSrHVvhvcKt0heFVu_lpOQqgNOFa-y_7e8SWakWS_nHS-dvABdMF5RAA_sZrqkc5Eb5F8fTV7qji_VPzDc27uFSmU1mvRft21ICiZYyYxwG-3S_U_rFy5ffQ7cxjQPPKqooZqRuJXq6H-BVtQxNX1I6ppaCso-uuhd5gfYjP--0ok9HqXPqhmbT93-1ngyv3A5aoGY5xATFkdMqYh8q5GTgl2Dm3OzJNZ_jWh5tOLJJpQKb4U3S",
    wide: true,
  },
  {
    label: "Manufacturing",
    title: "Supply Chain Integration",
    description:
      "Align sales forecasts with production schedules for seamless operational flow and inventory precision.",
    points: [],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCrqYhjmszjvZc4U83Zru2gx7h9WCaSQT1o6L-xM2IWPtOh7KHYI80A0moMl1vvWSyDF5hvkSSIsPzO_5NKOFIi6T6t9ZRKc6l2iSuvHHfI_2qLW6UdKJdQH-FuuS5CN8WEZzXuFrmN9cZOCaowQbUcvz5eDroAr3SDYXPxDP2DCqmdRLlTsNjwBmkxt9lt9YEDHtQojAo52cmbfAhs6zvRqqDWlTDTxEryZXi-GqfSFTf29EOkau-KIE4SVCMSREON_guYjuOYJRiN",
    wide: false,
  },
  {
    label: "Professional Services",
    title: "Client Lifecycle Management",
    description:
      "Manage complex contracts and long-term client relationships with automated nurture flows and billing integration.",
    points: [],
    image: null,
    wide: false,
  },
  {
    label: "Operational Efficiency",
    title: "Automation that removes friction",
    description:
      "The intelligence layer automates repetitive tasks so your team can focus on closing deals.",
    points: ["40% Faster Processing", "22hr Saved per week"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBUWqtc2gMEZgaJu1Qtxf73Q56asbdp67UcPN5PTu1Xg9EiyzFu8xZKRw3WauWSh8a5QARqH0v72XST7QDkvJWokXI6XxmfAt4qRfCki1yTyGiwVGLiXDcITnMS5V2Eu37FgKl_dL9B0Tfxmb0qlhBGR4cWbsSKab_A6saLlBNTjCOUmWcaNHPj9rHxofdIvfaolHnLH5LEbhe_TQQYL34Pj4DgZYhZDe99ZlaU5YvgOCa3UB_cTpzazaFLJ8Mnra0nKA1OQ9RmUVh-",
    wide: true,
    dark: true,
  },
];

const pillars = [
  {
    icon: "auto_mode",
    title: "Sales Automation",
    description:
      "Automate your pipeline with precision. Lead scoring, email sequencing, and meeting scheduling handled effortlessly by AI.",
    bullets: ["Smart Lead Routing", "Dynamic Email Sequences"],
  },
  {
    icon: "psychology",
    title: "Customer Intelligence",
    description:
      "Deep insights into customer behavior. Predict churn, identify up-sell opportunities, and understand sentiment in real-time.",
    bullets: ["Predictive Analytics", "Sentiment Analysis"],
  },
  {
    icon: "sync_alt",
    title: "Operational Sync",
    description:
      "Seamlessly connect with your existing tech stack. Over 500+ native integrations across ERP, Marketing, and HR systems.",
    bullets: ["Headless API Access", "Centralized Data Hub"],
  },
];

function FeatureList({ items }: { items: string[] }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <ul className="space-y-3 mb-8">
      {items.map((item) => (
        <li key={item} className="flex items-center text-sm font-medium text-[#131b2e]">
          <span className="material-symbols-outlined mr-2 text-lg text-[#005baf]">check_circle</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function SolutionsPage() {
  return (
    <main className={`${manrope.variable} bg-[#faf8ff] text-[#131b2e]`}>
      <PublicHeader active="solutions" />

      <header className="hero-gradient relative overflow-hidden pb-24 pt-40">
        <div className="mx-auto max-w-[1280px] px-6 text-center">
          <div className="mx-auto mb-8 inline-flex items-center rounded-full bg-[#eaedff] px-4 py-1.5 text-sm font-semibold text-[#414753]">
            <span className="mr-2 flex h-2 w-2 rounded-full bg-[#005baf]" />
            Enterprise Grade Solutions
          </div>
          <h1 className="mx-auto mb-6 max-w-4xl text-5xl font-black tracking-[-0.02em] text-[#131b2e] md:text-7xl" style={{ fontFamily: "var(--font-manrope), Inter, sans-serif" }}>
            Engineered for Every <span className="text-[#005baf]">Industry</span>.
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-[#414753] md:text-xl">
            Tailored CRM strategies that bridge the gap between complex data and actionable sales results. Nexus Sales provides the precision your business vertical demands.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-[1280px] px-6 py-[120px]">
        <div className="grid grid-cols-12 gap-6">
          <article className="group relative col-span-12 overflow-hidden rounded-xl border border-[#c1c6d5] bg-white shadow-sm transition-all duration-300 hover:shadow-md md:col-span-8">
            <div className="grid h-full md:grid-cols-2">
              <div className="flex flex-col justify-center p-10">
                <span className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#005baf]">Retail &amp; E-commerce</span>
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#131b2e]" style={{ fontFamily: "var(--font-manrope), Inter, sans-serif" }}>
                  Unified Commerce Intelligence
                </h2>
                <p className="mb-6 text-[#414753] leading-7">
                  Connect offline and online touchpoints to create a single source of truth for every customer journey.
                </p>
                <FeatureList items={industryCards[0].points} />
                <Link href={industryCards[0].href} className="inline-flex items-center font-semibold text-[#005baf] transition-transform group-hover:translate-x-1">
                  Explore Retail Solution <span className="material-symbols-outlined ml-1">arrow_forward</span>
                </Link>
              </div>
              <div className="relative h-64 overflow-hidden md:h-auto">
                <img alt="Retail space" className="absolute inset-0 h-full w-full object-cover" src={industryCards[0].image} />
              </div>
            </div>
          </article>

          <article className="col-span-12 flex flex-col justify-between rounded-xl border border-[#c1c6d5] bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 md:col-span-4">
            <div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#d5e3ff]">
                <span className="material-symbols-outlined text-[#005baf]">factory</span>
              </div>
              <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.2em] text-[#005baf]">Manufacturing</span>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#131b2e]" style={{ fontFamily: "var(--font-manrope), Inter, sans-serif" }}>
                Supply Chain Integration
              </h2>
              <p className="text-sm leading-7 text-[#414753]">
                Align sales forecasts with production schedules for seamless operational flow and inventory precision.
              </p>
            </div>
            <img alt="Manufacturing" className="mt-8 rounded-lg grayscale transition-all hover:grayscale-0" src={industryCards[1].image ?? ""} />
          </article>

          <article className="col-span-12 flex flex-col justify-between rounded-xl border border-[#c1c6d5] bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 md:col-span-4">
            <div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#d5e3ff]">
                <span className="material-symbols-outlined text-[#005baf]">handshake</span>
              </div>
              <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.2em] text-[#005baf]">Professional Services</span>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#131b2e]" style={{ fontFamily: "var(--font-manrope), Inter, sans-serif" }}>
                Client Lifecycle Management
              </h2>
              <p className="text-sm leading-7 text-[#414753]">
                Manage complex contracts and long-term client relationships with automated nurture flows and billing integration.
              </p>
            </div>
            <div className="mt-8 flex h-32 items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-100">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Project Analytics Preview</span>
            </div>
          </article>

          <article className="group relative col-span-12 overflow-hidden rounded-xl border border-[#c1c6d5] bg-slate-900 text-white shadow-xl md:col-span-8">
            <div className="grid h-full md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <img alt="Dashboard data" className="absolute inset-0 h-full w-full object-cover opacity-60" src={industryCards[3].image ?? ""} />
              </div>
              <div className="flex flex-col justify-center bg-slate-900 p-12">
                <h2 className="mb-4 text-3xl font-bold tracking-tight" style={{ fontFamily: "var(--font-manrope), Inter, sans-serif" }}>
                  Operational Efficiency
                </h2>
                <p className="mb-8 text-[#b7c8e1] leading-7">
                  Our intelligence layer removes the friction from your daily workflow, automating repetitive tasks so your team can focus on closing deals.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-slate-800 p-4">
                    <span className="text-2xl font-bold text-[#8bc0ff]">40%</span>
                    <p className="text-xs uppercase text-slate-400">Faster Processing</p>
                  </div>
                  <div className="rounded-lg bg-slate-800 p-4">
                    <span className="text-2xl font-bold text-[#8bc0ff]">22hr</span>
                    <p className="text-xs uppercase text-slate-400">Saved per week</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[#f2f3ff] py-[120px]">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-5xl font-bold tracking-[-0.01em] text-[#131b2e]" style={{ fontFamily: "var(--font-manrope), Inter, sans-serif" }}>
              Platform Foundations
            </h2>
            <p className="text-lg leading-8 text-[#414753]">
              The three pillars that define the Nexus Sales experience, ensuring your enterprise stays ahead of the curve.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="rounded-2xl border border-[#c1c6d5] bg-white p-10 transition-shadow hover:shadow-lg">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-lg bg-[#E8F2FE] text-[#137FEC]">
                  <span className="material-symbols-outlined">{pillar.icon}</span>
                </div>
                <h3 className="mb-4 text-2xl font-semibold text-[#131b2e]" style={{ fontFamily: "var(--font-manrope), Inter, sans-serif" }}>
                  {pillar.title}
                </h3>
                <p className="mb-6 text-[#414753] leading-7">{pillar.description}</p>
                <ul className="space-y-4">
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="material-symbols-outlined mt-1 text-[#005baf]">{pillar.icon === "sync_alt" ? "api" : pillar.icon === "psychology" ? "monitoring" : "bolt"}</span>
                      <span className="text-sm text-[#131b2e]">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-[120px]">
        <div className="rounded-3xl bg-[#005baf] p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-white/10 blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#2E91FF]/20 blur-3xl -ml-32 -mb-32" />
          <div className="relative z-10">
            <h2 className="mb-6 text-5xl font-bold tracking-[-0.01em]" style={{ fontFamily: "var(--font-manrope), Inter, sans-serif" }}>
              Ready to Transform Your Sales?
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-lg leading-8 text-white/80">
              Join over 15,000+ companies using Nexus Sales to power their revenue engine.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
              <Link href="/register" className="w-full rounded-lg bg-white px-8 py-4 font-semibold text-[#005baf] transition-colors hover:bg-slate-50 md:w-auto">
                Request a Demo
              </Link>
              <Link href="/pricing" className="w-full rounded-lg border border-white/30 px-8 py-4 font-semibold text-white transition-colors hover:bg-white/10 md:w-auto">
                View All Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-50 text-sm leading-6 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-12 px-6 py-16 md:grid-cols-4 lg:px-8">
          <div className="col-span-2 lg:col-span-1">
            <span className="mb-4 block text-lg font-bold text-slate-900 dark:text-white">Nexus Sales</span>
            <p className="text-slate-500 dark:text-slate-400">© 2024 Nexus Sales. Built for enterprise excellence.</p>
          </div>
          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">Solutions</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/solutions" className="text-slate-500 transition-all hover:text-blue-600 hover:underline dark:text-slate-400">Retail</Link></li>
              <li><Link href="/solutions" className="text-slate-500 transition-all hover:text-blue-600 hover:underline dark:text-slate-400">Manufacturing</Link></li>
              <li><Link href="/solutions" className="text-slate-500 transition-all hover:text-blue-600 hover:underline dark:text-slate-400">Services</Link></li>
              <li><Link href="/solutions" className="text-slate-500 transition-all hover:text-blue-600 hover:underline dark:text-slate-400">Enterprise</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/health" className="text-slate-500 transition-all hover:text-blue-600 hover:underline dark:text-slate-400">About Us</Link></li>
              <li><Link href="/status" className="text-slate-500 transition-all hover:text-blue-600 hover:underline dark:text-slate-400">Careers</Link></li>
              <li><Link href="/health" className="text-slate-500 transition-all hover:text-blue-600 hover:underline dark:text-slate-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/health" className="text-slate-500 transition-all hover:text-blue-600 hover:underline dark:text-slate-400">Privacy Policy</Link></li>
              <li><Link href="/status" className="text-slate-500 transition-all hover:text-blue-600 hover:underline dark:text-slate-400">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}