const path = require("path");
const {merge} = require('webpack-merge');

const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = require('./webpack.config')

const devConfig = merge(commonConfig, {
    mode : 'development',

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[hash].js",
        assetModuleFilename: "images/[hash][ext][query]",
      },
      module: {
        rules: [
          {
            test: /\.s?css$/i,
            use: ["style-loader", "css-loader", "sass-loader"],
          },
        ],
      },

      plugins: [
        new HtmlWebpackPlugin({
          template: "./src/template/index.html",
        }),
      ],
});

module.exports = devConfig;
    
