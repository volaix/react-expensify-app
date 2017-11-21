const path = require('path')
const publicPath = path.join(__dirname, 'public')

module.exports = () => {
    return {
        entry: "./src/app.js",
        output: {
            path: publicPath,
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }]
        },
        devtool: 'cheap-module-eval-source-map',
        devServer: {
            contentBase: publicPath,
            historyApiFallback: true
        }
    }
}