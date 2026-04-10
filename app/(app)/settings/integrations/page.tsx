export default function IntegrationsPage() {
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
            <a className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-600 transition-colors hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800" href="/home">
              <span className="material-symbols-outlined">dashboard</span>
              <span className="text-sm font-semibold">Dashboard</span>
            </a>
            <a className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-600 transition-colors hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800" href="/customers">
              <span className="material-symbols-outlined">group</span>
              <span className="text-sm font-semibold">Customers</span>
            </a>
            <a className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-600 transition-colors hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800" href="/sales">
              <span className="material-symbols-outlined">receipt_long</span>
              <span className="text-sm font-semibold">Sales</span>
            </a>
            <a className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-600 transition-colors hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800" href="/reports">
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
                  placeholder="Search integrations..."
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
                  <a className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-600 transition-colors hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800" href="/settings/notifications">
                    <span className="material-symbols-outlined">notifications_active</span>
                    <span className="text-sm">Notifications</span>
                  </a>
                </nav>
              </div>
              <div>
                <h3 className="mb-4 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Organization</h3>
                <nav className="flex flex-col gap-1">
                  <a className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-600 transition-colors hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800" href="/settings/team-management">
                    <span className="material-symbols-outlined">groups</span>
                    <span className="text-sm">Team Management</span>
                  </a>
                  <a className="flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2.5 font-medium text-primary" href="/settings/integrations">
                    <span className="material-symbols-outlined">integration_instructions</span>
                    <span className="text-sm">Integrations</span>
                  </a>
                  <a className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-600 transition-colors hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800" href="/settings/company-branding">
                    <span className="material-symbols-outlined">corporate_fare</span>
                    <span className="text-sm">Company Branding</span>
                  </a>
                </nav>
              </div>
            </aside>

            <div className="flex-1 overflow-y-auto bg-background-light p-6 dark:bg-background-dark lg:p-10">
              <div className="mx-auto max-w-6xl space-y-8">
                <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-6 dark:border-slate-800 md:flex-row md:items-center">
                  <div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Integrations</h1>
                    <p className="mt-1 text-slate-500 dark:text-slate-400">Connect and manage third-party services to enhance your sales workflow.</p>
                  </div>
                  <div className="flex gap-3">
                    <button className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold transition-colors hover:bg-white dark:border-slate-700 dark:hover:bg-slate-800">Request App</button>
                    <button className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90">Developer Portal</button>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <div className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-primary/30 dark:border-slate-800 dark:bg-slate-900">
                    <div>
                      <div className="mb-4 flex items-start justify-between">
                        <div className="flex size-12 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/20">
                          <span className="material-symbols-outlined text-3xl text-blue-600 dark:text-blue-400">mail</span>
                        </div>
                        <span className="rounded-full bg-green-100 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-green-700 dark:bg-green-900/30 dark:text-green-400">Connected</span>
                      </div>
                      <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">Microsoft Outlook</h3>
                      <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">Sync your emails, calendars, and contacts directly with Nexus Sales CRM.</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">Last sync: 2h ago</span>
                      <button className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold transition-colors hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800">Configure</button>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-primary/30 dark:border-slate-800 dark:bg-slate-900">
                    <div>
                      <div className="mb-4 flex items-start justify-between">
                        <div className="flex size-12 items-center justify-center rounded-lg bg-red-50 dark:bg-red-900/20">
                          <span className="material-symbols-outlined text-3xl text-red-500 dark:text-red-400">cloud</span>
                        </div>
                        <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:bg-slate-800 dark:text-slate-400">Not Connected</span>
                      </div>
                      <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">Google Workspace</h3>
                      <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">Integrate Gmail and Google Calendar to track interactions and schedule meetings seamlessly.</p>
                    </div>
                    <div className="flex items-center justify-end">
                      <button className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90">Connect</button>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-primary/30 dark:border-slate-800 dark:bg-slate-900">
                    <div>
                      <div className="mb-4 flex items-start justify-between">
                        <div className="flex size-12 items-center justify-center rounded-lg bg-purple-50 dark:bg-purple-900/20">
                          <span className="material-symbols-outlined text-3xl text-purple-600 dark:text-purple-400">chat_bubble</span>
                        </div>
                        <span className="rounded-full bg-green-100 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-green-700 dark:bg-green-900/30 dark:text-green-400">Connected</span>
                      </div>
                      <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">Slack</h3>
                      <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">Receive real-time notifications for deals, leads, and team updates in your Slack channels.</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">Connected to #sales-ops</span>
                      <button className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold transition-colors hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800">Configure</button>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-primary/30 dark:border-slate-800 dark:bg-slate-900">
                    <div>
                      <div className="mb-4 flex items-start justify-between">
                        <div className="flex size-12 items-center justify-center rounded-lg bg-orange-50 dark:bg-orange-900/20">
                          <span className="material-symbols-outlined text-3xl text-orange-600 dark:text-orange-400">bolt</span>
                        </div>
                        <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:bg-slate-800 dark:text-slate-400">Not Connected</span>
                      </div>
                      <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">Zapier</h3>
                      <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">Automate workflows by connecting Nexus Sales to 5,000+ apps without writing any code.</p>
                    </div>
                    <div className="flex items-center justify-end">
                      <button className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90">Connect</button>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-primary/30 dark:border-slate-800 dark:bg-slate-900">
                    <div>
                      <div className="mb-4 flex items-start justify-between">
                        <div className="flex size-12 items-center justify-center rounded-lg bg-sky-50 dark:bg-sky-900/20">
                          <span className="material-symbols-outlined text-3xl text-sky-700 dark:text-sky-500">work</span>
                        </div>
                        <span className="rounded bg-amber-100 px-2 py-1 text-[10px] font-bold uppercase text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">Coming Soon</span>
                      </div>
                      <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">LinkedIn Sales Navigator</h3>
                      <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">Unlock powerful prospecting directly within your CRM leads dashboard.</p>
                    </div>
                    <div className="flex items-center justify-end">
                      <button className="cursor-not-allowed rounded-lg bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-400 dark:bg-slate-800" disabled>
                        Waitlist
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-primary/30 dark:border-slate-800 dark:bg-slate-900">
                    <div>
                      <div className="mb-4 flex items-start justify-between">
                        <div className="flex size-12 items-center justify-center rounded-lg bg-slate-50 dark:bg-slate-800">
                          <span className="material-symbols-outlined text-3xl text-slate-600 dark:text-slate-400">api</span>
                        </div>
                        <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:bg-slate-800 dark:text-slate-400">Not Connected</span>
                      </div>
                      <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">Custom Webhooks</h3>
                      <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">Build your own custom integrations by sending or receiving real-time data via HTTP.</p>
                    </div>
                    <div className="flex items-center justify-end">
                      <button className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90">Connect</button>
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-xl bg-slate-900 p-8 text-white shadow-xl">
                  <div className="relative z-10 max-w-xl">
                    <h2 className="mb-3 text-2xl font-bold">Power Up Your Workflow</h2>
                    <p className="mb-6 text-slate-300">Connected integrations can increase team efficiency by up to 35%. Explore the full App Marketplace to find the perfect tools for your sales stack.</p>
                    <button className="rounded-lg bg-white px-6 py-2.5 font-bold text-slate-900 transition-colors hover:bg-slate-100">Browse Marketplace</button>
                  </div>
                  <div className="absolute right-0 top-0 hidden h-full w-1/3 bg-gradient-to-l from-primary/20 to-transparent lg:block"></div>
                  <span className="material-symbols-outlined pointer-events-none absolute -bottom-4 -right-4 text-[180px] text-white/5">rocket_launch</span>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-blue-50 p-2 dark:bg-blue-900/20">
                      <span className="material-symbols-outlined text-primary">verified_user</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white">Secure Connectivity</h3>
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Nexus Sales uses industry-standard OAuth 2.0 and AES-256 encryption to ensure your data remains secure between all connected platforms. You can revoke access at any time.</p>
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
