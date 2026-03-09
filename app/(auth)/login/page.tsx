"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useAuthStore } from "@/lib/stores/auth-store";

const loginSchema = z.object({
  email: z.string().email("Ingresa un email valido."),
  password: z.string().min(8, "La contrasena debe tener al menos 8 caracteres."),
  remember: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const login = useAuthStore((state) => state.login);

  const {
    register,
    handleSubmit,
    clearErrors,
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

  const onSubmit = async (values: LoginFormValues) => {
    setLoginSuccess(false);
    clearErrors("root");

    const result = await login(values.email, values.password, Boolean(values.remember));

    if (result.success) {
      setLoginSuccess(true);
      router.push("/home");
      return;
    }

    setError("root", {
      message: result.message ?? "Credenciales invalidas.",
    });
  };

  return (
    <div className="bg-background-light font-display dark:bg-background-dark flex min-h-screen text-slate-900 antialiased dark:text-slate-100">
      <div className="bg-primary relative hidden w-1/2 flex-col justify-between overflow-hidden p-12 lg:flex">
        <div className="absolute inset-0">
          <img
            alt="Professional Team Collaboration"
            className="h-full w-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuChMFbcLhBI0xrRUe4LKcV49NhXPru9X_A7j7gFBViaLU80ZhF-BIaOmLTgyd0QfJXf_c7zDwHE1I2Em4QzPExpDvRt6k8ywvauNLuG15sO4Gguo6ZI6CeAH0sOmsbkIcgzmqtt66T5D6iFFuT-lVYU7jebkxq1Bd803t-oMpS7UR9IocvRm4OfniVYaSmZgs-k3ELxpXAkb-dIrb9_m88cU-VQi5jeapkvTzKmYDsyfdLFpPa-ZaQJMmvpTA2VqGfskkNjdB5FtcZu"
          />
          <div className="bg-primary/40 absolute inset-0 mix-blend-multiply" />
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
          <h2 className="mb-6 text-5xl leading-tight font-black text-white">
            Empowering your sales pipeline with intelligence.
          </h2>
          <p className="text-lg leading-relaxed font-medium text-white/90">
            Join thousands of teams using Nexus to streamline their CRM, automate outreach, and
            close deals faster than ever before.
          </p>
        </div>
      </div>
      <div className="dark:bg-background-dark flex w-full items-center justify-center bg-white p-6 sm:p-12 md:p-24 lg:w-1/2">
        <div className="w-full max-w-md space-y-8">
          <div className="mb-10 flex items-center gap-3 lg:hidden">
            <div className="bg-primary rounded-lg p-2">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor" />
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
                  <span className="material-symbols-outlined text-[20px] text-slate-400">mail</span>
                </div>
                <input
                  className="bg-background-light focus:ring-primary block w-full rounded-xl border-0 py-3.5 pr-4 pl-11 text-slate-900 transition-all placeholder:text-slate-400 focus:ring-2 dark:bg-slate-800 dark:text-white"
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
                  className="text-primary hover:text-primary/80 text-sm font-bold transition-colors"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="group relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <span className="material-symbols-outlined text-[20px] text-slate-400">lock</span>
                </div>
                <input
                  className="bg-background-light focus:ring-primary block w-full rounded-xl border-0 py-3.5 pr-12 pl-11 text-slate-900 transition-all placeholder:text-slate-400 focus:ring-2 dark:bg-slate-800 dark:text-white"
                  id="password"
                  placeholder="••••••••"
                  type={showPassword ? "text" : "password"}
                  aria-invalid={Boolean(errors.password)}
                  {...register("password")}
                />
                <button
                  className="hover:text-primary absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400"
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
                className="text-primary focus:ring-primary h-4 w-4 rounded border-slate-300 dark:border-slate-700 dark:bg-slate-800"
                id="remember"
                type="checkbox"
                {...register("remember")}
              />
              <label
                className="cursor-pointer text-sm font-medium text-slate-600 select-none dark:text-slate-400"
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
                Login correcto.
              </p>
            ) : null}
            <button
              className="bg-primary shadow-primary/20 hover:bg-primary/90 flex w-full items-center justify-center rounded-xl px-6 py-4 font-bold text-white shadow-lg transition-all active:scale-[0.98]"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Ingresando..." : "Log In"}
            </button>
          </form>
          <p className="text-center font-medium text-slate-500 dark:text-slate-400">
            Don&apos;t have an account?{" "}
            <a className="text-primary font-bold hover:underline" href="/register">
              Sign Up
            </a>
          </p>
          <div className="pt-12 text-center">
            <div className="flex justify-center gap-4 text-xs font-medium text-slate-400">
              <a className="hover:text-primary transition-colors" href="#">
                Privacy Policy
              </a>
              <span className="text-slate-300 dark:text-slate-800">•</span>
              <a className="hover:text-primary transition-colors" href="#">
                Terms of Service
              </a>
              <span className="text-slate-300 dark:text-slate-800">•</span>
              <a className="hover:text-primary transition-colors" href="#">
                Help Center
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
