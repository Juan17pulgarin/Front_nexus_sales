import axios from "axios";

export function getApiErrorMessage(error: unknown, fallback = "Ocurrio un error inesperado.") {
  if (axios.isAxiosError(error)) {
    const responseData = error.response?.data as
      | string
      | { message?: string; error?: string }
      | undefined;

    if (typeof responseData === "string" && responseData.trim()) {
      return responseData;
    }

    if (responseData && typeof responseData === "object") {
      if (typeof responseData.message === "string" && responseData.message.trim()) {
        return responseData.message;
      }

      if (typeof responseData.error === "string" && responseData.error.trim()) {
        return responseData.error;
      }
    }

    if (typeof error.message === "string" && error.message.trim()) {
      return error.message;
    }
  }

  if (error instanceof Error && error.message.trim()) {
    return error.message;
  }

  return fallback;
}
