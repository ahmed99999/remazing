import axios from 'axios';
import config from '../config.json';

axios.interceptors.response.use(null, err => {
    const expectedError = err.response && err.response.status >= 400 && err.response.status < 500;
    if (!expectedError) {
        console.log('SOMETHIMG UNXPECTED HAPPEND');
    }
    return Promise.reject(err);
});

axios.defaults.baseURL = config.apiEndPoint;

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
};