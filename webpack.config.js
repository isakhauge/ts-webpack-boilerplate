const path = require('path')

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
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-typescript'
                            ]
                        }
                    }
                ],
                include: path.resolve(__dirname, 'src')
            },
            {
                test: /\.ts$/,
                use: ['ts-loader'],
                include: path.resolve(__dirname, 'src')
            }
        ]
    }
}