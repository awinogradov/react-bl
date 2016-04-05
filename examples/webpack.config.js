const path = require('path');
const bemLoader = require('bem-loader');
const CollectBemAssetsPlugin = bemLoader.CollectBemAssetsPlugin;
const fs = require('fs-extra');
const bemxjst = require('bem-xjst');

module.exports = {
    entry: './index.js',
    module: {
        loaders: [
            {
                test: /\.styl$/,
                loader: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ].join('!')
            },
            {
                test: /\.(ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?mimetype=application/octet-stream'
            },
            {
                test: /\.(gif)$/i,
                loaders: [
                   'url-loader?mimetype=image/gif'
               ]
            },
            {
                test: /\.(svg)$/i,
                loaders: [
                    'url-loader?mimetype=image/svg+xml'
                ]
            },
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
                bemLoader.setStylesData(data['styl']);
                fs.outputFileSync(
                    './dist/templates.js',
                    bemxjst.vidom.generate(
                        bemLoader.generateBemHtml(data.bemhtml)
                    )
                );
            },
            techs: ['bemhtml', 'styl'],
            levels: [
                'bem-components/design/common.blocks',
                'bem-components/design/desktop.blocks'
            ].map(function(short) {
                return path.resolve(process.cwd(), `./node_modules/${short}`);
            }).concat([
                './components',
                './design'
            ])
        })
    ]
};
