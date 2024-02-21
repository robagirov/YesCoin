import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr()],
  root: "./",
  build: {
    outDir: "dist",
  },
  publicDir: "src/app/assets",
});
