import axios from "axios";
//BASE DA URL: https://api.themoviedb.org/3/
//https://api.themoviedb.org/3/movie/now_playing?api_key=c2e5ac1c299f3f1299937884c53cd23a


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
});

export default api;