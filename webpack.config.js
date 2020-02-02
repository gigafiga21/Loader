const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: "./Pages/Main/Main.js",
    output:
    {
        path: path.resolve(__dirname, './Bin/'),
        filename: "./Main.min.js"
    },
    module:
    {
        rules:
        [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use:
                {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                // exclude: /(node_modules)/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(svg|ttf)$/,
                loader: "file-loader",
                options:
                {
                    name: "[name].[ext]"
                }
            },
        ]
    },
    plugins:
    [
        new MiniCssExtractPlugin(
        {
            filename: "Main.min.css"
        })
    ]
}