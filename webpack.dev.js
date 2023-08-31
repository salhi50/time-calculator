const defaultConfig = require("./webpack.config");

const devConfig = {
  ...defaultConfig,
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: defaultConfig.output.path
  }
}

module.exports = devConfig;