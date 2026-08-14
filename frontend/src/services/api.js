import axios from "axios";
const api = axios.create({
    baseURL:"https://expense-tracker-fullstack-production-8ccd.up.railway.app/api",
    headers:{
        "Content-Type":"application/json",
    },
});

//Automatically attach JWT token to protected requests
api.interceptors.request.use(
    (config)=>{
        const token = localStorage.getItem("token");
        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
        (error) =>{
            return Promise.reject(error);
        }
    );
export default api;