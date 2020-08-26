import { extend } from 'umi-request'
import { Message } from 'element-ui'
import store from '@/store/index'

const request = extend({
    prefix: `${window.g.baseUrl}`,
    timeout: 180000,
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    },
    responseType: 'json',
    mode: "no-cors",
    cache: "force-cache"
})

// 请求拦截器
request.interceptors.request.use(
    (config, options) => {
        if (_.isNil(options.data) || _.isNil(options.data.showLoading) || options.data.showLoading) {
            store.commit('mutateLoading', true)
        }
        return config
    },
    error => {
        store.commit('mutateLoading', false)
        return Promise.reject(error)
    }
)

// 添加响应拦截器
request.interceptors.response.use(
    response => {
        store.commit('mutateLoading', false)
        return Promise.resolve(response)
    },
    error => {
        store.commit('mutateLoading', false)
        Message({
            message: '后台服务异常,错误信息：' + error + '!',
            type: 'error',
            duration: 2 * 1000
        })
        return Promise.reject(error)
    }
)

export default request