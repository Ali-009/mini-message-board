const express = require('express')
const app = express()

const indexRouter = require('./routes/indexRouter')
//const newMessageRouter = require('./routes/newMessageRouter')


app.set('view engine', 'pug')
app.set('views', './views')

app.use('/', indexRouter)

//Run the server
app.listen(3000, '127.0.0.1', () => {
    console.log('listening on port 3000')
})