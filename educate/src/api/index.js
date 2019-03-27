import { baseURL, isDev } from './env'
import axios from 'axios'
let token = ''
axios.defaults.withCredentials = false
/**
 * 跨域请求中包含自定义header字段时，浏览器console报错------Request header field xfilesize is not allowed by Access-Control-Allow-Headers
 * 原因是包含自定义header字段的跨域请求，浏览器会先向服务器发送OPTIONS请求，探测该服务器是否允许自定义的跨域字段。
 * 如果允许，则继续实际的POST／GET正常请求，否则，返回上述所示错误。
 */

axios.defaults.headers.common['token'] = token
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8' // 配置请求头

// 登录获取token
// function getToken() {
//   axios.get(`${base}/api/token`, {params: params}).then(res => res.data)
// }
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  console.log('请求拦截器')
  token = window.sessionStorage.getItem('token')
  config.headers.common['token'] = token
  return config
}, function (error) {
  console.log('错误')
  console.info('error: ')
  console.info(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  console.log('回应拦截器')
  if (response.data && response.data.code) {
    if (parseInt(response.data.code) === 108 ||
        parseInt(response.data.code) === 109 ||
        response.data.msg === 'TOKEN失效，请重新登录' ||
        response.data.msg === 'TOKEN不存在') {
      response.data.msg = '登录信息已失效，请重新登录'
      console.log(response.data.msg)
    }
    if (parseInt(response.data.code) === -1) {
      console.log('请求失败')
    }
  }
  return response
}, function (error) {
  console.log('错误1')
  console.log(error)
  console.log('服务器连接失败')
  return Promise.reject(error)
})

// 基地址
let base = baseURL

// 测试使用
export const ISDEV = isDev

// 通用方法
export const POST = (url, params) => {
  // params是一个对象，值是{"username":"用户名","password":"密码"}或者{"username":token,"password":""}
  return axios({
    method: 'post',
    url: `${base}${url}`,
    auth: params
  }).then(res => res.data)
}

export const GET = (url, params) => {
  // params是一个对象，值是{"username":"用户名","password":"密码"}或者{"username":token,"password":""}
  console.log('进入get函数')
  return axios({
    method: 'GET',
    url: `${base}${url}`,
    auth: params
  }).then(res => res.data)
}
