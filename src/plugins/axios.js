import axios from 'axios';
import Cookies from 'js-cookie';

axios.defaults.baseURL = /localhost/.test(window.location.host) ? 'http://localhost:9455' : 'http://server.goldenglories.com';
if (Cookies.get('token')) axios.defaults.headers.Authorization = Cookies.get('token');

export default axios;
