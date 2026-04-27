'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useClientesStore } from '@/lib/stores/clientes-store';
import { useSalesStore } from '@/lib/stores/sales-store';
import { useAuthStore } from '@/lib/stores/auth-store';

function metricCard(label: string, value: string, detail: string) {
  return { label, value, detail };
}

export default function StatusPage() {
  const token = useAuthStore((state) => state.token);
  const clientes = useClientesStore((state) => state.clientes);
  const fetchClientes = useClientesStore((state) => state.fetchClientes);
  const orders = useSalesStore((state) => state.orders);
  const fetchOrders = useSalesStore((state) => state.fetchOrders);

  useEffect(() => {
    void fetchClientes();
    void fetchOrders();
  }, [fetchClientes, fetchOrders]);

  const metrics = [
    metricCard('Sesión', token ? 'Activa' : 'Local', token ? 'La app está autenticada.' : 'La app trabaja con fallback local.'),
    metricCard('Clientes', String(clientes.length), 'Datos visibles en la vista de clientes.'),
    metricCard('Órdenes', String(orders.length), 'Pedidos disponibles para sales y health check.'),
    metricCard('Cobertura', 'Hybrid', 'API-first con fallback seguro a local.'),
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-sm backdrop-blur-sm">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">Operations status</p>
              <h2 className="text-3xl font-bold tracking-tight">Estado operativo de la plataforma.</h2>
              <p className="text-sm leading-6 text-slate-300 md:text-base">
                Vista independiente para demo, QA y soporte, fuera del dashboard del usuario.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-950 px-5 py-4 text-white shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">Modo actual</p>
              <p className="mt-2 text-2xl font-bold">{token ? 'Connected' : 'Fallback local'}</p>
              <p className="mt-1 text-sm text-slate-300">Estado listo para demos y validación operativa.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">{metric.label}</p>
              <p className="mt-2 text-3xl font-bold text-white">{metric.value}</p>
              <p className="mt-2 text-sm text-slate-300">{metric.detail}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-xl">
            <h3 className="text-lg font-bold">Navigation map</h3>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Link href="/home" className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
                <p className="font-semibold">Home</p>
                <p className="mt-1 text-sm text-slate-300">Resumen ejecutivo principal.</p>
              </Link>
              <Link href="/customers" className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
                <p className="font-semibold">Customers</p>
                <p className="mt-1 text-sm text-slate-300">Gestión y historial por cliente.</p>
              </Link>
              <Link href="/sales" className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
                <p className="font-semibold">Sales</p>
                <p className="mt-1 text-sm text-slate-300">Órdenes y facturación.</p>
              </Link>
              <Link href="/health" className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
                <p className="font-semibold">Health</p>
                <p className="mt-1 text-sm text-slate-300">Chequeo técnico y conectividad.</p>
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur-sm">
            <h3 className="text-lg font-bold">Why this page helps</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Es una vista simple para demos, QA y soporte: explica rápido si la app está conectada, cuántos datos hay cargados y qué módulos están listos para usar.
            </p>
            <div className="mt-6 rounded-2xl bg-white/10 p-4 text-sm text-slate-200">
              Cuando exista backend completo, esta pantalla puede evolucionar a un status board real sin cambiar la navegación.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}