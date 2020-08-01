const config = require('../../../server/config/config')

async function distanceCalculator (users, city, distance) {
  const usersFound = []
  users.data.forEach(async (user) => {
    const between = distanceCalc(user.latitude, user.longitude, config.other.london.latitude, config.other.london.longitude)
    if (between <= distance) {
      usersFound.push(user)
    }
  })

  return usersFound
}

function distanceCalc (lat1, lon1, lat2, lon2) {
  if ((lat1 === lat2) && (lon1 === lon2)) {
    return 0
  } else {
    var radlat1 = Math.PI * lat1 / 180
    var radlat2 = Math.PI * lat2 / 180
    var theta = lon1 - lon2
    var radtheta = Math.PI * theta / 180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta)
    if (dist > 1) {
      dist = 1
    }
    dist = Math.acos(dist)
    dist = dist * 180 / Math.PI
    dist = dist * 60 * 1.1515
    return dist
  }
}

module.exports = {
  distanceCalculator
}
