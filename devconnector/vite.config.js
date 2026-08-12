import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // to add the backend application as a proxy , so that we can handle the CORS issue, maintaining the same origin policy.
    // Code maintainablility properly.
    proxy: {
      "/api": {
        target: "http://localhost:9500", // backend server url
        changeOrigin: true, //
        secure: false, //https not allowed
      },
    },
  },
});
