import { create } from "zustand";
import {
  addOrder,
  getOrderStats,
  getOrders,
  getTotalSales,
  type LocalOrder,
} from "@/lib/local-sales-db";

export interface Order {
  id: number;
  user_id: number;
  order_number: string;
  items: string | string[];
  total_amount: number;
  status: string;
  order_date: string;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

interface OrderStats {
  totalOrders: number;
  completedOrders: number;
  pendingOrders: number;
  inProcessOrders: number;
  cancelledOrders: number;
}

interface SalesStore {
  orders: Order[];
  isLoadingOrders: boolean;
  ordersError: string | null;
  totalSales: number;
  stats: OrderStats;
  currentPage: number;
  itemsPerPage: number;

  fetchOrders: () => Promise<void>;
  fetchStats: () => Promise<void>;
  createOrder: (order: Partial<Order>) => Promise<Order | null>;
  setCurrentPage: (page: number) => void;
  clearMessages: () => void;
}

function mapLocalOrder(order: LocalOrder): Order {
  return {
    id: order.OrderID,
    user_id: order.CustomerID,
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

export const useSalesStore = create<SalesStore>((set) => ({
  orders: [],
  isLoadingOrders: false,
  ordersError: null,
  totalSales: 0,
  stats: {
    totalOrders: 0,
    completedOrders: 0,
    pendingOrders: 0,
    inProcessOrders: 0,
    cancelledOrders: 0,
  },
  currentPage: 1,
  itemsPerPage: 10,

  fetchOrders: async () => {
    set({ isLoadingOrders: true, ordersError: null });
    try {
      const localOrders = getOrders().map(mapLocalOrder);
      const stats = getOrderStats();

      set({
        orders: localOrders,
        isLoadingOrders: false,
        stats,
        totalSales: getTotalSales(),
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Error al cargar órdenes";
      set({ ordersError: message, isLoadingOrders: false });
    }
  },

  fetchStats: async () => {
    try {
      const stats = getOrderStats();
      set({
        stats,
        totalSales: getTotalSales(),
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  },

  createOrder: async (orderData: Partial<Order>) => {
    try {
      const localOrder = addOrder({
        CustomerID: orderData.user_id ?? 0,
        CustomerName: `Cliente ${orderData.user_id ?? 0}`,
        OrderDate: orderData.order_date ?? new Date().toISOString().slice(0, 10),
        Amount: orderData.total_amount ?? 0,
        Status: (orderData.status as LocalOrder["Status"]) ?? "Pendiente",
        Items: typeof orderData.items === "string"
          ? Math.max(orderData.items.split(",").filter(Boolean).length, 1)
          : Array.isArray(orderData.items)
            ? Math.max(orderData.items.length, 1)
            : 1,
      });

      const mappedOrder = mapLocalOrder(localOrder);

      set((state) => ({
        orders: [mappedOrder, ...state.orders],
        stats: getOrderStats(),
        totalSales: getTotalSales(),
      }));

      return mappedOrder;
    } catch (error) {
      const message = error instanceof Error ? error.message : "Error al crear orden";
      set({ ordersError: message });
      return null;
    }
  },

  setCurrentPage: (page: number) => set({ currentPage: page }),

  clearMessages: () => set({ ordersError: null }),
}));
