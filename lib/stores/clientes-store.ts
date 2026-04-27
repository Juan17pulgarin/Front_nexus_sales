import { create } from "zustand";
import { type LocalCustomerRecord } from "@/lib/local-crm-db";
import {
  createCustomer,
  deleteCustomer,
  getCustomers,
  updateCustomer,
} from "@/services/customer.service";

type CreateClientePayload = {
  FirstName: string;
  LastName: string;
  EmailAddress: string;
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
  clientes: [],
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
    set({ isLoadingClientes: true, clientesError: null });

    try {
      const clientes = await getCustomers();

      set({
        clientes,
        isLoadingClientes: false,
        clientesError: null,
      });
    } catch {
      set({
        isLoadingClientes: false,
        clientesError: "No se pudieron cargar los clientes.",
      });
    }
  },

  createCliente: async (payload) => {
    set({ isSubmitting: true, successMessage: null, errorMessage: null });

    try {
      const customer = await createCustomer(payload);

      set((state) => ({
        clientes: [...state.clientes, customer],
      }));

      set({
        isSubmitting: false,
        successMessage: "Cliente registrado correctamente",
        errorMessage: null,
      });
      return customer;
    } catch (error) {
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
      const updated = await updateCustomer(customerId, payload);

      if (!updated) {
        set({
          isSubmitting: false,
          successMessage: null,
          errorMessage: "No se encontró el cliente para actualizar.",
        });
        return false;
      }

      set((state) => ({
        clientes: state.clientes.map((customer) =>
          customer.CustomerID === customerId ? updated : customer
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

  deleteCliente: async (customerId) => {
    set({ isSubmitting: true, successMessage: null, errorMessage: null });

    try {
      await deleteCustomer(customerId);
      set((state) => ({
        clientes: state.clientes.filter((customer) => customer.CustomerID !== customerId),
      }));

      set({
        isSubmitting: false,
        successMessage: "Cliente eliminado correctamente",
        errorMessage: null,
      });
      return true;
    } catch {
      set({
        isSubmitting: false,
        successMessage: null,
        errorMessage: "No se pudo eliminar el cliente.",
      });
      return false;
    }
  },

  setSearchFilters: (filters) => {
    set({ searchFilters: filters });
  },

  clearSearchFilters: () => {
    set({ searchFilters: { city: "", state: "" } });
  },

  clearMessages: () => {
    set({ successMessage: null, errorMessage: null });
  },
}));
