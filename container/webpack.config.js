const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    port: 3081,
    static: {
      directory: "./public",
    },
    hot: true,
    open: true,
    historyApiFallback: true,
    devMiddleware: {
      writeToDisk: true,
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Commerce products",
      template: "./public/index.html",
      filename: "index.html",
    }),
    new ModuleFederationPlugin({
      name: "container",
      //products: products, e o nome do app definido no moduleFederation
      //precisa ser o mesmo nome aqui
      remotes: {
        products: "products@http://localhost:8080/remoteEntry.js",
      },
    }),
  ],
};
