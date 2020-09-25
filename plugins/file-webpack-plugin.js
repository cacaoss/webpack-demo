module.exports = class FileWebpackPlugin {
    generateFile(compilation) {
        let fileCount = 0;
        let content = "统计：\r\n";

        Object.keys(compilation.assets).forEach(assetKey => {
            fileCount++;
            content += `文件名：${assetKey}\r\n`;
        });
        content += `共 ${fileCount} 个文件生成`;

        return content;
    }
    apply(compiler) {
        compiler.hooks.emit.tapAsync("FileWebpackPlugin", (compilation, callback) => {
           const content = this.generateFile(compilation);

            compilation.assets["file.lst"] = {
                source: function () {
                    return content;
                },
                size:function () {
                    return Buffer.from(content).length;
                }
            };
            callback();
        })
    }
};