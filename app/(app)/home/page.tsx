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
              <h1 className="text-lg font-bold leading-none tracking-tight">Nexus Sales</h1>
              <p className="text-xs text-slate-500 font-medium">CRM Dashboard</p>
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
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}