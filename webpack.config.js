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
                test: /\.less$/,
                loader: ["style-loader", "css-loader", "less-loader"]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            template: "./public/index.html",
            filename: "main.html"
        })
    ]
};
