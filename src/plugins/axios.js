import axios from 'axios';

axios.defaults.baseURL = /localhost/.test(window.location.host) ? 'http://localhost:9455' : 'https://goldenglories.herokuapp.com';

export default axios;
