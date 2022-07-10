import axios from 'axios'

const api = axios.create({
    baseURL: "https://fast-escarpment-83544.herokuapp.com/api",
})

export default api;