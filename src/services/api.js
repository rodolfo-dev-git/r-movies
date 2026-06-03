import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '074c2d91b060661f407c41e98e8a3814',
        language: 'pt-BR',
        page: 1
    }
    
})

export default api