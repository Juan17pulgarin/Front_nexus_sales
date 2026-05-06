import Link from "next/link";
import { Manrope } from "next/font/google";
import { PublicHeader } from "@/components/public-header";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export default function AboutPage() {
  return (
    <main className={`${manrope.variable} bg-[#faf8ff] text-[#131b2e]`}>
      <PublicHeader active="about" />

      <section className="mx-auto max-w-[1280px] px-6 pt-[140px] pb-[80px] text-center">
        <span className="inline-block mb-6 rounded-full bg-[#d0e1fb] px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-[#38485d]">Our Story</span>
        <h1 className="mx-auto mb-8 max-w-4xl text-5xl font-black md:text-6xl" style={{ fontFamily: "var(--font-manrope), Inter, sans-serif" }}>
          Architecting the future of enterprise intelligence.
        </h1>
        <p className="mx-auto max-w-2xl text-lg leading-8 text-[#414753]">
          Founded in 2018, Nexus Sales was born from a simple observation: sales data is abundant, but actionable intelligence is rare. We built a platform to bridge that gap.
        </p>
      </section>

      <section className="bg-[#f2f3ff] py-[80px]">
        <div className="mx-auto max-w-[1280px] grid grid-cols-1 gap-6 px-6 md:grid-cols-12">
          <div className="md:col-span-7 rounded-3xl overflow-hidden shadow-sm aspect-video">
            <img
              alt="Office skyline"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1HPMfmknYPkpSWviuADGAcCj2kafoHeW-YDdrdCl5VLR3t25Hue1pvucmnHD8E92XKlxWSqZXIeLwkM5z6Jzch6QM7w7u-9VNCPvCUOT1LGuMV2wafGv-JOWOoDerRCRBs1UJzlD-BhRLk-NZNzn25n91kDKPbADlWiPr8yHaRDVakfTWAFwt8OqSXsSpJRCRGb-3onF3pXIHluWUEmgsPXfvAXOr-9L14lJrdr3GNY1cXudKBeau9DA9N0t7jWLwDZBF3sOTRzPJ"
            />
          </div>
          <div className="md:col-span-5 flex flex-col justify-center gap-6 p-6">
            <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-manrope), Inter, sans-serif" }}>
              Our Vision
            </h2>
            <p className="text-lg leading-8 text-[#414753]">
              To empower every global enterprise with the predictive clarity needed to outpace market fluctuations and deliver unparalleled customer value through AI-driven sales excellence.
            </p>

            <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-3xl text-[#137FEC]">rocket_launch</span>
                <div>
                  <h3 className="text-xl font-bold">The Mission</h3>
                  <p className="text-sm text-[#414753]">We dismantle silos and automate complexity, allowing sales leaders to focus on what matters: human connection and strategic growth.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-[80px]">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold" style={{ fontFamily: "var(--font-manrope), Inter, sans-serif" }}>Values that drive us</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#414753]">Rooted in integrity, obsessed with performance.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="md:row-span-2 relative rounded-3xl border border-slate-200 bg-white p-10 shadow-sm hover:shadow-md">
            <div>
              <div className="mb-6 w-14 h-14 rounded-2xl bg-[#E8F2FE] flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl text-[#137FEC]">verified_user</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Integrity by Default</h3>
              <p className="text-sm text-[#414753] leading-relaxed">We believe transparency is the bedrock of enterprise trust. Our algorithms and our actions are always open to scrutiny.</p>
            </div>
            <span className="absolute bottom-6 right-6 text-6xl font-bold text-[#f3f7ff] opacity-30">01</span>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md">
            <div className="mb-6 w-12 h-12 rounded-xl bg-[#E8F2FE] flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl text-[#137FEC]">group_work</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Radical Collaboration</h3>
            <p className="text-sm text-[#414753]">Great ideas don't have hierarchies. We foster an environment where the best solution always wins.</p>
          </div>

          <div className="rounded-2xl bg-[#137FEC] p-8 text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Global Reach</h3>
            <p className="opacity-90">Serving 14 countries and 200+ enterprise partners across four continents.</p>
          </div>

          <div className="md:col-span-2 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3">
              <div className="mb-6 w-12 h-12 rounded-xl bg-[#E8F2FE] flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl text-[#137FEC]">psychology</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Customer Obsession</h3>
              <p className="text-sm text-[#414753]">We don't just build features; we solve the unique challenges that keep sales VPs up at night.</p>
            </div>
            <div className="md:w-2/3 rounded-2xl overflow-hidden">
              <img
                alt="Team collaborating"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBswC6e4lbhUCqqmRS0xFK0Gi_RJW0tmYGI_4L1hPrbdaqRAGfG89IerBQdO1HpbMJ3UShmyjaihY_U1ai3pXbzLGYTFJBhro_mjbDA3nfdxuOjEC8ILM8Z_BUPj03h84XHMZrvc-CYFwlWvj7e_3dhA5j34GlqZWqH5g2qwUpG0cNTobiBy9LrtaOgZKF30zS187Lb5mtqwruwfHF_JmSwMiGg0J_gR8x1l8MdD8sbUQeeZd9psNVhuYvrVLq0Bi94lDaDlzBTqsuX"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7fafc] py-[80px]">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="text-4xl font-bold">The Leadership</h2>
              <p className="text-sm text-[#414753]">Guided by industry veterans with a combined century of experience in SaaS and Enterprise Sales.</p>
            </div>
            <button className="rounded-lg border border-[#137FEC] px-5 py-3 text-[#137FEC] font-semibold hover:bg-[#137FEC] hover:text-white transition-all">Join the Team</button>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "Erik Valencia Cardona",
                "Chief Executive Officer",
                '/ceos-pictures/erik-valencia.jpeg',
              ],
              [
                "Juan Pablo Pulgarín Vera",
                "Chief Data Scientist",
                '/ceos-pictures/juan-pulgarin.png',
              ],
              [
                "Manuel Salvador Ortíz Dávila",
                "VP of Engineering",
                '/ceos-pictures/manuel-ortiz.png',
              ],
              [
                "Jorge Rodríguez",
                "Head of Customer Success",
                '/ceos-pictures/jorge-rodriguez.png',
              ],
              [
                "Juan José Medina Clavijo",
                "Head of Customer Success",
                '/ceos-pictures/juan-jose-medina.jpeg',
              ],
            ].map((m) => (
              <div key={m[0]} className="group">
                <div className="aspect-[4/5] mb-6 overflow-hidden rounded-2xl relative">
                  <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" src={m[2]} alt={String(m[0])} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="text-xl font-bold mb-1">{m[0]}</h4>
                <p className="text-primary font-medium text-sm mb-4">{m[1]}</p>
                <div className="flex gap-3">
                  <a className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#137FEC] hover:border-[#137FEC] transition-colors" href="#">
                    <span className="material-symbols-outlined text-sm">link</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[80px]">
        <div className="mx-auto max-w-[1280px] px-6 mb-12">
          <h2 className="text-4xl font-bold mb-4">Life at Nexus</h2>
          <p className="max-w-2xl text-lg text-[#414753]">Building technology is hard work. We make sure our culture is supportive, inclusive, and fun. From global retreats to local hackathons, we grow together.</p>
        </div>
        <div className="flex gap-6 px-6 overflow-x-auto pb-12 no-scrollbar">
          {[
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBsQw7y-i-YElj04L7aawgj4zBe2Gvq2e5cX30Saa5fFcuDVmb7VhTV6QWabexnnvafel6zujPAWVgWsnAw2ediKlV-FPLf1Zp0EDHZdqaTNrj5fb-FQES6PgQHvbHTiJ-aD82dMjvEtyoNsSkJJ7vjDYnxpZVvAx8ZaDb-3BWY3wcMLTwaIWZgcEI8OcPazg5ywiFHd-oghDr9EK3QGYuh3YeTFnDE-3Fm00XI0XwaobhJ3qe8DdH_luxCIkWd0dL_2GVurLGaErZu",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAkObPf52BHXqCrroDepFyLCfROIFCikyzZputNesrKDOyAfvwI-7Pae7OwP-8OAnDHZtGjQaLRDHUi4wA4cXzrhK64TQvWhaGHJmlijqGv_0inabetT7pacRwWf_ErqmWMhzzyNmz2A831WTKfo_5V9-fgz5Op7xeIJ-VCO7ly8M0neXaMj9OZhFD-lVRSZE3ENSLHrEl1CwsBajIdfxr6OwgT8Ierm6rwdY0XiTigyrMuqLTR1EO5rK8j2z9Jw4cIhuhDrafmP1QS",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDa2t2uQJ2vsNfxb1MWBhH7NHJAbaLUwj4y-HhYeKk1CoVwD7mX-GmFGGreH3PTKaf8z7ZK1T6U74GDrrYoSlrgq-kSFCETygZRzMKT8oEOiuxMCajgTiio3JWNrildSgzxiV8BFiFMkjGfQP4IKjM1yMS8mKyQOmCM0ddOHuuwTdgbpxJcqpx0fQeM4WTvb8I0cOM4SjTVrJ2B90LT9rElCINjMU6oOODqDBlsTW2fYILe9iQQhRQ1VacpkdE0lrleBboLEOK6U3U5",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB6TzmwBhz52SxLJpZFfb0zO0QuAKfxcu263_7YqrPWnBn3Y9GW_w3A3VwUVk73ReWfIqnjVyQXmucFTkxb5HVLnlE8VDgAAza3eapgW5nVENYQ5_uaPDj646NOfdjokwE-2kYKhtycDtq40JdyDLFwrzT2HrXHQFIqe3O5zOdl6pOrC52K8luqUzqh7hDUClJfRmvHYtAASgwNuByMZ_-wPmGhOca-gv4nioUlN0e1DNIUEHsyBola47fx0iJUq2iaPhO1bNLzk6j9",
          ].map((src) => (
            <div key={src} className="min-w-[350px] h-[420px] rounded-3xl overflow-hidden relative shrink-0">
              <img className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" src={src} alt="Life at Nexus" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900/70 to-transparent">
                <h4 className="text-white text-lg font-bold">Life at Nexus</h4>
                <p className="text-white/80 text-sm">Culture, retreats, hackathons and more.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-[80px]">
        <div className="rounded-[40px] bg-[#131b2e] p-12 md:p-24 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">Ready to evolve your sales strategy?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">Join hundreds of global enterprises using Nexus Sales to power their revenue engine.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/register" className="rounded-xl bg-[#137FEC] px-8 py-4 font-semibold text-white hover:bg-blue-600 transition-all">Get Started Today</Link>
              <Link href="/pricing" className="rounded-xl border border-white/30 px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all">Book a Demo</Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-[1280px] px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          <div>
            <span className="block text-lg font-bold text-slate-900">Nexus Sales</span>
            <p className="mt-4 text-sm text-slate-500 max-w-xs">Driving enterprise growth through intelligent data orchestration and predictive sales modeling.</p>
          </div>
          <div>
            <h5 className="mb-6 font-bold text-slate-900">Company</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link href="/solutions" className="hover:text-blue-600">Solutions</Link></li>
              <li><Link href="/about" className="font-semibold text-blue-600">About Us</Link></li>
              <li><Link href="/status" className="hover:text-blue-600">Careers</Link></li>
              <li><Link href="/health" className="hover:text-blue-600">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="mb-6 font-bold text-slate-900">Resources</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link href="/" className="hover:text-blue-600">Blog</Link></li>
              <li><Link href="/" className="hover:text-blue-600">Help Center</Link></li>
              <li><Link href="/" className="hover:text-blue-600">Webinars</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="mb-6 font-bold text-slate-900">Legal</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link href="/" className="hover:text-blue-600">Privacy Policy</Link></li>
              <li><Link href="/" className="hover:text-blue-600">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-[1280px] px-6 text-center text-sm text-slate-500">© 2024 Nexus Sales. Built for enterprise excellence.</div>
      </footer>
    </main>
  );
}
