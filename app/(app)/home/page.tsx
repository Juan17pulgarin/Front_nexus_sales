export default function HomePage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Dashboard Overview</h2>
        <p className="mt-1 text-sm text-slate-500">
          Welcome back, Alex. Here is what&apos;s happening today.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="mb-4 flex items-center justify-between">
            <span className="rounded-lg bg-blue-50 p-2 dark:bg-blue-900/30">
              <span className="material-symbols-outlined text-primary">group</span>
            </span>
            <span className="flex items-center gap-1 text-sm font-bold text-emerald-500">
              <span className="material-symbols-outlined text-base">trending_up</span>
              +5%
            </span>
          </div>
          <p className="text-sm font-medium text-slate-500">Total Customers</p>
          <h3 className="mt-1 text-3xl font-bold">1,240</h3>
          <p className="mt-4 text-xs text-slate-400 italic">Updated 2 mins ago</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="mb-4 flex items-center justify-between">
            <span className="rounded-lg bg-emerald-50 p-2 dark:bg-emerald-900/30">
              <span className="material-symbols-outlined text-emerald-600">payments</span>
            </span>
            <span className="flex items-center gap-1 text-sm font-bold text-emerald-500">
              <span className="material-symbols-outlined text-base">trending_up</span>
              +12%
            </span>
          </div>
          <p className="text-sm font-medium text-slate-500">Total Revenue</p>
          <h3 className="mt-1 text-3xl font-bold">$452,000</h3>
          <p className="mt-4 text-xs text-slate-400 italic">Fiscal year 2024</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="mb-4 flex items-center justify-between">
            <span className="rounded-lg bg-amber-50 p-2 dark:bg-amber-900/30">
              <span className="material-symbols-outlined text-amber-600">inventory_2</span>
            </span>
            <span className="rounded bg-amber-100 px-2 py-0.5 text-[10px] font-bold tracking-wider text-amber-700 uppercase dark:bg-amber-900/50 dark:text-amber-300">
              Active
            </span>
          </div>
          <p className="text-sm font-medium text-slate-500">Open Orders</p>
          <h3 className="mt-1 text-3xl font-bold">18</h3>
          <p className="mt-4 text-xs text-slate-400 italic">4 requiring urgent attention</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm lg:col-span-2 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4 dark:border-slate-800">
            <h3 className="text-lg font-bold">Top Customers</h3>
            <button className="text-primary text-sm font-bold hover:underline">View All</button>
          </div>
          <div className="flex-1 overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead className="bg-slate-50 dark:bg-slate-800/50">
                <tr>
                  <th className="px-6 py-3 text-xs font-bold tracking-wider text-slate-500 uppercase">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-xs font-bold tracking-wider text-slate-500 uppercase">
                    Location
                  </th>
                  <th className="px-6 py-3 text-xs font-bold tracking-wider text-slate-500 uppercase">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-bold tracking-wider text-slate-500 uppercase">
                    Lifetime Value
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="transition-colors hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="size-8 overflow-hidden rounded-full bg-slate-200">
                        <img
                          className="h-full w-full object-cover"
                          data-alt="Portrait of corporate client"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZiWpSClSRINIwunehDRhtsrijMet0vALa8zG-N3SxAroleuUS8IrE3TU0V2mrLauI-hKgdAwNJMK9vYOL2QnPqLcUAqbwE7Qqrc_i7bypVSE7uWqDkBzT8XNAq0hADFRo9R5Fmd1eJ1yj2MlvG3sSvw89dzt39myGft8vlZybYp9CuGqGhkkCYvyOTDU8PSqRm6Be0Rv1g0VAL7nZGp6gFyb8svnFovss3lNiPrPP50yHHpszH0iNGWQsgPn9ccjweavmkbi4ZPWa"
                        />
                      </div>
                      <div className="text-sm font-semibold">Acme Corporation</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">San Francisco, CA</td>
                  <td className="px-6 py-4">
                    <span className="rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-bold text-emerald-600 dark:bg-emerald-900/30">
                      Premium
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right text-sm font-bold">$42,500.00</td>
                </tr>
                <tr className="transition-colors hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="size-8 overflow-hidden rounded-full bg-slate-200">
                        <img
                          className="h-full w-full object-cover"
                          data-alt="Professional customer avatar"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeGlaeoFmux3A60RvNB2HNFkazpWHjfHdWBpGJBFDZaJPa51PcqvXaNjTUNyA_lf1jDgcg3pY6ezx5lHinfCHwcnI8rSmk3j56-gU9jGj0Qobj7hEnfFrLvaf5VrGqVyl5D4GV9U-TE8HhR8PPFhWUxWIOGgbpOw0DC18ApQzIbbIcvFKaR9agFKzcWFG4tmrS0CzA499R6aJ7U_TLmYsQFB4o_POubOWSO8bFC-xK4O1R1LJk1sR6aNXyeWv5l-uWxJnUnTJIAlc4"
                        />
                      </div>
                      <div className="text-sm font-semibold">Global Logistics Ltd</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">London, UK</td>
                  <td className="px-6 py-4">
                    <span className="bg-primary/10 text-primary rounded-full px-2 py-1 text-[11px] font-bold">
                      Regular
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right text-sm font-bold">$38,120.00</td>
                </tr>
                <tr className="transition-colors hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="size-8 overflow-hidden rounded-full bg-slate-200">
                        <img
                          className="h-full w-full object-cover"
                          data-alt="Business client profile"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0SBASsL0LIkc5jevx7MK0ODpz2Blhv-IL-2HDWIbsoNHyROmTNqxXV1JdS1kg-6i6fgPsKYGJ8ozesAe7Otf90CCANcDG6CaBnxVwaKfaHE05UcKq9woEjC7VLHOP0zwDzkTkEAA3bCK9ucVw9wU_lEyDrbG2xLdPmrInng_I0OK3qq1Edhfc0mI7I7OQ7rstrTzxGwkGbuilgt25FJ7SKKi4Sxno8VjaIhVkvhOdH5ZM_q0Bs3jSSRxzsan2m5mHwpl8_L_6-0iv"
                        />
                      </div>
                      <div className="text-sm font-semibold">TechFlow Systems</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Austin, TX</td>
                  <td className="px-6 py-4">
                    <span className="rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-bold text-emerald-600 dark:bg-emerald-900/30">
                      Premium
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right text-sm font-bold">$29,400.00</td>
                </tr>
                <tr className="transition-colors hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="size-8 overflow-hidden rounded-full bg-slate-200">
                        <img
                          className="h-full w-full object-cover"
                          data-alt="Female CEO client avatar"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAWiMQGsujXBP1HS_3uVW3Fx0iUK6bLHfevhzZUZ6I056NnubNDCfTvhMWYLPmOo6d6w7c8YJJruqf0caKtvV9M1cMRJwyrrT4QODynH7-AilDX42b184JL1M90q1ySruwcaaMWapU6Bt67POgjE2WJS03qAuNbnDD5EAyt4y_RCHhhWh1lGobpBqqR1Ems4ZAhat7ivdhN44tJKZFuxLzwyKB6MINh55qCOsXYeRE9iqdbaw8JO8y3WpNs5cVE1kuMNXh6Qm9gFWy"
                        />
                      </div>
                      <div className="text-sm font-semibold">Silverline Media</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">New York, NY</td>
                  <td className="px-6 py-4">
                    <span className="rounded-full bg-slate-100 px-2 py-1 text-[11px] font-bold text-slate-500 dark:bg-slate-800">
                      New
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right text-sm font-bold">$12,850.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-lg font-bold">Recent Activity</h3>
            <button className="flex size-8 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-50">
              <span className="material-symbols-outlined text-xl">more_vert</span>
            </button>
          </div>
          <div className="relative space-y-6 before:absolute before:top-2 before:bottom-2 before:left-[11px] before:w-0.5 before:bg-slate-100 dark:before:bg-slate-800">
            <div className="relative flex gap-4">
              <div className="bg-primary z-10 flex size-6 shrink-0 items-center justify-center rounded-full ring-4 ring-white dark:ring-slate-900">
                <span className="material-symbols-outlined text-[14px] text-white">shopping_cart</span>
              </div>
              <div>
                <p className="text-sm">
                  New order from <span className="font-bold">Acme Corp</span>
                </p>
                <p className="mt-1 text-xs text-slate-400">2 minutes ago</p>
              </div>
            </div>
            <div className="relative flex gap-4">
              <div className="z-10 flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-white dark:ring-slate-900">
                <span className="material-symbols-outlined text-[14px] text-white">phone_in_talk</span>
              </div>
              <div>
                <p className="text-sm">
                  Call logged for <span className="font-bold">John Doe</span>
                </p>
                <p className="mt-1 text-xs text-slate-400">1 hour ago</p>
              </div>
            </div>
            <div className="relative flex gap-4">
              <div className="z-10 flex size-6 shrink-0 items-center justify-center rounded-full bg-amber-500 ring-4 ring-white dark:ring-slate-900">
                <span className="material-symbols-outlined text-[14px] text-white">sync_alt</span>
              </div>
              <div>
                <p className="text-sm">
                  Status changed: <span className="font-bold">Lead to Prospect</span>
                </p>
                <p className="mt-1 text-xs text-slate-400">3 hours ago</p>
              </div>
            </div>
            <div className="relative flex gap-4">
              <div className="z-10 flex size-6 shrink-0 items-center justify-center rounded-full bg-slate-400 ring-4 ring-white dark:ring-slate-900">
                <span className="material-symbols-outlined text-[14px] text-white">person_add</span>
              </div>
              <div>
                <p className="text-sm">
                  New customer registered: <span className="font-bold">Urban Outfitters</span>
                </p>
                <p className="mt-1 text-xs text-slate-400">5 hours ago</p>
              </div>
            </div>
            <div className="relative flex gap-4">
              <div className="z-10 flex size-6 shrink-0 items-center justify-center rounded-full bg-red-500 ring-4 ring-white dark:ring-slate-900">
                <span className="material-symbols-outlined text-[14px] text-white">mail</span>
              </div>
              <div>
                <p className="text-sm">
                  Support ticket closed for <span className="font-bold">Acme Corp</span>
                </p>
                <p className="mt-1 text-xs text-slate-400">8 hours ago</p>
              </div>
            </div>
          </div>
          <button className="mt-8 w-full rounded-lg border border-slate-200 py-2.5 text-sm font-bold text-slate-600 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-800">
            Load More Activities
          </button>
        </div>
      </div>
    </div>
  );
}
