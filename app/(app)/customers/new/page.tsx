"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useClientesStore } from "@/lib/stores/clientes-store";

const createClienteSchema = z.object({
  FirstName: z.string().trim().min(1, "FirstName es obligatorio."),
  LastName: z.string().trim().min(1, "LastName es obligatorio."),
  EmailAddress: z.string().email("Ingresa un correo valido."),
  City: z.string().trim().min(1, "City es obligatorio."),
  State: z.string().trim().min(1, "State es obligatorio."),
});

type CreateClienteFormValues = z.infer<typeof createClienteSchema>;

export default function NewCustomerPage() {
  const router = useRouter();
  const createCliente = useClientesStore((state) => state.createCliente);
  const clearMessages = useClientesStore((state) => state.clearMessages);
  const isSubmittingStore = useClientesStore((state) => state.isSubmitting);
  const successMessage = useClientesStore((state) => state.successMessage);
  const errorMessage = useClientesStore((state) => state.errorMessage);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CreateClienteFormValues>({
    resolver: zodResolver(createClienteSchema),
    defaultValues: {
      FirstName: "",
      LastName: "",
      EmailAddress: "",
      City: "",
      State: "",
    },
  });

  useEffect(() => {
    return () => {
      clearMessages();
    };
  }, [clearMessages]);

  const onSubmit = async (values: CreateClienteFormValues) => {
    const createdCustomer = await createCliente(values);

    if (createdCustomer) {
      reset();
      router.push("/customers");
    }
  };

  return (
    <div className="bg-background-light font-display dark:bg-background-dark min-h-screen p-6 text-slate-900 sm:p-10 dark:text-slate-100">
      <div className="mx-auto w-full max-w-3xl space-y-8 relative">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-primary text-xs font-semibold tracking-[0.14em] uppercase">
              Prospectos
            </p>
            <h1 className="mt-2 text-3xl font-black tracking-tight">Creacion de Clientes</h1>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Completa el formulario para registrar un nuevo cliente en la base de datos.
            </p>
          </div>
          <Link
            href="/home"
            className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            Volver
          </Link>
        </div>

        <form
          className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <label
                className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                htmlFor="FirstName"
              >
                FirstName
              </label>
              <input
                id="FirstName"
                className="focus:border-primary focus:ring-primary/20 block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 transition-all outline-none placeholder:text-slate-400 focus:ring-2 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                placeholder="Juan"
                aria-invalid={Boolean(errors.FirstName)}
                {...register("FirstName")}
              />
              {errors.FirstName ? (
                <p className="text-xs font-medium text-red-500">{errors.FirstName.message}</p>
              ) : null}
            </div>

            <div className="space-y-2">
              <label
                className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                htmlFor="LastName"
              >
                LastName
              </label>
              <input
                id="LastName"
                className="focus:border-primary focus:ring-primary/20 block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 transition-all outline-none placeholder:text-slate-400 focus:ring-2 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                placeholder="Perez"
                aria-invalid={Boolean(errors.LastName)}
                {...register("LastName")}
              />
              {errors.LastName ? (
                <p className="text-xs font-medium text-red-500">{errors.LastName.message}</p>
              ) : null}
            </div>
          </div>

          <div className="space-y-2">
            <label
              className="text-sm font-semibold text-slate-700 dark:text-slate-300"
              htmlFor="EmailAddress"
            >
              EmailAddress
            </label>
            <input
              id="EmailAddress"
              type="email"
              className="focus:border-primary focus:ring-primary/20 block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 transition-all outline-none placeholder:text-slate-400 focus:ring-2 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
              placeholder="user@example.com"
              aria-invalid={Boolean(errors.EmailAddress)}
              {...register("EmailAddress")}
            />
            {errors.EmailAddress ? (
              <p className="text-xs font-medium text-red-500">{errors.EmailAddress.message}</p>
            ) : null}
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <label
                className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                htmlFor="City"
              >
                City
              </label>
              <input
                id="City"
                className="focus:border-primary focus:ring-primary/20 block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 transition-all outline-none placeholder:text-slate-400 focus:ring-2 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                placeholder="Medellin"
                aria-invalid={Boolean(errors.City)}
                {...register("City")}
              />
              {errors.City ? (
                <p className="text-xs font-medium text-red-500">{errors.City.message}</p>
              ) : null}
            </div>

            <div className="space-y-2">
              <label
                className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                htmlFor="State"
              >
                State
              </label>
              <input
                id="State"
                className="focus:border-primary focus:ring-primary/20 block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 transition-all outline-none placeholder:text-slate-400 focus:ring-2 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                placeholder="Antioquia"
                aria-invalid={Boolean(errors.State)}
                {...register("State")}
              />
              {errors.State ? (
                <p className="text-xs font-medium text-red-500">{errors.State.message}</p>
              ) : null}
            </div>
          </div>

          {errorMessage ? (
            <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600 dark:bg-red-950/50 dark:text-red-300">
              {errorMessage}
            </p>
          ) : null}

          {successMessage ? (
            <p className="rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-300">
              {successMessage}
            </p>
          ) : null}

          <button
            className="bg-primary shadow-primary/20 hover:bg-primary/90 inline-flex w-full items-center justify-center rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition-all disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            type="submit"
            disabled={isSubmitting || isSubmittingStore}
          >
            {isSubmitting || isSubmittingStore ? "Guardando..." : "Guardar cliente"}
          </button>
        </form>
      </div>
    </div>
  );
}
