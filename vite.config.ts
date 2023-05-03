import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/yet-another-glassmorphism-style-form/",
  publicDir: "/yet-another-glassmorphism-style-form/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
    },
  },
});
