"use client";

import { useEffect, useState } from "react";

interface Cliente {
  CustomerID: number;
  Title?: string;
  FirstName: string;
  MiddleName?: string;
  LastName: string;
  Suffix?: string;
  CompanyName: string;
  SalesPerson: string;
  EmailAddress: string;
  Phone: string;
}

export default function CustomersPage() {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFullList, setIsFullList] = useState(false);

  // Estados para Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    NameStyle: 0,
    Title: "Mr.",
    FirstName: "",
    MiddleName: "",
    LastName: "",
    Suffix: "",
    CompanyName: "",
    SalesPerson: "adventure-works\\alex0",
    EmailAddress: "",
    Phone: "",
    PasswordHash: "L9a8s7d6...", 
    PasswordSalt: "L9a8s7d6"
  });

  const fetchClientes = async (cargarTodo = false) => {
    setLoading(true);
    try {
      const token = localStorage.getItem("auth_token");
      const url = cargarTodo 
        ? "http://127.0.0.1:8000/api/clientes?todo=1" 
        : "http://127.0.0.1:8000/api/clientes";

      const response = await fetch(url, {
        headers: { "Authorization": `Bearer ${token}` },
      });

      if (response.ok) {
        const data = await response.json();
        setClientes(data);
        if (cargarTodo) setIsFullList(true);
      }
    } catch (error) {
      console.error("Error cargando clientes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchClientes(); }, []);

  const handleOpenCreate = () => {
    setIsEditing(false);
    setCurrentId(null);
    setFormData({ ...formData, FirstName: "", LastName: "", CompanyName: "", EmailAddress: "", Phone: "", Title: "Mr." });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (c: Cliente) => {
    setIsEditing(true);
    setCurrentId(c.CustomerID);
    setFormData({
      ...formData,
      Title: c.Title || "Mr.",
      FirstName: c.FirstName,
      LastName: c.LastName,
      CompanyName: c.CompanyName,
      EmailAddress: c.EmailAddress,
      Phone: c.Phone || ""
    });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = isEditing 
      ? `http://127.0.0.1:8000/api/clientes/${currentId}` 
      : "http://127.0.0.1:8000/api/clientes";

    try {
      const token = localStorage.getItem("auth_token");
      const response = await fetch(url, {
        method: "POST", // Mantenemos POST por tu ruta de Laravel
        headers: { 
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json" 
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsModalOpen(false);
        fetchClientes(isFullList);
      }
    } catch (error) {
      alert("Error en la operación");
    }
  };

  // NUEVA FUNCIÓN: Eliminar
  const handleDelete = async (id: number) => {
    if (!confirm("¿Estás seguro de eliminar este cliente?")) return;

    try {
      const token = localStorage.getItem("auth_token");
      const response = await fetch(`http://127.0.0.1:8000/api/clientes/${id}`, {
        method: "DELETE",
        headers: { "Authorization": `Bearer ${token}` }
      });

      if (response.ok) {
        fetchClientes(isFullList); // Refrescar lista
      } else {
        const err = await response.json();
        alert(err.details || "Error al eliminar");
      }
    } catch (error) {
      alert("Error de conexión");
    }
  };

  const clientesFiltrados = clientes.filter(c => 
    `${c.FirstName} ${c.LastName} ${c.CompanyName}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="flex h-screen overflow-hidden">
        <aside className="w-64 bg-white dark:bg-slate-900 border-r flex flex-col h-full shrink-0">
          <div className="p-6 flex items-center gap-3">
            <div className="bg-blue-600 rounded-lg p-1.5 text-white">
              <span className="material-symbols-outlined">rocket_launch</span>
            </div>
            <h1 className="text-lg font-bold">Nexus Sales</h1>
          </div>
          <nav className="flex-1 px-3 space-y-1 text-sm font-semibold">
            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:bg-slate-100" href="/home">
               Dashboard
            </a>
            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-blue-50 text-blue-600" href="/customers">
               Customers
            </a>
          </nav>
        </aside>

        <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
          <header className="h-16 bg-white dark:bg-slate-900 border-b flex items-center justify-between px-8 sticky top-0 z-10">
            <div className="relative w-full max-w-md">
              <input 
                className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-lg pl-10 pr-4 py-2 text-sm outline-none" 
                placeholder="Search..." 
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button 
              onClick={handleOpenCreate}
              className="bg-blue-600 text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
            >
              Add Customer
            </button>
          </header>

          <div className="p-8 max-w-7xl mx-auto w-full">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
              <div className="p-4 border-b flex justify-between items-center bg-slate-50/50">
                <h3 className="font-bold">Customer Directory</h3>
                {!isFullList && (
                  <button onClick={() => fetchClientes(true)} className="text-blue-600 text-xs font-bold">
                    Load All Data
                  </button>
                )}
              </div>
              <table className="w-full text-left">
                <thead className="text-xs font-bold text-slate-500 uppercase border-b bg-slate-50">
                  <tr>
                    <th className="px-6 py-4">Full Name</th>
                    <th className="px-6 py-4">Company</th>
                    <th className="px-6 py-4">Phone</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {loading ? (
                    <tr><td colSpan={4} className="p-20 text-center text-slate-400">Loading...</td></tr>
                  ) : (
                    clientesFiltrados.map((c) => (
                      <tr key={c.CustomerID} className="hover:bg-slate-50 transition-colors group">
                        <td className="px-6 py-4 text-sm">
                          <div className="font-bold">{c.Title} {c.FirstName} {c.LastName}</div>
                          <div className="text-xs text-slate-400">{c.EmailAddress}</div>
                        </td>
                        <td className="px-6 py-4 text-sm">{c.CompanyName}</td>
                        <td className="px-6 py-4 text-sm text-slate-500">{c.Phone || 'N/A'}</td>
                        <td className="px-6 py-4 text-right flex justify-end gap-2">
                          <button onClick={() => handleOpenEdit(c)} className="p-2 text-slate-300 hover:text-blue-600 transition-colors">
                            <span className="material-symbols-outlined">edit</span>
                          </button>
                          {/* BOTÓN ELIMINAR */}
                          <button onClick={() => handleDelete(c.CustomerID)} className="p-2 text-slate-300 hover:text-red-600 transition-colors">
                            <span className="material-symbols-outlined">delete</span>
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      {/* MODAL (Se mantiene igual que antes) */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-3xl p-8 shadow-2xl">
            <h2 className="text-2xl font-black mb-6">{isEditing ? "Edit Customer" : "New Customer"}</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Title</label>
                <input className="w-full mt-1 p-2 bg-slate-50 border rounded-lg" value={formData.Title} onChange={e => setFormData({...formData, Title: e.target.value})} />
              </div>
              <div className="col-span-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Phone</label>
                <input className="w-full mt-1 p-2 bg-slate-50 border rounded-lg" value={formData.Phone} onChange={e => setFormData({...formData, Phone: e.target.value})} />
              </div>
              <div className="col-span-1">
                <label className="text-xs font-bold text-slate-500 uppercase">First Name</label>
                <input required className="w-full mt-1 p-2 bg-slate-50 border rounded-lg" value={formData.FirstName} onChange={e => setFormData({...formData, FirstName: e.target.value})} />
              </div>
              <div className="col-span-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Last Name</label>
                <input required className="w-full mt-1 p-2 bg-slate-50 border rounded-lg" value={formData.LastName} onChange={e => setFormData({...formData, LastName: e.target.value})} />
              </div>
              <div className="col-span-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Company Name</label>
                <input required className="w-full mt-1 p-2 bg-slate-50 border rounded-lg" value={formData.CompanyName} onChange={e => setFormData({...formData, CompanyName: e.target.value})} />
              </div>
              <div className="col-span-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Email Address</label>
                <input required type="email" className="w-full mt-1 p-2 bg-slate-50 border rounded-lg" value={formData.EmailAddress} onChange={e => setFormData({...formData, EmailAddress: e.target.value})} />
              </div>
              <div className="col-span-2 flex gap-3 pt-6">
                <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 p-3 bg-slate-100 rounded-xl font-bold">Cancel</button>
                <button type="submit" className="flex-1 p-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 shadow-lg">
                   {isEditing ? "Update" : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}