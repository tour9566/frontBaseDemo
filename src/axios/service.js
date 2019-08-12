import axios from 'axios'

import { Message } from 'element-ui'
const service = axios.create({
  baseURL: window.g.server_ip,
  timeout: 50000 // 请求超时时间
})

service.defaults.headers = {
  'X-Requested-With': 'XMLHttpRequest',
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json; charset=utf-8'
}
// service.defaults.withCredentials = true
// 请求拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  response => {
    return Promise.resolve(response)
  },
  error => {
    Message({
      message: '后台服务异常,错误信息：' + error + '!',
      type: 'error',
      duration: 2 * 1000
    })
    return Promise.reject(error)
  }
)
export default service
