const path = require('path');
const bemLoader = require('bem-loader');
const CollectBemAssetsPlugin = bemLoader.CollectBemAssetsPlugin;
const fs = require('fs-extra');
const bemxjst = require('bem-xjst');

module.exports = {
    entry: './src/index.js',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
    },
    plugins: [
        new CollectBemAssetsPlugin({
            done: function(data) {
                if (process.env.STANDALONE) {
                    fs.outputFileSync(
                        './dist/templates.js',
                        bemxjst.vidom.generate(
                            bemLoader.generateBemHtml(data.bemhtml)
                        )
                    );
                }
            },
            techs: ['bemhtml'],
            levels: [
                'bem-core/common.blocks',
                'bem-core/desktop.blocks',
                'bem-components/common.blocks',
                'bem-components/desktop.blocks'
            ].map(function(short) {
                return path.resolve(process.cwd(), `./node_modules/${short}`);
            }).concat([
                './src/core',
                './src/components'
            ])
        })
    ]
};
