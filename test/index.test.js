const app = require('../../index') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)

it('gets the index endpoint', async done => {
  const response = await request.get('/index')

  expect(response.status).toBe(200)
  expect(response.body.message).toBe('pass!')
  done()
})
