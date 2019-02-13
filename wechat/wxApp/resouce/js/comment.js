const axios = require('axios')
const rootUrl = 'http://172.16.10.21:5000'
const test = 'https://elm.cangdu.org'

console.log(axios)
console.log('----------------')
const login = (userID,passwd) => { return axios.post(`${rootUrl}/login`,{params: { userID: userID, passwd: passwd}}).then(res => res.data) }
const cityGuess = () => { return axios.get(`${test}/v1/cities`, { params: { type: 'guess' } }).then(res => res.data) }

module.exports.login = login
module.exports.cityGuess = cityGuess