export default function HomePage() {
  return (
    <div className="bg-background-light font-display text-slate-900 dark:bg-background-dark dark:text-slate-100 min-h-screen">
      <div className="flex h-screen overflow-hidden">
        <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col h-full shrink-0">
          <div className="p-6 flex items-center gap-3">
            <div className="bg-primary rounded-lg p-1.5 flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-2xl">rocket_launch</span>
            </div>
            <div>
              <h1 className="text-lg font-bold leading-none tracking-tight">Nexus Sales</h1>
              <p className="text-xs text-slate-500 font-medium">CRM Dashboard</p>
            </div>
          </div>
          <nav className="flex-1 px-3 space-y-1">
            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg active-nav transition-colors" href="/home">
              <span className="material-symbols-outlined">dashboard</span>
              <span className="text-sm font-semibold">Dashboard</span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" href="/customers">
              <span className="material-symbols-outlined">group</span>
              <span className="text-sm font-semibold">Customers</span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" href="#">
              <span className="material-symbols-outlined">receipt_long</span>
              <span className="text-sm font-semibold">Sales</span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" href="#">
              <span className="material-symbols-outlined">monitoring</span>
              <span className="text-sm font-semibold">Reports</span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors mt-auto" href="#">
              <span className="material-symbols-outlined">settings</span>
              <span className="text-sm font-semibold">Settings</span>
            </a>
          </nav>
          <div className="p-4 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3 p-2 bg-slate-50 dark:bg-slate-800 rounded-xl">
              <div className="size-9 rounded-full bg-primary/20 flex items-center justify-center text-primary overflow-hidden">
                <img className="w-full h-full object-cover" data-alt="User profile picture of a sales manager" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-onCrUHGfLBTg-2qQg4OQ8nNSbAWxtQbSeB69V3Z07ymD7ZKtP9IawuPTapwLQTv0klsaeUB5MmlOquyc_YM_NAEX4ZlyoBfIkW-XLM8QJe4cYExmUUwoRCQ0PerT4ou1aVeMYgqL--w-qna-tBwqOLNwIOOtxDdUqG2q1oB0sbt9gLT2edMHVCkFV-PfR4R6z56gcgDH6gF5U-LVsRYIxGBLB6StpmXStvcG2QnFprASj_yy8LcmgUN-JlmvuFtIKXacYaOxH0qX" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold truncate">Alex Morgan</p>
                <p className="text-xs text-slate-500 truncate">Admin Account</p>
              </div>
              <span className="material-symbols-outlined text-slate-400 text-lg">unfold_more</span>
            </div>
          </div>
        </aside>
        <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
          <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 sticky top-0 z-10">
            <div className="flex items-center gap-4 flex-1 max-w-xl">
              <div className="relative w-full">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
                <input className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 outline-none placeholder:text-slate-400" placeholder="Search customers, orders, or documents..." type="text" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="size-10 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 relative">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2 right-2.5 size-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
              </button>
              <button className="bg-primary text-white text-sm font-bold px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary/90">
                <span className="material-symbols-outlined text-lg">add</span>
                New Lead
              </button>
            </div>
          </header>
          <div className="p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Dashboard Overview</h2>
              <p className="text-slate-500 text-sm mt-1">Welcome back, Alex. Here is what&apos;s happening today.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                    <span className="material-symbols-outlined text-primary">group</span>
                  </span>
                  <span className="text-emerald-500 text-sm font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-base">trending_up</span>
                    +5%
                  </span>
                </div>
                <p className="text-slate-500 text-sm font-medium">Total Customers</p>
                <h3 className="text-3xl font-bold mt-1">1,240</h3>
                <p className="text-xs text-slate-400 mt-4 italic">Updated 2 mins ago</p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="p-2 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg">
                    <span className="material-symbols-outlined text-emerald-600">payments</span>
                  </span>
                  <span className="text-emerald-500 text-sm font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-base">trending_up</span>
                    +12%
                  </span>
                </div>
                <p className="text-slate-500 text-sm font-medium">Total Revenue</p>
                <h3 className="text-3xl font-bold mt-1">$452,000</h3>
                <p className="text-xs text-slate-400 mt-4 italic">Fiscal year 2024</p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="p-2 bg-amber-50 dark:bg-amber-900/30 rounded-lg">
                    <span className="material-symbols-outlined text-amber-600">inventory_2</span>
                  </span>
                  <span className="bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded">
                    Active
                  </span>
                </div>
                <p className="text-slate-500 text-sm font-medium">Open Orders</p>
                <h3 className="text-3xl font-bold mt-1">18</h3>
                <p className="text-xs text-slate-400 mt-4 italic">4 requiring urgent attention</p>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col">
                <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <h3 className="font-bold text-lg">Top Customers</h3>
                  <button className="text-primary text-sm font-bold hover:underline">View All</button>
                </div>
                <div className="overflow-x-auto flex-1">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-slate-50 dark:bg-slate-800/50">
                      <tr>
                        <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Customer</th>
                        <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Location</th>
                        <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Lifetime Value</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="size-8 rounded-full bg-slate-200 overflow-hidden">
                              <img className="w-full h-full object-cover" data-alt="Portrait of corporate client" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZiWpSClSRINIwunehDRhtsrijMet0vALa8zG-N3SxAroleuUS8IrE3TU0V2mrLauI-hKgdAwNJMK9vYOL2QnPqLcUAqbwE7Qqrc_i7bypVSE7uWqDkBzT8XNAq0hADFRo9R5Fmd1eJ1yj2MlvG3sSvw89dzt39myGft8vlZybYp9CuGqGhkkCYvyOTDU8PSqRm6Be0Rv1g0VAL7nZGp6gFyb8svnFovss3lNiPrPP50yHHpszH0iNGWQsgPn9ccjweavmkbi4ZPWa" />
                            </div>
                            <div className="font-semibold text-sm">Acme Corporation</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">San Francisco, CA</td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 text-[11px] font-bold">Premium</span>
                        </td>
                        <td className="px-6 py-4 text-sm font-bold text-right">$42,500.00</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="size-8 rounded-full bg-slate-200 overflow-hidden">
                              <img className="w-full h-full object-cover" data-alt="Professional customer avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeGlaeoFmux3A60RvNB2HNFkazpWHjfHdWBpGJBFDZaJPa51PcqvXaNjTUNyA_lf1jDgcg3pY6ezx5lHinfCHwcnI8rSmk3j56-gU9jGj0Qobj7hEnfFrLvaf5VrGqVyl5D4GV9U-TE8HhR8PPFhWUxWIOGgbpOw0DC18ApQzIbbIcvFKaR9agFKzcWFG4tmrS0CzA499R6aJ7U_TLmYsQFB4o_POubOWSO8bFC-xK4O1R1LJk1sR6aNXyeWv5l-uWxJnUnTJIAlc4" />
                            </div>
                            <div className="font-semibold text-sm">Global Logistics Ltd</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">London, UK</td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-bold">Regular</span>
                        </td>
                        <td className="px-6 py-4 text-sm font-bold text-right">$38,120.00</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="size-8 rounded-full bg-slate-200 overflow-hidden">
                              <img className="w-full h-full object-cover" data-alt="Business client profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0SBASsL0LIkc5jevx7MK0ODpz2Blhv-IL-2HDWIbsoNHyROmTNqxXV1JdS1kg-6i6fgPsKYGJ8ozesAe7Otf90CCANcDG6CaBnxVwaKfaHE05UcKq9woEjC7VLHOP0zwDzkTkEAA3bCK9ucVw9wU_lEyDrbG2xLdPmrInng_I0OK3qq1Edhfc0mI7I7OQ7rstrTzxGwkGbuilgt25FJ7SKKi4Sxno8VjaIhVkvhOdH5ZM_q0Bs3jSSRxzsan2m5mHwpl8_L_6-0iv" />
                            </div>
                            <div className="font-semibold text-sm">TechFlow Systems</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Austin, TX</td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 text-[11px] font-bold">Premium</span>
                        </td>
                        <td className="px-6 py-4 text-sm font-bold text-right">$29,400.00</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="size-8 rounded-full bg-slate-200 overflow-hidden">
                              <img className="w-full h-full object-cover" data-alt="Female CEO client avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAWiMQGsujXBP1HS_3uVW3Fx0iUK6bLHfevhzZUZ6I056NnubNDCfTvhMWYLPmOo6d6w7c8YJJruqf0caKtvV9M1cMRJwyrrT4QODynH7-AilDX42b184JL1M90q1ySruwcaaMWapU6Bt67POgjE2WJS03qAuNbnDD5EAyt4y_RCHhhWh1lGobpBqqR1Ems4ZAhat7ivdhN44tJKZFuxLzwyKB6MINh55qCOsXYeRE9iqdbaw8JO8y3WpNs5cVE1kuMNXh6Qm9gFWy" />
                            </div>
                            <div className="font-semibold text-sm">Silverline Media</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">New York, NY</td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 text-[11px] font-bold">New</span>
                        </td>
                        <td className="px-6 py-4 text-sm font-bold text-right">$12,850.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-lg">Recent Activity</h3>
                  <button className="size-8 rounded-lg hover:bg-slate-50 flex items-center justify-center text-slate-400">
                    <span className="material-symbols-outlined text-xl">more_vert</span>
                  </button>
                </div>
                <div className="space-y-6 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100 dark:before:bg-slate-800">
                  <div className="flex gap-4 relative">
                    <div className="size-6 rounded-full bg-primary flex items-center justify-center z-10 ring-4 ring-white dark:ring-slate-900 shrink-0">
                      <span className="material-symbols-outlined text-[14px] text-white">shopping_cart</span>
                    </div>
                    <div>
                      <p className="text-sm">New order from <span className="font-bold">Acme Corp</span></p>
                      <p className="text-xs text-slate-400 mt-1">2 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex gap-4 relative">
                    <div className="size-6 rounded-full bg-emerald-500 flex items-center justify-center z-10 ring-4 ring-white dark:ring-slate-900 shrink-0">
                      <span className="material-symbols-outlined text-[14px] text-white">phone_in_talk</span>
                    </div>
                    <div>
                      <p className="text-sm">Call logged for <span className="font-bold">John Doe</span></p>
                      <p className="text-xs text-slate-400 mt-1">1 hour ago</p>
                    </div>
                  </div>
                  <div className="flex gap-4 relative">
                    <div className="size-6 rounded-full bg-amber-500 flex items-center justify-center z-10 ring-4 ring-white dark:ring-slate-900 shrink-0">
                      <span className="material-symbols-outlined text-[14px] text-white">sync_alt</span>
                    </div>
                    <div>
                      <p className="text-sm">Status changed: <span className="font-bold">Lead to Prospect</span></p>
                      <p className="text-xs text-slate-400 mt-1">3 hours ago</p>
                    </div>
                  </div>
                  <div className="flex gap-4 relative">
                    <div className="size-6 rounded-full bg-slate-400 flex items-center justify-center z-10 ring-4 ring-white dark:ring-slate-900 shrink-0">
                      <span className="material-symbols-outlined text-[14px] text-white">person_add</span>
                    </div>
                    <div>
                      <p className="text-sm">New customer registered: <span className="font-bold">Urban Outfitters</span></p>
                      <p className="text-xs text-slate-400 mt-1">5 hours ago</p>
                    </div>
                  </div>
                  <div className="flex gap-4 relative">
                    <div className="size-6 rounded-full bg-red-500 flex items-center justify-center z-10 ring-4 ring-white dark:ring-slate-900 shrink-0">
                      <span className="material-symbols-outlined text-[14px] text-white">mail</span>
                    </div>
                    <div>
                      <p className="text-sm">Support ticket closed for <span className="font-bold">Acme Corp</span></p>
                      <p className="text-xs text-slate-400 mt-1">8 hours ago</p>
                    </div>
                  </div>
                </div>
                <button className="mt-8 w-full py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-sm font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  Load More Activities
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
