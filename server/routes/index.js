const { findUsersByCity, findUsersByDistance } = require('../lib/users')

module.exports = {
  get: async (req, res) => {
    const usersWithinLondon = await findUsersByCity()
    const usersWithinDistance = await findUsersByDistance()
    const combinedUsers = [...new Set([...usersWithinLondon.data, ...usersWithinDistance])]
    res.json(combinedUsers)
  }
}
