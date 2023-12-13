const express = require('express')
const app = express()
const indexRouter = require('./routes/indexRouter')

app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'pug')
app.set('views', './views')
app.use(express.static('public'))
app.use('/', indexRouter)

//Run the server
const port = process.env.PORT || 3000
app.listen(port)