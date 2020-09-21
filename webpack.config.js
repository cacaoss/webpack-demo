const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "index.js"
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.less$/,
                use: ["kkb-style-loader", "kkb-css-loader", "kkb-less-loader"]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            template: "./public/index.html",
            filename: "main.html"
        })
    ],
    resolveLoader: {
        modules: ["node_modules","./loader"]
    }
};
