// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'yandex-messenger.bundle.js',
        clean: true,
    },
    resolve: {
        extensions: ['.ts', '.js', '.json'],
        alias: {
            handlebars: 'handlebars/dist/handlebars.min.js',
        },
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'from webpack',
        template: 'index.html',
    })],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: path.resolve(__dirname, 'tsconfig.json'),
                        },
                    },
                ],
                exclude: /(node_modules)/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        watchFiles: ['src/**/*.ts', 'src/**/*.scss'],
        compress: true,
        hot: true,
        port: 3000,
    },
    watch: true,
};
