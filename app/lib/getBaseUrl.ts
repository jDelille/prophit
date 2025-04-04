export function getBaseUrl() {
    if (typeof window !== "undefined") {
      // Client-side: Use the window location to determine if we're local
      return window.location.hostname === "localhost"
        ? "http://localhost:3000"
        : "http://192.168.1.16:3000";
    }
  
    // Server-side: Default to localhost (you can adjust if needed)
    return "http://192.168.1.16:3000";
  }