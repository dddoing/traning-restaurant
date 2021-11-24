const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
    entry: "./src/index",
    mode: "development",
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, "dist"),
        },
        port: 3002,
    },
    output: {
        publicPath: "http://localhost:3002/", //
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
            name: "App2", //domain name
            library: { type: "var", name: "App2" },
            filename: "App2.js", //bundle
            exposes: { //외부시연결
                "./App2": "./src/App", //index name
            }
            // shared: ['react', 'react-dom'],
            // shared: { "react": { singleton: true ,strictVersion:true},
            //     "react-dom": { singleton: true ,strictVersion:true},
            //     "react-router-dom": { singleton: true ,strictVersion:true }
            //     },
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
};