import * as API from './'

export default {
  // 获取城市
  cityGuess: () => {
    return API.GET('/v1/cities', { type: 'guess' })
  },
  // 添加食品种类
  addFood: params => {
    return API.POST('/shopping/addcategory', params)
  },
  getAdmin: params => {
    return API.GET('/api/resource', params)
  },
  getToken: params => {
    return API.GET('/api/token', params)
  }
}
