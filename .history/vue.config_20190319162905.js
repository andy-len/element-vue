const path = require("path");
const webpack = require("webpack");
const resolve = dir => {
  // eslint-disable-next-line no-undef
  return path.join(_dirname, dir);
};
const BASE_URL = "/";
module.exports = {
  publicPath: BASE_URL,
  configureWebpack: config => {
    config.entry.app = ["babel-polyfill", "./src/main.js"];
  },
  chainWebpack: config => {
    config.plugin("provide").use(webpack.ProvidePlugin, [
      {
        introJs: ["intro.js", "introlJs"]
      }
    ]);
  }
};
