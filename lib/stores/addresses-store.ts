import { create } from "zustand";
import {
  createAddress,
  deleteAddress as deleteHybridAddress,
  getAddresses,
  updateAddress as updateHybridAddress,
} from "@/services/address.service";

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
      const addresses = await getAddresses(customerId);
      set({ addresses, isLoading: false });
    } catch {
      set({ isLoading: false, errorMessage: "No se pudieron cargar las direcciones." });
    }
  },

  createAddress: async (customerId, payload) => {
    set({ isSubmitting: true, errorMessage: null });
    try {
      const record = await createAddress(customerId, payload);
      set({ addresses: [...get().addresses, record], isSubmitting: false });
      return true;
    } catch {
      set({ isSubmitting: false, errorMessage: "No se pudo guardar la dirección." });
      return false;
    }
  },

  updateAddress: async (customerId, id, payload) => {
    set({ isSubmitting: true, errorMessage: null });
    try {
      const updatedAddress = await updateHybridAddress(customerId, id, payload);

      if (!updatedAddress) {
        set({ isSubmitting: false, errorMessage: "No se pudo actualizar la dirección." });
        return false;
      }

      set({
        addresses: get().addresses.map((address) => (address.id === id ? updatedAddress : address)),
        isSubmitting: false,
      });
      return true;
    } catch {
      set({ isSubmitting: false, errorMessage: "No se pudo actualizar la dirección." });
      return false;
    }
  },

  deleteAddress: async (customerId, id) => {
    set({ isSubmitting: true, errorMessage: null });
    try {
      await deleteHybridAddress(customerId, id);
      set({
        addresses: get().addresses.filter((address) => address.id !== id),
        isSubmitting: false,
      });
      return true;
    } catch {
      set({ isSubmitting: false, errorMessage: "No se pudo eliminar la dirección." });
      return false;
    }
  },

  clearError: () => set({ errorMessage: null }),
}));