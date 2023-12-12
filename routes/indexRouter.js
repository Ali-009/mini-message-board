const express = require('express')
const router = express.Router()

const messages = [
    {
        text: 'Need help with Node.js Debugging!',
        user: 'Jeff',
        added: new Date (),
    },
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    },
    {
        text: 'I\'m starting to like working with HTMX!',
        user: 'Kevin',
        added: new Date()
    }
 ];

router.get('/', function (req, res, next) {
    res.render('index', { messages: messages })
})

router.get('/new', function (req, res, next){
    res.render('newMessage')
})

router.post('/new', function (req, res, next){
    messages.push({
        text: req.body.messageText,
        user: req.body.messageAuthor,
        added: new Date(),
    })
    res.redirect('/')
})


 module.exports = router