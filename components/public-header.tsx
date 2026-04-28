import Link from "next/link";

type PublicHeaderProps = {
  active: "platform" | "solutions" | "pricing" | "about" | "contact";
};

function navLinkClass(isActive: boolean) {
  return isActive
    ? "text-[#005baf] dark:text-[#004689] font-semibold border-b-2 border-[#005baf] pb-1 hover:opacity-80 transition-all duration-200"
    : "text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:opacity-80 transition-all duration-200";
}

export function PublicHeader({ active }: PublicHeaderProps) {
  return (
    <header className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md fixed top-0 w-full z-50 border-b border-slate-200 dark:border-slate-800 shadow-sm font-manrope antialiased">
      <div className="max-w-[1280px] mx-auto px-8 flex justify-between items-center h-20">
        <div className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Nexus Sales</div>
        <nav className="hidden md:flex items-center gap-8">
          <Link className={navLinkClass(active === "platform")} href="/#platform">
            Platform
          </Link>
          <Link className={navLinkClass(active === "solutions")} href="/solutions">
            Solutions
          </Link>
          <Link className={navLinkClass(active === "pricing")} href="/pricing">
            Pricing
          </Link>
          <Link className={navLinkClass(active === "about")} href="/about">
            About Us
          </Link>
          <Link className={navLinkClass(active === "contact")} href="/contact">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 font-semibold text-sm transition-colors">
            Login
          </Link>
          <Link href="/register" className="bg-[#137FEC] bg-gradient-to-b from-[#2E91FF] to-[#137FEC] text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-all shadow-sm">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}