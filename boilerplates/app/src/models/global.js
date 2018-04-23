import api from '../services/server';

// function delay(ms) {
//   return new Promise(resolve => {
//     setTimeout(resolve, ms);
//   });
// }

export default {
    namespace: 'global',
    state: {
        text: 'hello umi+dva+typescript'
    },
    reducers: {
        addData(state, rst) {
            return {...state, ...rst.data};
        }
    },
    effects: {
        *login({params}, {call, put}) {
            yield call(api.getBrands, params);
        }
    }
};
