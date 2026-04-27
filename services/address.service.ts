import { apiClient } from "@/lib/axios-client";
import {
  createLocalAddress,
  deleteLocalAddress,
  getLocalAddresses,
  updateLocalAddress,
  type LocalAddressRecord,
} from "@/lib/local-crm-db";

export type AddressPayload = Omit<LocalAddressRecord, "id" | "customer_id">;

type ApiAddressRecord = Record<string, unknown>;

function toNumericId(value: unknown) {
  const numericId = Number(value);
  return Number.isFinite(numericId) ? numericId : null;
}

function normalizeAddress(record: ApiAddressRecord): LocalAddressRecord | null {
  const addressId = toNumericId(record.id ?? record.ID ?? record.address_id);
  const customerId = toNumericId(record.customer_id ?? record.customerId ?? record.CustomerID);

  if (addressId === null || customerId === null) {
    return null;
  }

  return {
    id: addressId,
    customer_id: customerId,
    line: String(record.line ?? record.address_line ?? record.addressLine ?? ""),
    city: String(record.city ?? record.City ?? ""),
    state: String(record.state ?? record.State ?? ""),
    country: String(record.country ?? record.Country ?? ""),
  };
}

function extractAddresses(payload: unknown): { addresses: LocalAddressRecord[]; parsed: boolean } {
  if (Array.isArray(payload)) {
    return {
      addresses: payload
        .map((item) => normalizeAddress(item as ApiAddressRecord))
        .filter((address): address is LocalAddressRecord => address !== null),
      parsed: true,
    };
  }

  if (payload && typeof payload === "object") {
    const record = payload as Record<string, unknown>;

    if (Array.isArray(record.data)) {
      return extractAddresses(record.data);
    }

    if (Array.isArray(record.addresses)) {
      return extractAddresses(record.addresses);
    }

    if (record.data && typeof record.data === "object") {
      const nestedData = record.data as Record<string, unknown>;

      if (Array.isArray(nestedData.data)) {
        return extractAddresses(nestedData.data);
      }

      if (Array.isArray(nestedData.addresses)) {
        return extractAddresses(nestedData.addresses);
      }
    }
  }

  return { addresses: [], parsed: false };
}

export async function getAddresses(customerId: number) {
  try {
    const response = await apiClient.get(`/customers/${customerId}/addresses`);
    const extracted = extractAddresses(response.data);

    if (extracted.parsed) {
      return extracted.addresses;
    }

    return getLocalAddresses(customerId);
  } catch {
    return getLocalAddresses(customerId);
  }
}

export async function createAddress(customerId: number, payload: AddressPayload) {
  try {
    const response = await apiClient.post(`/customers/${customerId}/addresses`, payload);
    const extracted = extractAddresses(response.data);

    if (extracted.addresses.length > 0) {
      return extracted.addresses[0];
    }

    return createLocalAddress(customerId, payload);
  } catch {
    return createLocalAddress(customerId, payload);
  }
}

export async function updateAddress(customerId: number, id: number, payload: AddressPayload) {
  try {
    const response = await apiClient.put(`/customers/${customerId}/addresses/${id}`, payload);
    const extracted = extractAddresses(response.data);

    if (extracted.addresses.length > 0) {
      return extracted.addresses[0];
    }

    return updateLocalAddress(customerId, id, payload);
  } catch {
    return updateLocalAddress(customerId, id, payload);
  }
}

export async function deleteAddress(customerId: number, id: number) {
  try {
    await apiClient.delete(`/customers/${customerId}/addresses/${id}`);
    deleteLocalAddress(customerId, id);
    return true;
  } catch {
    deleteLocalAddress(customerId, id);
    return true;
  }
}