import { defineConfig } from "wxt";
import tailwindcss from "@tailwindcss/vite";
// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ["@wxt-dev/module-react"],
  manifest: ({ browser, manifestVersion, mode, command }) => {
    return {
      name: "Venita",
      description: "An extension to download clips from specific time range ",
      version: "1.0.0",
      manifest_version: 3,
      permissions: [
        "storage",
        "activeTab",
        "tabs",
        "contextMenus",
        "scripting",
        "declarativeNetRequest",
      ],
    };
  },
  vite: () => ({
    plugins: [tailwindcss()],
  }),
});
