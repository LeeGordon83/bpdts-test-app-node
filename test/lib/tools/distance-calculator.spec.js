const { expect } = require('chai')
const { checkUserDistances, calculateDistanceFromTargetCity } = require('../../../server/lib/tools/distance-calculator')
const mockedUsers = require('../../mock/users.json')

describe('distance-calculator.js', function () {
  describe('check user distance function', function () {
    it('expects an array of users to be returned', async function () {
      // Arrange
      const users = mockedUsers
      const distance = 50
      // Act
      const response = await checkUserDistances(users, distance)
      // Assert
      expect(response.length).to.equal(3)
    })
  })
  describe('distance from target city function', function () {
    it('calculates the distance between two coordinates in miles', async function () {
      // Arrange
      const location1 = {
        longitude: 1,
        latitude: 1
      }
      const location2 = {
        longitude: 2,
        latitude: 2
      }
      // Act
      const response = await calculateDistanceFromTargetCity(location1, location2)
      // Assert
      expect(response).to.equal(97.69065394711814)
    })
  })
})
