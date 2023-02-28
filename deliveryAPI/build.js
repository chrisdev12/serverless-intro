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

// const buildProject = async () => {
//   await build({
//     entryPoints,
//     outdir: "./dist/",
//     platform: "node",
//   })
//     .then(() => console.log("⚡ Done common layer"))
//     .catch(() => process.exit(1));

//   build({
//     entryPoints: ["./index.js"],
//     outdir: "./dist",
//     platform: "node",
//     plugins: [
//       aliasPath({
//         // absolute path is required
//         // for node package resolve, use require.resolve("package-name")
//         alias: { "@lambdaLayer/*": "dist/opt/nodejs/" },
//         tsconfigPath: "jsconfig.json",
//       }),
//     ],
//   })
//     .then(() => console.log("⚡ Done"))
//     .catch(() => process.exit(1));
// };

// buildProject();
