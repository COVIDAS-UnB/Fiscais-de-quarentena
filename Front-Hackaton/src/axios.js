import axios from 'axios';
import Cookies from "js-cookie";

const instance = axios.create({
    baseURL: 'http://localhost:3050/'
});

instance.interceptors.request.use(config => {
    let token = Cookies.get('tk');
    if (token) {
        config.headers['x-access-token'] = `${token}`;
    }
    return config
}, err => {
    return Promise.reject(err)
});

export default {
    Auth(data) {
        return instance.post('/auth/login', data);
    },
    SignUp(data) {
        return instance.post('/users', data);
    },
    GetAreas() {
        return instance.get('/interests');
    },
    GetConnections() {
        return instance.get('/adoptions');
    },
    GetMatchUser(data) {
        return instance.post('/match', data);
    },
    AdoptStudent(data) {
        return instance.post('/adoptions', data);
    },
};