// 对axios进行二次封装
import axios from "axios";
import nprogress  from "nprogress";
// start 进度条开始 done 结束

// 引入进度条样式,默认蓝色，可修改
import 'nprogress/nprogress.css'
//创建一个axios实例 
const requests = axios.create({
  // 基础路径
baseURL:'/api',
// 超时时间
timeout:5000,
});

// 请求拦截器，在发请求前，请求拦截器可以检测到，做一些事情
requests.interceptors.request.use((config)=>{
  // config 配置对象，headers请求头很重要
  nprogress.start()
  return config;
})
// 响应拦截器
requests.interceptors.response.use((res)=>{
  // 成功的回调函数
  nprogress.done()
  return res.data;
},(error)=>{
  // 失败的回调函数
  return Promise.reject(new Error('faile'));
});


// 对外暴露
export default axios;