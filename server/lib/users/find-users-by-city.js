const tools = require('../tools')
const config = require('../../../server/config/config')

async function findUsersByCity () {
  const queryString = `/city/${config.cities.london.name}/users`
  return tools.callUserApi(queryString)
}

module.exports = {
  findUsersByCity
}
