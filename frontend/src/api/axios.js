import axios from "axios";

const api = axios.create({
    baseURL:"http://localhost:6767/api",
    withCredentials:true, // required for cookies
});

export default api;