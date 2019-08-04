const path = require('path');
const defaultSettings = require('./src/settings.js');

function resolve(dir) {
    return path.join(__dirname, dir);
}

const name = defaultSettings.title || 'Vuetify Admin';

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/vuetify-admin/'
        : '/',
    configureWebpack: {
        name,
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    }
};
