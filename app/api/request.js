//对axios进行二次封装
import axios from "axios";
//引入进度条
import nprogress from "nprogress";
//引入进度条样式
import "nprogress/nprogress.css";
//1.利用axios对象的方法creat创建axios实例
const request = axios.create({
  //配置对象
  baseURL: "/mock",
  timeout: 5000,
});

//请求拦截器
requests.interceptors.request.use((config) => {
  //进度条开始
  nprogress.start();
  //config配置对象
  return config;
});
//响应拦截器
requests.interceptors.response.use(
  (res) => {
    //进度条结束
    nprogress.done();
    return res.date;
  },
  (err) => {
    return Promise.reject(new Error("faile"));
  }
);
export default axios;
