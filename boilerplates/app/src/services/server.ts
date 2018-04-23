import request from '../utils/request';

const xOrigin = `${location.host.indexOf(':800') !== -1 ? 'test.svw.visualmaster.com.cn' : location.host}`;

export default {
    async login(params) {
        return request('/services/login/wukong', {
            headers: {
                'Content-Type': 'application/json',
                'X-ORIGIN': xOrigin,
            },
            method: 'POST',
            body: JSON.stringify(params)
        })
    },
};