export default function CompanyBrandingPage() {
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
                  placeholder="Search settings..."
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
                  <a className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-600 transition-colors hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800" href="/settings/integrations">
                    <span className="material-symbols-outlined">integration_instructions</span>
                    <span className="text-sm">Integrations</span>
                  </a>
                  <a className="flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2.5 font-medium text-primary" href="/settings/company-branding">
                    <span className="material-symbols-outlined">corporate_fare</span>
                    <span className="text-sm">Company Branding</span>
                  </a>
                </nav>
              </div>
            </aside>

            <div className="flex-1 overflow-y-auto bg-background-light p-6 dark:bg-background-dark lg:p-10">
              <div className="mx-auto max-w-5xl space-y-8">
                <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-6 dark:border-slate-800 md:flex-row md:items-center">
                  <div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Company Branding</h1>
                    <p className="mt-1 text-slate-500 dark:text-slate-400">Configure your organization&apos;s identity and visual theme across the platform.</p>
                  </div>
                  <div className="flex gap-3">
                    <button className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold transition-colors hover:bg-white dark:border-slate-700 dark:hover:bg-slate-800">Discard Changes</button>
                    <button className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90">Save Brand Settings</button>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                  <div className="space-y-8 lg:col-span-2">
                    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                      <h2 className="mb-6 text-lg font-bold text-slate-900 dark:text-white">Company Information</h2>
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Company Name</label>
                          <input className="w-full rounded-lg border-slate-200 text-sm focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-800" type="text" defaultValue="Nexus Sales Inc." />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Business Website</label>
                          <input className="w-full rounded-lg border-slate-200 text-sm focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-800" type="url" defaultValue="https://nexussales.com" />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Primary Contact</label>
                          <input className="w-full rounded-lg border-slate-200 text-sm focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-800" type="email" defaultValue="billing@nexussales.com" />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Billing Address</label>
                          <textarea className="w-full rounded-lg border-slate-200 text-sm focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-800" rows={1} defaultValue="123 Tech Avenue, San Francisco, CA 94107" />
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                      <h2 className="mb-6 text-lg font-bold text-slate-900 dark:text-white">Brand Assets</h2>
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        <div className="space-y-3">
                          <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Light Logo</label>
                          <div className="flex h-32 w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/50">
                            <div className="mb-2 text-primary">
                              <span className="material-symbols-outlined text-4xl">hub</span>
                            </div>
                            <button className="text-xs font-semibold text-primary hover:underline">Upload SVG</button>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Dark Logo</label>
                          <div className="flex h-32 w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-200 bg-slate-900 p-4 dark:border-slate-700">
                            <div className="mb-2 text-white">
                              <span className="material-symbols-outlined text-4xl">hub</span>
                            </div>
                            <button className="text-xs font-semibold text-white/80 hover:underline">Upload SVG</button>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Favicon / Icon</label>
                          <div className="flex h-32 w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/50">
                            <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                              <span className="material-symbols-outlined text-2xl">hub</span>
                            </div>
                            <button className="text-xs font-semibold text-primary hover:underline">Upload PNG</button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                      <h2 className="mb-6 text-lg font-bold text-slate-900 dark:text-white">Visual Identity</h2>
                      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="space-y-4">
                          <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Primary Theme Color</label>
                          <div className="flex items-center gap-4">
                            <input className="h-12 w-20 cursor-pointer rounded border-none bg-slate-100 p-1 dark:bg-slate-800" type="color" defaultValue="#137fec" />
                            <div className="flex-1">
                              <input className="w-full rounded-lg border-slate-200 font-mono text-sm uppercase focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-800" type="text" defaultValue="#137fec" />
                            </div>
                          </div>
                          <p className="text-[11px] text-slate-400">Controls the appearance of your interface&apos;s buttons, toggles, and active navigation items.</p>
                        </div>
                        <div className="space-y-4">
                          <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Custom CSS (Advanced)</label>
                          <textarea className="w-full rounded-lg border-slate-200 font-mono text-xs focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-800" placeholder=":root { --custom-radius: 8px; }" rows={4} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="sticky top-6">
                      <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Branding Preview</h3>
                      <div className="origin-top scale-95 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900">
                        <div className="flex items-center justify-between border-b border-slate-100 p-4 dark:border-slate-800">
                          <div className="flex items-center gap-2">
                            <div className="flex size-6 items-center justify-center rounded bg-primary text-white">
                              <span className="material-symbols-outlined text-xs">hub</span>
                            </div>
                            <span className="text-xs font-bold text-slate-900 dark:text-white">Nexus Sales</span>
                          </div>
                          <div className="flex gap-1">
                            <div className="size-2 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                            <div className="size-2 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                          </div>
                        </div>
                        <div className="space-y-4 p-5">
                          <div className="h-4 w-2/3 rounded bg-slate-100 dark:bg-slate-800"></div>
                          <div className="space-y-2">
                            <div className="h-3 w-full rounded bg-slate-50 dark:bg-slate-800/50"></div>
                            <div className="h-3 w-5/6 rounded bg-slate-50 dark:bg-slate-800/50"></div>
                          </div>
                          <div className="flex gap-3 pt-2">
                            <button className="flex-1 rounded-lg bg-primary py-2 text-[11px] font-bold text-white shadow-sm">Primary Action</button>
                            <button className="flex-1 rounded-lg border border-slate-200 py-2 text-[11px] font-bold text-slate-600 dark:border-slate-700 dark:text-slate-400">Secondary</button>
                          </div>
                          <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-4 dark:border-slate-800">
                            <div className="size-6 rounded-full bg-slate-200 dark:bg-slate-800"></div>
                            <div className="h-2 w-16 rounded bg-slate-100 dark:bg-slate-800"></div>
                            <div className="ml-auto flex gap-1">
                              <div className="rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-bold text-primary">Active</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-4">
                        <div className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-xl text-primary">info</span>
                          <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                            Changes to branding are applied globally for all users in your organization. Some assets may take up to 5 minutes to propagate across all systems.
                          </p>
                        </div>
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
