import path from "path";
import AwsSamPlugin from "aws-sam-webpack-plugin";
import { Configuration } from "webpack";

const awsSamPlugin = new AwsSamPlugin();

const config = (webpackConfigEnv, options): Configuration => {
  const goal = webpackConfigEnv.goal || "dev";
  const mode = options.mode || "development";

  return {
    entry: () => awsSamPlugin.entry(),
    output: {
      filename: (chunkData) => awsSamPlugin.filename(chunkData),
      libraryTarget: "commonjs2",
      path: path.resolve("."),
    },
    devtool: "source-map",
    resolve: {
      extensions: [".ts", ".js"],
    },
    target: "node",
    externals: process.env.NODE_ENV === "development" ? [] : ["aws-sdk"],
    // Set the webpack mode
    mode: mode,
    module: {
      rules: [{ test: /\.tsx?$/, loader: "ts-loader" }],
    },
    plugins: [awsSamPlugin],
  };
};

export default config;
