export default function SettingsPage() {
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
            <aside className="w-64 border-r border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 flex flex-col gap-8">
              <div>
                <h3 className="mb-4 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Personal Settings</h3>
                <nav className="flex flex-col gap-1">
                  <a className="flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2.5 font-medium text-primary" href="/settings">
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
                  <a className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-600 transition-colors hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800" href="/settings/company-branding">
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
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Profile Settings</h1>
                    <p className="mt-1 text-slate-500 dark:text-slate-400">Manage your personal information, company branding, and interface preferences.</p>
                  </div>
                  <div className="flex gap-3">
                    <button className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold transition-colors hover:bg-white dark:border-slate-700 dark:hover:bg-slate-800">Discard</button>
                    <button className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90">Save Changes</button>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <h2 className="mb-6 text-lg font-bold text-slate-900 dark:text-white">Personal Information</h2>
                  <div className="mb-8 flex flex-col gap-8 md:flex-row">
                    <div className="group relative">
                      <div
                        className="size-24 rounded-full border-4 border-slate-50 bg-slate-100 bg-cover bg-center shadow-sm dark:border-slate-800 dark:bg-slate-800"
                        data-alt="Large profile picture for editing"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCHfZTE1_9gVtovI5r7HqKNVX3hkWHk62L_GBofsczU8cISotwsHB6371wSTRRHlVRI_N6zxKYO_CNDOfYxk00UCzmQKGXGo_6TnaPA1Fp_12krQNF0un4l97Xtfm_xd-HiyeukCjvgvQsTxXIIZ09Gh5mAoAdg-oD-GvWKzjcmXI5mQMbyOS0HnCLowQkIIQRPr38__pPhRezG6s9ci45R1UN3n-dRlDJPThMxIprpmW8JCbshAxYFk7wqjNz3Aq-WmFoM76QQ7oJ3")',
                        }}
                      ></div>
                      <button className="absolute -bottom-1 -right-1 rounded-full border-2 border-white bg-primary p-2 text-white shadow-lg transition-transform hover:scale-105 dark:border-slate-900">
                        <span className="material-symbols-outlined text-sm">photo_camera</span>
                      </button>
                    </div>

                    <div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-2">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Full Name</label>
                        <input className="w-full rounded-lg border-slate-200 text-sm focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-800" type="text" defaultValue="Alex Rivera" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Email Address</label>
                        <input className="w-full rounded-lg border-slate-200 text-sm focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-800" type="email" defaultValue="alex.rivera@nexussales.com" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Job Title</label>
                        <input className="w-full rounded-lg border-slate-200 text-sm focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-800" type="text" defaultValue="Administrator" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Phone Number</label>
                        <input className="w-full rounded-lg border-slate-200 text-sm focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-800" type="text" defaultValue="+1 (555) 000-0000" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <h2 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">Interface Theme</h2>
                    <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">Customize how the CRM looks on your device.</p>
                    <div className="grid grid-cols-2 gap-3">
                      <button className="flex flex-col gap-2 rounded-lg border-2 border-primary bg-primary/5 p-3 text-left transition-all">
                        <div className="flex h-16 w-full items-center justify-center rounded border border-slate-200 bg-slate-50">
                          <span className="material-symbols-outlined text-slate-400">light_mode</span>
                        </div>
                        <span className="text-sm font-semibold text-primary">Light Mode</span>
                      </button>
                      <button className="flex flex-col gap-2 rounded-lg border-2 border-slate-100 p-3 text-left transition-all hover:border-slate-200 dark:border-slate-800 dark:hover:border-slate-700">
                        <div className="flex h-16 w-full items-center justify-center rounded border border-slate-800 bg-slate-900">
                          <span className="material-symbols-outlined text-slate-600">dark_mode</span>
                        </div>
                        <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">Dark Mode</span>
                      </button>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <h2 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">Sidebar Density</h2>
                    <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">Choose your preferred navigation style.</p>
                    <div className="space-y-3">
                      <label className="flex cursor-pointer items-center justify-between rounded-lg border border-slate-200 p-3 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800">
                        <div className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-slate-400">format_line_spacing</span>
                          <span className="text-sm font-medium">Default (Spacious)</span>
                        </div>
                        <input defaultChecked className="h-4 w-4 text-primary focus:ring-primary" name="density" type="radio" />
                      </label>
                      <label className="flex cursor-pointer items-center justify-between rounded-lg border border-slate-200 p-3 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800">
                        <div className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-slate-400">density_medium</span>
                          <span className="text-sm font-medium">Compact</span>
                        </div>
                        <input className="h-4 w-4 text-primary focus:ring-primary" name="density" type="radio" />
                      </label>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-bold text-slate-900 dark:text-white">Company Branding</h2>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Manage how your team sees the CRM identity.</p>
                    </div>
                    <span className="rounded bg-green-100 px-2.5 py-1 text-[10px] font-bold uppercase text-green-700 dark:bg-green-900/30 dark:text-green-400">Pro Feature</span>
                  </div>
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="space-y-4">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Primary Brand Color</label>
                      <div className="flex items-center gap-4">
                        <div className="size-12 rounded-lg border border-slate-200 bg-primary shadow-sm shadow-primary/20 dark:border-slate-700"></div>
                        <div className="flex-1">
                          <input className="w-full rounded-lg border-slate-200 text-sm font-mono uppercase focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-800" type="text" defaultValue="#137fec" />
                        </div>
                      </div>
                      <p className="text-xs text-slate-400">This color will be used for buttons, links, and active states.</p>
                    </div>

                    <div className="space-y-4">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Company Logo</label>
                      <div className="flex items-center gap-4 rounded-lg border-2 border-dashed border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/50">
                        <div className="flex size-12 items-center justify-center rounded-lg bg-white dark:bg-slate-900">
                          <span className="material-symbols-outlined text-3xl text-primary">hub</span>
                        </div>
                        <div className="flex-1">
                          <button className="text-sm font-semibold text-primary hover:underline">Replace Logo</button>
                          <p className="text-[11px] text-slate-400">PNG or SVG, max 2MB.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-red-200 bg-red-50/50 p-6 dark:border-red-900/30 dark:bg-red-900/10">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-red-100 p-2 dark:bg-red-900/30">
                      <span className="material-symbols-outlined text-red-600 dark:text-red-400">warning</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-red-900 dark:text-red-400">Delete Account</h3>
                      <p className="mt-1 text-sm text-red-700 dark:text-red-400/70">Permanently remove your account and all associated sales data. This action is irreversible.</p>
                      <button className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700">Delete Account</button>
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
