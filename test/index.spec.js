const request = require('supertest')
const app = require('../index')

describe('/', function () {
  it('expects it to return json data', function (done) {
    request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })
})
