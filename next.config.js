const { publicRuntimeConfig } = require('next/config');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    basePath: '',
    assetPrefix: '',
    publicRuntimeConfig: {
        localeSubpaths: typeof publicRuntimeConfig === 'object' ? publicRuntimeConfig.localeSubpaths : [],
    },
};