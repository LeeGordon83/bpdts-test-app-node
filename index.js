const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const port = parseInt(process.env.PORT, 10) || 8000

app.use(expressLayouts)
app.set('view engine', 'ejs')

/**
 *  App Configuration
 */

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('./public'))
app.use('/css', express.static('./node_modules/bootstrap/dist/css'))

/**
 * Route Definitions
 */

app.get('/', require('./server/routes/index').get)
app.post('/index', require('./server/routes/index').post)

app.listen(port)

module.exports = app
