const { findUsersByCity, findUsersByDistance } = require('../lib/users')

module.exports = {
  get: async (req, res) => {
    try {
      const usersWithinLondon = await findUsersByCity()
      const usersWithinDistance = await findUsersByDistance()
      const combinedUsers = [...new Set([...usersWithinLondon.data, ...usersWithinDistance])]
      res.json(combinedUsers)
    } catch (error) {
      res.json(error)
      console.log(error)
    }
  }
}
