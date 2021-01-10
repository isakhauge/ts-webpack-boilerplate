const path = require('path')
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const relPath = relativePath => path.resolve(__dirname, relativePath)

module.exports = env => {
    const analyzeBundles = env?.BUNDLE_ANALYZER === 'true'
    return {
        entry: relPath('src/App.ts'),
        output: {
            path: relPath('dist'),
            filename: 'bundle.js'
        },
        resolve: {
            extensions: ['.js', '.ts']
        },
        module: {
            rules: [
                {
                    test: /\.(js)$/,
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
                    test: /\.(ts)$/,
                    use: ['ts-loader'],
                    include: relPath('src')
                }
            ]
        },
        plugins: ((analyze, plugins) => {
            if (analyze) {
                plugins.push(new BundleAnalyzer())
            }
            return plugins
        })(analyzeBundles,[
            // Your plugins here.
        ]),
        devServer: {
            contentBase: relPath('dist'),
            port: 9000,
            hot: true
        }
    }
}