const tools = require('../tools')
const config = require('../../../server/config/config')

async function findUsersByDistance () {
  const queryString = '/users'
  const userData = await tools.callUserApi(queryString)
  const users = userData.data
  return tools.checkUserDistances(users, config.distanceFromLocation)
}

module.exports = {
  findUsersByDistance
}
