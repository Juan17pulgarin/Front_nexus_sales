export type LocalCustomerRecord = {
  CustomerID: number;
  FirstName: string;
  LastName: string;
  EmailAddress: string;
  CompanyName?: string | null;
  Phone?: string | null;
  city?: string | null;
  state?: string | null;
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
  Phone: string;
  City: string;
  State: string;
};

type UpdateCustomerPayload = CreateCustomerPayload;

type AddressPayload = Omit<LocalAddressRecord, "id" | "customer_id">;

const CUSTOMERS_KEY = "crm.local.customers.v1";
const ADDRESSES_KEY = "crm.local.addresses.v1";

const DEFAULT_CUSTOMERS: LocalCustomerRecord[] = [
  {
    CustomerID: 1,
    FirstName: "Sofia",
    LastName: "Martinez",
    EmailAddress: "sofia.martinez@innovacorp.com",
    CompanyName: "InnovaCorp",
    Phone: "+52 55 4102 2201",
    city: "Ciudad de Mexico",
    state: "CDMX",
  },
  {
    CustomerID: 2,
    FirstName: "Carlos",
    LastName: "Ramirez",
    EmailAddress: "carlos.ramirez@grupologis.com",
    CompanyName: "Grupo Logis",
    Phone: "+52 81 3055 9002",
    city: "Medellín",
    state: "Antioquia",
  },
  {
    CustomerID: 3,
    FirstName: "Valentina",
    LastName: "Gomez",
    EmailAddress: "valentina.gomez@medisalud.mx",
    CompanyName: "MediSalud",
    Phone: "+52 33 2800 1144",
    city: "Guadalajara",
    state: "Jalisco",
  },
];

const DEFAULT_ADDRESSES: LocalAddressRecord[] = [
  {
    id: 1,
    customer_id: 1,
    line: "Av. Insurgentes Sur 1450",
    city: "Ciudad de Mexico",
    state: "CDMX",
    country: "Mexico",
  },
  {
    id: 2,
    customer_id: 2,
    line: "Blvd. Diaz Ordaz 300",
    city: "Medellín",
    state: "Antioquia",
    country: "Mexico",
  },
  {
    id: 3,
    customer_id: 3,
    line: "Av. Patria 420",
    city: "Guadalajara",
    state: "Jalisco",
    country: "Mexico",
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
    const migratedCustomers = customers.map((customer) => {
      if (customer.city === "Monterrey" && customer.state === "Nuevo Leon") {
        return {
          ...customer,
          city: "Medellín",
          state: "Antioquia",
        };
      }

      return customer;
    });

    const hasChanges = JSON.stringify(migratedCustomers) !== JSON.stringify(customers);
    if (hasChanges) {
      writeJsonArray(CUSTOMERS_KEY, migratedCustomers);
    }

    return migratedCustomers;
  }

  writeJsonArray(CUSTOMERS_KEY, DEFAULT_CUSTOMERS);
  return DEFAULT_CUSTOMERS;
}

function seedAddressesIfNeeded() {
  const addresses = readJsonArray<LocalAddressRecord>(ADDRESSES_KEY, []);

  if (addresses.length > 0) {
    const migratedAddresses = addresses.map((address) => {
      if (address.city === "Monterrey" && address.state === "Nuevo Leon") {
        return {
          ...address,
          city: "Medellín",
          state: "Antioquia",
        };
      }

      return address;
    });

    const hasChanges = JSON.stringify(migratedAddresses) !== JSON.stringify(addresses);
    if (hasChanges) {
      writeJsonArray(ADDRESSES_KEY, migratedAddresses);
    }

    return migratedAddresses;
  }

  writeJsonArray(ADDRESSES_KEY, DEFAULT_ADDRESSES);
  return DEFAULT_ADDRESSES;
}

export function getCustomers() {
  return seedCustomersIfNeeded();
}

export function getCustomerById(customerId: number) {
  return getCustomers().find((customer) => customer.CustomerID === customerId) ?? null;
}

export function createCustomer(payload: CreateCustomerPayload) {
  const customers = getCustomers();
  const nextId = customers.reduce((maxId, customer) => Math.max(maxId, customer.CustomerID), 0) + 1;

  const customer: LocalCustomerRecord = {
    CustomerID: nextId,
    FirstName: payload.FirstName,
    LastName: payload.LastName,
    EmailAddress: payload.EmailAddress,
    CompanyName: null,
    Phone: payload.Phone,
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
    Phone: payload.Phone,
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

  const addresses = seedAddressesIfNeeded();
  const nextAddresses = addresses.filter((address) => address.customer_id !== customerId);
  writeJsonArray(ADDRESSES_KEY, nextAddresses);
}

export function getAddresses(customerId: number) {
  return seedAddressesIfNeeded().filter((address) => address.customer_id === customerId);
}

export function createAddress(customerId: number, payload: AddressPayload) {
  const addresses = seedAddressesIfNeeded();
  const nextId = addresses.reduce((maxId, address) => Math.max(maxId, address.id), 0) + 1;
  const address: LocalAddressRecord = {
    id: nextId,
    customer_id: customerId,
    line: payload.line,
    city: payload.city,
    state: payload.state,
    country: payload.country,
  };

  const nextAddresses = [...addresses, address];
  writeJsonArray(ADDRESSES_KEY, nextAddresses);
  return address;
}

export function updateAddress(customerId: number, id: number, payload: AddressPayload) {
  const addresses = seedAddressesIfNeeded();
  const nextAddresses = addresses.map((address) => {
    if (address.id !== id || address.customer_id !== customerId) {
      return address;
    }

    return {
      ...address,
      line: payload.line,
      city: payload.city,
      state: payload.state,
      country: payload.country,
    };
  });

  writeJsonArray(ADDRESSES_KEY, nextAddresses);
  return nextAddresses.find((address) => address.id === id && address.customer_id === customerId) ?? null;
}

export function deleteAddress(customerId: number, id: number) {
  const addresses = seedAddressesIfNeeded();
  const nextAddresses = addresses.filter(
    (address) => !(address.id === id && address.customer_id === customerId)
  );

  writeJsonArray(ADDRESSES_KEY, nextAddresses);
}
