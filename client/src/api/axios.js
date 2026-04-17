import axios from 'axios'
const API = axios.create({
    baseURL:"https://mern-ecommerce-mjsi.onrender.com/api"
})
API.interceptors.request.use((req)=>{
    const token=localStorage.getItem("token")
    if(token){
        req.headers.Authorization=`Bearer ${token}`
    }
    return req
})


export default API