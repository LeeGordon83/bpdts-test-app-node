const tools = require('../tools')

async function findUsersByCity (city) {
  const searchstring = '/city/' + city + '/users'
  const users = tools.userapi(searchstring)

  return users
}

module.exports = {
  findUsersByCity
}
