import { apiClient } from "@/lib/axios-client";
import {
  createLocalCustomer,
  deleteLocalCustomer,
  getLocalCustomers,
  updateLocalCustomer,
  type LocalCustomerRecord,
} from "@/lib/local-crm-db";

export type CustomerPayload = {
  FirstName: string;
  LastName: string;
  EmailAddress: string;
  City: string;
  State: string;
};

type ApiCustomerRecord = Record<string, unknown>;

function toCustomerId(value: unknown) {
  const numericId = Number(value);
  return Number.isFinite(numericId) ? numericId : null;
}

function normalizeCustomer(record: ApiCustomerRecord): LocalCustomerRecord | null {
  const customerId = toCustomerId(record.CustomerID ?? record.customer_id ?? record.id);

  if (customerId === null) {
    return null;
  }

  return {
    CustomerID: customerId,
    FirstName: String(record.FirstName ?? record.firstName ?? record.first_name ?? ""),
    LastName: String(record.LastName ?? record.lastName ?? record.last_name ?? ""),
    EmailAddress: String(record.EmailAddress ?? record.emailAddress ?? record.email ?? ""),
    city: String(record.city ?? record.City ?? ""),
    state: String(record.state ?? record.State ?? ""),
  };
}

function extractCustomers(payload: unknown): {
  customers: LocalCustomerRecord[];
  parsed: boolean;
} {
  if (Array.isArray(payload)) {
    return {
      customers: payload.map((item) => normalizeCustomer(item as ApiCustomerRecord)).filter(
        (customer): customer is LocalCustomerRecord => customer !== null
      ),
      parsed: true,
    };
  }

  if (payload && typeof payload === "object") {
    const record = payload as Record<string, unknown>;

    if (Array.isArray(record.data)) {
      return extractCustomers(record.data);
    }

    if (Array.isArray(record.customers)) {
      return extractCustomers(record.customers);
    }

    if (record.data && typeof record.data === "object") {
      const nestedData = record.data as Record<string, unknown>;

      if (Array.isArray(nestedData.data)) {
        return extractCustomers(nestedData.data);
      }

      if (Array.isArray(nestedData.customers)) {
        return extractCustomers(nestedData.customers);
      }
    }
  }

  return {
    customers: [],
    parsed: false,
  };
}

export async function getCustomers() {
  try {
    const response = await apiClient.get("/clientes");
    const extracted = extractCustomers(response.data);

    if (extracted.parsed) {
      return extracted.customers;
    }

    return getLocalCustomers();
  } catch {
    return getLocalCustomers();
  }
}

export async function createCustomer(payload: CustomerPayload) {
  try {
    const response = await apiClient.post("/clientes", payload);
    const extracted = extractCustomers(response.data);

    if (extracted.customers.length > 0) {
      return extracted.customers[0];
    }

    return createLocalCustomer(payload);
  } catch {
    return createLocalCustomer(payload);
  }
}

export async function updateCustomer(customerId: number, payload: CustomerPayload) {
  try {
    const response = await apiClient.put(`/clientes/${customerId}`, payload);
    const extracted = extractCustomers(response.data);

    if (extracted.customers.length > 0) {
      return extracted.customers[0];
    }

    return updateLocalCustomer(customerId, payload);
  } catch {
    return updateLocalCustomer(customerId, payload);
  }
}

export async function deleteCustomer(customerId: number) {
  try {
    await apiClient.delete(`/clientes/${customerId}`);
    deleteLocalCustomer(customerId);
    return true;
  } catch {
    deleteLocalCustomer(customerId);
    return true;
  }
}