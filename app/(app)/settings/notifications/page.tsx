export default function NotificationsSettingsPage() {
  return (
    <div className="bg-background-light font-display min-h-screen text-slate-900 dark:bg-background-dark dark:text-slate-100">
      <div className="flex h-screen overflow-hidden">
        <aside className="h-full w-64 shrink-0 flex-col border-r border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 flex">
          <div className="flex items-center gap-3 p-6">
            <div className="flex items-center justify-center rounded-lg bg-primary p-1.5">
              <span className="material-symbols-outlined text-2xl text-white">rocket_launch</span>
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
            <a
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-600 transition-colors hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800"
              href="/reports"
            >
              <span className="material-symbols-outlined">monitoring</span>
              <span className="text-sm font-semibold">Reports</span>
            </a>
            <a className="active-nav mt-auto flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors" href="/settings">
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

          <div className="flex flex-1 overflow-hidden">
            <aside className="w-64 shrink-0 border-r border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 flex flex-col gap-8">
              <div>
                <h3 className="mb-4 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Personal Settings</h3>
                <nav className="flex flex-col gap-1">
                  <a className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-600 transition-colors hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800" href="/settings">
                    <span className="material-symbols-outlined">person</span>
                    <span className="text-sm">Profile</span>
                  </a>
                  <a className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-600 transition-colors hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800" href="/settings/security">
                    <span className="material-symbols-outlined">shield</span>
                    <span className="text-sm">Security</span>
                  </a>
                  <a className="flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2.5 font-medium text-primary" href="/settings/notifications">
                    <span className="material-symbols-outlined">notifications_active</span>
                    <span className="text-sm">Notifications</span>
                  </a>
                </nav>
              </div>
              <div>
                <h3 className="mb-4 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Organization</h3>
                <nav className="flex flex-col gap-1">
                  <a className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-600 transition-colors hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800" href="#">
                    <span className="material-symbols-outlined">groups</span>
                    <span className="text-sm">Team Management</span>
                  </a>
                  <a className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-600 transition-colors hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800" href="#">
                    <span className="material-symbols-outlined">integration_instructions</span>
                    <span className="text-sm">Integrations</span>
                  </a>
                  <a className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-600 transition-colors hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800" href="#">
                    <span className="material-symbols-outlined">corporate_fare</span>
                    <span className="text-sm">Company Branding</span>
                  </a>
                </nav>
              </div>
            </aside>

            <div className="flex-1 overflow-y-auto bg-background-light p-6 dark:bg-background-dark lg:p-10">
              <div className="mx-auto max-w-4xl space-y-8">
                <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-6 dark:border-slate-800 md:flex-row md:items-center">
                  <div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Notification Preferences</h1>
                    <p className="mt-1 text-slate-500 dark:text-slate-400">Control how and when you want to be notified about sales activity.</p>
                  </div>
                  <div className="flex gap-3">
                    <button className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold transition-colors hover:bg-white dark:border-slate-700 dark:hover:bg-slate-800">Restore Defaults</button>
                    <button className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90">Save Preferences</button>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                  <div className="space-y-6 lg:col-span-2">
                    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                      <div className="mb-6 flex items-center gap-3">
                        <div className="rounded-lg bg-blue-50 p-2 text-primary dark:bg-blue-900/20">
                          <span className="material-symbols-outlined">mail</span>
                        </div>
                        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Email Notifications</h2>
                      </div>
                      <div className="space-y-4">
                        <label className="group flex cursor-pointer items-start gap-4 rounded-lg p-3 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800">
                          <input defaultChecked className="mt-1 h-5 w-5 rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
                          <div className="flex-1">
                            <span className="block text-sm font-semibold text-slate-900 dark:text-white">New Lead Assigned</span>
                            <span className="text-xs text-slate-500">Receive an email immediately when a new lead is added to your pipeline.</span>
                          </div>
                        </label>
                        <label className="group flex cursor-pointer items-start gap-4 rounded-lg p-3 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800">
                          <input defaultChecked className="mt-1 h-5 w-5 rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
                          <div className="flex-1">
                            <span className="block text-sm font-semibold text-slate-900 dark:text-white">Sale Completed</span>
                            <span className="text-xs text-slate-500">Get a summary when a deal is successfully closed by you or your team.</span>
                          </div>
                        </label>
                        <label className="group flex cursor-pointer items-start gap-4 rounded-lg p-3 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800">
                          <input className="mt-1 h-5 w-5 rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
                          <div className="flex-1">
                            <span className="block text-sm font-semibold text-slate-900 dark:text-white">Weekly Report Ready</span>
                            <span className="text-xs text-slate-500">A comprehensive performance digest sent every Monday morning.</span>
                          </div>
                        </label>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                      <div className="mb-6 flex items-center gap-3">
                        <div className="rounded-lg bg-purple-50 p-2 text-purple-600 dark:bg-purple-900/20">
                          <span className="material-symbols-outlined">notifications_active</span>
                        </div>
                        <h2 className="text-lg font-bold text-slate-900 dark:text-white">In-App Notifications</h2>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3">
                          <div className="flex-1">
                            <span className="block text-sm font-semibold text-slate-900 dark:text-white">System Alerts</span>
                            <span className="text-xs text-slate-500">Maintenance updates and platform announcements.</span>
                          </div>
                          <input defaultChecked className="h-5 w-10 cursor-pointer rounded-full border-slate-300 bg-slate-200 text-primary focus:ring-primary" type="checkbox" />
                        </div>
                        <div className="flex items-center justify-between p-3">
                          <div className="flex-1">
                            <span className="block text-sm font-semibold text-slate-900 dark:text-white">Mention Notifications</span>
                            <span className="text-xs text-slate-500">When a team member @mentions you in CRM notes.</span>
                          </div>
                          <input defaultChecked className="h-5 w-10 cursor-pointer rounded-full border-slate-300 bg-slate-200 text-primary focus:ring-primary" type="checkbox" />
                        </div>
                        <div className="flex items-center justify-between p-3">
                          <div className="flex-1">
                            <span className="block text-sm font-semibold text-slate-900 dark:text-white">Task Reminders</span>
                            <span className="text-xs text-slate-500">Upcoming follow-ups and meeting start alerts.</span>
                          </div>
                          <input className="h-5 w-10 cursor-pointer rounded-full border-slate-300 bg-slate-200 text-primary focus:ring-primary" type="checkbox" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                      <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Live Preview</h3>
                      <div className="relative flex h-40 items-center justify-center rounded-lg border border-slate-100 bg-slate-50 dark:border-slate-800 dark:bg-slate-800/50">
                        <div className="flex w-full max-w-[240px] -translate-y-2 transform gap-3 rounded-lg border border-slate-200 bg-white p-3 shadow-xl dark:border-slate-700 dark:bg-slate-900">
                          <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                            <span className="material-symbols-outlined text-xl text-green-600 dark:text-green-400">check_circle</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-bold text-slate-900 dark:text-white">Sale Completed!</p>
                            <p className="mt-0.5 text-xs text-slate-500">Acme Corp deal closed for $12,500.</p>
                          </div>
                          <button className="text-slate-400 hover:text-slate-600">
                            <span className="material-symbols-outlined text-sm">close</span>
                          </button>
                        </div>
                        <span className="absolute bottom-3 text-[10px] font-medium text-slate-400">Desktop Toast Preview</span>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                      <div className="mb-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary">browser_updated</span>
                          <h3 className="text-sm font-bold text-slate-900 dark:text-white">Push Notifications</h3>
                        </div>
                        <input className="h-5 w-8 cursor-pointer rounded-full border-slate-300 bg-slate-200 text-primary focus:ring-primary" type="checkbox" />
                      </div>
                      <p className="text-xs text-slate-500">Enable browser-level notifications to stay updated even when Nexus Sales is in a background tab.</p>
                      <button className="mt-4 w-full rounded-lg border border-slate-200 bg-slate-50 py-2 text-xs font-semibold transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800">Test Browser Alert</button>
                    </div>

                    <div className="group relative overflow-hidden rounded-xl bg-slate-900 p-6 text-white dark:bg-slate-800">
                      <div className="relative z-10">
                        <div className="mb-4 flex items-center justify-between">
                          <span className="rounded bg-primary/20 px-2 py-0.5 text-[10px] font-bold uppercase text-primary">Pro</span>
                          <span className="material-symbols-outlined text-slate-400">bedtime</span>
                        </div>
                        <h3 className="text-sm font-bold">Quiet Hours</h3>
                        <p className="mt-2 text-xs text-slate-400">Automatically silence notifications after work hours (6:00 PM - 8:00 AM).</p>
                        <button className="mt-4 flex items-center gap-1 text-xs font-bold text-primary hover:underline">
                          Upgrade to Unlock <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </button>
                      </div>
                      <div className="absolute -bottom-4 -right-4 rotate-12 transform opacity-10 transition-transform group-hover:scale-110">
                        <span className="material-symbols-outlined text-8xl">notifications_off</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
