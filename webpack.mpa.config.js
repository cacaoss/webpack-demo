const path = require("path");
const glob = require("glob");
const htmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const textWebpackPlugin = require("./plugins/text-webpack-plugin");
const fileWebpackPlugin = require("./plugins/file-webpack-plugin");

const setMpa = () => {
    const entry = {};
    const htmlWebpackPlugins = [];

    const entryFiles = glob.sync(path.join(__dirname, "./src/*/index.js"));
    entryFiles.map(entryFileName => {
        const matchResult = entryFileName.match(/\/src\/(.*)\/index\.js/);
        const pageName = matchResult[1];

        entry[pageName]=entryFileName;
        htmlWebpackPlugins.push(new htmlWebpackPlugin({
            template:`./src/${pageName}/index.html`,
            filename:`${pageName}.html`,
            chunks:[pageName],
        }));
    });

    return {entry, htmlWebpackPlugins}
};

const {entry, htmlWebpackPlugins} = setMpa();

module.exports = {
    // entry:{
    //     index:"./src/index.js"
    // },
    entry,
    output: {
        path: path.resolve(__dirname, "./dist/mpa"),
        filename: "[name]-[chunkhash:6].js"
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        ...htmlWebpackPlugins,
        // new htmlWebpackPlugin({
        //     template: "./public/index.html",
        //     filename: "index.html",
        // })
        new textWebpackPlugin(),
        new fileWebpackPlugin(),
    ]
};
