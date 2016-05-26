const path = require('path');
const bemLoader = require('bem-loader');
const CollectBemAssetsPlugin = bemLoader.CollectBemAssetsPlugin;
const fs = require('fs-extra');
const bemxjst = require('bem-xjst');
const _ = require('lodash');

function generateReactRequires (files) {
    var paths = [];
    Object.keys(files).forEach(blockName => paths = paths.concat(files[blockName]));
    paths = _.uniq(paths);
    return `
    oninit(function (exports, shared) {
        var bemCtxProto = shared.BEMContext.prototype 
        bemCtxProto.createElement = require('react').createElement;
        bemCtxProto.components = {
            ${ paths.map(function (p) {
                return `'${ path.basename(p, '.react.js') }': require('../${ p }')`
            }).join(',\n') }
        }
    });
    `
}

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
                            generateReactRequires(data.react) + 
                            bemLoader.generateBemHtml(data.bemhtml)
                        )
                    );
                }
            },
            techs: ['bemhtml', 'react'],
            techExtensions: {
                bemhtml: ['bemhtml', 'bemhtml.js'],
                react: ['react.js']
            },
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
