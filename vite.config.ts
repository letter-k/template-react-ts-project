import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    base: "./",
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src/"),
        "@/assets": path.resolve(__dirname, "./src/assets/"),
      },
    },
    optimizeDeps: {
      include: ["react", "react-dom"],
      exclude: [],
    },
    server: {
      port: 2600,
      open: true,
    },
    build: {
      outDir: "dist",
      sourcemap: false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
    define: {
      "import.meta.env.REPO_NAME": JSON.stringify(env.REPO_NAME),
    },
  };
});
