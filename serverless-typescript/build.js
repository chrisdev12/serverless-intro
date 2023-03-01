//Totally option, POC to verify if makes sense to use with some custom approaches
const { build } = require("esbuild");
const { globSync } = require("glob");
const entryPoints = globSync("./src/**/*.ts");
const { dtsPlugin } = require("esbuild-plugin-d.ts");

build({
  entryPoints,
  outdir: "dist",
  outbase: "src",
  loader: { ".ts": "ts" },
  platform: "node",
  tsconfig: "tsconfig.prod.json",
  plugins: [dtsPlugin()],
})
  .then(() => console.log("⚡ Build done"))
  .catch(() => process.exit(1));
