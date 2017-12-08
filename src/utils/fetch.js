import axios from 'axios'
import main from '../main'
import Mock from 'mockjs'
import {
  Message,
  MessageBox,
  Loading
} from 'element-ui'
import store from '../store'
import {
  getCookieKey,
  removeCookieKey
} from '@/utils/auth'
// 创建axios实例
const service = axios.create({
  baseURL: '', // api的base_url
  timeout: 15000 // 请求超时时间
})
var loadingInstance
var timeBack = true
// request拦截器
service.interceptors.request.use(config => {
  loadingInstance = Loading.service({ fullscreen: true })
  if (store.getters.token) {
    // 让每个请求携带自定义token 请根据实际情况自行修改
    config.headers['token'] = getCookieKey('token')
  }
  return config
}, error => {
  // Do something with request error
  // for debug
  console.log(error)
  Promise.reject(error)
})
// respone拦截器
service.interceptors.response.use(
  response => {
    loadingInstance.close()
    /**
     * code为非200是抛错 可结合自己业务进行修改
     */
    const res = response.data
    if (res.code === 0) {
      // return response.data
      return Mock.mock(response.data)
    } else if (res.code === 401) {
      if (timeBack) {
        timeBack = false
        MessageBox.alert('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
          confirmButtonText: '重新登录',
          cancelButtonText: '',
          type: 'warning'
        }).then(() => {
          removeCookieKey('token')
          main.$router.push({path: '/login'})
          timeBack = true
        }).catch(() => {
          removeCookieKey('token')
          main.$router.push({path: '/login'})
        })
      }
    } else {
      Message({
        message: res.msg,
        type: 'error',
        duration: 5 * 1000
      })
      return false
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: '服务器请求超时请检查下网络环境',
      type: 'error',
      duration: 5 * 1000
    })
    loadingInstance.close()
    return Promise.reject(error)
  }
)

export default service
