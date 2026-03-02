"use client";

import { clearAuthCookies } from "@/lib/auth/mock-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    clearAuthCookies();
    router.replace("/login");
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background-light font-display text-slate-900 dark:bg-background-dark dark:text-slate-100">
      <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Cerrando sesion...</p>
    </div>
  );
}
