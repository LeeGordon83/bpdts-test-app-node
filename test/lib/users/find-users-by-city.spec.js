const { expect } = require('chai')
const usersByCity = require('../../../server/lib/users/find-users-by-city')
const mockedLondonUsers = require('../../mock/london-users')

const tools = require('../../../server/lib/tools/user-api')

let sandbox

beforeEach(async () => {
  sandbox = require('sinon').createSandbox()
})

afterEach(async () => {
  sandbox.restore()
})

sandbox.stub(tools, 'userapi').returns(mockedLondonUsers)

describe('find users by city function', function () {
  it('expects an array of London users to be returned', async function () {
    // Arrange

    // Act
    const response = await usersByCity.findUsersByCity('London')

    // Assert
    expect(response.data.length).to.equal(6)
  })
})
