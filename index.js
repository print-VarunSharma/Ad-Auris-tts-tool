const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const stream = require("stream");


const textToSpeech = require('@google-cloud/text-to-speech');



// Pass credentials JSON object into client (For production use ENV Vars)
const client = new textToSpeech.TextToSpeechClient({
    credentials: {
        "type": process.env.TYPE,
        "project_id": process.env.PROJECT_ID,
        "private_key_id": process.env.PRIVATE_KEY_ID,
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCy1qq5gpCJ+CNY\nVEa45u2VSvasHckRFD4rCV0X47KnOKgTbqr3TTJxA5xADd2IysbuI4Z+K0ffJnCG\ny/6aCJsOQKKtzDvHYy6+N0Z3bOAKCcP2PcbvD8XiNduQ8ARYsN4HSQFB3y48YH16\n56/RuKckFwN/LP9fd0N3LdzysCuMToV6HmRyCU6cD6vkpd2bq/APtG2o9G5VkK47\n44cDOHXdRspYtRHGmddSURLAYNDpEtDCe6i2EA7pIss7axAxRYKrh67SBiZavvIN\nUINgvdujwTUumoPHxC21uA7ofboxrUZMnG9QT2SKzkOsF3o1L3AMPUBl9xpqViNq\ntqAZ+rhBAgMBAAECggEAAN0Koc7TUf3gdSSiWxyu+3hLRMKiY00jeAjkH0F9GJPB\ns1Gmt38dgKWu5gabHKC2q/+AaVCzWLdiYN2QcF/HwzPFL/fLNxfPvzaG8NHWABO9\nfjgcozACjtMfPlh7pjj5DXRzsi94v+0LALeoezz8E5odLR/uE2DWSCJGIubTrapQ\n+khn1OwQOKk5BIpTZbzR6DSKJAlLwWJHc67qhRaHAjmwOtTCNVTWykSco4IciJyO\nO3osSVToYUKG98GW1h8VTjBZkKRwcum0Ew+ANsorsQPMrDYN+n0jw8ugxryHgbqn\nlyvj7qlj2XptFo48F6L9D+ynDpX/UhvKGFK4xwyqlQKBgQDsUns3lJy7VcwBTwJ8\nm8tTUOwfb4Pg4JrkhmAT4yRMpy36OQ1c4rmBDfcMBETCNM+uv76GWIE2eE2k2j1Z\nvtOyYSC2H0LoZUt7pBc+1Zfqc8FQQZxtpCfdsbsUNsAuudGh9ircFs04HjTiYC7V\n28l9pfYo1+7afxx0D4U9s+uvrQKBgQDButiMRWff4tzWqu9p2RGlSZRQL4Mx0flb\n+h7k/0YKzUyPyaJqc4N3a1VQmWMnRHjtQqnock01NlF+VnrV5buzFEWYOWZ2pSnZ\nLCVtB/i3qV2pLnow8BJ/7/u1KEpCYFUDEik3FaYq6aVCkSjGbwrmzlZ6rIfAioVe\noPzZUDEtZQKBgQC5fxy8yegkm/nf5Ra8nMWChnhxTGUl9OdgDaIIujhZ+rf6OyIk\nEMsvY7jRM+CM2EtUjamNZpc2HERF7BBQC5u73sWAbxVjuW8AhBLC/YGbRHUu+/E/\nlqS8Pa/s8/TyOGU2TjXiP/uh2wQD1R+uOjD0cXrBII2Z8EBzUWNyxXFwmQKBgQCo\npRn7yjOpz5jFexpdf2yAAbSNtT61MP+tFOiuGpcDskJS7Ylot9QbMiGbv1t0hIPs\nrtqwEkip6PY6T9gwugOS2jPXVyieYhszBd4ysvzODS8OpvoR/ftsyiHJSyCR9cAr\nozSj0kHMG4cUkr73NxU7ZSYdNnIap7uAbA6QsuGMjQKBgH06Km0u4fbMz234hW1g\n32r0K3PTOE4iqlZ8aNeUJeXjYAKlBFqlycycLJbUrbEkuLZj/U2RZFkdQXGNazVO\nt8bJMRG9MfhB0pSC1CVrt4IQpDGjfJkJWoFj+aXnRgzceU77oG+VJHen3Ykiok9h\nC4+kA1IqBblrqTHsiPwpHSg5\n-----END PRIVATE KEY-----\n",
        "client_email": process.env.CLIENT_EMAIL,
        "client_id": process.env.CLIENT_ID,
        "auth_uri": process.env.AUTH_URI,
        "token_uri": process.env.TOKEN_URI,
        "auth_provider_x509_cert_url": process.env.AUTH_PROVIDER_X509_CERT_URL,
        "client_x509_cert_u,rl": process.env.CLIENT_X509_CERT_URL
      }
      
});
const fs = require('fs');
const util = require('util');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.set('view engine','ejs');

// Home View
app.get('/', (req, res) => {
    res.render('index.ejs');
})

// TTS Function View
app.post('/convertText', (req, res) => {
        // Get language code
        try {
        const voiceSelected = req.body.voiceSelect;
        console.log(voiceSelected)
    
        // The text to synthesize
        const text = req.body.text;
      
        // Construct the request
        const request = {
          input: {text: text},
          // Select the language and SSML voice gender (optional)
          voice: {languageCode: ['en-US'], name: voiceSelected.toString()},
          // select the type of audio encoding
          audioConfig: {audioEncoding: 'LINEAR16', pitch: req.body.pitch, speakingRate: req.body.speed},
        };
      
        console.log("request " + JSON.stringify(request));
    
        const fileName = req.body.fileName.toLowerCase() + '.wav';
    
        // Performs the text-to-speech request
        const response = client.synthesizeSpeech(request);
        const writeFile = util.promisify(fs.writeFile);
        writeFile(fileName, response.audioContent, 'binary')
        
        const readStream = new stream.PassThrough();
        readStream.end(response.audioContent);
        res.set("Content-disposition", 'attachment; filename=' + fileName);
        res.set("Content-Type", "audio/mpeg");
        readStream.pipe(res)
        .then(() => {
            console.log('Audio saved to file: ' + fileName);
            res.download(fileName)
            res.redirect('/');
        })
        .catch((error) => {
            console.error(error);
            res.sendStatus(400);
        });
    }// close try
    catch (error) {
        console.error(error);
      } // close catch
    
    
});


// app.get('/convertText', (req, res) => {
//     res.render('index');
//     res.download(path, fileName, (err) => {
//         console.log(err);
//     });
    
// })

// GTTS View
const gtts = require('gtts.js').gTTS
app.get('/gtts-tool', (req, res) => {
    res.render('gtts-tool')
})

// GTTS Form POST
app.post('/convert-gtts-tool', (req, res) => {
    res.render('gtts-tool')
    var text = req.body.text
    const speech = new gtts(text)
    speech.save("output.mp3")
        .then(function () {
          res.download("output.mp3")
        }).catch(function (err) {
        
    })
})
const PORT = process.env.PORT || 80
app.listen(PORT, function () {
    console.log("Server is listening ${PORT}")
});