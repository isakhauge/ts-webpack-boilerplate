const path = require('path')
const relPath = relativePath => path.resolve(__dirname, arg)

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, 'src/App.ts'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-typescript']
                        }
                    }
                ],
                include: relPath('src')
            },
            {
                test: /\.ts$/,
                use: ['ts-loader'],
                include: relPath('src')
            }
        ]
    },
    devServer: {
        contentBase: relPath('dist'),
        port: 9000,
        hot: true
    }
}