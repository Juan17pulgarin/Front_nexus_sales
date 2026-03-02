export default function SalesPage() {
  return (
    <div className="bg-background-light font-display min-h-screen text-slate-900 dark:bg-background-dark dark:text-slate-100">
      <div className="flex h-screen overflow-hidden">
        <aside className="h-full w-64 shrink-0 flex-col border-r border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 flex">
          <div className="flex items-center gap-3 p-6">
            <div className="flex items-center justify-center rounded-lg bg-primary p-1.5">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor" />
                </svg>
            </div>
            <div>
              <h1 className="text-lg font-bold leading-none tracking-tight">Nexus Sales</h1>
              <p className="text-xs font-medium text-slate-500">CRM Dashboard</p>
            </div>
          </div>
          <nav className="flex-1 space-y-1 px-3">
            <a
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-600 transition-colors hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800"
              href="/home"
            >
              <span className="material-symbols-outlined">dashboard</span>
              <span className="text-sm font-semibold">Dashboard</span>
            </a>
            <a
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-600 transition-colors hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800"
              href="/customers"
            >
              <span className="material-symbols-outlined">group</span>
              <span className="text-sm font-semibold">Customers</span>
            </a>
            <a className="active-nav flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors" href="/sales">
              <span className="material-symbols-outlined">receipt_long</span>
              <span className="text-sm font-semibold">Sales</span>
            </a>
            <a
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-600 transition-colors hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800"
              href="/reports"
            >
              <span className="material-symbols-outlined">monitoring</span>
              <span className="text-sm font-semibold">Reports</span>
            </a>
            <a
              className="mt-auto flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-600 transition-colors hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800"
              href="/settings"
            >
              <span className="material-symbols-outlined">settings</span>
              <span className="text-sm font-semibold">Settings</span>
            </a>
          </nav>
          <div className="border-t border-slate-200 p-4 dark:border-slate-800">
            <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-2 dark:bg-slate-800">
              <div className="size-9 overflow-hidden rounded-full bg-primary/20 text-primary flex items-center justify-center">
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
          <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-8 dark:border-slate-800 dark:bg-slate-900">
            <div className="flex max-w-xl flex-1 items-center gap-4">
              <div className="relative w-full">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-xl text-slate-400">
                  search
                </span>
                <input
                  className="w-full rounded-lg border-none bg-slate-50 py-2 pl-10 pr-4 text-sm outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 dark:bg-slate-800"
                  placeholder="Search customers, orders, or documents..."
                  type="text"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative flex size-10 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute right-2.5 top-2 size-2 rounded-full border-2 border-white bg-red-500 dark:border-slate-900" />
              </button>
              <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-primary/90">
                <span className="material-symbols-outlined text-lg">add</span>
                New Lead
              </button>
            </div>
          </header>

          <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-8 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">Sales Orders Overview</h1>
                <p className="mt-1 text-slate-500 dark:text-slate-400">Monitor sales performance and manage active orders.</p>
              </div>
              <div className="flex w-full gap-3 md:w-auto">
                <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 md:flex-none">
                  <span className="material-symbols-outlined text-lg">ios_share</span>
                  Export
                </button>
                <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary/90 md:flex-none">
                  <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                  Create New Sale
                </button>
              </div>
            </div>

            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Total Sales Revenue</span>
                  <span className="material-symbols-outlined text-xl text-emerald-500">payments</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">$842,500.00</span>
                  <span className="flex items-center text-xs font-bold text-emerald-500">
                    <span className="material-symbols-outlined text-xs">trending_up</span> 14%
                  </span>
                </div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Number of Orders</span>
                  <span className="material-symbols-outlined text-xl text-primary">shopping_bag</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">1,422</span>
                  <span className="flex items-center text-xs font-bold text-emerald-500">
                    <span className="material-symbols-outlined text-xs">trending_up</span> 8.1%
                  </span>
                </div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Average Order Value</span>
                  <span className="material-symbols-outlined text-xl text-violet-500">analytics</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">$592.40</span>
                  <span className="text-xs font-bold text-slate-400">Stable</span>
                </div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Sales Pipeline</span>
                  <span className="text-xs font-bold text-primary">75% of Target</span>
                </div>
                <div className="mt-3">
                  <div className="mb-1 flex items-center justify-between text-[10px] font-bold uppercase text-slate-400">
                    <span>$1.2M Goal</span>
                    <span>$900k Current</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-100 dark:bg-slate-800">
                    <div className="h-2 rounded-full bg-primary" style={{ width: "75%" }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-t-xl border-x border-t border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <div className="flex w-full flex-wrap gap-2 md:w-auto">
                  <div className="relative w-full md:w-72">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-sm text-slate-400">
                      search
                    </span>
                    <input
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-9 pr-4 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-slate-800"
                      placeholder="Search orders, customers..."
                      type="text"
                    />
                  </div>
                  <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700">
                    <span className="material-symbols-outlined text-lg">tune</span>
                    Filters
                  </button>
                </div>
                <div className="flex w-full items-center justify-end gap-4 md:w-auto">
                  <span className="text-xs font-medium text-slate-500">Sorted by: <span className="text-slate-900 dark:text-slate-200">Date (Newest)</span></span>
                  <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                    <span className="material-symbols-outlined">more_horiz</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-800/50">
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Order ID</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Customer Name</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Date</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Amount</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Status</th>
                    <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  <tr className="group transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="px-6 py-4"><span className="font-mono text-sm font-semibold text-primary">#ORD-90241</span></td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">JS</div>
                        <div className="text-sm font-semibold text-slate-900 dark:text-white">Janet Schorr</div>
                      </div>
                    </td>
                    <td className="px-6 py-4"><div className="text-sm text-slate-600 dark:text-slate-400">Oct 24, 2023</div></td>
                    <td className="px-6 py-4"><div className="text-sm font-bold text-slate-900 dark:text-white">$1,240.00</div></td>
                    <td className="px-6 py-4">
                      <span className="w-fit flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                        <span className="size-1.5 rounded-full bg-emerald-500"></span>
                        Completed
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 text-slate-400 transition-colors hover:text-primary">
                        <span className="material-symbols-outlined">visibility</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="group transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="px-6 py-4"><span className="font-mono text-sm font-semibold text-primary">#ORD-90238</span></td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex size-8 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-600">OG</div>
                        <div className="text-sm font-semibold text-slate-900 dark:text-white">Orlando Gee</div>
                      </div>
                    </td>
                    <td className="px-6 py-4"><div className="text-sm text-slate-600 dark:text-slate-400">Oct 23, 2023</div></td>
                    <td className="px-6 py-4"><div className="text-sm font-bold text-slate-900 dark:text-white">$890.50</div></td>
                    <td className="px-6 py-4">
                      <span className="w-fit flex items-center gap-1 rounded-full bg-blue-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                        <span className="size-1.5 rounded-full bg-blue-500"></span>
                        Shipped
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 text-slate-400 transition-colors hover:text-primary">
                        <span className="material-symbols-outlined">visibility</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="group transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="px-6 py-4"><span className="font-mono text-sm font-semibold text-primary">#ORD-90235</span></td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex size-8 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600">KL</div>
                        <div className="text-sm font-semibold text-slate-900 dark:text-white">Keith Lampeter</div>
                      </div>
                    </td>
                    <td className="px-6 py-4"><div className="text-sm text-slate-600 dark:text-slate-400">Oct 22, 2023</div></td>
                    <td className="px-6 py-4"><div className="text-sm font-bold text-slate-900 dark:text-white">$3,450.00</div></td>
                    <td className="px-6 py-4">
                      <span className="w-fit flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                        <span className="size-1.5 rounded-full bg-amber-500"></span>
                        Pending
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 text-slate-400 transition-colors hover:text-primary">
                        <span className="material-symbols-outlined">visibility</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="group transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="px-6 py-4"><span className="font-mono text-sm font-semibold text-primary">#ORD-90234</span></td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex size-8 items-center justify-center rounded-full bg-rose-100 text-xs font-bold text-rose-600">DW</div>
                        <div className="text-sm font-semibold text-slate-900 dark:text-white">Donna Walker</div>
                      </div>
                    </td>
                    <td className="px-6 py-4"><div className="text-sm text-slate-600 dark:text-slate-400">Oct 22, 2023</div></td>
                    <td className="px-6 py-4"><div className="text-sm font-bold text-slate-900 dark:text-white">$156.00</div></td>
                    <td className="px-6 py-4">
                      <span className="w-fit flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                        <span className="size-1.5 rounded-full bg-emerald-500"></span>
                        Completed
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 text-slate-400 transition-colors hover:text-primary">
                        <span className="material-symbols-outlined">visibility</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex flex-col items-center justify-between gap-4 rounded-b-xl border-x border-b border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900 sm:flex-row">
              <div className="text-sm font-medium text-slate-500">
                Showing <span className="text-slate-900 dark:text-white">1 - 25</span> of <span className="text-slate-900 dark:text-white">1,422</span> orders
              </div>
              <div className="flex items-center gap-2">
                <button className="disabled:opacity-50 rounded-lg border border-slate-200 p-2 text-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800" disabled>
                  <span className="material-symbols-outlined text-lg">chevron_left</span>
                </button>
                <button className="rounded-lg bg-primary px-3.5 py-1.5 text-sm font-bold text-white shadow-sm shadow-primary/20">1</button>
                <button className="rounded-lg px-3.5 py-1.5 text-sm font-medium transition-colors hover:bg-slate-100 dark:hover:bg-slate-800">2</button>
                <button className="rounded-lg px-3.5 py-1.5 text-sm font-medium transition-colors hover:bg-slate-100 dark:hover:bg-slate-800">3</button>
                <span className="px-1 text-slate-400">...</span>
                <button className="rounded-lg px-3.5 py-1.5 text-sm font-medium transition-colors hover:bg-slate-100 dark:hover:bg-slate-800">57</button>
                <button className="rounded-lg border border-slate-200 p-2 text-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800">
                  <span className="material-symbols-outlined text-lg">chevron_right</span>
                </button>
              </div>
            </div>
          </div>

          <div className="fixed bottom-6 right-6 md:hidden">
            <button className="flex size-14 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 transition-transform hover:scale-105 active:scale-95">
              <span className="material-symbols-outlined text-3xl font-bold">add</span>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
