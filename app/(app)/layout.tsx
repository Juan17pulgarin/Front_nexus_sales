import type { ReactNode } from "react";

export default function AppLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr]">
      <header className="h-14 border-b" />
      <div className="grid grid-cols-[240px_1fr]">
        <aside className="border-r" />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
