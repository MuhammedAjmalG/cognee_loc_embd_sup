function normalizeLocalApiUrl(value?: string): string | null {
  if (!value) {
    return null;
  }

  return value.replace(/\/api\/?$/, "");
}

export const localApiUrl =
  normalizeLocalApiUrl(process.env.NEXT_PUBLIC_LOCAL_API_URL)
  || normalizeLocalApiUrl(process.env.NEXT_PUBLIC_BACKEND_API_URL)
  || "http://localhost:8000";
