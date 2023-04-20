const path = require("path");
const {merge} = require('webpack-merge');

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizer = require('css-minimizer-webpack-plugin')
const commonConfig = require('./webpack.config')

const devConfig = merge(commonConfig, {
    mode : 'production',

    output: {
        path: path.resolve(__dirname, "docs"),
        filename: "[name].[hash].min.js",
        assetModuleFilename: "images/[hash][ext][query]",
      },
      module: {
        rules: [
          {
            test: /\.s?css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
          },
        ],
      },

      plugins: [
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          template: "./src/template/index.html",
        }),
      ],

      optimization: {
        minimizer: [
            new TerserPlugin(),
            new CssMinimizer(),
            new HtmlWebpackPlugin({
                template: './src/template/index.html',
                filename: 'index.min.html',
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true,
                },
            }),
        ],
    },
});

module.exports = devConfig;
    
