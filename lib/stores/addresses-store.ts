import { create } from "zustand";
import { apiClient } from "@/lib/axios-client";
import { getApiErrorMessage } from "@/lib/get-api-error-message";

export type Address = {
  id: number;
  customer_id: number;
  line: string;
  city: string;
  state: string;
  country: string;
};

type AddressPayload = Omit<Address, "id" | "customer_id">;

type AddressesStore = {
  addresses: Address[];
  isLoading: boolean;
  isSubmitting: boolean;
  errorMessage: string | null;
  fetchAddresses: (customerId: number) => Promise<void>;
  createAddress: (customerId: number, payload: AddressPayload) => Promise<boolean>;
  updateAddress: (customerId: number, id: number, payload: AddressPayload) => Promise<boolean>;
  deleteAddress: (customerId: number, id: number) => Promise<boolean>;
  clearError: () => void;
};

export const useAddressesStore = create<AddressesStore>((set, get) => ({
  addresses: [],
  isLoading: false,
  isSubmitting: false,
  errorMessage: null,

  fetchAddresses: async (customerId) => {
    set({ isLoading: true, errorMessage: null });
    try {
      const res = await apiClient.get(`/customers/${customerId}/addresses`);
      set({ addresses: res.data, isLoading: false });
    } catch (error) {
      set({ isLoading: false, errorMessage: getApiErrorMessage(error) });
    }
  },

  createAddress: async (customerId, payload) => {
    set({ isSubmitting: true, errorMessage: null });
    try {
      const res = await apiClient.post(`/customers/${customerId}/addresses`, payload);
      set({ addresses: [...get().addresses, res.data], isSubmitting: false });
      return true;
    } catch (error) {
      set({ isSubmitting: false, errorMessage: getApiErrorMessage(error) });
      return false;
    }
  },

  updateAddress: async (customerId, id, payload) => {
    set({ isSubmitting: true, errorMessage: null });
    try {
      const res = await apiClient.put(`/customers/${customerId}/addresses/${id}`, payload);
      set({
        addresses: get().addresses.map((a) => (a.id === id ? res.data : a)),
        isSubmitting: false,
      });
      return true;
    } catch (error) {
      set({ isSubmitting: false, errorMessage: getApiErrorMessage(error) });
      return false;
    }
  },

  deleteAddress: async (customerId, id) => {
    set({ isSubmitting: true, errorMessage: null });
    try {
      await apiClient.delete(`/customers/${customerId}/addresses/${id}`);
      set({
        addresses: get().addresses.filter((a) => a.id !== id),
        isSubmitting: false,
      });
      return true;
    } catch (error) {
      set({ isSubmitting: false, errorMessage: getApiErrorMessage(error) });
      return false;
    }
  },

  clearError: () => set({ errorMessage: null }),
}));