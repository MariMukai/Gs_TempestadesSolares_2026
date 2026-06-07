import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // IMPORTANTE para o deploy no GitHub Pages:
  // troque "solar-alert" pelo nome EXATO do seu repositorio.
   base: "/",
});
