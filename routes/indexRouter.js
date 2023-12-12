const express = require('express')
const router = express.Router()

function getCurrentDate(){
    return new Date ().toLocaleString('en-AE')
}

const messages = [
    {
        text: 'Need help with Node.js Debugging!',
        user: 'Jeff',
        added: getCurrentDate(),
    },
    {
        text: "Hi there!",
        user: "Amando",
        added: getCurrentDate(),
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: getCurrentDate(),
    },
    {
        text: 'I\'m starting to like working with HTMX!',
        user: 'Kevin',
        added: getCurrentDate(),
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
        added: getCurrentDate(),
    })
    res.redirect('/')
})


 module.exports = router