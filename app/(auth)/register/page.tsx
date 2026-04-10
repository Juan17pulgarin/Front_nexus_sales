"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const registerSchema = z.object({
  fullName: z.string().min(2, "Ingresa tu nombre completo."),
  companyName: z.string().min(2, "Ingresa el nombre de tu empresa."),
  email: z.string().email("Ingresa un email valido."),
  password: z.string().min(8, "La contrasena debe tener al menos 8 caracteres."),
  terms: z.boolean().refine((value) => value, {
    message: "Debes aceptar los terminos.",
  }),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      password: "",
      terms: false,
    },
  });

  const onSubmit = (values: RegisterFormValues) => {
    void values;
  };

  const passwordValue = watch("password");
  const strengthScore = getPasswordStrength(passwordValue);
  const strengthLabel = getStrengthLabel(strengthScore);

  return (
    <div className="flex min-h-screen bg-background-light font-display text-slate-900 antialiased dark:bg-background-dark dark:text-slate-100">
      <div className="relative hidden w-1/2 flex-col justify-between overflow-hidden bg-primary bg-image-overlay p-12 lg:flex">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10">
          <div className="flex items-center gap-3 text-white">
            <div className="flex size-10 items-center justify-center rounded-lg bg-white shadow-xl">
              <svg
                className="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor" />
              </svg>
            </div>
            <h2 className="text-2xl font-black tracking-tight drop-shadow-sm">
              Nexus Sales
            </h2>
          </div>
        </div>
        <div className="relative z-10 max-w-lg">
          <h1 className="mb-6 text-5xl font-black leading-tight text-white drop-shadow-md">
            Join the next generation of sales.
          </h1>
          <p className="mb-10 text-lg font-medium leading-relaxed text-white/95 drop-shadow-sm">
            Empower your team with AI-driven insights, automated workflows, and a
            CRM that finally works for you. Start your 14-day free trial today.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="glass-effect rounded-xl p-6">
              <span className="material-symbols-outlined mb-3 text-3xl text-white">
                verified_user
              </span>
              <p className="text-lg font-bold text-white">Secure by Design</p>
              <p className="mt-1 text-sm text-white/80">Enterprise-grade encryption</p>
            </div>
            <div className="glass-effect rounded-xl p-6">
              <span className="material-symbols-outlined mb-3 text-3xl text-white">
                bolt
              </span>
              <p className="text-lg font-bold text-white">Fast Setup</p>
              <p className="mt-1 text-sm text-white/80">Up and running in minutes</p>
            </div>
          </div>
        </div>
        <div className="relative z-10 flex items-center gap-4 text-sm font-medium text-white/80">
          <span>© 2026 Nexus Sales Inc.</span>
          <span className="h-1 w-1 rounded-full bg-white/40" />
          <a className="transition-colors hover:text-white" href="#">
            Privacy Policy
          </a>
          <span className="h-1 w-1 rounded-full bg-white/40" />
          <a className="transition-colors hover:text-white" href="#">
            Terms of Service
          </a>
        </div>
      </div>
      <div className="flex w-full items-center justify-center bg-background-light p-6 dark:bg-background-dark sm:p-12 lg:w-1/2">
        <div className="flex w-full max-w-[440px] flex-col gap-8">
          <div className="mb-2 flex items-center gap-3 text-primary lg:hidden">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
              <svg
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor" />
              </svg>
            </div>
            <h2 className="text-xl font-bold tracking-tight">Nexus Sales</h2>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-slate-100">
              Create Your Account
            </h2>
            <p className="font-medium text-slate-500 dark:text-slate-400">
              No credit card required. Start your 14-day free trial.
            </p>
          </div>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                htmlFor="full_name"
              >
                Full Name
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-xl text-slate-400">
                  person
                </span>
                <input
                  className="h-12 w-full rounded-lg border border-slate-200 bg-white pl-12 pr-4 text-slate-900 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                  id="full_name"
                  placeholder="e.g. John Doe"
                  type="text"
                  aria-invalid={Boolean(errors.fullName)}
                  {...register("fullName")}
                />
              </div>
              {errors.fullName ? (
                <p className="text-xs font-medium text-red-500">{errors.fullName.message}</p>
              ) : null}
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                htmlFor="company_name"
              >
                Company Name
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-xl text-slate-400">
                  corporate_fare
                </span>
                <input
                  className="h-12 w-full rounded-lg border border-slate-200 bg-white pl-12 pr-4 text-slate-900 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                  id="company_name"
                  placeholder="e.g. Acme Corp"
                  type="text"
                  aria-invalid={Boolean(errors.companyName)}
                  {...register("companyName")}
                />
              </div>
              {errors.companyName ? (
                <p className="text-xs font-medium text-red-500">
                  {errors.companyName.message}
                </p>
              ) : null}
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                htmlFor="email"
              >
                Company Email
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-xl text-slate-400">
                  mail
                </span>
                <input
                  className="h-12 w-full rounded-lg border border-slate-200 bg-white pl-12 pr-4 text-slate-900 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
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
            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                htmlFor="password"
              >
                Create Password
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-xl text-slate-400">
                  lock
                </span>
                <input
                  className="h-12 w-full rounded-lg border border-slate-200 bg-white pl-12 pr-12 text-slate-900 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                  id="password"
                  placeholder="Min. 8 characters"
                  type={showPassword ? "text" : "password"}
                  aria-invalid={Boolean(errors.password)}
                  {...register("password")}
                />
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Ocultar contrasena" : "Mostrar contrasena"}
                >
                  <span className="material-symbols-outlined text-xl">
                    {showPassword ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
              <div className="mt-1 flex gap-1">
                <div
                  className={`h-1 flex-1 rounded-full ${
                    strengthScore >= 1
                      ? "bg-rose-500"
                      : "bg-slate-200 dark:bg-slate-800"
                  }`}
                />
                <div
                  className={`h-1 flex-1 rounded-full ${
                    strengthScore >= 2
                      ? "bg-amber-500"
                      : "bg-slate-200 dark:bg-slate-800"
                  }`}
                />
                <div
                  className={`h-1 flex-1 rounded-full ${
                    strengthScore >= 3
                      ? "bg-lime-500"
                      : "bg-slate-200 dark:bg-slate-800"
                  }`}
                />
                <div
                  className={`h-1 flex-1 rounded-full ${
                    strengthScore >= 4
                      ? "bg-emerald-500"
                      : "bg-slate-200 dark:bg-slate-800"
                  }`}
                />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Password Strength: {strengthLabel}
              </p>
              {errors.password ? (
                <p className="text-xs font-medium text-red-500">{errors.password.message}</p>
              ) : null}
            </div>
            <div className="mt-2 flex items-start gap-3">
              <div className="flex h-5 items-center">
                <input
                  className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary dark:border-slate-800 dark:bg-slate-900"
                  id="terms"
                  type="checkbox"
                  aria-invalid={Boolean(errors.terms)}
                  {...register("terms")}
                />
              </div>
              <label className="text-sm text-slate-500 dark:text-slate-400" htmlFor="terms">
                I agree to the{" "}
                <a className="font-semibold text-primary hover:underline" href="#">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a className="font-semibold text-primary hover:underline" href="#">
                  Privacy Policy
                </a>.
              </label>
            </div>
            {errors.terms ? (
              <p className="text-xs font-medium text-red-500">{errors.terms.message}</p>
            ) : null}
            <button
              className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary font-bold text-white shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90"
              type="submit"
              disabled={isSubmitting}
            >
              Create Account
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </button>
          </form>
          <div className="border-t border-slate-100 pt-4 text-center dark:border-slate-800">
            <p className="font-medium text-slate-600 dark:text-slate-400">
              Already have an account?
              <a className="ml-1 font-bold text-primary hover:underline" href="/login">
                Log In
              </a>
            </p>
          </div>
          <div className="flex items-center justify-center gap-8 opacity-50 grayscale transition-all duration-500 hover:grayscale-0">
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">security</span>
              <span className="text-[10px] font-bold uppercase tracking-widest">SSL Secure</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">shield_person</span>
              <span className="text-[10px] font-bold uppercase tracking-widest">GDPR Ready</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function getPasswordStrength(value: string): number {
  if (!value) return 0;

  let score = 0;

  if (value.length >= 8) score += 1;
  if (/[A-Z]/.test(value)) score += 1;
  if (/[0-9]/.test(value)) score += 1;
  if (/[^A-Za-z0-9]/.test(value)) score += 1;

  return Math.min(score, 4);
}

function getStrengthLabel(score: number): string {
  if (score <= 1) return "Weak";
  if (score === 2) return "Fair";
  if (score === 3) return "Good";
  return "Strong";
}
