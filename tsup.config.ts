import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/components/**/*.tsx", "src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  outDir: "dist",
  esbuildOptions(options) {
    options.outbase = "src";
  },
});
