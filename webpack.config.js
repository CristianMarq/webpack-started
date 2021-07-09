const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyWebpack = require("copy-webpack-plugin");

module.exports = {
  mode: "development",

  output: {
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader",
        options: {
          sources: false,
          minimize: false,
        },
      },
      {
        test: /\.css$/,
        exclude: /styles\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /styles\.css$/,
        use: [MiniCssExtract.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
              name: "assets/[name].[ext]",
            },
          },
        ],
        type: "javascript/auto",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      inject: "body",
    }),
    new MiniCssExtract({
      filename: "[name].css",
      ignoreOrder: false,
    }),
    new CopyWebpack({
      patterns: [{ from: "src/assets", to: "assets/" }],
    }),
  ],
};
