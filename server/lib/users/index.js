const { getUsers } = require('./get-users')
const { findUsersByCity } = require('./find-users-by-city')
const { findUsersByDistance } = require('./find-users-by-distance')

module.exports = {
  getUsers,
  findUsersByCity,
  findUsersByDistance

}
