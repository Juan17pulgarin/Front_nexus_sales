"use client";

import { useEffect, useState } from "react";

interface Cliente {
  CustomerID: number;
  FirstName: string;
  LastName: string;
  EmailAddress: string;
  CompanyName: string;
}

export default function HomePage() {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFullList, setIsFullList] = useState(false);

  const fetchClientes = async (cargarTodo = false) => {
    setLoading(true);
    try {
      const token = localStorage.getItem("auth_token");
      const url = cargarTodo
        ? "http://127.0.0.1:8000/api/clientes?todo=1"
        : "http://127.0.0.1:8000/api/clientes";

      const response = await fetch(url, {
        headers: { Authorization: `Bearer ${token}` },
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
    fetchClientes();
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
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="flex h-screen overflow-hidden">

        {/* SIDEBAR COMPLETO */}
        <aside className="h-full w-64 shrink-0 flex flex-col border-r border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
          
          {/* LOGO */}
          <div className="flex items-center gap-3 p-6">
            <div className="flex items-center justify-center rounded-lg bg-blue-600 p-1.5">
              <svg className="h-6 w-6 text-white" viewBox="0 0 48 48">
                <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor" />
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-bold">Nexus Sales</h1>
              <p className="text-xs text-slate-500">CRM Dashboard</p>
            </div>
          </div>

          {/* NAV */}
          <nav className="flex-1 px-3 space-y-1">
            
            {/* ACTIVE */}
            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800" href="/home">
              <span className="material-symbols-outlined">dashboard</span>
              <span className="text-sm font-semibold">Dashboard</span>
            </a>

            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800" href="/customers">
              <span className="material-symbols-outlined">group</span>
              <span className="text-sm font-semibold">Customers</span>
            </a>

            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800" href="/sales">
              <span className="material-symbols-outlined">receipt_long</span>
              <span className="text-sm font-semibold">Sales</span>
            </a>

            {/* NUEVOS */}
            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800" href="/reports">
              <span className="material-symbols-outlined">monitoring</span>
              <span className="text-sm font-semibold">Reports</span>
            </a>

            <a className="mt-auto flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800" href="/settings">
              <span className="material-symbols-outlined">settings</span>
              <span className="text-sm font-semibold">Settings</span>
            </a>
          </nav>

          {/* USER */}
          <div className="border-t border-slate-200 p-4 dark:border-slate-800">
            <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-2 dark:bg-slate-800">
              <div className="size-9 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
                AM
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold">Alex Morgan</p>
                <p className="truncate text-xs text-slate-500">Admin</p>
              </div>
              <span className="material-symbols-outlined text-slate-400">
                unfold_more
              </span>
            </div>
          </div>
        </aside>

        {/* MAIN */}
        <main className="flex-1 flex flex-col overflow-y-auto">

          {/* HEADER */}
          <header className="h-16 bg-white dark:bg-slate-900 border-b flex items-center px-8">
            <div className="relative w-full max-w-md">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                search
              </span>
              <input
                className="w-full bg-slate-100 dark:bg-slate-800 rounded-lg pl-10 pr-4 py-2 text-sm outline-none"
                placeholder="Buscar clientes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </header>

          {/* CONTENT */}
          <div className="p-8">
            <div className="bg-white dark:bg-slate-900 rounded-xl border shadow-sm overflow-hidden">
              
              <div className="p-4 flex justify-between items-center border-b">
                <h3 className="font-bold">Customers</h3>

                {!isFullList && (
                  <button
                    onClick={() => fetchClientes(true)}
                    className="text-blue-600 text-sm font-bold"
                  >
                    Ver todos
                  </button>
                )}
              </div>

              <table className="w-full text-left">
                <thead className="text-xs text-slate-500 uppercase border-b bg-slate-50">
                  <tr>
                    <th className="px-6 py-3">Nombre</th>
                    <th className="px-6 py-3">Email</th>
                    <th className="px-6 py-3 text-right">ID</th>
                  </tr>
                </thead>

                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan={3} className="p-10 text-center">
                        Cargando...
                      </td>
                    </tr>
                  ) : (
                    clientesFiltrados.map((c) => (
                      <tr key={c.CustomerID} className="border-t">
                        <td className="px-6 py-4">
                          {c.FirstName} {c.LastName}
                        </td>
                        <td className="px-6 py-4">{c.EmailAddress}</td>
                        <td className="px-6 py-4 text-right">
                          #{c.CustomerID}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}