const { expect } = require('chai')
const userapi = require('../../../server/lib/tools/user-api')
const mockedUsers = require('../../mock/users')
const mockedLondonUsers = require('../../mock/london-users')
const axios = require('axios')
const MockAdapter = require('axios-mock-adapter')

const mock = new MockAdapter(axios)

describe('userapiLocation', () => {
  it('Should return London users array', async () => {
    // Arrange
    mock.onGet('https://bpdts-test-app.herokuapp.com/city/London/users').reply(200, mockedLondonUsers)
    // Act
    const response = await userapi.callUserApi('/city/London/users')
    // Assert
    expect(response.data).to.eql(mockedLondonUsers)
  })
})

describe('userapiAllUsers', () => {
  it('Should return all users array', async () => {
    // Arrange
    mock.onGet('https://bpdts-test-app.herokuapp.com/users').reply(200, mockedUsers)
    // Act
    const response = await userapi.callUserApi('/users')
    // Assert
    expect(response.data).to.eql(mockedUsers)
  })
})
