export function getBaseURL() {
  if (typeof window !== "undefined") {
    return window.location.hostname === "localhost"
      ? "http://localhost:3000"
      : "http://192.168.1.16:3000";
  }
  return "http://192.168.1.16:3000";
}
