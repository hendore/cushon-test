import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@cushon": path.resolve(__dirname, "./src"),
    },
  },
});
