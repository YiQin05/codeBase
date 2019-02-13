import axios from 'axios'
export const test = 'https://elm.cangdu.org'
// 登录
// export const requestLogin = params => { return axios.post(`${test}/api/user/login`, params).then(res => res.data); };

export const cityGuess = () => { return axios.get(`${test}/v1/cities`, {params: { type: 'guess' }}).then(res => res.data) }
export const hotCity = () => { return axios.get(`${test}/v1/cities`, {params: { type: 'hot' }}).then(res => res.data) }
export const groupCity = () => { return axios.get(`${test}/v1/cities`, {params: { type: 'group' }}).then(res => res.data) }
export const selectedCity = (id) => { return axios.get(`${test}/v1/cities/${id}`, {params: { id: id }}).then(res => res.data) }
export const searchCity = (id, keyword) => { return axios.get(`${test}/v1/pois`, {params: { city_id: id, keyword: keyword, type: 'search' }}).then(res => res.data) }
export const foodType = () => { return axios.get(`${test}/v2/index_entry`).then(res => res.data) }
export const shopList = (latitude, longitude) => { return axios.get(`${test}/shopping/restaurants`, {params: { latitude: latitude, longitude: longitude }}).then(res => res.data) }
export const shopFood = (id) => { return axios.get(`${test}/shopping/v2/menu`, {params: { restaurant_id: id }}).then(res => res.data) }
