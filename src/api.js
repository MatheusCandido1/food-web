import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.b7web.com.br/devsfood/api',
})

export default api;