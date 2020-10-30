const express = require('express')

const bodyparser = require('body-parser')

const app = express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
app.set('view engine','ejs')

const gtts = require('gtts.js').gTTS
app.get('/gtts-tool', (req, res) => {
    res.render('gtts-tool')
})

app.post('/convert-gtts-tool', (req, res) => {
    var text = req.body.text
    const speech = new gtts(text)
    speech.save("output.mp3")
        .then(function () {
          res.download("output.mp3")
        }).catch(function (err) {
        
    })
})

app.listen(5000, function () {
    console.log("Server is listening on Port 5000")
})