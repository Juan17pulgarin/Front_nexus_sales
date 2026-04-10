import { create } from "zustand";
import { apiClient } from "@/lib/axios-client";

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
      const response = await apiClient.get("/orders", {
        params: {
          per_page: 50,
          page: 1,
        },
      });
      
      let orders = response.data.data || [];
      
      // Ensure items is properly parsed if it's a string
      orders = orders.map((order: Order) => ({
        ...order,
        items: typeof order.items === "string" ? JSON.parse(order.items) : order.items,
      }));
      
      set({ orders, isLoadingOrders: false });
      
      // Fetch stats after orders
      const statsResponse = await apiClient.get("/orders/stats");
      const stats = statsResponse.data;
      set({ 
        stats,
        totalSales: stats.totalSales || 0,
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Error al cargar órdenes";
      set({
        ordersError: message,
        isLoadingOrders: false,
      });
    }
  },

  fetchStats: async () => {
    try {
      const response = await apiClient.get("/orders/stats");
      const stats = response.data;
      set({ 
        stats,
        totalSales: stats.totalSales || 0,
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  },

  createOrder: async (orderData: Partial<Order>) => {
    try {
      const payload = {
        ...orderData,
        items: typeof orderData.items === "string" ? orderData.items : JSON.stringify(orderData.items),
      };
      
      const response = await apiClient.post("/orders", payload);
      const newOrder = response.data;
      
      // Refresh orders and stats
      const storeState = (useSalesStore.getState as any)();
      await storeState.fetchOrders();
      
      return newOrder;
    } catch (error) {
      const message = error instanceof Error ? error.message : "Error al crear orden";
      set({ ordersError: message });
      return null;
    }
  },

  setCurrentPage: (page: number) => set({ currentPage: page }),

  clearMessages: () => set({ ordersError: null }),
}));
