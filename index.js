const express = require('express')
const app = express()
const config = require('./server/config/config')
const port = config.app.port

/**
 *  App Configuration
 */

/**
 * Route Definitions
 */

app.get('/', require('./server/routes/index').get)

app.listen(port)

module.exports = app
