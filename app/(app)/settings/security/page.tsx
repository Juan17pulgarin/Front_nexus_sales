"use client";

import { useState } from "react";

export default function SecuritySettingsPage() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const canEditNewPassword = currentPassword.trim().length > 0;
  const passwordsMatch = newPassword.length > 0 && newPassword === confirmNewPassword;
  const canUpdatePassword = canEditNewPassword && passwordsMatch;

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
                  <a className="flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2.5 font-medium text-primary" href="/settings/security">
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
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Security Settings</h1>
                    <p className="mt-1 text-slate-500 dark:text-slate-400">Protect your account with password management, 2FA, and session monitoring.</p>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <div className="mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">lock_reset</span>
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">Password Management</h2>
                  </div>
                  <div className="grid grid-cols-1 gap-6">
                    <div className="max-w-md space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Current Password</label>
                      <input
                        className="w-full rounded-lg border-slate-200 text-sm focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-800"
                        placeholder="••••••••••••"
                        type="password"
                        value={currentPassword}
                        onChange={(event) => setCurrentPassword(event.target.value)}
                      />
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">New Password</label>
                        <input
                          className="w-full rounded-lg border-slate-200 text-sm focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-60 dark:border-slate-700 dark:bg-slate-800"
                          type="password"
                          value={newPassword}
                          onChange={(event) => setNewPassword(event.target.value)}
                          disabled={!canEditNewPassword}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Confirm New Password</label>
                        <input
                          className="w-full rounded-lg border-slate-200 text-sm focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-60 dark:border-slate-700 dark:bg-slate-800"
                          type="password"
                          value={confirmNewPassword}
                          onChange={(event) => setConfirmNewPassword(event.target.value)}
                          disabled={!canEditNewPassword}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        First enter your current password, then set and confirm the new one.
                      </p>
                      <button
                        className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
                        type="button"
                        disabled={!canUpdatePassword}
                      >
                        Update Password
                      </button>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">verified_user</span>
                      <h2 className="text-lg font-bold text-slate-900 dark:text-white">Two-Factor Authentication (2FA)</h2>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-400">
                        <span className="size-1.5 rounded-full bg-green-500"></span>
                        Enabled
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
                    <div className="max-w-xl">
                      <p className="text-sm text-slate-500 dark:text-slate-400">Add an extra layer of security to your account. When enabled, you'll be asked for a verification code from your mobile device during login.</p>
                    </div>
                    <div className="flex items-center">
                      <button aria-checked="true" className="relative inline-flex h-6 w-11 cursor-pointer rounded-full border-2 border-transparent bg-primary transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" role="switch" type="button">
                        <span className="pointer-events-none inline-block h-5 w-5 translate-x-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <div className="mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">devices</span>
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">Active Sessions</h2>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/50">
                      <div className="flex items-center gap-4">
                        <div className="flex size-10 items-center justify-center rounded-lg border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
                          <span className="material-symbols-outlined text-slate-500">laptop_mac</span>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">MacBook Pro - Chrome</h4>
                            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase text-primary">This Device</span>
                          </div>
                          <p className="text-xs text-slate-500">San Francisco, USA • 192.168.1.1</p>
                        </div>
                      </div>
                      <button className="cursor-not-allowed text-xs font-semibold text-slate-400">Active</button>
                    </div>

                    <div className="flex items-center justify-between rounded-lg border border-slate-100 p-4 dark:border-slate-800">
                      <div className="flex items-center gap-4">
                        <div className="flex size-10 items-center justify-center rounded-lg border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
                          <span className="material-symbols-outlined text-slate-500">smartphone</span>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-900 dark:text-white">iPhone 15 - Safari</h4>
                          <p className="text-xs text-slate-500">Los Angeles, USA • 172.16.254.1 • 2 hours ago</p>
                        </div>
                      </div>
                      <button className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-red-600 transition-colors hover:bg-red-50 dark:border-slate-700 dark:hover:bg-red-900/10">Logout</button>
                    </div>
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <div className="border-b border-slate-200 p-6 dark:border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">history</span>
                      <h2 className="text-lg font-bold text-slate-900 dark:text-white">Login History</h2>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead className="bg-slate-50 dark:bg-slate-800/50">
                        <tr>
                          <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Date &amp; Time</th>
                          <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">IP Address</th>
                          <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Location</th>
                          <th className="px-6 py-3 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        <tr>
                          <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Oct 24, 2023 10:45 AM</td>
                          <td className="px-6 py-4 font-mono text-sm text-slate-600 dark:text-slate-400">192.168.1.1</td>
                          <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">San Francisco, CA</td>
                          <td className="px-6 py-4 text-right">
                            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-green-600 dark:text-green-400">
                              <span className="size-1.5 rounded-full bg-green-500"></span>
                              Success
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Oct 23, 2023 09:12 PM</td>
                          <td className="px-6 py-4 font-mono text-sm text-slate-600 dark:text-slate-400">172.16.254.1</td>
                          <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Los Angeles, CA</td>
                          <td className="px-6 py-4 text-right">
                            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-green-600 dark:text-green-400">
                              <span className="size-1.5 rounded-full bg-green-500"></span>
                              Success
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Oct 22, 2023 03:20 PM</td>
                          <td className="px-6 py-4 font-mono text-sm text-slate-600 dark:text-slate-400">8.8.8.8</td>
                          <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">New York, NY</td>
                          <td className="px-6 py-4 text-right">
                            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-600 dark:text-amber-400">
                              <span className="size-1.5 rounded-full bg-amber-500"></span>
                              Failed
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="border-t border-slate-200 bg-slate-50/50 px-6 py-3 dark:border-slate-800 dark:bg-slate-800/30">
                    <button className="text-xs font-semibold text-primary hover:underline">View full login history</button>
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
