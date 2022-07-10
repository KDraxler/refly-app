import axios from 'axios'
import config from '../config/config';

const api = axios.create({
    baseURL: config.apiURL+"/api",
})

export default api;