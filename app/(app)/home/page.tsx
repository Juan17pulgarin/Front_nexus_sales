"use client";

import { useEffect, useState } from "react";

interface Cliente {
  CustomerID: number;
  FirstName: string;
  LastName: string;
  EmailAddress: string;
  CompanyName: string;
}


import Link from "next/link";


export default function HomePage() {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFullList, setIsFullList] = useState(false); // Para saber si ya cargamos todos

  // Función para cargar datos (reutilizable)
  const fetchClientes = async (cargarTodo = false) => {
    setLoading(true);
    try {
      const token = localStorage.getItem("auth_token");
      // Si cargarTodo es true, añadimos el parámetro a la URL
      const url = cargarTodo 
        ? "http://127.0.0.1:8000/api/clientes?todo=1" 
        : "http://127.0.0.1:8000/api/clientes";

      const response = await fetch(url, {
        headers: { "Authorization": `Bearer ${token}` },
      });

      if (response.ok) {
        const data = await response.json();
        setClientes(data);
        if (cargarTodo) setIsFullList(true);
      }
    } catch (error) {
      console.error("Error cargando clientes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClientes(); // Carga inicial (solo 10)
  }, []);

  const clientesFiltrados = clientes.filter((c) => {
    const busqueda = searchTerm.toLowerCase();
    return (
      c.FirstName.toLowerCase().includes(busqueda) ||
      c.LastName.toLowerCase().includes(busqueda) ||
      c.EmailAddress.toLowerCase().includes(busqueda) ||
      c.CompanyName.toLowerCase().includes(busqueda)
    );
  });

  return (
    <div className="bg-background-light font-display text-slate-900 dark:bg-background-dark dark:text-slate-100 min-h-screen">
      <div className="flex h-screen overflow-hidden">
        {/* SIDEBAR (Con todos los iconos) */}
        <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col h-full shrink-0">
          <div className="p-6 flex items-center gap-3">
            <div className="bg-primary rounded-lg p-1.5 flex items-center justify-center">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor" /></svg>
            </div>
            <div>
              <h1 className="text-lg leading-none font-bold tracking-tight">Nexus Sales</h1>
              <p className="text-xs font-medium text-slate-500">CRM Dashboard</p>
            </div>
          </div>
          <nav className="flex-1 px-3 space-y-1">
            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 transition-colors" href="/home">
              <span className="material-symbols-outlined">dashboard</span>
              <span className="text-sm font-semibold">Dashboard</span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 transition-colors" href="/customers">
              <span className="material-symbols-outlined">group</span>
              <span className="text-sm font-semibold">Customers</span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 transition-colors" href="/sales">
              <span className="material-symbols-outlined">receipt_long</span>
              <span className="text-sm font-semibold">Sales</span>
            </a>
          </nav>
        </aside>

        {/* CONTENIDO PRINCIPAL */}
        <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
          <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 sticky top-0 z-10">
            <div className="flex items-center gap-4 flex-1 max-w-xl">
              <div className="relative w-full">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                <input 
                  className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 outline-none" 
                  placeholder="Search in current list..." 
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </header>

          <div className="p-8 space-y-8">
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg">AdventureWorks Customers</h3>
                  <p className="text-xs text-slate-400">
                    {isFullList ? "Showing all records" : "Showing latest 10 records"}
                  </p>
                </div>
                
                {/* BOTÓN VER TODOS */}
                {!isFullList && (
                  <button 
                    onClick={() => fetchClientes(true)}
                    className="text-primary text-sm font-bold hover:bg-primary/10 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-sm">list_alt</span>
                    Ver todos
                  </button>
                )}
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 dark:bg-slate-800/50">
                    <tr>
                      <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase">Customer</th>
                      <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase">Email</th>
                      <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase text-right">ID</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {loading ? (
                      <tr><td colSpan={3} className="px-6 py-10 text-center text-slate-500 italic">Consultando base de datos...</td></tr>
                    ) : (
                      clientesFiltrados.map((cliente) => (
                        <tr key={cliente.CustomerID} className="hover:bg-slate-50/50 transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs uppercase">
                                {cliente.FirstName[0]}{cliente.LastName[0]}
                              </div>
                              <div>
                                <div className="font-semibold text-sm">{cliente.FirstName} {cliente.LastName}</div>
                                <div className="text-[10px] text-slate-400 uppercase font-bold">{cliente.CompanyName}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{cliente.EmailAddress}</td>
                          <td className="px-6 py-4 text-sm font-bold text-right text-slate-300">#{cliente.CustomerID}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>

          <nav className="flex-1 space-y-1 px-3">
            <a
              className="active-nav flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined">dashboard</span>
              <span className="text-sm font-semibold">Dashboard</span>
            </a>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-600 transition-colors hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800"
              href="/customers/new"
            >
              <span className="material-symbols-outlined">group</span>
              <span className="text-sm font-semibold">Customers</span>
            </Link>
            <a
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-600 transition-colors hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800"
              href="#"
            >
              <span className="material-symbols-outlined">receipt_long</span>
              <span className="text-sm font-semibold">Sales</span>
            </a>
            <a
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-600 transition-colors hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800"
              href="#"
            >
              <span className="material-symbols-outlined">monitoring</span>
              <span className="text-sm font-semibold">Reports</span>
            </a>
            <a
              className="mt-auto flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-600 transition-colors hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800"
              href="#"
            >
              <span className="material-symbols-outlined">settings</span>
              <span className="text-sm font-semibold">Settings</span>
            </a>
          </nav>
          <div className="border-t border-slate-200 p-4 dark:border-slate-800">
            <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-2 dark:bg-slate-800">
              <div className="bg-primary/20 text-primary flex size-9 items-center justify-center overflow-hidden rounded-full">
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
                <span className="material-symbols-outlined absolute top-1/2 left-3 -translate-y-1/2 text-xl text-slate-400">
                  search
                </span>
                <input
                  className="focus:ring-primary/20 w-full rounded-lg border-none bg-slate-50 py-2 pr-4 pl-10 text-sm outline-none placeholder:text-slate-400 focus:ring-2 dark:bg-slate-800"
                  placeholder="Search customers, orders, or documents..."
                  type="text"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative flex size-10 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2 right-2.5 size-2 rounded-full border-2 border-white bg-red-500 dark:border-slate-900"></span>
              </button>
              <Link
                href="/customers/new"
                className="bg-primary hover:bg-primary/90 flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold text-white"
              >
                <span className="material-symbols-outlined text-lg">add</span>
                New Lead
              </Link>
            </div>
          </header>
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
                  <button className="text-primary text-sm font-bold hover:underline">
                    View All
                  </button>
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
                        <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                          San Francisco, CA
                        </td>
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
                        <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                          London, UK
                        </td>
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
                        <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                          Austin, TX
                        </td>
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
                        <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                          New York, NY
                        </td>
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
                      <span className="material-symbols-outlined text-[14px] text-white">
                        shopping_cart
                      </span>
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
                      <span className="material-symbols-outlined text-[14px] text-white">
                        phone_in_talk
                      </span>
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
                      <span className="material-symbols-outlined text-[14px] text-white">
                        sync_alt
                      </span>
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
                      <span className="material-symbols-outlined text-[14px] text-white">
                        person_add
                      </span>
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
          <button className="mt-8 w-full rounded-lg border border-slate-200 py-2.5 text-sm font-bold text-slate-600 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-800">
            Load More Activities
          </button>
        </div>
      </div>
    </div>
  );
}