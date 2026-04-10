"use client";

import { useState } from "react";
import { useSalesStore } from "@/lib/stores/sales-store";

interface CreateOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const statusOptions = ["Pendiente", "En proceso", "Completado", "Cancelado"];

export function CreateOrderModal({ isOpen, onClose }: CreateOrderModalProps) {
  const [formData, setFormData] = useState({
    order_number: `ORD-${Date.now()}`,
    items: "Producto 1, Producto 2",
    total_amount: 0,
    status: "Pendiente",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const createOrder = useSalesStore((state) => state.createOrder);
  const ordersError = useSalesStore((state) => state.ordersError);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "total_amount" ? parseFloat(value) || 0 : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const orderData = {
        ...formData,
        items: formData.items.split(",").map((item) => item.trim()),
        order_date: new Date().toISOString(),
      };

      await createOrder(orderData);

      setFormData({
        order_number: `ORD-${Date.now()}`,
        items: "Producto 1, Producto 2",
        total_amount: 0,
        status: "Pendiente",
        notes: "",
      });

      onClose();
    } catch (error) {
      console.error("Error creating order:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl dark:bg-slate-900">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Nueva Orden</h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Crear una nueva orden de venta</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Número de Orden</label>
            <input
              type="text"
              name="order_number"
              value={formData.order_number}
              onChange={handleChange}
              readOnly
              className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Productos (separados por coma)</label>
            <textarea
              name="items"
              value={formData.items}
              onChange={handleChange}
              placeholder="Laptop, Mouse, Teclado"
              className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-800"
              rows={3}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Monto Total (COP)</label>
            <input
              type="number"
              name="total_amount"
              value={formData.total_amount}
              onChange={handleChange}
              placeholder="1000000"
              min="0"
              step="1000"
              className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Estado</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-800"
            >
              {statusOptions.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Notas (opcional)</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Agregar notas sobre la orden..."
              className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-800"
              rows={2}
            />
          </div>

          {ordersError && <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600 dark:bg-red-900/30 dark:text-red-300">{ordersError}</div>}

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="flex-1 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 disabled:opacity-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
            >
              {isSubmitting ? "Creando..." : "Crear Orden"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
