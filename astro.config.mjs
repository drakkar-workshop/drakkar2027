import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://drakkar-workshop.github.io",
  base: "/drakkar2027-workshop-website",
  vite: {
    plugins: [tailwindcss()],
  },
});
