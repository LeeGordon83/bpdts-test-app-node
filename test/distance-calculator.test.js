const distancecalc = require('../server/lib/tools/distance-calculator')
const fs = require('fs')

it('should calculate distance between two coordinates', async () => {
  // Arrange

  const allUsersData = JSON.parse(fs.readFileSync(`${__dirname}/mock/users.json`))
  const city = 'London'
  const distance = 50
  const allUsers = []
  allUsers.push(allUsersData)

  // Act

  const response = await distancecalc.distanceCalculator(allUsers, city, distance)

  console.log(response)

  // Assert

  expect(response.length).toBe(7)
}
)
