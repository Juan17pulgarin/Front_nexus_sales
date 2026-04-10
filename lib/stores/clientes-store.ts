import { create } from "zustand";
import {
  createCustomer,
  deleteCustomer,
  getCustomers,
  updateCustomer,
  type LocalCustomerRecord,
} from "@/lib/local-crm-db";

export type ClienteRecord = LocalCustomerRecord;

type CreateClientePayload = {
  FirstName: string;
  LastName: string;
  EmailAddress: string;
  Phone: string;
  City: string;
  State: string;
};

type SearchFilters = {
  city: string;
  state: string;
};

type ClientesStore = {
  clientes: LocalCustomerRecord[];
  isLoadingClientes: boolean;
  clientesError: string | null;
  searchFilters: SearchFilters;
  isSubmitting: boolean;
  successMessage: string | null;
  errorMessage: string | null;
  fetchClientes: () => Promise<void>;
  createCliente: (payload: CreateClientePayload) => Promise<LocalCustomerRecord | null>;
  updateCliente: (customerId: number, payload: CreateClientePayload) => Promise<boolean>;
  deleteCliente: (customerId: number) => Promise<boolean>;
  setSearchFilters: (filters: SearchFilters) => void;
  clearSearchFilters: () => void;
  clearMessages: () => void;
};

export const useClientesStore = create<ClientesStore>((set) => ({
  clientes: getCustomers(),
  isLoadingClientes: false,
  clientesError: null,
  searchFilters: {
    city: "",
    state: "",
  },
  isSubmitting: false,
  successMessage: null,
  errorMessage: null,

  fetchClientes: async () => {
    set({ isLoadingClientes: true });
    set({ clientes: getCustomers(), isLoadingClientes: false, clientesError: null });
  },

  createCliente: async (payload) => {
    set({ isSubmitting: true, successMessage: null, errorMessage: null });

    try {
      const customer = createCustomer(payload);
      set((state) => ({
        clientes: [...state.clientes, customer],
      }));
      set({
        isSubmitting: false,
        successMessage: "Cliente registrado correctamente",
        errorMessage: null,
      });
      return customer;
    } catch {
      set({
        isSubmitting: false,
        successMessage: null,
        errorMessage: "No se pudo registrar el cliente.",
      });
      return null;
    }
  },

  updateCliente: async (customerId, payload) => {
    set({ isSubmitting: true, successMessage: null, errorMessage: null });

    try {
      const updatedCustomer = updateCustomer(customerId, payload);

      if (!updatedCustomer) {
        set({
          isSubmitting: false,
          successMessage: null,
          errorMessage: "No se encontró el cliente para actualizar.",
        });
        return false;
      }

      set((state) => ({
        clientes: state.clientes.map((customer) =>
          customer.CustomerID === customerId ? updatedCustomer : customer
        ),
      }));

      set({
        isSubmitting: false,
        successMessage: "Cliente actualizado correctamente",
        errorMessage: null,
      });
      return true;
    } catch {
      set({
        isSubmitting: false,
        successMessage: null,
        errorMessage: "No se pudo actualizar el cliente.",
      });
      return false;
    }
  },
  clearMessages: () => {
    set({ successMessage: null, errorMessage: null });
  },
}));
