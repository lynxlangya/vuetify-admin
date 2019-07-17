/**
 * @author MARS <marshal_max@163.com>
 *
 * @module BundleAnalyzerPlugin 可视化打包
 */
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            return {
                plugins: [
                    new BundleAnalyzerPlugin()
                ]
            }
        }
    }
}
