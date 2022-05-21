const { dirname } = require("path");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const jquery = require("jquery");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: path.resolve(__dirname, "src", "app.js"),
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "public"),
        clean: true,
    },
    plugins:[
        new webpack.ProvidePlugin({
            $: "jquery",
            jquery: "jquery",
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/pages/index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "main.css",
            chunkFilename: "main.css",
        }),
    ],
    module:{
        rules:[
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_componetns)/,
                use:{
                    loader: "babel-loader",
                    options:{
                        presets: ["@babel/preset-env"],
                    }
                }
            },
            {
                test: /\.(css|sass|scss)$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    //"style-loader", 
                "css-loader", "sass-loader"],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
                options:{
                    minimize: true,
                },
            },
        ],
    },
};
