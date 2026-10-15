import react from "@vitejs/plugin-react";
import process from "node:process";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base:
    process.env.GITHUB_ACTIONS === "true"
      ? `/${process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "E-COMMERCE-WEB"}/`
      : "/",
  plugins: [react(), tailwindcss()],
});
