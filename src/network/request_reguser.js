import axios from 'axios'

export function request_reguser(config) {
  // 1.创建axios的实例
 

  const instance_reguser= axios.create({
    baseURL:'http://127.0.0.1:8888',
    timeout: 5000
  })

  // 2.axios的拦截器
  // 2.1.请求拦截的作用
  instance_reguser.interceptors.request.use(config => {
    return config
  }, err => {
    // console.log(err);
  })

  // 2.2.响应拦截
  instance_reguser.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })
  

  // 3.发送真正的网络请求
  return instance_reguser(config)
}