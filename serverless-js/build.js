const { build } = require("esbuild");
// const { aliasPath } = require("esbuild-plugin-alias-path");
const { globSync } = require("glob");

const entryPoints = globSync("./src/**/*.js");

build({
  entryPoints,
  outdir: "./dist/",
  platform: "node", // for ESM
  format: "cjs",
})
  .then(() => console.log("⚡ Done"))
  .catch(() => process.exit(1));
