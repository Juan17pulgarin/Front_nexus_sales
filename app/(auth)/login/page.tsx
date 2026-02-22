"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Ingresa un email valido."),
  password: z.string().min(8, "La contrasena debe tener al menos 8 caracteres."),
  remember: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const HARD_CODED_EMAIL = "demo@nexussales.com";
const HARD_CODED_PASSWORD = "password123";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const onSubmit = (values: LoginFormValues) => {
    setLoginSuccess(false);

    if (values.email === HARD_CODED_EMAIL && values.password === HARD_CODED_PASSWORD) {
      setLoginSuccess(true);
      return;
    }

    setError("root", {
      message: "Credenciales invalidas. Usa los valores de demo.",
    });
  };

  return (
    <div className="flex min-h-screen bg-background-light text-slate-900 antialiased font-display dark:bg-background-dark dark:text-slate-100">
      <div className="relative hidden w-1/2 flex-col justify-between overflow-hidden bg-primary p-12 lg:flex">
        <div className="absolute inset-0">
          <img
            alt="Professional Team Collaboration"
            className="h-full w-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuChMFbcLhBI0xrRUe4LKcV49NhXPru9X_A7j7gFBViaLU80ZhF-BIaOmLTgyd0QfJXf_c7zDwHE1I2Em4QzPExpDvRt6k8ywvauNLuG15sO4Gguo6ZI6CeAH0sOmsbkIcgzmqtt66T5D6iFFuT-lVYU7jebkxq1Bd803t-oMpS7UR9IocvRm4OfniVYaSmZgs-k3ELxpXAkb-dIrb9_m88cU-VQi5jeapkvTzKmYDsyfdLFpPa-ZaQJMmvpTA2VqGfskkNjdB5FtcZu"
          />
          <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/40" />
        </div>
        <div className="relative z-10 flex items-center gap-3">
          <div className="rounded-lg border border-white/20 bg-white/10 p-2 backdrop-blur-md">
            <svg
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor" />
            </svg>
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight text-white">Nexus Sales</h1>
        </div>
        <div className="relative z-10 mb-12 max-w-lg">
          <h2 className="mb-6 text-5xl font-black leading-tight text-white">
            Empowering your sales pipeline with intelligence.
          </h2>
          <p className="text-lg font-medium leading-relaxed text-white/90">
            Join thousands of teams using Nexus to streamline their CRM, automate
            outreach, and close deals faster than ever before.
          </p>
        </div>
      </div>
      <div className="flex w-full items-center justify-center bg-white p-6 dark:bg-background-dark sm:p-12 md:p-24 lg:w-1/2">
        <div className="w-full max-w-md space-y-8">
          <div className="mb-10 flex items-center gap-3 lg:hidden">
            <div className="rounded-lg bg-primary p-2">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 6H42L36 24L42 42H6L12 24L6 6Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Nexus Sales
            </h1>
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-slate-100">
              Welcome Back
            </h2>
            <p className="font-medium text-slate-500 dark:text-slate-400">
              Log in to your Nexus Sales account to manage your CRM.
            </p>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="space-y-2">
              <label
                className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                htmlFor="email"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <span className="material-symbols-outlined text-[20px] text-slate-400">
                    mail
                  </span>
                </div>
                <input
                  className="block w-full rounded-xl border-0 bg-background-light py-3.5 pl-11 pr-4 text-slate-900 placeholder:text-slate-400 transition-all focus:ring-2 focus:ring-primary dark:bg-slate-800 dark:text-white"
                  id="email"
                  placeholder="name@company.com"
                  type="email"
                  aria-invalid={Boolean(errors.email)}
                  {...register("email")}
                />
              </div>
              {errors.email ? (
                <p className="text-xs font-medium text-red-500">{errors.email.message}</p>
              ) : null}
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label
                  className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                  htmlFor="password"
                >
                  Password
                </label>
                <a
                  className="text-sm font-bold text-primary transition-colors hover:text-primary/80"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="group relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <span className="material-symbols-outlined text-[20px] text-slate-400">
                    lock
                  </span>
                </div>
                <input
                  className="block w-full rounded-xl border-0 bg-background-light py-3.5 pl-11 pr-12 text-slate-900 placeholder:text-slate-400 transition-all focus:ring-2 focus:ring-primary dark:bg-slate-800 dark:text-white"
                  id="password"
                  placeholder="••••••••"
                  type={showPassword ? "text" : "password"}
                  aria-invalid={Boolean(errors.password)}
                  {...register("password")}
                />
                <button
                  className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400 hover:text-primary"
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Ocultar contrasena" : "Mostrar contrasena"}
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {showPassword ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
              {errors.password ? (
                <p className="text-xs font-medium text-red-500">{errors.password.message}</p>
              ) : null}
            </div>
            <div className="flex items-center gap-2">
              <input
                className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-800"
                id="remember"
                type="checkbox"
                {...register("remember")}
              />
              <label
                className="cursor-pointer select-none text-sm font-medium text-slate-600 dark:text-slate-400"
                htmlFor="remember"
              >
                Remember this device
              </label>
            </div>
            {errors.root ? (
              <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
                {errors.root.message}
              </p>
            ) : null}
            {loginSuccess ? (
              <p className="rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-600">
                Login correcto. Credenciales de demo validas.
              </p>
            ) : null}
            <button
              className="flex w-full items-center justify-center rounded-xl bg-primary px-6 py-4 font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 active:scale-[0.98]"
              type="submit"
              disabled={isSubmitting}
            >
              Log In
            </button>
          </form>
          <p className="text-center font-medium text-slate-500 dark:text-slate-400">
            Don&apos;t have an account?{" "}
            <a className="font-bold text-primary hover:underline" href="/register">
              Sign Up
            </a>
          </p>
          <div className="pt-12 text-center">
            <div className="flex justify-center gap-4 text-xs font-medium text-slate-400">
              <a className="transition-colors hover:text-primary" href="#">
                Privacy Policy
              </a>
              <span className="text-slate-300 dark:text-slate-800">•</span>
              <a className="transition-colors hover:text-primary" href="#">
                Terms of Service
              </a>
              <span className="text-slate-300 dark:text-slate-800">•</span>
              <a className="transition-colors hover:text-primary" href="#">
                Help Center
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
