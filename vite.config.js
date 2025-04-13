import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  root: ".", // Project root
  publicDir: "public", // Tell Vite where to find index.html and static assets
  build: {
    outDir: "dist", // Default output directory
    rollupOptions: {
      input: path.resolve(__dirname, "public/index.html")
    }
  }
});
