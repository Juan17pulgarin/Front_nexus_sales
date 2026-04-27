"use client";

import { useEffect, useState } from "react";

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const [password, setPassword] = useState({
    current: "",
    newPass: "",
    confirm: "",
  });

  const [deleteConfirm, setDeleteConfirm] = useState("");

  const [message, setMessage] = useState({
    show: false,
    text: "",
    type: "info",
  });

  // INIT THEME
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved === "dark";

    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  // DARK MODE
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  // NOTIFICATIONS
  const toggleNotifications = async () => {
    if (!("Notification" in window)) {
      return setMessage({
        show: true,
        text: "Este navegador no soporta notificaciones.",
        type: "error",
      });
    }

    if (notificationsEnabled) {
      setNotificationsEnabled(false);

      return setMessage({
        show: true,
        text: "Notificaciones desactivadas correctamente.",
        type: "success",
      });
    }

    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      setNotificationsEnabled(true);
      new Notification("Notificaciones activadas");

      setMessage({
        show: true,
        text: "Notificaciones activadas correctamente.",
        type: "success",
      });
    } else {
      setMessage({
        show: true,
        text: "Permiso denegado para notificaciones.",
        type: "error",
      });
    }
  };

  // PASSWORD
  const handlePasswordChange = () => {
    const { current, newPass, confirm } = password;
    const REAL_PASSWORD = "password123";

    if (!current || !newPass || !confirm) {
      return setMessage({
        show: true,
        text: "Debes completar todos los campos de contraseña.",
        type: "error",
      });
    }

    if (newPass !== confirm) {
      return setMessage({
        show: true,
        text: "La nueva contraseña y la confirmación no coinciden.",
        type: "error",
      });
    }

    if (current === newPass) {
      return setMessage({
        show: true,
        text: "La nueva contraseña no puede ser igual a la actual.",
        type: "error",
      });
    }

    if (current === newPass) {
      return setMessage({
        show: true,
        text: "La nueva contraseña no puede ser igual a la actual.",
        type: "error",
      });
    }

    if (current !== REAL_PASSWORD) {
      return setMessage({
        show: true,
        text: "La contraseña actual es incorrecta.",
        type: "error",
      });
    }

    if (newPass === REAL_PASSWORD) {
      return setMessage({
        show: true,
        text: "La nueva contraseña no puede ser igual a la actual.",
        type: "error",
      });
    }

    setPassword({ current: "", newPass: "", confirm: "" });

    setMessage({
      show: true,
      text: "Contraseña actualizada correctamente.",
      type: "success",
    });
  };

  // DELETE ACCOUNT
  const handleDeleteAccount = () => {
    if (deleteConfirm !== "estoy seguro de eliminar") {
      return setMessage({
        show: true,
        text: "La frase no coincide exactamente.",
        type: "error",
      });
    }

    setDeleteConfirm("");

    setMessage({
      show: true,
      text: "Tu solicitud fue enviada. Se procesará en 30 días.",
      type: "success",
    });
  };

  return (
    <div className="min-h-screen font-display bg-background text-foreground transition-colors">
      <div className="flex h-screen overflow-hidden">

        {/* ================= SIDEBAR (INTACTO) ================= */}
        <aside className="h-full w-64 shrink-0 flex-col border-r border-border bg-card text-card-foreground flex">

          <div className="flex items-center gap-3 p-6">
            <div className="flex items-center justify-center rounded-lg bg-primary p-1.5 text-primary-foreground">
              <span className="material-symbols-outlined">rocket_launch</span>
            </div>

            <div>
              <h1 className="text-lg font-bold">Nexus Sales</h1>
              <p className="text-xs opacity-70">CRM Dashboard</p>
            </div>
          </div>

          <nav className="flex-1 space-y-1 px-3">

            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted" href="/home">
              <span className="material-symbols-outlined">dashboard</span>
              Dashboard
            </a>

            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted" href="/customers">
              <span className="material-symbols-outlined">group</span>
              Customers
            </a>

            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted" href="/sales">
              <span className="material-symbols-outlined">receipt_long</span>
              Sales
            </a>

            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted" href="/reports">
              <span className="material-symbols-outlined">monitoring</span>
              Reports
            </a>

            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary" href="/settings">
              <span className="material-symbols-outlined">settings</span>
              Settings
            </a>

          </nav>
        </aside>

        {/* ================= MAIN ================= */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-10">

          <div className="max-w-4xl space-y-8">

            <div>
              <h1 className="text-3xl font-bold">Settings</h1>
              <p className="opacity-70">Configuración de cuenta</p>
            </div>

            {/* DARK MODE */}
            <div className="p-6 border rounded-xl bg-card/70 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">dark_mode</span>
                <div>
                  <h2 className="font-semibold">Modo oscuro</h2>
                  <p className="text-sm opacity-70">Se guarda localmente</p>
                </div>
              </div>

              <button
                onClick={toggleDarkMode}
                className="px-4 py-2 rounded-lg bg-primary text-primary-foreground"
              >
                {darkMode ? "ON" : "OFF"}
              </button>
            </div>

            {/* NOTIFICATIONS */}
            <div className="p-6 border rounded-xl bg-card/70 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">notifications</span>
                <div>
                  <h2 className="font-semibold">Notificaciones</h2>
                  <p className="text-sm opacity-70">
                    {notificationsEnabled ? "Activas" : "Desactivadas"}
                  </p>
                </div>
              </div>

              <button
                onClick={toggleNotifications}
                className={`px-4 py-2 rounded-lg font-semibold ${
                  notificationsEnabled
                    ? "bg-red-500 text-white"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                {notificationsEnabled ? "Desactivar" : "Activar"}
              </button>
            </div>

            {/* PASSWORD */}
            <div className="p-6 border rounded-xl bg-card/70 space-y-3">

              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">lock</span>
                <h2 className="font-semibold">Cambiar contraseña</h2>
              </div>

              <input
                type="password"
                placeholder="Contraseña actual"
                className="w-full p-2 border rounded bg-background dark:bg-slate-900"
                value={password.current}
                onChange={(e) =>
                  setPassword({ ...password, current: e.target.value })
                }
              />

              <input
                type="password"
                placeholder="Nueva contraseña"
                className="w-full p-2 border rounded bg-background dark:bg-slate-900"
                value={password.newPass}
                onChange={(e) =>
                  setPassword({ ...password, newPass: e.target.value })
                }
              />

              <input
                type="password"
                placeholder="Confirmar contraseña"
                className="w-full p-2 border rounded bg-background dark:bg-slate-900"
                value={password.confirm}
                onChange={(e) =>
                  setPassword({ ...password, confirm: e.target.value })
                }
              />

              <button
                onClick={handlePasswordChange}
                className="w-full bg-primary text-primary-foreground py-2 rounded-lg"
              >
                Guardar cambios
              </button>

            </div>

            {/* DELETE ACCOUNT */}
            <div className="p-6 border border-red-300 dark:border-red-900 rounded-xl bg-red-50 dark:bg-red-950/20 space-y-4">

              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-red-500">
                  delete_forever
                </span>

                <h2 className="font-semibold text-red-500">
                  Eliminar cuenta
                </h2>
              </div>

              <p className="text-sm">
                Escribe exactamente: <b>estoy seguro de eliminar</b>
              </p>

              <input
                value={deleteConfirm}
                onChange={(e) => setDeleteConfirm(e.target.value)}
                className="w-full p-2 border rounded bg-background dark:bg-slate-900"
                placeholder="estoy seguro de eliminar"
              />

              <button
                onClick={handleDeleteAccount}
                className="w-full bg-red-600 text-white py-2 rounded-lg"
              >
                Solicitar eliminación
              </button>

            </div>

          </div>
        </main>
      </div>

      {/* MESSAGE */}
      {message.show && (
        <div className="fixed bottom-6 right-6">
          <div
            className={`px-4 py-3 rounded-lg text-white shadow-lg ${
              message.type === "success"
                ? "bg-green-600"
                : message.type === "error"
                ? "bg-red-600"
                : "bg-slate-800"
            }`}
          >
            {message.text}

            <button
              onClick={() => setMessage({ ...message, show: false })}
              className="ml-3 underline text-xs"
            >
              cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}