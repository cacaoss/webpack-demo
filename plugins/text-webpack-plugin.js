module.exports = class TextWebpackPlugin {
    apply(compiler) {
        compiler.hooks.emit.tapAsync("TextWebpackPlugin", (compilation, callback) => {

            compilation.assets["text.txt"] = {
                source: function () {
                    return "ZZH";
                },
                size: function () {
                    return 1024;
                }
            };

            callback();
        })
    }
};