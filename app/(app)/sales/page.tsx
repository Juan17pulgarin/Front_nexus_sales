"use client";

import { useEffect, useState } from "react";

interface Sale {
  SalesOrderID: number;
  OrderDate: string;
  Status: number;
  TotalDue: number;
  FirstName: string;
  LastName: string;
}

interface Detalle {
  Name: string;
  OrderQty: number;
  UnitPrice: number;
  LineTotal: number;
}

export default function SalesPage() {
  const [sales, setSales] = useState<Sale[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const [verTodas, setVerTodas] = useState(false); // 🔥 SWITCH

  const [detalle, setDetalle] = useState<Detalle[]>([]);
  const [ventaInfo, setVentaInfo] = useState<any>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchDetalle, setSearchDetalle] = useState("");

  // 🔥 CARGAR VENTAS
  const fetchSales = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("auth_token");

      const url = verTodas
        ? "http://127.0.0.1:8000/api/sales?todo=true"
        : "http://127.0.0.1:8000/api/sales";

      const res = await fetch(url, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();
      setSales(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // 🔁 Recargar cuando cambia el switch
  useEffect(() => {
    fetchSales();
  }, [verTodas]);

  // 🔥 VER DETALLE
  const handleView = async (id: number) => {
    try {
      const token = localStorage.getItem("auth_token");

      const res = await fetch(`http://127.0.0.1:8000/api/sales/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();

      setVentaInfo(data.venta);
      setDetalle(data.detalle);
      setModalOpen(true);
    } catch (err) {
      console.error(err);
    }
  };

  // 🔍 FILTRO
  const salesFiltradas = sales.filter((s) =>
    `${s.FirstName} ${s.LastName} ${s.SalesOrderID}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const detalleFiltrado = detalle.filter((d) =>
    d.Name.toLowerCase().includes(searchDetalle.toLowerCase())
  );

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="flex h-screen">

        {/* SIDEBAR ORIGINAL (NO TOCADO) */}
        <aside className="w-64 bg-white dark:bg-slate-900 border-r flex flex-col">
          <div className="p-6 flex items-center gap-3">
            <div className="bg-blue-600 rounded-lg p-1.5 text-white">
              <span className="material-symbols-outlined">rocket_launch</span>
            </div>
            <h1 className="text-lg font-bold">Nexus Sales</h1>
          </div>

          <nav className="flex-1 px-3 space-y-1 text-sm font-semibold">
            <a href="/home" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:bg-slate-100">
              <span className="material-symbols-outlined">dashboard</span>
              Dashboard
            </a>

            <a href="/customers" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:bg-slate-100">
              <span className="material-symbols-outlined">group</span>
              Customers
            </a>

            <a href="/sales" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-blue-50 text-blue-600">
              <span className="material-symbols-outlined">receipt_long</span>
              Sales
            </a>

            <a href="/reports" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:bg-slate-100">
              <span className="material-symbols-outlined">monitoring</span>
              Reports
            </a>

            <a href="/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:bg-slate-100">
              <span className="material-symbols-outlined">settings</span>
              Settings
            </a>
          </nav>
        </aside>

        {/* MAIN */}
        <main className="flex-1 flex flex-col overflow-hidden">

          {/* HEADER */}
          <header className="h-16 bg-white dark:bg-slate-900 border-b flex items-center px-6 justify-between">

            {/* BUSCADOR */}
            <div className="relative w-full max-w-md">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                search
              </span>
              <input
                className="w-full bg-slate-100 rounded-lg pl-10 pr-4 py-2 text-sm outline-none"
                placeholder="Buscar ventas o clientes..."
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* 🔥 SWITCH BONITO */}
            <div className="flex items-center gap-3 ml-6">
              <span className="text-sm text-slate-500">
                {verTodas ? "Todas las ventas" : "Vista rápida"}
              </span>

              <button
                onClick={() => setVerTodas(!verTodas)}
                className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
                  verTodas ? "bg-blue-600" : "bg-slate-300"
                }`}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                    verTodas ? "translate-x-6" : ""
                  }`}
                />
              </button>
            </div>
          </header>

          {/* CONTENT */}
          <div className="p-6 overflow-auto">

            <h1 className="text-xl font-bold mb-4">Ventas</h1>

            <div className="bg-white dark:bg-slate-900 rounded-xl shadow overflow-hidden">
              <table className="w-full">
                <thead className="bg-slate-100 text-xs uppercase">
                  <tr>
                    <th className="p-4 text-left">ID</th>
                    <th className="p-4 text-left">Cliente</th>
                    <th className="p-4 text-left">Fecha</th>
                    <th className="p-4 text-left">Total</th>
                    <th className="p-4 text-left">Estado</th>
                    <th className="p-4 text-right">Acciones</th>
                  </tr>
                </thead>

                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan={6} className="text-center p-10">
                        Cargando...
                      </td>
                    </tr>
                  ) : (
                    salesFiltradas.map((s) => (
                      <tr key={s.SalesOrderID} className="border-t hover:bg-slate-50">
                        <td className="p-4">#{s.SalesOrderID}</td>
                        <td className="p-4">{s.FirstName} {s.LastName}</td>
                        <td className="p-4">{new Date(s.OrderDate).toLocaleDateString()}</td>
                        <td className="p-4 font-bold">${Number(s.TotalDue).toLocaleString()}</td>
                        <td className="p-4">{s.Status}</td>
                        <td className="p-4 text-right">
                          <button
                            onClick={() => handleView(s.SalesOrderID)}
                            className="text-blue-600 hover:underline"
                          >
                            Ver
                          </button>
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

      {/* MODAL */}
      {modalOpen && ventaInfo && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">

          <div className="bg-white dark:bg-slate-900 w-full max-w-4xl rounded-2xl flex flex-col max-h-[90vh]">

            <div className="p-6 border-b">
              <h2 className="text-xl font-bold">
                Venta #{ventaInfo.SalesOrderID}
              </h2>
              <p className="text-sm text-slate-500">
                {ventaInfo.FirstName} {ventaInfo.LastName}
              </p>
            </div>

            <div className="p-4 border-b">
              <input
                className="w-full bg-slate-100 p-2 rounded"
                placeholder="Buscar producto..."
                onChange={(e) => setSearchDetalle(e.target.value)}
              />
            </div>

            <div className="overflow-y-auto p-4 flex-1">
              <table className="w-full text-sm">
                <tbody>
                  {detalleFiltrado.map((d, i) => (
                    <tr key={i} className="border-b">
                      <td className="p-2">{d.Name}</td>
                      <td className="p-2">{d.OrderQty}</td>
                      <td className="p-2">${Number(d.UnitPrice).toLocaleString()}</td>
                      <td className="p-2 font-bold">${Number(d.LineTotal).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 border-t text-right">
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 bg-slate-200 rounded"
              >
                Cerrar
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}