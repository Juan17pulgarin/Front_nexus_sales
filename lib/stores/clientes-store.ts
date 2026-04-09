import { create } from "zustand";
import { apiClient } from "@/lib/axios-client";
import { getApiErrorMessage } from "@/lib/get-api-error-message";

type CreateClientePayload = {
  FirstName: string;
  LastName: string;
  EmailAddress: string;
};

type ClientesStore = {
  isSubmitting: boolean;
  successMessage: string | null;
  errorMessage: string | null;
  createCliente: (payload: CreateClientePayload) => Promise<boolean>;
  clearMessages: () => void;
};

export const useClientesStore = create<ClientesStore>((set) => ({
  isSubmitting: false,
  successMessage: null,
  errorMessage: null,
  createCliente: async (payload) => {
    set({ isSubmitting: true, successMessage: null, errorMessage: null });

    try {
      await apiClient.post("/clientes", payload);
      set({
        isSubmitting: false,
        successMessage: "Cliente registrado correctamente",
        errorMessage: null,
      });
      return true;
    } catch (error) {
      set({
        isSubmitting: false,
        successMessage: null,
        errorMessage: getApiErrorMessage(error, "No se pudo registrar el cliente."),
      });
      return false;
    }
  },
  clearMessages: () => {
    set({ successMessage: null, errorMessage: null });
  },
}));
