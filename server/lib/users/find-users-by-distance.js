const tools = require('../tools')

async function findUsersByDistance (city, distance) {
  const searchstring = '/users'
  const userData = await tools.userapi(searchstring)
  const users = userData.data

  const filteredUsers = await tools.distanceCalculator(users, city, distance)

  return filteredUsers
}

module.exports = {
  findUsersByDistance
}
