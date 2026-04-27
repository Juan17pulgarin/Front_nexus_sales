'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { apiClient } from '@/lib/axios-client';
import { useAuthStore } from '@/lib/stores/auth-store';

type CheckStatus = 'ok' | 'warning' | 'error' | 'idle';

type HealthCheck = {
  label: string;
  status: CheckStatus;
  detail: string;
};

function statusClasses(status: CheckStatus) {
  switch (status) {
    case 'ok':
      return 'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900/40 dark:bg-emerald-950/30 dark:text-emerald-200';
    case 'warning':
      return 'border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900/40 dark:bg-amber-950/30 dark:text-amber-200';
    case 'error':
      return 'border-red-200 bg-red-50 text-red-700 dark:border-red-900/40 dark:bg-red-950/30 dark:text-red-200';
    default:
      return 'border-slate-200 bg-slate-50 text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300';
  }
}

function statusLabel(status: CheckStatus) {
  switch (status) {
    case 'ok':
      return 'Operativo';
    case 'warning':
      return 'Degradado';
    case 'error':
      return 'Error';
    default:
      return 'Pendiente';
  }
}

export default function HealthPage() {
  const token = useAuthStore((state) => state.token);
  const [backendCheck, setBackendCheck] = useState<HealthCheck>({
    label: 'Backend API',
    status: 'idle',
    detail: 'Esperando comprobación.',
  });

  const checks = useMemo<HealthCheck[]>(() => {
    const checksList: HealthCheck[] = [
      {
        label: 'Frontend',
        status: typeof window !== 'undefined' ? 'ok' : 'idle',
        detail: 'La aplicación de Next.js está renderizando correctamente.',
      },
      {
        label: 'Autenticación',
        status: token ? 'ok' : 'warning',
        detail: token ? 'Sesión activa con token persistido.' : 'No hay token activo en esta sesión.',
      },
      {
        label: 'API base URL',
        status: process.env.NEXT_PUBLIC_API_BASE_URL ? 'ok' : 'error',
        detail: process.env.NEXT_PUBLIC_API_BASE_URL
          ? process.env.NEXT_PUBLIC_API_BASE_URL
          : 'Falta configurar NEXT_PUBLIC_API_BASE_URL.',
      },
      backendCheck,
    ];

    return checksList;
  }, [backendCheck, token]);

  useEffect(() => {
    let active = true;

    const runCheck = async () => {
      if (!token) {
        if (active) {
          setBackendCheck({
            label: 'Backend API',
            status: 'warning',
            detail: 'No se ejecutó la verificación remota porque no hay sesión activa.',
          });
        }

        return;
      }

      try {
        await apiClient.get('/clientes');

        if (active) {
          setBackendCheck({
            label: 'Backend API',
            status: 'ok',
            detail: 'La ruta protegida /clientes respondió correctamente.',
          });
        }
      } catch (error) {
        const message = error instanceof Error ? error.message : 'No fue posible contactar el backend.';

        if (active) {
          setBackendCheck({
            label: 'Backend API',
            status: 'error',
            detail: message,
          });
        }
      }
    };

    void runCheck();

    return () => {
      active = false;
    };
  }, [token]);

  const healthyCount = checks.filter((check) => check.status === 'ok').length;
  const overallStatus =
    checks.some((check) => check.status === 'error')
      ? 'Degraded'
      : healthyCount >= checks.length - 1
        ? 'Healthy'
        : 'Attention needed';

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-8 shadow-2xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
                Health check
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Estado general del frontend y su backend.</h2>
              <p className="text-sm leading-6 text-slate-300 md:text-base">
                Vista independiente para comprobar salud técnica sin entrar al layout del usuario.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">Estado global</p>
              <p className="mt-2 text-2xl font-bold">{overallStatus}</p>
              <p className="mt-1 text-sm text-slate-300">
                {healthyCount} de {checks.length} comprobaciones en verde.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {checks.map((check) => (
            <div key={check.label} className={`rounded-2xl border p-5 shadow-sm ${statusClasses(check.status)}`}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] opacity-70">{check.label}</p>
                  <h3 className="mt-2 text-lg font-bold">{statusLabel(check.status)}</h3>
                </div>
                <span className="material-symbols-outlined text-2xl">
                  {check.status === 'ok' ? 'check_circle' : check.status === 'warning' ? 'warning' : check.status === 'error' ? 'error' : 'progress_activity'}
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 opacity-90">{check.detail}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur-sm">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold">Quick actions</h3>
                <p className="mt-1 text-sm text-slate-300">Atajos para validar el flujo principal de la app.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Link href="/customers" className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
                <p className="text-sm font-semibold">Customers</p>
                <p className="mt-1 text-sm text-slate-300">Revisa clientes, filtros e historial de ventas.</p>
              </Link>
              <Link href="/sales" className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
                <p className="text-sm font-semibold">Sales</p>
                <p className="mt-1 text-sm text-slate-300">Comprueba órdenes, totales y paginación.</p>
              </Link>
              <Link href="/status" className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
                <p className="text-sm font-semibold">Status</p>
                <p className="mt-1 text-sm text-slate-300">Mira métricas operativas y modo de datos.</p>
              </Link>
              <Link href="/reports" className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
                <p className="text-sm font-semibold">Reports</p>
                <p className="mt-1 text-sm text-slate-300">Valida los gráficos y el módulo analítico.</p>
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-sm">
            <h3 className="text-lg font-bold">What this page checks</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>Frontend render y layout principal.</li>
              <li>Estado del token y sesión persistida.</li>
              <li>Variable de entorno del API base URL.</li>
              <li>Respuesta real de la API protegida cuando hay sesión activa.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}