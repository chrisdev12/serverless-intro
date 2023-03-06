//Totally option, POC to verify if makes sense to use with some custom approaches
const { execSync } = require("child_process");
const { build } = require("esbuild");
const { globSync } = require("glob");
const sharedLambdaLayer = globSync("./src/shared/**/*.ts");
const handlers = globSync("./src/handlers/**/*.ts");

execSync("rm -rf dist");

build({
  entryPoints: sharedLambdaLayer,
  outdir: "dist",
  outbase: "./src",
  tsconfig: "tsconfig.prod.json",
  platform: "node",
  format: "cjs",
})
  .then(() => console.log("⚡ Done lambda layer"))
  .catch(() => process.exit(1));

build({
  entryPoints: handlers,
  outdir: "dist",
  outbase: "./src",
  tsconfig: "tsconfig.prod.json",
  platform: "node",
  format: "cjs",
})
  .then(() => console.log("⚡ Done handlers"))
  .catch(() => process.exit(1));
