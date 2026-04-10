"use client";

import { useEffect, useMemo, useState } from "react";
import { useSalesStore } from "@/lib/stores/sales-store";
import { CreateOrderModal } from "@/components/sales/CreateOrderModal";

function getStatusColor(status: string) {
  switch (status) {
    case "Completado":
      return "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-300";
    case "En proceso":
      return "bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-300";
    case "Pendiente":
      return "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300";
    case "Cancelado":
      return "bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-300";
    default:
      return "bg-slate-50 text-slate-600";
  }
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(value);
}

function getItemsCount(items: any): number {
  if (typeof items === "string") {
    try {
      const parsed = JSON.parse(items);
      return Array.isArray(parsed) ? parsed.length : 1;
    } catch {
      return 1;
    }
  }
  return Array.isArray(items) ? items.length : 1;
}

export default function SalesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const orders = useSalesStore((state) => state.orders);
  const isLoadingOrders = useSalesStore((state) => state.isLoadingOrders);
  const totalSales = useSalesStore((state) => state.totalSales);
  const stats = useSalesStore((state) => state.stats);
  const currentPage = useSalesStore((state) => state.currentPage);
  const itemsPerPage = useSalesStore((state) => state.itemsPerPage);
  const fetchOrders = useSalesStore((state) => state.fetchOrders);
  const setCurrentPage = useSalesStore((state) => state.setCurrentPage);

  useEffect(() => {
    void fetchOrders();
  }, [fetchOrders]);

  const paginatedOrders = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return orders.slice(start, start + itemsPerPage);
  }, [orders, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(orders.length / itemsPerPage);

  return (
    <>
      <div className="space-y-8 p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Ventas</h2>
            <p className="mt-1 text-sm text-slate-500">Historial de pedidos y análisis de ventas.</p>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:items-end">
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-900/40 dark:bg-emerald-950/30">
              <p className="text-xs font-semibold tracking-wider text-emerald-600 uppercase dark:text-emerald-300">Facturación Total</p>
              <h3 className="mt-1 text-2xl font-bold text-emerald-700 dark:text-emerald-200">{formatCurrency(totalSales)}</h3>
              <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-300">Órdenes completadas</p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              + Nueva Venta
            </button>
          </div>
        </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <p className="text-xs font-medium text-slate-500">Total Órdenes</p>
          <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-slate-100">{stats.totalOrders}</h3>
        </div>
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-900/40 dark:bg-emerald-950/30">
          <p className="text-xs font-medium text-emerald-600 dark:text-emerald-300">Completadas</p>
          <h3 className="mt-2 text-2xl font-bold text-emerald-700 dark:text-emerald-200">{stats.completedOrders}</h3>
        </div>
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-900/40 dark:bg-amber-950/30">
          <p className="text-xs font-medium text-amber-600 dark:text-amber-300">En Proceso</p>
          <h3 className="mt-2 text-2xl font-bold text-amber-700 dark:text-amber-200">{stats.inProcessOrders}</h3>
        </div>
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-900/40 dark:bg-blue-950/30">
          <p className="text-xs font-medium text-blue-600 dark:text-blue-300">Pendientes</p>
          <h3 className="mt-2 text-2xl font-bold text-blue-700 dark:text-blue-200">{stats.pendingOrders}</h3>
        </div>
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 dark:border-red-900/40 dark:bg-red-950/30">
          <p className="text-xs font-medium text-red-600 dark:text-red-300">Canceladas</p>
          <h3 className="mt-2 text-2xl font-bold text-red-700 dark:text-red-200">{stats.cancelledOrders}</h3>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="border-b border-slate-100 px-6 py-4 dark:border-slate-800">
          <h3 className="text-lg font-bold">Historial de Pedidos</h3>
          <p className="mt-1 text-sm text-slate-500">Últimas órdenes y su estado de procesamiento.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
            <thead className="bg-slate-50 dark:bg-slate-800/40">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Orden</th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Fecha</th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Items</th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Monto</th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {isLoadingOrders ? (
                <tr>
                  <td className="px-6 py-6 text-sm text-slate-500" colSpan={5}>Cargando órdenes...</td>
                </tr>
              ) : paginatedOrders.length === 0 ? (
                <tr>
                  <td className="px-6 py-6 text-sm text-slate-500" colSpan={5}>No hay órdenes para mostrar.</td>
                </tr>
              ) : (
                paginatedOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/30">
                    <td className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-slate-100">{order.order_number}</td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">{new Date(order.order_date).toLocaleDateString("es-CO")}</td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">{getItemsCount(order.items)} items</td>
                    <td className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-slate-100">{formatCurrency(order.total_amount)}</td>
                    <td className="px-6 py-4"><span className={`rounded-full px-3 py-1 text-xs font-bold ${getStatusColor(order.status)}`}>{order.status}</span></td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {totalPages > 1 && (
          <div className="flex items-center justify-between border-t border-slate-100 px-6 py-4 dark:border-slate-800">
            <div className="text-sm text-slate-600 dark:text-slate-300">
              Página {currentPage} de {totalPages} | Total: {orders.length} órdenes
            </div>
            <div className="flex gap-2">
              <button onClick={() => setCurrentPage(Math.max(1, currentPage - 1))} disabled={currentPage === 1} className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 disabled:opacity-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">
                Anterior
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button key={page} onClick={() => setCurrentPage(page)} className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${currentPage === page ? "bg-blue-600 text-white" : "border border-slate-200 text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"}`}>
                  {page}
                </button>
              ))}
              <button onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))} disabled={currentPage === totalPages} className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 disabled:opacity-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">
                Siguiente
              </button>
            </div>
          </div>
        )}
      </div>
    </div>

      <CreateOrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
