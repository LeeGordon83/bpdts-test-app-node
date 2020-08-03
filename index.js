const express = require('express')
const app = express()
const config = require('./server/config/config')
const port = config.app.port

/**
 * Route Definitions
 */

app.get('/', require('./server/routes/index').get)

app.listen(port, () => console.log(`App is listening on port ${port}`))

module.exports = app
