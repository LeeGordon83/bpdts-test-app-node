const config = require('../../../server/config/config')

async function checkUserDistances (users, distance) {
  const usersFound = []
  users.forEach(async (user) => {
    const userLocation = {
      longitude: user.longitude,
      latitude: user.latitude
    }
    const between = await calculateDistanceFromTargetCity(userLocation, config.cities.london)
    if (between <= distance) {
      usersFound.push(user)
    }
  })
  return usersFound
}

// Calculates the haversine distance between point A, and B.
async function calculateDistanceFromTargetCity (userLocation, targetLocation) {
  const radiusLat1 = Math.PI * userLocation.latitude / 180
  const radiusLat2 = Math.PI * targetLocation.latitude / 180
  const theta = userLocation.longitude - targetLocation.longitude
  const radtheta = Math.PI * theta / 180
  let distance = Math.sin(radiusLat1) * Math.sin(radiusLat2) + Math.cos(radiusLat1) * Math.cos(radiusLat2) * Math.cos(radtheta)
  distance = Math.acos(distance)
  distance = distance * 180 / Math.PI
  distance = distance * 60 * 1.1515
  return distance
}

module.exports = {
  checkUserDistances,
  calculateDistanceFromTargetCity
}
