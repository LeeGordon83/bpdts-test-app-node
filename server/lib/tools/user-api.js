const axios = require('axios')
const config = require('../../../server/config/config')

async function callUserApi (queryString) {
  const apiconfig = createApiConfig(queryString)
  return axios(apiconfig)
}

function createApiConfig (queryString) {
  const apiconfig = {
    method: 'get',
    url: config.api.base + queryString
  }
  return apiconfig
}

module.exports = {
  callUserApi,
  createApiConfig
}
