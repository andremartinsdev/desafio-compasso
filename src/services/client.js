import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.github.com/users',
});




api.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response.status === 401) {
        window.location.href = "http://localhost:3000"
    }
    return Promise.reject(error)
});

export default api;