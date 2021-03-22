import axios from 'axios';
window.axios = axios;

axios.interceptors.request.use(config => {
  config.headers['X-Requested-With'] = 'XMLHttpRequest';
  if (window.localStorage.getItem('token')) config.headers['Authorization'] = 'Bearer ' + window.localStorage.getItem('token')
  return config;
}, err => {
  return Promise.reject(err);
});

axios.defaults.baseURL = `${process.env.VUE_APP_API_HTTPS}/api`;

axios.interceptors.response.use(response => {
  if (response.headers.authorization) {
    let match = response.headers.authorization.match(/Bearer (.+)/);
    if (match) window.localStorage.setItem('token', match[1]);
  }
  return response.data;
}, err => {

  if (err.response.status === 401) {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('settings');
    window.localStorage.removeItem('vuex');
    window.location = `${process.env.VUE_APP_CLIENT_URL}/login`;
  }

  return Promise.reject(err);
});


export default axios;
