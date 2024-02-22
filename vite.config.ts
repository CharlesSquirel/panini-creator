import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: "/",
    test: {
      environment: "jsdom",
      setupFiles: ["./tests/setup.ts"],
      testMatch: ["./tests/**/*.test.tsx"],
      globals: true,
    },
    resolve: {
      alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    },
  };

  if (command !== "serve") {
    config.base = "/panini/";
  }

  return config;
});
