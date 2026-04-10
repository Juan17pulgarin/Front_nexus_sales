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
        if (cargarTodo) {
          setIsFullList(true);
        }
      }
    } catch (error) {
      console.error("Error cargando clientes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchClientes();
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
    <div className="space-y-6 p-6 md:p-8">
      <div className="max-w-xl">
        <div className="relative w-full">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            search
          </span>
          <input
            className="w-full rounded-lg border-none bg-white py-2 pr-4 pl-10 text-sm outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-primary/20 dark:bg-slate-900 dark:ring-slate-800"
            placeholder="Search in current list..."
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4 dark:border-slate-800">
          <div>
            <h3 className="text-lg font-bold">AdventureWorks Customers</h3>
            <p className="text-xs text-slate-400">
              {isFullList ? "Showing all records" : "Showing latest 10 records"}
            </p>
          </div>

          {!isFullList && (
            <button
              onClick={() => void fetchClientes(true)}
              className="text-primary flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm font-bold transition-colors hover:bg-primary/10"
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
                <th className="px-6 py-3 text-xs font-bold uppercase text-slate-500">Customer</th>
                <th className="px-6 py-3 text-xs font-bold uppercase text-slate-500">Email</th>
                <th className="px-6 py-3 text-right text-xs font-bold uppercase text-slate-500">ID</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {loading ? (
                <tr>
                  <td colSpan={3} className="px-6 py-10 text-center text-slate-500 italic">
                    Consultando base de datos...
                  </td>
                </tr>
              ) : (
                clientesFiltrados.map((cliente) => (
                  <tr key={cliente.CustomerID} className="transition-colors hover:bg-slate-50/50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 text-primary flex size-8 items-center justify-center rounded-full text-xs font-bold uppercase">
                          {cliente.FirstName[0]}
                          {cliente.LastName[0]}
                        </div>
                        <div>
                          <div className="text-sm font-semibold">
                            {cliente.FirstName} {cliente.LastName}
                          </div>
                          <div className="text-[10px] font-bold uppercase text-slate-400">
                            {cliente.CompanyName}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                      {cliente.EmailAddress}
                    </td>
                    <td className="px-6 py-4 text-right text-sm font-bold text-slate-300">
                      #{cliente.CustomerID}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
