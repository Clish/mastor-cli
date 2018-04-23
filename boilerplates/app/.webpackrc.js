import { resolve } from 'path';

export default {
    publicPath: '/static/',
    proxy: {
        '/services': {
            target: 'http://58.215.174.164:16800/',
            changeOrigin: true,
            pathRewrite: { '^/services': '' }
        }
    },
    alias: {
        components: resolve(__dirname, './components')
    }
};
