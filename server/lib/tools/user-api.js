const axios = require('axios')
const config = require('../../../server/config/config')

async function userapi (searchstring) {
  const apiconfig = {
    method: 'get',
    url: config.api.base + searchstring
  }

  const users = await axios(apiconfig)

  return users
}

module.exports = {
  userapi
}
