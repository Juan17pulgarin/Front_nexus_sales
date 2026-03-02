export default function CustomersPage() {
  return (
    <div className="bg-background-light font-display text-slate-900 dark:bg-background-dark dark:text-slate-100 min-h-screen">
      <div className="flex h-screen overflow-hidden">
        <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col h-full shrink-0">
          <div className="p-6 flex items-center gap-3">
            <div className="bg-primary rounded-lg p-1.5 flex items-center justify-center">
               <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                 <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor" />
               </svg>
            </div>
            <div>
              <h1 className="text-lg font-bold leading-none tracking-tight">Nexus Sales</h1>
              <p className="text-xs text-slate-500 font-medium">CRM Dashboard</p>
            </div>
          </div>
          <nav className="flex-1 px-3 space-y-1">
            <a
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              href="/home"
            >
              <span className="material-symbols-outlined">dashboard</span>
              <span className="text-sm font-semibold">Dashboard</span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg active-nav transition-colors" href="/customers">
              <span className="material-symbols-outlined">group</span>
              <span className="text-sm font-semibold">Customers</span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" href="/sales">
              <span className="material-symbols-outlined">receipt_long</span>
              <span className="text-sm font-semibold">Sales</span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" href="/reports">
              <span className="material-symbols-outlined">monitoring</span>
              <span className="text-sm font-semibold">Reports</span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors mt-auto" href="/settings">
              <span className="material-symbols-outlined">settings</span>
              <span className="text-sm font-semibold">Settings</span>
            </a>
          </nav>
          <div className="p-4 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3 p-2 bg-slate-50 dark:bg-slate-800 rounded-xl">
              <div className="size-9 rounded-full bg-primary/20 flex items-center justify-center text-primary overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  data-alt="User profile picture of a sales manager"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-onCrUHGfLBTg-2qQg4OQ8nNSbAWxtQbSeB69V3Z07ymD7ZKtP9IawuPTapwLQTv0klsaeUB5MmlOquyc_YM_NAEX4ZlyoBfIkW-XLM8QJe4cYExmUUwoRCQ0PerT4ou1aVeMYgqL--w-qna-tBwqOLNwIOOtxDdUqG2q1oB0sbt9gLT2edMHVCkFV-PfR4R6z56gcgDH6gF5U-LVsRYIxGBLB6StpmXStvcG2QnFprASj_yy8LcmgUN-JlmvuFtIKXacYaOxH0qX"
                />
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
                <input
                  className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 outline-none placeholder:text-slate-400"
                  placeholder="Search customers, orders, or documents..."
                  type="text"
                />
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

          <div className="flex flex-col flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <div>
                <h1 className="text-slate-900 dark:text-white text-3xl font-extrabold tracking-tight">Customer Directory</h1>
                <p className="text-slate-500 dark:text-slate-400 mt-1">Access and manage all contacts within the SalesLT database.</p>
              </div>
              <div className="flex gap-3 w-full md:w-auto">
                <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                  <span className="material-symbols-outlined text-lg">download</span>
                  Export
                </button>
                <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-semibold text-sm hover:bg-primary/90 shadow-sm transition-all">
                  <span className="material-symbols-outlined text-lg">person_add</span>
                  Add New Customer
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">Total Customers</span>
                  <span className="material-symbols-outlined text-primary text-xl">group</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">1,284</span>
                  <span className="text-emerald-500 text-xs font-bold flex items-center">
                    <span className="material-symbols-outlined text-xs">trending_up</span> 12%
                  </span>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">Active Leads</span>
                  <span className="material-symbols-outlined text-amber-500 text-xl">bolt</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">456</span>
                  <span className="text-emerald-500 text-xs font-bold flex items-center">
                    <span className="material-symbols-outlined text-xs">trending_up</span> 5.2%
                  </span>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">Total Revenue</span>
                  <span className="material-symbols-outlined text-emerald-500 text-xl">payments</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">$2.48M</span>
                  <span className="text-emerald-500 text-xs font-bold flex items-center">
                    <span className="material-symbols-outlined text-xs">trending_up</span> 18%
                  </span>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">Avg. Deal Size</span>
                  <span className="material-symbols-outlined text-violet-500 text-xl">analytics</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">$12.5k</span>
                  <span className="text-slate-400 text-xs font-bold">Stable</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-t-xl border-t border-x border-slate-200 dark:border-slate-800 p-4">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex flex-wrap gap-2 w-full md:w-auto">
                  <div className="relative w-full md:w-72">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                    <input className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-sm transition-all" placeholder="Search customers, companies..." type="text" />
                  </div>
                  <button className="flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700">
                    <span className="material-symbols-outlined text-lg">filter_list</span>
                    Filters
                  </button>
                </div>
                <div className="flex items-center gap-4 w-full md:w-auto justify-end">
                  <span className="text-xs text-slate-500 font-medium">Sorted by: <span className="text-slate-900 dark:text-slate-200">Total Spend (High to Low)</span></span>
                  <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </div>
              </div>
              <div className="flex gap-2 mt-4 overflow-x-auto pb-1 scrollbar-hide">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold flex items-center gap-1 shrink-0">
                  Active Customers <span className="material-symbols-outlined text-sm">close</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-semibold flex items-center gap-1 shrink-0 cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700">
                  Spend &gt; $10k
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-semibold flex items-center gap-1 shrink-0 cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700">
                  USA &amp; UK
                </span>
                <button className="text-primary text-xs font-bold px-2">Clear All</button>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      <div className="flex items-center gap-2">
                        Customer Name
                        <span className="material-symbols-outlined text-xs">unfold_more</span>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Company</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Address</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Total Spend</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="size-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">JS</div>
                        <div>
                          <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors cursor-pointer">Janet Schorr</div>
                          <div className="text-xs text-slate-500">janet.s@example.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4"><div className="text-sm font-medium text-slate-700 dark:text-slate-300">Adventure Works Cycles</div></td>
                    <td className="px-6 py-4"><div className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400"><span className="material-symbols-outlined text-xs">location_on</span>Redmond, USA</div></td>
                    <td className="px-6 py-4"><div className="text-sm font-bold text-slate-900 dark:text-white">$142,850.00</div></td>
                    <td className="px-6 py-4"><span className="px-2 py-1 rounded-md bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-tight">Active</span></td>
                    <td className="px-6 py-4 text-right"><button className="p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"><span className="material-symbols-outlined">edit</span></button></td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="size-9 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-400 font-bold text-sm">OR</div>
                        <div>
                          <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors cursor-pointer">Orlando Gee</div>
                          <div className="text-xs text-slate-500">orlando0@adventure-works.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4"><div className="text-sm font-medium text-slate-700 dark:text-slate-300">A Bike Store</div></td>
                    <td className="px-6 py-4"><div className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400"><span className="material-symbols-outlined text-xs">location_on</span>London, UK</div></td>
                    <td className="px-6 py-4"><div className="text-sm font-bold text-slate-900 dark:text-white">$89,240.50</div></td>
                    <td className="px-6 py-4"><span className="px-2 py-1 rounded-md bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-tight">Active</span></td>
                    <td className="px-6 py-4 text-right"><button className="p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"><span className="material-symbols-outlined">edit</span></button></td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="size-9 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400 font-bold text-sm">KL</div>
                        <div>
                          <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors cursor-pointer">Keith Lampeter</div>
                          <div className="text-xs text-slate-500">keith@lampeter.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4"><div className="text-sm font-medium text-slate-700 dark:text-slate-300">Front Drive Cyclery</div></td>
                    <td className="px-6 py-4"><div className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400"><span className="material-symbols-outlined text-xs">location_on</span>Munich, GER</div></td>
                    <td className="px-6 py-4"><div className="text-sm font-bold text-slate-900 dark:text-white">$12,400.00</div></td>
                    <td className="px-6 py-4"><span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-tight">Inactive</span></td>
                    <td className="px-6 py-4 text-right"><button className="p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"><span className="material-symbols-outlined">edit</span></button></td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="size-9 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center text-rose-600 dark:text-rose-400 font-bold text-sm">DW</div>
                        <div>
                          <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors cursor-pointer">Donna Walker</div>
                          <div className="text-xs text-slate-500">d.walker@globalcycles.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4"><div className="text-sm font-medium text-slate-700 dark:text-slate-300">Global Cycles</div></td>
                    <td className="px-6 py-4"><div className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400"><span className="material-symbols-outlined text-xs">location_on</span>Sydney, AUS</div></td>
                    <td className="px-6 py-4"><div className="text-sm font-bold text-slate-900 dark:text-white">$56,120.00</div></td>
                    <td className="px-6 py-4"><span className="px-2 py-1 rounded-md bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-tight">Active</span></td>
                    <td className="px-6 py-4 text-right"><button className="p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"><span className="material-symbols-outlined">edit</span></button></td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="size-9 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-sm">MH</div>
                        <div>
                          <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors cursor-pointer">Mark Hanson</div>
                          <div className="text-xs text-slate-500">mhanson@procycles.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4"><div className="text-sm font-medium text-slate-700 dark:text-slate-300">Professional Cyclery</div></td>
                    <td className="px-6 py-4"><div className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400"><span className="material-symbols-outlined text-xs">location_on</span>Paris, FRA</div></td>
                    <td className="px-6 py-4"><div className="text-sm font-bold text-slate-900 dark:text-white">$210,400.00</div></td>
                    <td className="px-6 py-4"><span className="px-2 py-1 rounded-md bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-bold uppercase tracking-tight">Pending</span></td>
                    <td className="px-6 py-4 text-right"><button className="p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"><span className="material-symbols-outlined">edit</span></button></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-b-xl border-x border-b border-slate-200 dark:border-slate-800 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-slate-500 font-medium">
                Showing <span className="text-slate-900 dark:text-white">1 - 10</span> of <span className="text-slate-900 dark:text-white">1,284</span> results
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-400 disabled:opacity-50" disabled>
                  <span className="material-symbols-outlined text-lg">chevron_left</span>
                </button>
                <button className="px-3.5 py-1.5 bg-primary text-white rounded-lg text-sm font-bold">1</button>
                <button className="px-3.5 py-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-sm font-medium transition-colors">2</button>
                <button className="px-3.5 py-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-sm font-medium transition-colors">3</button>
                <span className="px-1 text-slate-400">...</span>
                <button className="px-3.5 py-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-sm font-medium transition-colors">128</button>
                <button className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-400">
                  <span className="material-symbols-outlined text-lg">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
