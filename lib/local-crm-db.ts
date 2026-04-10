export type LocalCustomerRecord = {
  CustomerID: number;
  FirstName: string;
  LastName: string;
  EmailAddress: string;
  city: string;
  state: string;
};

type CreateCustomerPayload = {
  FirstName: string;
  LastName: string;
  EmailAddress: string;
  City: string;
  State: string;
};

type UpdateCustomerPayload = CreateCustomerPayload;

const CUSTOMERS_KEY = "crm.local.customers.v1";

const DEFAULT_CUSTOMERS: LocalCustomerRecord[] = [
  {
    CustomerID: 1,
    FirstName: "Sofia",
    LastName: "Martinez",
    EmailAddress: "sofia.martinez@innovacorp.com",
    city: "Medellin",
    state: "Antioquia",
  },
  {
    CustomerID: 2,
    FirstName: "Carlos",
    LastName: "Ramirez",
    EmailAddress: "carlos.ramirez@grupologis.com",
    city: "Bogota",
    state: "Cundinamarca",
  },
  {
    CustomerID: 3,
    FirstName: "Valentina",
    LastName: "Gomez",
    EmailAddress: "valentina.gomez@medisalud.com",
    city: "Cali",
    state: "Valle del Cauca",
  },
];

function isBrowser() {
  return typeof window !== "undefined";
}

function readJsonArray<T>(key: string, fallback: T[]): T[] {
  if (!isBrowser()) {
    return fallback;
  }

  const rawValue = window.localStorage.getItem(key);
  if (!rawValue) {
    return fallback;
  }

  try {
    const parsed = JSON.parse(rawValue) as unknown;
    return Array.isArray(parsed) ? (parsed as T[]) : fallback;
  } catch {
    return fallback;
  }
}

function writeJsonArray<T>(key: string, values: T[]) {
  if (!isBrowser()) {
    return;
  }

  window.localStorage.setItem(key, JSON.stringify(values));
}

function seedCustomersIfNeeded() {
  const customers = readJsonArray<LocalCustomerRecord>(CUSTOMERS_KEY, []);

  if (customers.length > 0) {
    return customers;
  }

  writeJsonArray(CUSTOMERS_KEY, DEFAULT_CUSTOMERS);
  return DEFAULT_CUSTOMERS;
}

export function getCustomers() {
  return seedCustomersIfNeeded();
}

export function createCustomer(payload: CreateCustomerPayload) {
  const customers = getCustomers();
  const nextId = customers.reduce((maxId, customer) => Math.max(maxId, customer.CustomerID), 0) + 1;

  const customer: LocalCustomerRecord = {
    CustomerID: nextId,
    FirstName: payload.FirstName,
    LastName: payload.LastName,
    EmailAddress: payload.EmailAddress,
    city: payload.City,
    state: payload.State,
  };

  const nextCustomers = [...customers, customer];
  writeJsonArray(CUSTOMERS_KEY, nextCustomers);

  return customer;
}

export function updateCustomer(customerId: number, payload: UpdateCustomerPayload) {
  const customers = getCustomers();
  const targetCustomer = customers.find((customer) => customer.CustomerID === customerId);

  if (!targetCustomer) {
    return null;
  }

  const updatedCustomer: LocalCustomerRecord = {
    ...targetCustomer,
    FirstName: payload.FirstName,
    LastName: payload.LastName,
    EmailAddress: payload.EmailAddress,
    city: payload.City,
    state: payload.State,
  };

  const nextCustomers = customers.map((customer) =>
    customer.CustomerID === customerId ? updatedCustomer : customer
  );

  writeJsonArray(CUSTOMERS_KEY, nextCustomers);
  return updatedCustomer;
}

export function deleteCustomer(customerId: number) {
  const customers = getCustomers();
  const nextCustomers = customers.filter((customer) => customer.CustomerID !== customerId);
  writeJsonArray(CUSTOMERS_KEY, nextCustomers);
}
