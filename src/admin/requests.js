import axios from "axios";

axios.defaults.baseURL = "https://webdev-api.loftschool.com";
axios.defaults.headers['Authorization'] =`Bearer ${localStorage.getItem('token')}`

export default axios;