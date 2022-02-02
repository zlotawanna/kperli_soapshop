const { environment } = require('@rails/webpacker')

module.exports = environment

const webpack = require('webpack')
enviroment.plugins.append("Provide", new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    Popper: ['popper.js', 'default']
}))
