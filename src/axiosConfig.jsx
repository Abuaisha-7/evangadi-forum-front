import axios from 'axios'

const axiosBase = axios.create({
    // baseURL: 'http://localhost:8086/api'
    baseURL: 'https://evangadi-forum-backend-deploy.onrender.com/api'
})

export default axiosBase