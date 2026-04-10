"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

function navItemClass(isActive: boolean) {
  const baseClass =
    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors";

  if (isActive) {
    return `${baseClass} bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-200`;
  }

  return `${baseClass} text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800`;
}

export default function AppLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-slate-900 dark:text-slate-100">
      <div className="flex h-screen overflow-hidden">
        <aside className="flex h-full w-64 shrink-0 flex-col border-r border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center gap-3 p-6">
            <div className="bg-primary flex items-center justify-center rounded-lg p-1.5">
              <span className="material-symbols-outlined text-2xl text-white">rocket_launch</span>
            </div>
            <div>
              <h1 className="text-lg leading-none font-bold tracking-tight">Nexus Sales</h1>
              <p className="text-xs font-medium text-slate-500">CRM Dashboard</p>
            </div>
          </div>

          <nav className="flex-1 space-y-1 px-3">
            <Link href="/home" className={navItemClass(pathname === "/home")}>
              <span className="material-symbols-outlined">dashboard</span>
              Home
            </Link>
            <Link
              href="/customers"
              className={navItemClass(pathname === "/customers" || pathname.startsWith("/customers/"))}
            >
              <span className="material-symbols-outlined">group</span>
              Customers
            </Link>
            <Link href="/sales" className={navItemClass(pathname === "/sales" || pathname.startsWith("/sales/"))}>
              <span className="material-symbols-outlined">receipt_long</span>
              Sales
            </Link>
            <a href="#" className={navItemClass(false)}>
              <span className="material-symbols-outlined">monitoring</span>
              Reports
            </a>
            <a href="#" className={`${navItemClass(false)} mt-auto`}>
              <span className="material-symbols-outlined">settings</span>
              Settings
            </a>
          </nav>

          <div className="border-t border-slate-200 p-4 dark:border-slate-800">
            <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-2 dark:bg-slate-800">
              <div className="bg-primary/20 text-primary flex size-9 items-center justify-center overflow-hidden rounded-full">
                <img
                  className="h-full w-full object-cover"
                  data-alt="User profile picture of a sales manager"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-onCrUHGfLBTg-2qQg4OQ8nNSbAWxtQbSeB69V3Z07ymD7ZKtP9IawuPTapwLQTv0klsaeUB5MmlOquyc_YM_NAEX4ZlyoBfIkW-XLM8QJe4cYExmUUwoRCQ0PerT4ou1aVeMYgqL--w-qna-tBwqOLNwIOOtxDdUqG2q1oB0sbt9gLT2edMHVCkFV-PfR4R6z56gcgDH6gF5U-LVsRYIxGBLB6StpmXStvcG2QnFprASj_yy8LcmgUN-JlmvuFtIKXacYaOxH0qX"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold">Alex Morgan</p>
                <p className="truncate text-xs text-slate-500">Admin Account</p>
              </div>
              <span className="material-symbols-outlined text-lg text-slate-400">unfold_more</span>
            </div>
          </div>
        </aside>

        <main className="flex min-w-0 flex-1 flex-col overflow-y-auto">
          <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6 dark:border-slate-800 dark:bg-slate-900">
            <div>
              <p className="text-xs font-semibold tracking-[0.12em] text-slate-500 uppercase">Panel</p>
              <h2 className="text-sm font-bold text-slate-900 dark:text-slate-100">Gestion de Clientes</h2>
            </div>

            <Link
              href="/customers/new"
              className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Nuevo cliente
            </Link>
          </header>

          <div className="min-h-0 flex-1">{children}</div>
        </main>
      </div>
    </div>
  );
}
