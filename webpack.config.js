const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
    entry: "./src/index",
    mode: "development",
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        port: 3002,
    },
    output: {
        publicPath: "http://localhost:3002/",
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: ["@babel/preset-env","@babel/preset-react"],
                },
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "app2",
            library: { type: "var", name: "app2" },
            filename: "Sample.js",
            exposes: {
                "./App": "./src/App",
            },
            // shared: ['react', 'react-dom'],
            shared: { "react": { singleton: true ,strictVersion:true},
                "react-dom": { singleton: true ,strictVersion:true},
                "react-router-dom": { singleton: true ,strictVersion:true }
                },
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
};