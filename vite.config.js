import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vercel()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
  },
  server: {
    port: process.env.PORT,
  },
  define: {
    __APP_ENV__: process.env.VITE_VERCEL_ENV,
  },
});
