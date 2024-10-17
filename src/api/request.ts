import axios from 'axios';

// 配置baseURL
const nodeEnv = process.env.APP_ENV;
console.log('nodeEnv: ', nodeEnv);

let baseUrl = '';
if (nodeEnv === 'production') {
  baseUrl = 'http://10.33.31.9:8100'; // 线上
} else if (nodeEnv === 'test') {
  baseUrl = 'http://10.33.31.19:8100'; // 测试
} else {
  baseUrl = 'http://a.itying.com'; // 开发
  // baseUrl = '/api'; // 开发
}

const instance = axios.create({
  baseURL: baseUrl,
  timeout: 100000
});

// 请求拦截
instance.interceptors.request.use(function (config: any) {
  config.headers['X-Auth-Token'] = localStorage.getItem('token'); // 获取token
  config.headers['X-URl'] = config.url; // 方便看url
  return config;
}, function (error: any) {
  console.log('请求失败拦截-err: ', error);
  return Promise.reject(error);
});

// 响应拦截
instance.interceptors.response.use(function (response: any) {
  // console.log('响应拦截-suc');
  return response.data;
}, function (error: any) {
  // Toast.info('响应拦截-err');
  console.log('响应拦截-err', error);
  return Promise.reject(error);
});

export const get = (url: string, params = {}) => instance.get(url, { params });
export const post = (url: string, data = {}) => instance.post(url, data);
export const put = (url: string, data = {}) => instance.put(url, data);