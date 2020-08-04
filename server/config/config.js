
const config = {
  app: {
    port: process.env.PORT || 8000
  },
  api: {
    base: 'https://bpdts-test-app.herokuapp.com'
  },
  cities: {
    london: { name: 'London', latitude: 51.509865, longitude: -0.118092 }
  },
  distanceFromLocation: 50

}

module.exports = config
