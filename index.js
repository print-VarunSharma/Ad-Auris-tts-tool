const express = require('express')
const bodyparser = require('body-parser')
const app = express()

const textToSpeech = require('@google-cloud/text-to-speech');

// Pass credentials JSON object into client (For production use ENV Vars)
const client = new textToSpeech.TextToSpeechClient({
    credentials: {
        "type": process.env.TYPE,
        "project_id": process.env.PROJECT_ID,
        "private_key_id": process.env.PRIVATE_KEY_ID,
        "private_key": process.env.PRIVATE_KEY,
        "client_email": process.env.CLIENT_EMAIL,
        "client_id": process.env.CLIENT_ID,
        "auth_uri": process.env.AUTH_URI,
        "token_uri": process.env.TOKEN_URI,
        "auth_provider_x509_cert_url": process.env.AUTH_PROVIDER_X509_CERT_URL,
        "client_x509_cert_url": process.env.CLIENT_X509_CERT_URL
      }
      
});
const fs = require('fs');
const util = require('util');

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'));
app.set('view engine','ejs')

// Home View
app.get('/', (req, res) => {
    res.render('index')
})

// TTS Function View
app.post('/convertText', (req, res) => {
    convertTextToSpeech(req, res);
    window.open("/fileName");
})


async function convertTextToSpeech(req, res) {
    // Get language code
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
      audioConfig: {audioEncoding: 'MP3', pitch: req.body.pitch, speakingRate: req.body.speed},
    };
  
    console.log("request " + JSON.stringify(request));

    const fileName = req.body.fileName + '.mp3';

    // Performs the text-to-speech request
    const [response] = await client.synthesizeSpeech(request);
    const writeFile = file.save(fs.writeFile);
    await writeFile(fileName, response.audioContent, 'binary');
    console.log('Audio saved to file: ' + fileName);
}


const PORT = process.env.PORT || 80
app.listen(PORT, function () {
    console.log("Server is listening ${PORT}")
})