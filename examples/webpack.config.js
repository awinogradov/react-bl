const path = require('path');
const bemLoader = require('bem-loader');
const CollectBemAssetsPlugin = bemLoader.CollectBemAssetsPlugin;

const fs = require('fs-extra');
const bemxjst = require('bem-xjst');
const bemhtml = bemxjst.bemhtml;

const templates = bemhtml.compile([
    fs.readFileSync('./node_modules/bem-core/common.blocks/ua/ua.bemhtml'),
    fs.readFileSync('./node_modules/bem-core/common.blocks/page/page.bemhtml'),
    fs.readFileSync('./node_modules/bem-core/common.blocks/page/__js/page__js.bemhtml'),
    fs.readFileSync('./node_modules/bem-core/common.blocks/page/__css/page__css.bemhtml'),
    fs.readFileSync('./components/react/react.bemhtml.js')
].join(''));

fs.outputFile(
    './dist/index.html',
    templates.apply({
        block: 'page',
        scripts: { elem: 'js', url: './main.js' },
        content: { block: 'react' }
    })
);

module.exports = {
    entry: './index.jsx',
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
                include: path.resolve(__dirname),
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
            },
            techs: ['styl'],
            levels: [
                'bem-components/design/common.blocks',
                'bem-components/design/desktop.blocks',
                'bem-components/common.blocks',
            ].map(function(short) {
                return path.resolve(process.cwd(), `./node_modules/${short}`);
            }).concat([
                './components',
                './design'
            ])
        })
    ]
};
