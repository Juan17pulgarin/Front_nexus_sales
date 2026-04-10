"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAddressesStore, type Address } from "@/lib/stores/addresses-store";

const addressSchema = z.object({
  line:    z.string().trim().min(1, "La línea es obligatoria."),
  city:    z.string().trim().min(1, "La ciudad es obligatoria."),
  state:   z.string().trim().min(1, "El estado es obligatorio."),
  country: z.string().trim().min(1, "El país es obligatorio."),
});

type AddressFormValues = z.infer<typeof addressSchema>;
type Props = { customerId: number | null };

export default function AddressesSection({ customerId }: Props) {
  const {
    addresses, isLoading, isSubmitting, errorMessage,
    fetchAddresses, createAddress, updateAddress, deleteAddress, clearError,
  } = useAddressesStore();

  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing]     = useState<Address | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<AddressFormValues>({
    resolver: zodResolver(addressSchema),
    defaultValues: { line: "", city: "", state: "", country: "" },
  });

  useEffect(() => {
    if (!customerId) {
      return;
    }

    fetchAddresses(customerId);
  }, [customerId, fetchAddresses]);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [modalOpen]);

  const openCreate = () => {
    if (!customerId) {
      return;
    }

    setEditing(null);
    reset({ line: "", city: "", state: "", country: "" });
    clearError();
    setModalOpen(true);
  };

  const openEdit = (address: Address) => {
    if (!customerId) {
      return;
    }

    setEditing(address);
    reset({ line: address.line, city: address.city, state: address.state, country: address.country });
    clearError();
    setModalOpen(true);
  };

  const closeModal = () => { setModalOpen(false); setEditing(null); };

  const onSubmit = async (values: AddressFormValues) => {
    if (!customerId) {
      return;
    }

    const ok = editing
      ? await updateAddress(customerId, editing.id, values)
      : await createAddress(customerId, values);
    if (ok) closeModal();
  };

  if (!customerId) {
    return (
      <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-lg font-bold tracking-tight">Direcciones</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Guarda primero un cliente para poder agregarle direcciones.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Modal */}
      {modalOpen && (
        <div
          style={{ position: "fixed", inset: 0, zIndex: 9999, backgroundColor: "rgba(0,0,0,0.7)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}
          onClick={closeModal}
        >
          <div
            className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-100">
                {editing ? "Editar dirección" : "Nueva dirección"}
              </h3>
              <button
                type="button"
                onClick={closeModal}
                className="flex size-8 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-800 hover:text-slate-100"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Formulario */}
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
              {[
                { field: "line"    as const, label: "Línea",  placeholder: "Calle 123 # 45-67" },
                { field: "city"    as const, label: "Ciudad", placeholder: "Medellín" },
                { field: "state"   as const, label: "Estado", placeholder: "Antioquia" },
                { field: "country" as const, label: "País",   placeholder: "Colombia" },
              ].map(({ field, label, placeholder }) => (
                <div key={field} className="space-y-1.5">
                  <label
                    className="text-sm font-semibold text-slate-400"
                    htmlFor={field}
                  >
                    {label}
                  </label>
                  <input
                    id={field}
                    placeholder={placeholder}
                    className="block w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-slate-100 outline-none transition-all placeholder:text-slate-600 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    aria-invalid={Boolean(errors[field])}
                    {...register(field)}
                  />
                  {errors[field] && (
                    <p className="text-xs font-medium text-red-400">
                      {errors[field]?.message}
                    </p>
                  )}
                </div>
              ))}

              {errorMessage && (
                <p className="rounded-xl bg-red-950/50 px-4 py-3 text-sm font-semibold text-red-400">
                  {errorMessage}
                </p>
              )}

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded-xl border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-300 hover:bg-slate-800"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary hover:bg-primary/90 rounded-xl px-5 py-2.5 text-sm font-bold text-white disabled:opacity-60"
                >
                  {isSubmitting ? "Guardando..." : editing ? "Guardar cambios" : "Agregar"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Sección principal */}
      <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold tracking-tight">Direcciones</h2>
          <button
            type="button"
            onClick={openCreate}
            className="bg-primary hover:bg-primary/90 flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold text-white transition-all"
          >
            <span className="material-symbols-outlined text-lg">add</span>
            Agregar dirección
          </button>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <span className="material-symbols-outlined animate-spin text-3xl text-slate-400">
              progress_activity
            </span>
          </div>
        ) : addresses.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-2 py-12 text-slate-400">
            <span className="material-symbols-outlined text-4xl">location_off</span>
            <p className="text-sm font-medium">No hay direcciones registradas</p>
          </div>
        ) : (
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {addresses.map((address) => (
              <div key={address.id} className="flex items-center justify-between gap-4 py-4">
                <div className="space-y-0.5">
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                    {address.line}
                  </p>
                  <p className="text-xs text-slate-500">
                    {address.city}, {address.state}, {address.country}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => openEdit(address)}
                    className="flex size-8 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800"
                  >
                    <span className="material-symbols-outlined text-lg">edit</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => deleteAddress(customerId, address.id)}
                    className="flex size-8 items-center justify-center rounded-lg text-slate-400 hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-950"
                  >
                    <span className="material-symbols-outlined text-lg">delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}