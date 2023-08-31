const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const config = {
  context: path.resolve(__dirname, "src"),
  entry: "./index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /.svg$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "../public/index.html",
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js", "json"],
    alias: {
      components: "./components/",
    },
  },
};

module.exports = config;
