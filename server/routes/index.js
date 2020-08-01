const users = require('../lib/users')

module.exports = {
  get: (req, res) => {
    res.render('index.ejs')
  },

  post: async (req, res) => {
    const usersCity = await users.findUsersByCity(req.body.city)
    const usersDistance = await users.findUsersByDistance(req.body.city, req.body.distance)
    const searchDetails = req.body

    res.render('index.ejs', { usersCity: usersCity.data, usersDistance: usersDistance, searchDetails })
  }
}
