const { expect } = require('chai')

const { distanceCalculator, distanceCalc } = require('../../../server/lib/tools/distance-calculator')
const mockedUsers = require('../../mock/users')

describe('distance-calculator.js', function () {
  describe('distanceCalculator function', function () {
    it('expects an array of users to be returned', async function () {
      // Arrange
      const users = mockedUsers
      const city = 'London'
      const distance = 50

      // Act
      const response = await distanceCalculator(users, city, distance)

      // Assert
      expect(response.length).to.equal(3)
    })
  })

  describe('distanceCalculator function', function () {
    it('expects the distance between two points to be calculated (different points)', function () {
      // Arrange
      const lat1 = 1
      const lon1 = 1
      const lat2 = 2
      const lon2 = 2

      // Act
      const response = distanceCalc(lat1, lon1, lat2, lon2)

      // Assert
      expect(response).to.equal(97.69065394711814)
    })
  })
})
