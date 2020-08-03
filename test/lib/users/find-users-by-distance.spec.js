const { expect } = require('chai')
const usersByDistance = require('../../../server/lib/users/find-users-by-distance')
const mockedUsers = require('../../mock/users')

const tools = require('../../../server/lib/tools/user-api')

let sandbox

beforeEach(async () => {
  sandbox = require('sinon').createSandbox()
})

afterEach(async () => {
  sandbox.restore()
})

describe('find users by distance function', function () {
  it('expects an array of London users to be returned', async function () {
    // Arrange
    sandbox.stub(tools, 'userapi').returns(mockedUsers)
    // Act
    const response = await usersByDistance.findUsersByDistance('London', 50)

    // Assert
    expect(response.length).to.equal(3)
  })
})
