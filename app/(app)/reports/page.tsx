"use client";

import { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  CartesianGrid,
  Cell,
  ComposedChart,
  Line,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
  Sector
} from "recharts";

export default function ReportsPage() {
  const [revenueTargetData, setRevenueTargetData] = useState<any[]>([]);
  const [salesByCategoryData, setSalesByCategoryData] = useState<any[]>([]);
  const [customerGrowthData, setCustomerGrowthData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [activeIndex, setActiveIndex] = useState(0);
  const [showRevenue, setShowRevenue] = useState(true);
  const [showTarget, setShowTarget] = useState(true);

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const token = localStorage.getItem("auth_token");

        const [revRes, catRes, custRes] = await Promise.all([
          fetch("http://127.0.0.1:8000/api/reports/revenue", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetch("http://127.0.0.1:8000/api/reports/categories", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetch("http://127.0.0.1:8000/api/reports/customers", {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        const revenue = await revRes.json();
        const categories = await catRes.json();
        const customers = await custRes.json();

        setRevenueTargetData(
          revenue.map((r: any) => ({
            month: r.month,
            revenue: Number(r.revenue),
            target: Number(r.revenue) * 1.1,
          }))
        );

        const colors = ["#137fec", "#34d399", "#f59e0b", "#ef4444"];

        setSalesByCategoryData(
          categories.map((c: any, i: number) => ({
            name: c.name,
            value: Number(c.value),
            color: colors[i % colors.length],
          }))
        );

        setCustomerGrowthData(
          customers.map((c: any, i: number) => ({
            week: "W" + (i + 1),
            newCustomers: Math.floor(c.total * 0.4),
            returningCustomers: Math.floor(c.total * 0.6),
          }))
        );
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => setLoading(false), 1200); // delay bonito
      }
    };

    fetchReports();
  }, []);

  const totalRevenue = revenueTargetData.reduce((a, b) => a + b.revenue, 0);

  // 🔥 LOADING BONITO
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mb-6"></div>

        <p className="text-lg font-semibold mb-2">Cargando reportes...</p>

        <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-blue-400 animate-pulse w-2/3"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">

      {/* KPIs */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl shadow">
          <p>Revenue</p>
          <h2 className="text-2xl font-bold">${totalRevenue}</h2>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <p>Meses</p>
          <h2 className="text-2xl font-bold">{revenueTargetData.length}</h2>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <p>Promedio</p>
          <h2 className="text-2xl font-bold">
            ${(totalRevenue / revenueTargetData.length).toFixed(0)}
          </h2>
        </div>
      </div>

      {/* CONTROLES */}
      <div className="flex gap-4">
        <button onClick={() => setShowRevenue(!showRevenue)} className="px-3 py-1 bg-blue-500 text-white rounded">Revenue</button>
        <button onClick={() => setShowTarget(!showTarget)} className="px-3 py-1 bg-green-500 text-white rounded">Target</button>
      </div>

      {/* Revenue */}
      <div className="bg-white p-6 rounded-xl shadow">
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart data={revenueTargetData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />

            {showTarget && <Bar dataKey="target" fill="#34d399" />}
            {showRevenue && <Bar dataKey="revenue" fill="#137fec" />}
            <Line dataKey="revenue" stroke="#8b5cf6" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* PIE */}
      <div className="bg-white p-6 rounded-xl shadow grid grid-cols-2">
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie
              data={salesByCategoryData}
              dataKey="value"
              nameKey="name"
              innerRadius={70}
              outerRadius={110}
              activeIndex={activeIndex}
              onMouseEnter={onPieEnter}
              activeShape={(props: any) => <Sector {...props} outerRadius={130} />}
            >
              {salesByCategoryData.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>

            <text x="50%" y="50%" textAnchor="middle">
              {salesByCategoryData[activeIndex]?.name}
            </text>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

        <div className="flex flex-col justify-center gap-2">
          {salesByCategoryData.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
              {item.name} ({item.value})
            </div>
          ))}
        </div>
      </div>

      {/* AREA MEJORADA */}
      <div className="bg-white p-6 rounded-xl shadow">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={customerGrowthData}>

            <defs>
              <linearGradient id="grad1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0f4c81" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#0f4c81" stopOpacity={0.1} />
              </linearGradient>

              <linearGradient id="grad2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
              </linearGradient>

            </defs>

            <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
            <XAxis dataKey="week" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Area
              type="monotone"
              dataKey="newCustomers"
              stroke="#0f4c81"
              fill="url(#grad1)"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />

            <Area
              type="monotone"
              dataKey="returningCustomers"
              stroke="#10b981"
              fill="url(#grad2)"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />

          </AreaChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}
