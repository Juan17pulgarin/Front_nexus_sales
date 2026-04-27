import Link from "next/link";
import { Manrope } from "next/font/google";
import { PublicHeader } from "@/components/public-header";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const featureCards = [
  {
    title: "Visión 360 del Cliente",
    description:
      "Cada contacto, cada correo y cada reunión unificados en un solo historial visual para tomar decisiones más rápidas.",
    icon: "groups",
  },
  {
    title: "Gestión Operativa",
    description:
      "Automatiza tareas repetitivas y seguimientos para que tu equipo se enfoque en cerrar tratos, no en perseguir tablas.",
    icon: "settings_suggest",
  },
  {
    title: "Analítica en Tiempo Real",
    description:
      "Insights y estados técnicos que ayudan a negocio, soporte y QA a entender la salud real de la plataforma.",
    icon: "monitoring",
  },
];

const trustItems = ["Salesforce", "Stripe", "Airbnb", "Hubspot", "Shopify"];

const benefits = [
  {
    title: "Información Centralizada",
    description: "Elimina los silos de información. Todos los equipos trabajan sobre la misma base de datos.",
  },
  {
    title: "Mejores Decisiones",
    description: "Utiliza dashboards y vistas operativas para entender exactamente qué está funcionando.",
  },
  {
    title: "Rendimiento Optimizado",
    description: "La plataforma acompaña el crecimiento comercial con un flujo claro y consistente.",
  },
];

const stats = [
  { value: "99.9%", label: "Uptime garantizado" },
  { value: "+35%", label: "Mejora en cierre" },
];

