const users = require('../lib/users')

module.exports = {
  get: async (req, res) => {
    const usersCity = await users.findUsersByCity('London')
    const usersDistance = await users.findUsersByDistance('London', 50)
    const combinedUsers = [...new Set([...usersCity.data, ...usersDistance])]
    res.json(combinedUsers)
  }
}
