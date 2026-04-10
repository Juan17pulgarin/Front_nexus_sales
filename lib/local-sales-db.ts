export type LocalOrder = {
  OrderID: number;
  CustomerID: number;
  CustomerName: string;
  OrderDate: string;
  Amount: number;
  Status: "Pendiente" | "Completado" | "Cancelado" | "En proceso";
  Items: number;
};

const ORDERS_KEY = "crm.local.orders.v1";

const DEFAULT_ORDERS: LocalOrder[] = [
  {
    OrderID: 1001,
    CustomerID: 1,
    CustomerName: "Sofia Martinez",
    OrderDate: "2026-04-08",
    Amount: 15500,
    Status: "Completado",
    Items: 3,
  },
  {
    OrderID: 1002,
    CustomerID: 2,
    CustomerName: "Carlos Ramirez",
    OrderDate: "2026-04-07",
    Amount: 28900,
    Status: "En proceso",
    Items: 5,
  },
  {
    OrderID: 1003,
    CustomerID: 3,
    CustomerName: "Valentina Gomez",
    OrderDate: "2026-04-06",
    Amount: 9200,
    Status: "Completado",
    Items: 2,
  },
  {
    OrderID: 1004,
    CustomerID: 1,
    CustomerName: "Sofia Martinez",
    OrderDate: "2026-04-05",
    Amount: 42100,
    Status: "Completado",
    Items: 7,
  },
  {
    OrderID: 1005,
    CustomerID: 2,
    CustomerName: "Carlos Ramirez",
    OrderDate: "2026-04-04",
    Amount: 18600,
    Status: "Pendiente",
    Items: 4,
  },
  {
    OrderID: 1006,
    CustomerID: 3,
    CustomerName: "Valentina Gomez",
    OrderDate: "2026-04-03",
    Amount: 31400,
    Status: "En proceso",
    Items: 6,
  },
  {
    OrderID: 1007,
    CustomerID: 1,
    CustomerName: "Sofia Martinez",
    OrderDate: "2026-04-02",
    Amount: 12800,
    Status: "Cancelado",
    Items: 2,
  },
  {
    OrderID: 1008,
    CustomerID: 2,
    CustomerName: "Carlos Ramirez",
    OrderDate: "2026-04-01",
    Amount: 55200,
    Status: "Completado",
    Items: 9,
  },
];

function isBrowser() {
  return typeof window !== "undefined";
}

export function getOrders(): LocalOrder[] {
  if (!isBrowser()) return DEFAULT_ORDERS;

  try {
    const stored = localStorage.getItem(ORDERS_KEY);
    if (stored) {
      return JSON.parse(stored) as LocalOrder[];
    }
  } catch {
    console.warn("Failed to load orders from localStorage");
  }

  return DEFAULT_ORDERS;
}

export function addOrder(order: Omit<LocalOrder, "OrderID">): LocalOrder {
  if (!isBrowser()) throw new Error("addOrder requires browser context");

  const orders = getOrders();
  const newOrder: LocalOrder = {
    ...order,
    OrderID: Math.max(...orders.map((o) => o.OrderID), 0) + 1,
  };

  orders.push(newOrder);
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));

  return newOrder;
}

export function getTotalSales(): number {
  return getOrders()
    .filter((o) => o.Status === "Completado")
    .reduce((sum, o) => sum + o.Amount, 0);
}

export function getOrderStats() {
  const orders = getOrders();
  return {
    totalOrders: orders.length,
    completedOrders: orders.filter((o) => o.Status === "Completado").length,
    pendingOrders: orders.filter((o) => o.Status === "Pendiente").length,
    inProcessOrders: orders.filter((o) => o.Status === "En proceso").length,
    cancelledOrders: orders.filter((o) => o.Status === "Cancelado").length,
  };
}
