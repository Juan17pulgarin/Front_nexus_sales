'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigationItems = [
  { href: '/home', label: 'Dashboard', icon: 'dashboard' },
  { href: '/customers', label: 'Customers', icon: 'group' },
  { href: '/sales', label: 'Sales', icon: 'receipt_long' },
  { href: '/reports', label: 'Reports', icon: 'monitoring' },
  { href: '/settings', label: 'Settings', icon: 'settings' },
];

export function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/home') {
      return pathname === '/home';
    }

    return pathname.startsWith(href);
  };

  return (
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
        {navigationItems.map((item) => (
          <Link
            key={item.href}
            className={`flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors ${
              isActive(item.href)
                ? 'bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white'
                : 'text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800'
            }`}
            href={item.href}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="text-sm font-semibold">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="border-t border-slate-200 p-4 dark:border-slate-800">
        <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-2 dark:bg-slate-800">
          <div className="bg-primary/20 text-primary flex size-9 items-center justify-center overflow-hidden rounded-full">
            <span className="material-symbols-outlined text-lg">person</span>
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-bold">Alex Morgan</p>
            <p className="truncate text-xs text-slate-500">Admin Account</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
