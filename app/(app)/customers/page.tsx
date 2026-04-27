'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { useClientesStore } from '@/lib/stores/clientes-store';
import { getCustomerOrders, type CustomerOrder } from '@/services/sales.service';

type EditFormState = {
  FirstName: string;
  LastName: string;
  EmailAddress: string;
  City: string;
  State: string;
};

function normalize(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

function matchesFilter(value: string | null | undefined, filter: string) {
  if (!filter.trim()) {
    return true;
  }

  return normalize(value ?? '').includes(normalize(filter));
}

export default function CustomersPage() {
  const clientes = useClientesStore((state) => state.clientes);
  const isLoadingClientes = useClientesStore((state) => state.isLoadingClientes);
  const clientesError = useClientesStore((state) => state.clientesError);
  const searchFilters = useClientesStore((state) => state.searchFilters);
  const isSubmitting = useClientesStore((state) => state.isSubmitting);
  const fetchClientes = useClientesStore((state) => state.fetchClientes);
  const setSearchFilters = useClientesStore((state) => state.setSearchFilters);
  const clearSearchFilters = useClientesStore((state) => state.clearSearchFilters);
  const updateCliente = useClientesStore((state) => state.updateCliente);
  const deleteCliente = useClientesStore((state) => state.deleteCliente);

  const [cityInput, setCityInput] = useState(searchFilters.city);
  const [stateInput, setStateInput] = useState(searchFilters.state);
  const [editingCustomerId, setEditingCustomerId] = useState<number | null>(null);
  const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(null);
  const [customerOrders, setCustomerOrders] = useState<CustomerOrder[]>([]);
  const [ordersLoading, setOrdersLoading] = useState(false);
  const [editForm, setEditForm] = useState<EditFormState>({
    FirstName: '',
    LastName: '',
    EmailAddress: '',
    City: '',
    State: '',
  });

  useEffect(() => {
    void fetchClientes();
  }, [fetchClientes]);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setSearchFilters({
        city: cityInput,
        state: stateInput,
      });
    }, 350);

    return () => window.clearTimeout(timeoutId);
  }, [cityInput, stateInput, setSearchFilters]);

  const filteredClientes = useMemo(() => {
    return clientes.filter((customer) => {
      return (
        matchesFilter(customer.city, searchFilters.city) &&
        matchesFilter(customer.state, searchFilters.state)
      );
    });
  }, [clientes, searchFilters.city, searchFilters.state]);

  const hasFilters = searchFilters.city.trim().length > 0 || searchFilters.state.trim().length > 0;

  const handleClearFilters = () => {
    setCityInput('');
    setStateInput('');
    clearSearchFilters();
  };

  const openEdit = (customer: (typeof clientes)[number]) => {
    setEditingCustomerId(customer.CustomerID);
    setEditForm({
      FirstName: customer.FirstName,
      LastName: customer.LastName,
      EmailAddress: customer.EmailAddress,
      City: customer.city,
      State: customer.state,
    });
  };

  const openHistory = (customerId: number) => {
    setSelectedCustomerId(customerId);
  };

  const closeEdit = () => {
    setEditingCustomerId(null);
  };

  const handleEditSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!editingCustomerId) {
      return;
    }

    const ok = await updateCliente(editingCustomerId, editForm);
    if (ok) {
      closeEdit();
    }
  };

  const handleDelete = async (customerId: number) => {
    const confirmed = window.confirm('¿Seguro que quieres eliminar este cliente?');
    if (!confirmed) {
      return;
    }

    await deleteCliente(customerId);
  };

  useEffect(() => {
    if (!selectedCustomerId) {
      setCustomerOrders([]);
      setOrdersLoading(false);
      return;
    }

    let isActive = true;

    const loadOrders = async () => {
      setOrdersLoading(true);

      const orders = await getCustomerOrders(selectedCustomerId);

      if (!isActive) {
        return;
      }

      setCustomerOrders(orders);
      setOrdersLoading(false);
    };

    void loadOrders();

    return () => {
      isActive = false;
    };
  }, [selectedCustomerId]);

  const selectedCustomer = useMemo(() => {
    return clientes.find((customer) => customer.CustomerID === selectedCustomerId) ?? null;
  }, [clientes, selectedCustomerId]);

  const totalAccumulated = useMemo(() => {
    return customerOrders.reduce((sum, order) => sum + (order.total_amount || 0), 0);
  }, [customerOrders]);

  return (
    <div className="space-y-8 p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Clientes</h2>
          <p className="mt-1 text-sm text-slate-500">
            Busca y filtra la cartera por ciudad y estado.
          </p>
        </div>

        <Link
          href="/customers/new"
          className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
        >
          + Nuevo cliente
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:grid-cols-3">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700 dark:text-slate-300" htmlFor="city-search">
            Ciudad
          </label>
          <input
            id="city-search"
            value={cityInput}
            onChange={(event) => setCityInput(event.target.value)}
            placeholder="Ej. Medellin"
            className="block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700 dark:text-slate-300" htmlFor="state-search">
            Estado
          </label>
          <input
            id="state-search"
            value={stateInput}
            onChange={(event) => setStateInput(event.target.value)}
            placeholder="Ej. Antioquia"
            className="block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
          />
        </div>

        <div className="flex items-end gap-3">
          <button
            type="button"
            onClick={handleClearFilters}
            className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 px-4 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            Limpiar filtros
          </button>

          <div className="rounded-xl bg-slate-100 px-4 py-3 text-sm text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            {filteredClientes.length} resultados
          </div>
        </div>
      </div>

      {clientesError ? (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-900/40 dark:bg-red-950/30 dark:text-red-300">
          {clientesError}
        </div>
      ) : null}

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
            <thead className="bg-slate-50 dark:bg-slate-800/40">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Cliente
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Email
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Ciudad
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Estado
                </th>
                <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {isLoadingClientes ? (
                <tr>
                  <td className="px-4 py-6 text-sm text-slate-500" colSpan={5}>
                    Cargando clientes...
                  </td>
                </tr>
              ) : filteredClientes.length === 0 ? (
                <tr>
                  <td className="px-4 py-6 text-sm text-slate-500" colSpan={5}>
                    {hasFilters ? 'No hay clientes que coincidan con ese filtro.' : 'No hay clientes para mostrar.'}
                  </td>
                </tr>
              ) : (
                filteredClientes.map((customer) => (
                  <tr
                    key={customer.CustomerID}
                    className={`cursor-pointer hover:bg-slate-50/60 dark:hover:bg-slate-800/30 ${
                      selectedCustomerId === customer.CustomerID ? 'bg-blue-50/70 dark:bg-blue-950/20' : ''
                    }`}
                    onClick={() => openHistory(customer.CustomerID)}
                  >
                    <td className="px-4 py-4 text-sm font-medium text-slate-900 dark:text-slate-100">
                      {customer.FirstName} {customer.LastName}
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-600 dark:text-slate-300">
                      {customer.EmailAddress}
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-600 dark:text-slate-300">
                      {customer.city ?? '-'}
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-600 dark:text-slate-300">
                      {customer.state ?? '-'}
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => openEdit(customer)}
                          onClickCapture={(event) => event.stopPropagation()}
                          className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                        >
                          Editar
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(customer.CustomerID)}
                          onClickCapture={(event) => event.stopPropagation()}
                          className="rounded-lg border border-red-200 px-3 py-1.5 text-xs font-semibold text-red-600 transition-colors hover:bg-red-50 dark:border-red-900/40 dark:text-red-300 dark:hover:bg-red-950/40"
                        >
                          Eliminar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {editingCustomerId ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
          <div className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-bold">Editar cliente</h3>
              <button
                type="button"
                onClick={closeEdit}
                className="rounded-lg px-2 py-1 text-sm text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Cerrar
              </button>
            </div>

            <form className="space-y-4" onSubmit={handleEditSubmit}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  value={editForm.FirstName}
                  onChange={(event) =>
                    setEditForm((prev) => ({ ...prev, FirstName: event.target.value }))
                  }
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800"
                  placeholder="FirstName"
                  required
                />
                <input
                  value={editForm.LastName}
                  onChange={(event) =>
                    setEditForm((prev) => ({ ...prev, LastName: event.target.value }))
                  }
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800"
                  placeholder="LastName"
                  required
                />
                <input
                  value={editForm.EmailAddress}
                  onChange={(event) =>
                    setEditForm((prev) => ({ ...prev, EmailAddress: event.target.value }))
                  }
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800"
                  placeholder="EmailAddress"
                  type="email"
                  required
                />
                <input
                  value={editForm.City}
                  onChange={(event) =>
                    setEditForm((prev) => ({ ...prev, City: event.target.value }))
                  }
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800"
                  placeholder="City"
                  required
                />
              </div>

              <input
                value={editForm.State}
                onChange={(event) =>
                  setEditForm((prev) => ({ ...prev, State: event.target.value }))
                }
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800"
                placeholder="State"
                required
              />

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={closeEdit}
                  className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
                >
                  Guardar cambios
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="border-b border-slate-100 px-6 py-4 dark:border-slate-800">
          <h3 className="text-lg font-bold">Historial de ventas por cliente</h3>
          <p className="mt-1 text-sm text-slate-500">
            {selectedCustomer
              ? `Pedidos asociados a ${selectedCustomer.FirstName} ${selectedCustomer.LastName}.`
              : 'Selecciona un cliente para ver su historial.'}
          </p>
        </div>

        {selectedCustomer ? (
          <div className="space-y-4 p-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/40">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Total acumulado</p>
                <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-slate-100">
                  {new Intl.NumberFormat('es-CO', {
                    style: 'currency',
                    currency: 'COP',
                    minimumFractionDigits: 0,
                  }).format(totalAccumulated)}
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/40">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Órdenes</p>
                <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-slate-100">{customerOrders.length}</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
                  <thead className="bg-slate-50 dark:bg-slate-800/40">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Orden</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Fecha</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Monto</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Estado</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {ordersLoading ? (
                      <tr>
                        <td className="px-4 py-5 text-sm text-slate-500" colSpan={4}>
                          Cargando historial...
                        </td>
                      </tr>
                    ) : customerOrders.length === 0 ? (
                      <tr>
                        <td className="px-4 py-5 text-sm text-slate-500" colSpan={4}>
                          No hay historial de ventas para este cliente.
                        </td>
                      </tr>
                    ) : (
                      customerOrders.map((order) => (
                        <tr key={order.id} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/30">
                          <td className="px-4 py-4 text-sm font-semibold text-slate-900 dark:text-slate-100">
                            {order.order_number}
                          </td>
                          <td className="px-4 py-4 text-sm text-slate-600 dark:text-slate-300">
                            {order.order_date ? new Date(order.order_date).toLocaleDateString('es-CO') : '-'}
                          </td>
                          <td className="px-4 py-4 text-sm text-slate-600 dark:text-slate-300">
                            {new Intl.NumberFormat('es-CO', {
                              style: 'currency',
                              currency: 'COP',
                              minimumFractionDigits: 0,
                            }).format(order.total_amount || 0)}
                          </td>
                          <td className="px-4 py-4 text-sm text-slate-600 dark:text-slate-300">
                            {order.status || 'Pendiente'}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-6 text-sm text-slate-500">
            Selecciona un cliente desde la tabla para ver su historial de ventas.
          </div>
        )}
      </div>
    </div>
  );
}
