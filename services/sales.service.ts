import { getOrders, type LocalOrder } from "@/lib/local-sales-db";

export type CustomerOrder = {
  id: number;
  order_number: string;
  items: string | string[];
  total_amount: number;
  status: string;
  order_date: string;
  notes: string | null;
  created_at?: string;
  updated_at?: string;
};

function mapLocalOrder(order: LocalOrder): CustomerOrder {
  return {
    id: order.OrderID,
    order_number: `ORD-${order.OrderID}`,
    items: Array.from({ length: order.Items }, (_, index) => `Item ${index + 1}`),
    total_amount: order.Amount,
    status: order.Status,
    order_date: order.OrderDate,
    notes: null,
    created_at: order.OrderDate,
    updated_at: order.OrderDate,
  };
}

export async function getCustomerOrders(customerId: number) {
  return getOrders()
    .filter((order) => order.CustomerID === customerId)
    .map(mapLocalOrder);
}