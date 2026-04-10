"use client";

import {
  Area,
  AreaChart,
  Bar,
  CartesianGrid,
  Cell,
  ComposedChart,
  Line,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const revenueTargetData = [
  { month: "JAN", revenue: 420, target: 450, conversion: 18 },
  { month: "FEB", revenue: 510, target: 500, conversion: 21 },
  { month: "MAR", revenue: 470, target: 520, conversion: 19 },
  { month: "APR", revenue: 640, target: 580, conversion: 24 },
  { month: "MAY", revenue: 610, target: 600, conversion: 23 },
  { month: "JUN", revenue: 690, target: 650, conversion: 27 },
];

const salesByCategoryData = [
  { name: "Software", value: 45, color: "#137fec" },
  { name: "Hardware", value: 30, color: "#34d399" },
  { name: "Services", value: 15, color: "#94a3b8" },
  { name: "Other", value: 10, color: "#64748b" },
];

const customerGrowthData = [
  { week: "WEEK 1", newCustomers: 42, returningCustomers: 68 },
  { week: "WEEK 2", newCustomers: 58, returningCustomers: 74 },
  { week: "WEEK 3", newCustomers: 53, returningCustomers: 80 },
  { week: "WEEK 4", newCustomers: 76, returningCustomers: 92 },
];

export default function ReportsPage() {
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
            <a
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-600 transition-colors hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800"
              href="/sales"
            >
              <span className="material-symbols-outlined">receipt_long</span>
              <span className="text-sm font-semibold">Sales</span>
            </a>
            <a className="active-nav flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors" href="/reports">
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
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-xl text-slate-400">search</span>
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
                <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">Analytics Reports</h1>
                <p className="mt-1 text-slate-500 dark:text-slate-400">Comprehensive overview of sales performance and growth trends.</p>
              </div>
              <div className="flex w-full gap-3 md:w-auto">
                <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 md:flex-none">
                  <span className="material-symbols-outlined text-lg">download</span>
                  Export PDF
                </button>
                <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary/90 md:flex-none">
                  <span className="material-symbols-outlined text-lg">share</span>
                  Share Report
                </button>
              </div>
            </div>

            <div className="mb-8 rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex flex-col items-center gap-4 md:flex-row">
                <div className="relative w-full flex-1">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-sm text-slate-400">calendar_today</span>
                  <select className="w-full appearance-none rounded-lg border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-slate-800">
                    <option>Last 30 Days (Oct 1, 2023 - Oct 31, 2023)</option>
                    <option>Last Quarter</option>
                    <option>Year to Date</option>
                    <option>Custom Range</option>
                  </select>
                </div>
                <div className="scrollbar-hide flex w-full items-center gap-2 overflow-x-auto pb-1 md:w-auto md:pb-0">
                  <button className="whitespace-nowrap rounded-lg bg-slate-100 px-4 py-2 text-sm font-semibold text-primary dark:bg-slate-800">All Regions</button>
                  <button className="whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800">North America</button>
                  <button className="whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800">Europe</button>
                  <button className="whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800">Asia Pacific</button>
                  <div className="mx-2 h-6 w-px bg-slate-200 dark:bg-slate-700"></div>
                  <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700">
                    <span className="material-symbols-outlined text-lg">tune</span>
                    Advanced Filters
                  </button>
                </div>
              </div>
            </div>

            <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 lg:col-span-2">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Revenue vs Target</h3>
                    <p className="text-sm text-slate-500">Performance tracking against monthly goals</p>
                  </div>
                  <div className="flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-1.5"><span className="size-3 rounded-full bg-primary"></span> Revenue</div>
                    <div className="flex items-center gap-1.5"><span className="size-3 rounded-full bg-emerald-400"></span> Target</div>
                    <div className="flex items-center gap-1.5"><span className="size-3 rounded-full bg-violet-500"></span> Conversion %</div>
                  </div>
                </div>
                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={revenueTargetData} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                      <YAxis yAxisId="left" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                      <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11, fill: "#a78bfa" }} axisLine={false} tickLine={false} />
                      <Tooltip
                        contentStyle={{
                          borderRadius: "0.5rem",
                          border: "1px solid #e2e8f0",
                          fontSize: "12px",
                        }}
                      />
                      <Bar yAxisId="left" dataKey="target" fill="#34d399" radius={[6, 6, 0, 0]} />
                      <Bar yAxisId="left" dataKey="revenue" fill="#137fec" radius={[6, 6, 0, 0]} />
                      <Line yAxisId="right" type="monotone" dataKey="conversion" stroke="#8b5cf6" strokeWidth={2} dot={{ r: 3 }} />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <h3 className="mb-6 text-lg font-bold text-slate-900 dark:text-white">Sales by Category</h3>
                <div className="flex h-64 flex-col items-center justify-center">
                  <div className="relative h-48 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={salesByCategoryData}
                          cx="50%"
                          cy="50%"
                          innerRadius={52}
                          outerRadius={82}
                          dataKey="value"
                          paddingAngle={3}
                          stroke="none"
                        >
                          {salesByCategoryData.map((entry) => (
                            <Cell key={entry.name} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip
                          formatter={(value, name) => [`${value}%`, name]}
                          contentStyle={{ borderRadius: "0.5rem", border: "1px solid #e2e8f0", fontSize: "12px" }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                      <div className="rounded-full bg-white/95 px-4 py-2 text-center shadow-sm ring-1 ring-slate-200 dark:bg-slate-900/95 dark:ring-slate-700">
                        <p className="text-lg font-black leading-none text-slate-900 dark:text-white">$842k</p>
                        <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">Total Revenue</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 grid w-full grid-cols-2 gap-4">
                    {salesByCategoryData.map((item) => (
                      <div key={item.name} className="flex items-center gap-2">
                        <span className="size-2 rounded-full" style={{ backgroundColor: item.color }}></span>
                        <span className="text-xs font-medium">{item.name} ({item.value}%)</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 lg:col-span-3">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Customer Growth Trend</h3>
                    <p className="text-sm text-slate-500">New vs. returning customers acquisition over time</p>
                  </div>
                  <div className="flex rounded-lg bg-slate-100 p-1 dark:bg-slate-800">
                    <button className="rounded-md bg-white px-3 py-1 text-xs font-bold shadow-sm dark:bg-slate-700">Daily</button>
                    <button className="px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-900 dark:hover:text-slate-200">Weekly</button>
                    <button className="px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-900 dark:hover:text-slate-200">Monthly</button>
                  </div>
                </div>
                <div className="h-56 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={customerGrowthData} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="newCustomers" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#0f4c81" stopOpacity={0.35} />
                          <stop offset="95%" stopColor="#0f4c81" stopOpacity={0.03} />
                        </linearGradient>
                        <linearGradient id="returningCustomers" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10b981" stopOpacity={0.25} />
                          <stop offset="95%" stopColor="#10b981" stopOpacity={0.03} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="week" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                      <Tooltip contentStyle={{ borderRadius: "0.5rem", border: "1px solid #e2e8f0", fontSize: "12px" }} />
                      <Area type="monotone" dataKey="returningCustomers" stroke="#10b981" fill="url(#returningCustomers)" strokeWidth={2} />
                      <Area type="monotone" dataKey="newCustomers" stroke="#0f4c81" fill="url(#newCustomers)" strokeWidth={2} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4 dark:border-slate-800">
                <h3 className="font-bold text-slate-900 dark:text-white">Performance by Sales Representative</h3>
                <button className="text-xs font-bold text-primary hover:underline">View All Teams</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-800/50">
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Representative</th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Total Sales</th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Growth %</th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Target Achievement</th>
                      <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    <tr className="transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">JS</div>
                          <div>
                            <div className="text-sm font-semibold text-slate-900 dark:text-white">Janet Schorr</div>
                            <div className="text-[10px] font-bold uppercase tracking-tight text-slate-500">Enterprise Team</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-white">$142,500.00</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1 text-xs font-bold text-emerald-500">
                          <span className="material-symbols-outlined text-sm">trending_up</span> +14.2%
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="h-1.5 w-24 flex-1 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800"><div className="h-full bg-emerald-500" style={{ width: "92%" }}></div></div>
                          <span className="text-xs font-bold text-slate-700 dark:text-slate-300">92%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right"><span className="rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">On Track</span></td>
                    </tr>
                    <tr className="transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex size-8 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-600">OG</div>
                          <div>
                            <div className="text-sm font-semibold text-slate-900 dark:text-white">Orlando Gee</div>
                            <div className="text-[10px] font-bold uppercase tracking-tight text-slate-500">Mid-Market</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-white">$98,200.00</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1 text-xs font-bold text-emerald-500">
                          <span className="material-symbols-outlined text-sm">trending_up</span> +8.4%
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="h-1.5 w-24 flex-1 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800"><div className="h-full bg-primary" style={{ width: "78%" }}></div></div>
                          <span className="text-xs font-bold text-slate-700 dark:text-slate-300">78%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right"><span className="rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">Steady</span></td>
                    </tr>
                    <tr className="transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex size-8 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600">KL</div>
                          <div>
                            <div className="text-sm font-semibold text-slate-900 dark:text-white">Keith Lampeter</div>
                            <div className="text-[10px] font-bold uppercase tracking-tight text-slate-500">SMB Team</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-white">$65,400.00</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1 text-xs font-bold text-rose-500">
                          <span className="material-symbols-outlined text-sm">trending_down</span> -2.1%
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="h-1.5 w-24 flex-1 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800"><div className="h-full bg-amber-500" style={{ width: "54%" }}></div></div>
                          <span className="text-xs font-bold text-slate-700 dark:text-slate-300">54%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right"><span className="rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">At Risk</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex justify-center border-t border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                <button className="flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-primary">
                  View Full Detailed Report
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
