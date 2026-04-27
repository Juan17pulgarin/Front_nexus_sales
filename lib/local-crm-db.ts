export type LocalCustomerRecord = {
  CustomerID: number;
  FirstName: string;
  LastName: string;
  EmailAddress: string;
  city: string;
  state: string;
};

export type LocalAddressRecord = {
  id: number;
  customer_id: number;
  line: string;
  city: string;
  state: string;
  country: string;
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
const ADDRESSES_KEY = "crm.local.addresses.v1";

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

const DEFAULT_ADDRESSES: LocalAddressRecord[] = [
  {
    id: 1,
    customer_id: 1,
    line: "Cra. 48 #10-45",
    city: "Medellin",
    state: "Antioquia",
    country: "Colombia",
  },
  {
    id: 2,
    customer_id: 2,
    line: "Calle 93 #11-12",
    city: "Bogota",
    state: "Cundinamarca",
    country: "Colombia",
  },
  {
    id: 3,
    customer_id: 3,
    line: "Av. 6N #28-34",
    city: "Cali",
    state: "Valle del Cauca",
    country: "Colombia",
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

function seedAddressesIfNeeded() {
  const addresses = readJsonArray<LocalAddressRecord>(ADDRESSES_KEY, []);

  if (addresses.length > 0) {
    return addresses;
  }

  writeJsonArray(ADDRESSES_KEY, DEFAULT_ADDRESSES);
  return DEFAULT_ADDRESSES;
}

export function getLocalCustomers() {
  return seedCustomersIfNeeded();
}

export function createLocalCustomer(payload: CreateCustomerPayload) {
  const customers = getLocalCustomers();
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

export function updateLocalCustomer(customerId: number, payload: UpdateCustomerPayload) {
  const customers = getLocalCustomers();
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

export function deleteLocalCustomer(customerId: number) {
  const customers = getLocalCustomers();
  const nextCustomers = customers.filter((customer) => customer.CustomerID !== customerId);
  writeJsonArray(CUSTOMERS_KEY, nextCustomers);
}

export function getCustomers() {
  return getLocalCustomers();
}

export function createCustomer(payload: CreateCustomerPayload) {
  return createLocalCustomer(payload);
}

export function updateCustomer(customerId: number, payload: UpdateCustomerPayload) {
  return updateLocalCustomer(customerId, payload);
}

export function deleteCustomer(customerId: number) {
  return deleteLocalCustomer(customerId);
}

export function getAddresses(customerId: number) {
  return seedAddressesIfNeeded().filter((address) => address.customer_id === customerId);
}

export function createAddress(
  customerId: number,
  payload: Omit<LocalAddressRecord, "id" | "customer_id">
) {
  const addresses = seedAddressesIfNeeded();
  const nextId = addresses.reduce((maxId, address) => Math.max(maxId, address.id), 0) + 1;

  const record: LocalAddressRecord = {
    id: nextId,
    customer_id: customerId,
    line: payload.line,
    city: payload.city,
    state: payload.state,
    country: payload.country,
  };

  const nextAddresses = [...addresses, record];
  writeJsonArray(ADDRESSES_KEY, nextAddresses);

  return record;
}

export function updateAddress(
  customerId: number,
  id: number,
  payload: Omit<LocalAddressRecord, "id" | "customer_id">
) {
  const addresses = seedAddressesIfNeeded();
  const targetAddress = addresses.find(
    (address) => address.customer_id === customerId && address.id === id
  );

  if (!targetAddress) {
    return null;
  }

  const updatedAddress: LocalAddressRecord = {
    ...targetAddress,
    line: payload.line,
    city: payload.city,
    state: payload.state,
    country: payload.country,
  };

  const nextAddresses = addresses.map((address) => (address.id === id ? updatedAddress : address));
  writeJsonArray(ADDRESSES_KEY, nextAddresses);

  return updatedAddress;
}

export function deleteAddress(customerId: number, id: number) {
  const addresses = seedAddressesIfNeeded();
  const nextAddresses = addresses.filter(
    (address) => !(address.customer_id === customerId && address.id === id)
  );

  writeJsonArray(ADDRESSES_KEY, nextAddresses);
}
