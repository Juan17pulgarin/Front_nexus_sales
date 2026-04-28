import Link from "next/link";
import { Manrope } from "next/font/google";
import { PublicHeader } from "@/components/public-header";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export default function ContactPage() {
  return (
    <main className={`${manrope.variable} bg-background text-on-surface font-body-md`}>
      <PublicHeader active="contact" />

      <div className="pt-32">
        <section className="max-w-[1280px] mx-auto px-6 mb-section-gap">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container text-label-sm font-label-sm rounded-full mb-6">CONNECT WITH US</span>
            <h1 className="font-hero-h1 text-hero-h1 text-on-surface mb-6">Let's build the future of <span className="text-primary">enterprise sales</span> together.</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">Have questions about our CRM solutions or looking for a custom enterprise partnership? Our experts are here to help you navigate your growth journey.</p>
          </div>
        </section>

        <section className="max-w-[1280px] mx-auto px-6 mb-section-gap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 bg-white p-10 rounded-xl border border-slate-200 shadow-[0px_10px_30px_rgba(15,23,42,0.05)]">
              <h3 className="font-card-h3 text-card-h3 mb-8">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-label-sm font-label-sm text-on-surface-variant">FULL NAME</label>
                    <input className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-4 focus:ring-primary-container/20 focus:border-primary outline-none transition-all duration-200 font-body-md" placeholder="John Doe" type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-label-sm font-label-sm text-on-surface-variant">WORK EMAIL</label>
                    <input className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-4 focus:ring-primary-container/20 focus:border-primary outline-none transition-all duration-200 font-body-md" placeholder="john@company.com" type="email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-label-sm font-label-sm text-on-surface-variant">SUBJECT</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-4 focus:ring-primary-container/20 focus:border-primary outline-none transition-all duration-200 font-body-md appearance-none bg-white">
                    <option>Enterprise Sales Inquiry</option>
                    <option>Technical Support</option>
                    <option>Partnership Opportunities</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-label-sm font-label-sm text-on-surface-variant">MESSAGE</label>
                  <textarea className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-4 focus:ring-primary-container/20 focus:border-primary outline-none transition-all duration-200 font-body-md" placeholder="How can we help your team?" rows={5}></textarea>
                </div>
                <button className="w-full bg-primary text-white py-4 rounded-lg font-button-text bg-gradient-to-b from-[#2E91FF] to-[#137FEC] hover:shadow-xl transition-all duration-200 active:scale-[0.98] flex justify-center items-center gap-2" type="submit">
                  Send Message
                  <span className="material-symbols-outlined text-[20px]">send</span>
                </button>
              </form>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 gap-8">
              <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-[0px_10px_30px_rgba(15,23,42,0.05)] hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-[#E8F2FE] rounded-lg flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>headset_mic</span>
                </div>
                <h3 className="font-card-h3 text-card-h3 mb-2">Direct Support</h3>
                <p className="text-on-surface-variant font-body-md mb-6">Available 24/7 for our enterprise tier clients with dedicated account managers.</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-on-surface font-medium">
                    <span className="material-symbols-outlined text-primary text-body-lg">mail</span>
                    support@nexussales.com
                  </div>
                  <div className="flex items-center gap-3 text-on-surface font-medium">
                    <span className="material-symbols-outlined text-primary text-body-lg">call</span>
                    +1 (888) 555-0123
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 p-8 rounded-xl text-white shadow-[0px_10px_30px_rgba(15,23,42,0.05)]">
                <h3 className="font-card-h3 text-card-h3 mb-6">Join the Nexus Ecosystem</h3>
                <div className="grid grid-cols-2 gap-4">
                  <a className="flex items-center gap-3 p-3 rounded-lg border border-slate-700 hover:bg-slate-800 transition-all" href="#">
                    <span className="material-symbols-outlined text-primary">hub</span>
                    <span className="font-label-sm text-label-sm">LinkedIn</span>
                  </a>
                  <a className="flex items-center gap-3 p-3 rounded-lg border border-slate-700 hover:bg-slate-800 transition-all" href="#">
                    <span className="material-symbols-outlined text-primary">alternate_email</span>
                    <span className="font-label-sm text-label-sm">Twitter</span>
                  </a>
                  <a className="flex items-center gap-3 p-3 rounded-lg border border-slate-700 hover:bg-slate-800 transition-all" href="#">
                    <span className="material-symbols-outlined text-primary">groups</span>
                    <span className="font-label-sm text-label-sm">Community</span>
                  </a>
                  <a className="flex items-center gap-3 p-3 rounded-lg border border-slate-700 hover:bg-slate-800 transition-all" href="#">
                    <span className="material-symbols-outlined text-primary">rss_feed</span>
                    <span className="font-label-sm text-label-sm">Blog</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-[1280px] mx-auto px-6 mb-section-gap">
          <h2 className="font-section-h2 text-section-h2 mb-stack-lg">Global Presence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group">
              <div className="relative h-[240px] rounded-xl overflow-hidden mb-6 bg-slate-200">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC70xb15oM61mPRWqbzgUkT0nj7f2RV0EvzlQCgVQu7AtCgS9sNvufBZV11UjYJIIHhzG4p7LwPoI1PLj6WP5eK3WrFsAVZaIGtNvRfce2okKTRLWmnTPEfm4C6HJ31EJDE3HaX0R96UKdwfsLcBshgoGlFaM07wFCABew_WO4wME1G_4STcgQyc9sBAOb-5u1QfBKApNgNXBQL_c0YPps8BTI6OKLNtZt3C8cM3D8HlC0cqFE_yOKL9iEmCLfl4unVnUWiU_7si_Hw" alt="San Francisco" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>
              <h3 className="font-card-h3 text-card-h3 mb-2">San Francisco</h3>
              <p className="text-on-surface-variant font-body-md mb-4">100 Market Street, Suite 400<br/>San Francisco, CA 94105</p>
              <a className="inline-flex items-center gap-2 text-primary font-button-text hover:gap-4 transition-all duration-200" href="#">View on Map <span className="material-symbols-outlined">arrow_forward</span></a>
            </div>

            <div className="group">
              <div className="relative h-[240px] rounded-xl overflow-hidden mb-6 bg-slate-200">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANtASAebHyU8a6vGjqHwRBozjkvseH-k8GUsgyTMLi4Ivso3dRPuWs--SLwuiaKGsxlsoHdyaBtKjPkGXtw3f5SfRpm8ZCbQ0YP-8TtYclcAl7CJAjkJU3IQd5JO1xlioUstQBl_yEgCTJur3PSYpBltK_nFK7eQr--HpcUbHe3kWgUw5ntu_3cKaJuaqmq__Xcbq8PwNLX-9RCLrKkgRYknQed_pDymg2zzKOHZb4ZP8e1wqktpWnlfuFyodG-nLVGS_B0CfSJRqq" alt="London" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>
              <h3 className="font-card-h3 text-card-h3 mb-2">London</h3>
              <p className="text-on-surface-variant font-body-md mb-4">25 Old Broad St, Level 12<br/>London EC2N 1HQ, UK</p>
              <a className="inline-flex items-center gap-2 text-primary font-button-text hover:gap-4 transition-all duration-200" href="#">View on Map <span className="material-symbols-outlined">arrow_forward</span></a>
            </div>

            <div className="group">
              <div className="relative h-[240px] rounded-xl overflow-hidden mb-6 bg-slate-200">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2KnQoIV2kYlWNuh0jsBAtQmLZdRm-96z83r3x9oOHjQPLk2Rb2FpZp0GtcMbLFlqFl22dkmTvPWHhmo0kOi3O9eu8X81kKudy4i_rJpYQ7MOa-Hub9EP3J4bDCy9u_8rNz-bE-pFFc4NR5QHjMavs3E2eq8JnTHMr2XjANhS8TPkMChZvdYL5VDPnUkMHK81AxfhQriT-nWbtOXPRjzTfmaS3tgyPpU87RTDgTJdEB1_3RV8GT6ZECvjck9z6JnVCFVRw2SQpaGjv" alt="Sydney" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>
              <h3 className="font-card-h3 text-card-h3 mb-2">Sydney</h3>
              <p className="text-on-surface-variant font-body-md mb-4">100 Barangaroo Ave, Level 22<br/>Sydney NSW 2000, Australia</p>
              <a className="inline-flex items-center gap-2 text-primary font-button-text hover:gap-4 transition-all duration-200" href="#">View on Map <span className="material-symbols-outlined">arrow_forward</span></a>
            </div>
          </div>
        </section>

        <section className="max-w-[1280px] mx-auto px-6 mb-section-gap">
          <div className="bg-primary-container rounded-3xl p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-section-h2 text-section-h2 mb-6">Ready to accelerate your revenue?</h2>
              <p className="text-body-lg mb-10 opacity-90">Join 500+ enterprises that have scaled their sales operations with Nexus CRM.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-white text-primary px-10 py-4 rounded-lg font-button-text hover:shadow-2xl transition-all duration-200 active:scale-95">Request a Demo</button>
                <button className="border border-white/30 backdrop-blur-sm text-white px-10 py-4 rounded-lg font-button-text hover:bg-white/10 transition-all duration-200">Explore Pricing</button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="bg-slate-50 dark:bg-slate-950 full-width border-t mt-[120px] border-slate-200 dark:border-slate-800">
        <div className="max-w-[1280px] mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="col-span-2 md:col-span-1">
            <span className="text-lg font-bold text-slate-900 dark:text-white mb-4 block">Nexus Sales</span>
            <p className="font-manrope text-sm text-slate-500 dark:text-slate-400 mb-6">Transforming enterprise sales through precision data and intelligent automation.</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><Link className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-all" href="/solutions">Solutions</Link></li>
              <li><Link className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-all" href="/">Features</Link></li>
              <li><Link className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-all" href="/pricing">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-all" href="/about">About Us</Link></li>
              <li><Link className="text-blue-600 font-semibold" href="/contact">Contact</Link></li>
              <li><Link className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-all" href="#">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-all" href="#">Privacy Policy</Link></li>
              <li><Link className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-all" href="#">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1280px] mx-auto px-6 py-8 border-t border-slate-200 dark:border-slate-800">
          <p className="font-manrope text-sm text-slate-500 dark:text-slate-400">© 2024 Nexus Sales. Built for enterprise excellence.</p>
        </div>
      </footer>
    </main>
  );
}
