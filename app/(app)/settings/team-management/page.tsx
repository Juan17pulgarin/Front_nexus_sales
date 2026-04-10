export default function TeamManagementPage() {
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
                  placeholder="Search team members..."
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
                  <a className="flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2.5 font-medium text-primary" href="/settings/team-management">
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
              <div className="mx-auto max-w-6xl space-y-6">
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                  <div>
                    <h1 className="text-3xl font-bold leading-tight text-slate-900 dark:text-white">Team Management</h1>
                    <p className="mt-1 text-slate-500 dark:text-slate-400">Manage your team members and their access levels.</p>
                  </div>
                  <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary/90">
                    <span className="material-symbols-outlined text-lg">person_add</span>
                    Invite Member
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                  <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Total Members</p>
                    <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">24</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Active Now</p>
                    <p className="mt-1 text-2xl font-bold text-green-600">18</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Pending Invites</p>
                    <p className="mt-1 text-2xl font-bold text-amber-500">4</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Admin Seats</p>
                    <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">3/5</p>
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <div className="flex flex-col justify-between gap-4 border-b border-slate-100 p-4 dark:border-slate-800 md:flex-row md:items-center">
                    <div className="relative w-full md:w-80">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-lg text-slate-400">search</span>
                      <input
                        className="w-full rounded-lg border-slate-200 py-2 pl-10 pr-4 text-sm focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-800"
                        placeholder="Search by name or email..."
                        type="text"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">
                        <span className="material-symbols-outlined text-lg">filter_list</span>
                        Filter
                      </button>
                      <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">
                        <span className="material-symbols-outlined text-lg">download</span>
                        Export
                      </button>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-left">
                      <thead>
                        <tr className="border-b border-slate-100 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-800/50">
                          <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Member</th>
                          <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Role</th>
                          <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Status</th>
                          <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Last Active</th>
                          <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        <tr className="transition-colors hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <img alt="Avatar" className="size-10 rounded-full border border-slate-200 bg-slate-100 dark:border-slate-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDctrBZWJlH5dzE95b77QgnRDY8L84lZRdd8k5zP1dC6_7Mj5YX035HoB2X-fTxTvfC0fGrrm2tvEKR6ZF7MiKBTpkfue2gURfiV1pKJ48LasgT4ZopnG82eDckKazsBeHIz3RW8qGBdw9TxseutcSUl9GUtUhdbH84eGKe2BxYReHbsKvVOGoyr0vk-OYaXsldjL7tjCR5FyH1fcHpjFXPWw0cJeo9sGFv4kQm674MrCguK3viuUDPfp1ihc6fNpOqoV_XGswG-__U" />
                              <div>
                                <div className="text-sm font-semibold text-slate-900 dark:text-white">Alex Rivera</div>
                                <div className="text-xs text-slate-500 dark:text-slate-400">alex.rivera@nexussales.com</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">Admin</span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <div className="size-2 rounded-full bg-green-500"></div>
                              <span className="text-sm text-slate-600 dark:text-slate-300">Active</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">2 mins ago</td>
                          <td className="px-6 py-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button className="p-1.5 text-slate-400 transition-colors hover:text-primary">
                                <span className="material-symbols-outlined text-xl">edit</span>
                              </button>
                              <button className="p-1.5 text-slate-400 transition-colors hover:text-red-500">
                                <span className="material-symbols-outlined text-xl">delete</span>
                              </button>
                            </div>
                          </td>
                        </tr>

                        <tr className="transition-colors hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <img alt="Avatar" className="size-10 rounded-full border border-slate-200 bg-slate-100 dark:border-slate-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKkMX1r2ByS6LjU5nk4-Tn0pfONWZXvWNtQ4AbhnT1geb5XX0dfHXf9nEjvCSuX9vk7NHCp4Frh3xarCFWAe30L-c22PdL6p0UbHZgECDOazRO198K79goRAA7GeM22orStnGPhYVoVUXQroviEcFFa6L4IifmYqR3OWH3aTUHEEmije4dby6Tu03Xi9gBczQJggxouABYEH0Z4sZyv8vL8FLymNQab6MUVwEoavu_46RQAgKqey-AkfBxcXQPlsowKnZHObudapc2" />
                              <div>
                                <div className="text-sm font-semibold text-slate-900 dark:text-white">Jordan Smith</div>
                                <div className="text-xs text-slate-500 dark:text-slate-400">j.smith@nexussales.com</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="rounded-md bg-purple-50 px-2.5 py-1 text-xs font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-400">Manager</span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <div className="size-2 rounded-full bg-green-500"></div>
                              <span className="text-sm text-slate-600 dark:text-slate-300">Active</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">45 mins ago</td>
                          <td className="px-6 py-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button className="p-1.5 text-slate-400 transition-colors hover:text-primary">
                                <span className="material-symbols-outlined text-xl">edit</span>
                              </button>
                              <button className="p-1.5 text-slate-400 transition-colors hover:text-red-500">
                                <span className="material-symbols-outlined text-xl">delete</span>
                              </button>
                            </div>
                          </td>
                        </tr>

                        <tr className="transition-colors hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <img alt="Avatar" className="size-10 rounded-full border border-slate-200 bg-slate-100 dark:border-slate-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRtpSKcSOsF_ODTefWETGbDPQZiIlxUEbUQ_mKTL25B75TKaAf0JmCIRQ18MbKnu5HSl4Hd2ZMpUPk10qEi0JM0zz5Ud-u15V_1kppx7dy5oxi-35uYzlzsfFCDalhZoHztRGEy94GncHd1-ALkNEY369H4AhtauKpT7tbKpyAuh8aGlB4JZgHW8V_4iP8WyWw4O-DSn2YllfZez-NskdACqKNJDFF2E6MTlAX54MfZDERChf__PMFVP82HbV-CgtWvbTCNePAIwvS" />
                              <div>
                                <div className="text-sm font-semibold text-slate-900 dark:text-white">Sarah Chen</div>
                                <div className="text-xs text-slate-500 dark:text-slate-400">s.chen@nexussales.com</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">Sales Rep</span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <div className="size-2 rounded-full bg-amber-500"></div>
                              <span className="text-sm text-slate-600 dark:text-slate-300">Pending</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">Invited 2h ago</td>
                          <td className="px-6 py-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button className="p-1.5 text-slate-400 transition-colors hover:text-primary">
                                <span className="material-symbols-outlined text-xl">refresh</span>
                              </button>
                              <button className="p-1.5 text-slate-400 transition-colors hover:text-red-500">
                                <span className="material-symbols-outlined text-xl">delete</span>
                              </button>
                            </div>
                          </td>
                        </tr>

                        <tr className="transition-colors hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <img alt="Avatar" className="size-10 rounded-full border border-slate-200 bg-slate-100 dark:border-slate-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKd8llmmkcsuG_Hj3lhYllwC44on-bejwNO0qRlr0BM7Zmo8pIlMUUijUBa6q_oA9dN1FmLZJUoHvlM7EiNsET5DuWQ8YQSfW9-MlSPBcJkHLPF_r25w-XEB2xB1FtXQY9UAgupnzmvgN6xLi_e0ARNCnGuXfYmSe93d_OGtPXh8xmi964w_QVQlAieiucInr1elrT3ukEKDjFCIz4uJ3Q6gU68cimajY6vUfneeg34Ljv-1Uca7kG8XS6zKIIK8d4geNWWEifKkdt" />
                              <div>
                                <div className="text-sm font-semibold text-slate-900 dark:text-white">Marcus Thorne</div>
                                <div className="text-xs text-slate-500 dark:text-slate-400">m.thorne@nexussales.com</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">Sales Rep</span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <div className="size-2 rounded-full bg-green-500"></div>
                              <span className="text-sm text-slate-600 dark:text-slate-300">Active</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">3 days ago</td>
                          <td className="px-6 py-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button className="p-1.5 text-slate-400 transition-colors hover:text-primary">
                                <span className="material-symbols-outlined text-xl">edit</span>
                              </button>
                              <button className="p-1.5 text-slate-400 transition-colors hover:text-red-500">
                                <span className="material-symbols-outlined text-xl">delete</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="flex items-center justify-between border-t border-slate-100 p-4 dark:border-slate-800">
                    <p className="text-sm text-slate-500 dark:text-slate-400">Showing 1 to 10 of 24 members</p>
                    <div className="flex items-center gap-2">
                      <button className="rounded border border-slate-200 p-2 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:hover:bg-slate-800">
                        <span className="material-symbols-outlined text-lg">chevron_left</span>
                      </button>
                      <button className="rounded border border-slate-200 bg-primary px-3 py-1 text-sm font-medium text-white dark:border-slate-700">1</button>
                      <button className="rounded border border-slate-200 px-3 py-1 text-sm font-medium hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800">2</button>
                      <button className="rounded border border-slate-200 px-3 py-1 text-sm font-medium hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800">3</button>
                      <button className="rounded border border-slate-200 p-2 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800">
                        <span className="material-symbols-outlined text-lg">chevron_right</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-6 dark:border-blue-900/30 dark:bg-blue-900/10">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-blue-100 p-2 dark:bg-blue-900/40">
                      <span className="material-symbols-outlined text-blue-600 dark:text-blue-400">info</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-blue-900 dark:text-blue-400">About Roles &amp; Permissions</h3>
                      <div className="mt-2 grid grid-cols-1 gap-6 md:grid-cols-3">
                        <div>
                          <p className="text-xs font-bold uppercase text-blue-800 dark:text-blue-300">Administrators</p>
                          <p className="mt-1 text-xs text-blue-700 dark:text-blue-400/80">Full access to settings, billing, and all sales data.</p>
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase text-blue-800 dark:text-blue-300">Managers</p>
                          <p className="mt-1 text-xs text-blue-700 dark:text-blue-400/80">Can manage team members and view team reports.</p>
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase text-blue-800 dark:text-blue-300">Sales Reps</p>
                          <p className="mt-1 text-xs text-blue-700 dark:text-blue-400/80">Manage their own leads and assigned opportunities.</p>
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
