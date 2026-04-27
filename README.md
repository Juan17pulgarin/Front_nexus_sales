# CRM Frontend

Frontend de Nexus Sales construido con Next.js 16, React 19, TypeScript, Tailwind CSS v4, Zustand, Axios y shadcn/ui.

## Qué incluye

- Autenticación con token y persistencia en cookie + almacenamiento local/temporal.
- Protección de rutas privadas mediante middleware de Next.js.
- Gestión de clientes con fallback local cuando no hay backend disponible.
- Historial de ventas por cliente con carga segura y sin bloquear la UI.
- Módulos de ventas, reportes y ajustes dentro del layout principal de la app.

## Requisitos

- Node.js 20 o superior.
- Un backend compatible con las rutas de Nexus Sales, o ejecución en modo local con fallback.

## Instalación

```bash
npm install
```

## Variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto con, al menos:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/api
```

Si el backend no está disponible, varias pantallas siguen funcionando con datos locales controlados.

## Credenciales de prueba

```text
Email: demo@nexussales.com
Password: password123
```

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Desarrollo

1. Instala dependencias con `npm install`.
2. Arranca el frontend con `npm run dev`.
3. Abre `http://localhost:3000`.
4. Inicia sesión con las credenciales de prueba.

## Arquitectura

- `lib/axios-client.ts`: cliente HTTP central con token automático.
- `lib/stores/auth-store.ts`: estado de autenticación.
- `lib/stores/clientes-store.ts`: estado de clientes.
- `lib/stores/addresses-store.ts`: estado de direcciones.
- `lib/stores/sales-store.ts`: estado de ventas.
- `services/customer.service.ts`: acceso híbrido API-first con fallback local.
- `services/address.service.ts`: acceso híbrido para direcciones.
- `services/sales.service.ts`: historial de ventas por cliente con fallback seguro.

## Notas

- El proyecto usa `next dev --webpack` y `next build --webpack` como ruta estable en este entorno.
- La UI no debe decidir si usa API o almacenamiento local; esa decisión vive en los servicios.
- Si el backend no expone una ruta, el frontend debe degradar de forma segura sin romper la pantalla.

## Estructura general

- `app/`: rutas y layouts del App Router.
- `components/`: componentes reutilizables.
- `lib/`: utilidades, stores y persistencia local.
- `services/`: capa de acceso a datos.

## Backend relacionado

Este frontend se conecta con el backend Laravel ubicado en `Backend_nexus_sales/` dentro del mismo workspace.

## Despliegue

Antes de desplegar:

1. Verifica `NEXT_PUBLIC_API_BASE_URL`.
2. Ejecuta `npm run build`.
3. Confirma que el backend y sus rutas públicas estén disponibles.
