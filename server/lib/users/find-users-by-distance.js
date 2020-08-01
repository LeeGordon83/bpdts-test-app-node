const tools = require('../tools')

async function findUsersByDistance (city, distance) {
  const searchstring = '/users'
  const users = await tools.userapi(searchstring)
  const filteredUsers = await tools.distanceCalculator(users, city, distance)

  return filteredUsers
}

module.exports = {
  findUsersByDistance
}