export default function RootPage() {
  return (
    <main className={`${manrope.variable} bg-[#faf8ff] text-[#131b2e]`}>
      <PublicHeader active="platform" />

      <main>
        <section className="hero-gradient mx-auto max-w-[1280px] px-8 pb-[120px] pt-24 text-center">
          <div className="mx-auto flex max-w-5xl flex-col items-center">
            <span className="mb-4 inline-block rounded-full bg-[#d3e4fe] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#38485d]">
              New: Nexo AI Integration
            </span>
            <h1
              className="mb-4 max-w-4xl text-5xl font-black tracking-[-0.02em] text-[#131b2e] md:text-7xl"
              style={{ fontFamily: "var(--font-manrope), Inter, sans-serif" }}
            >
              Gestión Inteligente de Clientes impulsada por Datos Reales
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-8 text-[#414753] md:text-xl">
              Centraliza cada interacción en una plataforma intuitiva. Toma decisiones basadas en analítica de alta fidelidad para escalar tu rendimiento comercial.
            </p>

            <div className="mb-16 flex flex-col items-center gap-4 sm:flex-row">
              <Link href="/register" className="inline-flex items-center gap-2 rounded-lg bg-[#137FEC] bg-gradient-to-b from-[#2E91FF] to-[#137FEC] px-8 py-4 font-semibold text-white shadow-xl transition-all hover:opacity-90">
                Comienza tu prueba gratuita
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
              <Link href="/pricing" className="rounded-lg border border-[#137FEC] px-8 py-4 font-semibold text-[#137FEC] transition-colors hover:bg-[#E8F2FE]">
                Ver Pricing
              </Link>
            </div>

            <div className="relative w-full max-w-5xl">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#005baf] to-[#005eb4] opacity-20 blur transition duration-1000" />
              <div className="relative overflow-hidden rounded-xl border border-[#c1c6d5] bg-white shadow-2xl">
                <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
                  <div className="bg-[linear-gradient(180deg,#f8fbff_0%,#edf4ff_100%)] p-8 text-left">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#005baf]">Dashboard preview</p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#131b2e]" style={{ fontFamily: "var(--font-manrope), Inter, sans-serif" }}>
                      CRM Dashboard
                    </h2>
                    <p className="mt-3 max-w-md text-sm leading-7 text-[#414753]">
                      Una interfaz ejecutiva con señales operativas, ventas y actividad de clientes, lista para trabajar con o sin backend.
                    </p>

                    <div className="mt-8 grid grid-cols-3 gap-3">
                      {stats.map((item) => (
                        <div key={item.label} className="rounded-2xl border border-[#dae2fd] bg-white p-4 shadow-sm">
                          <p className="text-3xl font-black text-[#005baf]">{item.value}</p>
                          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#414753]">{item.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-[#131b2e] p-8 text-white">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-300">Live health</p>
                    <div className="mt-4 rounded-3xl border border-white/10 bg-white/5 p-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-slate-300">Operations status</p>
                          <p className="mt-1 text-2xl font-black">Connected</p>
                        </div>
                        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                          Healthy
                        </span>
                      </div>
                      <div className="mt-5 space-y-3">
                        <div className="h-3 rounded-full bg-white/10">
                          <div className="h-3 w-[78%] rounded-full bg-[#137FEC]" />
                        </div>
                        <div className="h-3 rounded-full bg-white/10">
                          <div className="h-3 w-[64%] rounded-full bg-[#2E91FF]" />
                        </div>
                        <div className="h-3 rounded-full bg-white/10">
                          <div className="h-3 w-[86%] rounded-full bg-[#8bc0ff]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-[#dae2fd] bg-white p-4">
                  <img
                    alt="Nexus Sales dashboard preview"
                    className="h-[320px] w-full rounded-[1.25rem] object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAn2XpBapMzuTzeJq0pzhw-j3IQ8i46WVQUntS6iI1grVPu9lbpR1F4BIPHHMQle5CVA1WDieowqaHBlGGl16A8DMFwAZfclMMpB87bNJ3tfAWFcwksJ4Jco1t8RYK8qo2HkrPywF-EofMZ7Q39kyXVBTkEcfh5riD9wzgupa1RY4NKkJFffML_ipjz0Z13ESsuwJnnjj_HX1D_1ohnAF4167t0Y0AVckGZP_PdDZVDcvt0EqL5fXYOl6bswywxWhADB4GFGMlOOHkG"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#dae2fd] bg-white py-12">
          <div className="mx-auto max-w-[1280px] px-8">
            <p className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.3em] text-[#414753]/60">Confianza por empresas líderes</p>
            <div className="flex flex-wrap items-center justify-center gap-x-20 gap-y-10 grayscale opacity-50">
              {trustItems.map((item) => (
                <span key={item} className="text-2xl font-bold text-slate-500">{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="platform" className="mx-auto max-w-[1280px] px-8 py-[120px]">
          <div className="mb-20 text-center">
            <h2 className="mb-4 text-5xl font-bold tracking-[-0.01em] text-[#131b2e]" style={{ fontFamily: "var(--font-manrope), Inter, sans-serif" }}>
              Potencia cada etapa de tu ciclo de ventas
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-[#414753]">
              Herramientas diseñadas para equipos que no se conforman con lo básico.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {featureCards.map((item) => (
              <article key={item.title} className="feature-card-shadow feature-card-hover rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300">
                <div className="mb-8 flex size-14 items-center justify-center rounded-xl bg-[#E8F2FE] text-[#137FEC]">
                  <span className="material-symbols-outlined text-[28px]">{item.icon}</span>
                </div>
                <h3 className="mb-4 text-2xl font-semibold text-[#131b2e]" style={{ fontFamily: "var(--font-manrope), Inter, sans-serif" }}>
                  {item.title}
                </h3>
                <p className="text-[#414753] leading-7">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="solutions" className="bg-[#f2f3ff] py-[120px]">
          <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.24em] text-[#005baf]">Por qué elegir Nexus Sales</span>
              <h2 className="mb-8 text-5xl font-bold tracking-[-0.01em] text-[#131b2e]" style={{ fontFamily: "var(--font-manrope), Inter, sans-serif" }}>
                La infraestructura definitiva para tu crecimiento
              </h2>
              <div className="space-y-8">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex gap-4">
                    <span className="material-symbols-outlined text-[#005baf]" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>
                      check_circle
                    </span>
                    <div>
                      <h4 className="mb-1 text-lg font-bold text-[#131b2e]">{benefit.title}</h4>
                      <p className="text-[#414753] leading-7">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex h-64 flex-col justify-between rounded-[1.5rem] border border-[#c1c6d5] bg-white p-8 shadow-sm">
                <span className="text-5xl font-black text-[#005baf]">99.9%</span>
                <p className="text-lg font-medium text-[#131b2e]">Uptime garantizado para tus operaciones críticas.</p>
              </div>
              <div className="flex h-64 flex-col justify-between rounded-[1.5rem] bg-[#005baf] p-8 text-white shadow-lg">
                <span className="text-5xl font-black">+35%</span>
                <p className="text-lg font-medium text-blue-50">Incremento en la tasa de cierre reportado por clientes.</p>
              </div>
              <div className="col-span-2 relative h-64 overflow-hidden rounded-[1.5rem]">
                <img
                  alt="Nexus team collaborating"
                  className="absolute inset-0 h-full w-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZFJAo6p4H7jzo4AfW0LlWUUhFM_3PBJSXtr2GRdGs6pHqtGoHo98boPKxcCmKf_j3-ypBiB1FPPXmpXEzOSg4C562iRU2oPWF8_2bYROpIXew_qe_QIqDbNrdLZrJUvPQpnQpOPKo8ek0XPK56Bi-qutIvKuofPaQNdGejaX8LHH_HWcnYG1R2GD0gEWA8oHuRDV3_PPUWN6oV796QicyXEOspMlTUgBu-pFc1mLDtZ4yYlR4djDI_VcehC7Q4lizcvP7egbTXsFc"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(19,27,46,0.1),rgba(19,27,46,0.72))]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_35%)]" />
                <div className="relative flex h-full items-end p-8 text-white">
                  <p className="max-w-md text-lg leading-8">
                    Equipos coordinados en tiempo real desde cualquier lugar del mundo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-[1280px] px-8 py-[120px]">
          <div className="rounded-[2rem] bg-[#131b2e] p-10 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#005baf] opacity-20 blur-3xl -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#005eb4] opacity-10 blur-3xl -ml-48 -mb-48" />
            <div className="relative z-10">
              <h2 className="mb-4 text-5xl font-bold tracking-[-0.01em]" style={{ fontFamily: "var(--font-manrope), Inter, sans-serif" }}>
                Lleva tus ventas al siguiente nivel
              </h2>
              <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-slate-300">
                Únete a equipos que ya están transformando sus datos en ingresos reales con una plataforma clara, estable y lista para crecer.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link href="/register" className="rounded-lg bg-[#137FEC] px-8 py-4 font-semibold text-white shadow-xl transition-all hover:opacity-90">
                  Probar gratis por 14 días
                </Link>
                <Link href="/login" className="rounded-lg border border-slate-500 px-8 py-4 font-semibold text-slate-100 transition-all hover:bg-slate-800">
                  Hablar con un experto
                </Link>
              </div>
              <p className="mt-8 text-sm text-slate-400">Sin tarjeta de crédito. Configuración en 5 minutos.</p>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-slate-200 bg-slate-50 py-20 text-sm leading-relaxed">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-8 md:grid-cols-4">
          <div className="space-y-6">
            <span className="text-lg font-bold text-slate-900">Nexus Sales</span>
            <p className="text-slate-500">La plataforma líder para equipos de ventas modernos impulsados por datos.</p>
            <div className="flex gap-4 text-slate-400">
              <span className="material-symbols-outlined transition-colors hover:text-[#005baf]">public</span>
              <span className="material-symbols-outlined transition-colors hover:text-[#005baf]">alternate_email</span>
              <span className="material-symbols-outlined transition-colors hover:text-[#005baf]">share</span>
            </div>
          </div>
          <div>
            <h5 className="mb-6 font-bold text-slate-900">Product</h5>
            <ul className="space-y-3 text-slate-500">
              <li><Link href="/#platform" className="transition-all hover:text-slate-900 hover:underline">Features</Link></li>
              <li><Link href="/pricing" className="transition-all hover:text-slate-900 hover:underline">Pricing</Link></li>
              <li><Link href="/health" className="transition-all hover:text-slate-900 hover:underline">Security</Link></li>
              <li><Link href="/status" className="transition-all hover:text-slate-900 hover:underline">Enterprise</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="mb-6 font-bold text-slate-900">Company</h5>
            <ul className="space-y-3 text-slate-500">
              <li><Link href="/status" className="transition-all hover:text-slate-900 hover:underline">About Us</Link></li>
              <li><Link href="/register" className="transition-all hover:text-slate-900 hover:underline">Careers</Link></li>
              <li><Link href="/health" className="transition-all hover:text-slate-900 hover:underline">Blog</Link></li>
              <li><Link href="/pricing" className="transition-all hover:text-slate-900 hover:underline">Press</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="mb-6 font-bold text-slate-900">Legal</h5>
            <ul className="space-y-3 text-slate-500">
              <li><Link href="/health" className="transition-all hover:text-slate-900 hover:underline">Privacy Policy</Link></li>
              <li><Link href="/status" className="transition-all hover:text-slate-900 hover:underline">Terms of Service</Link></li>
              <li><Link href="/pricing" className="transition-all hover:text-slate-900 hover:underline">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-[1280px] border-t border-slate-200 px-8 pt-8 text-center text-slate-500">
          <p>© 2026 Nexus Sales CRM. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
