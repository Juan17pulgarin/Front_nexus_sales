export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

type HttpOptions = Omit<RequestInit, "method"> & {
  method?: HttpMethod;
};

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";
const DEFAULT_HEADERS: HeadersInit = {
  "Content-Type": "application/json",
};

export async function http<T>(path: string, options: HttpOptions = {}): Promise<T> {
  const response = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      ...DEFAULT_HEADERS,
      ...options.headers,
    },
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `HTTP ${response.status}`);
  }

  const contentType = response.headers.get("content-type") ?? "";
  if (contentType.includes("application/json")) {
    return (await response.json()) as T;
  }

  return (await response.text()) as T;
}
