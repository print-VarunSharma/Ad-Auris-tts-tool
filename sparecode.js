// Imports the Google Cloud client library
const {Storage} = require('@google-cloud/storage');
// Creates a client
const storage = new Storage({
    storage_credentials: {
            "type": process.env.STORAGE_TYPE,
            "project_id": process.env.STORAGE_PROJECT_ID,
            "private_key_id": process.env.STORAGE_PRIVATE_KEY_ID,
            "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCpUnQ4N5GtFdE9\nLdIcJRZR+5knNde7Smj7wySVLNzIZ5fdQpxIKX7L8MgoAu9ZNArV+HtzgV6gBz4U\nGvSI7tC0qxazC7Pp2UZUMKIDIlcNFD1i/x4sce7GLAjMT7iqgkwRuy6fncEpVx7O\noGVsLVgvJkNceYi87Jsb78dTk1VdrOwUwktb6CIdi+jB2k6RTgcQqY8MdRPcHTKV\nVxNI9UQWPif2ZihYesNHgF/P0X1M41BXztKAMsAhEJv3djBL66GDmaqtFyInCdDB\nb86XupmZWBKg6wu8Jlk0BLlmkbfnHwwqIDnYRbUjDj+Mok7bAE7KAVJud2/4Py4G\nVX8TvMTlAgMBAAECggEAEWswFZBx5hJ2ggqysL6H+0scyFHbraLMBgpfOxFwbRVr\nJBH0LeBG8QgGL0eOA+k8rCJx4MIQT/ouwra7LVMUGWH4ZdbwXUBC4epW4Gep+Oh6\nIDMKkZvu6mghR5Nz9eaNmM1e0IDUHEKgIrWReX14svEGwP6nuHfGxSr3oHtprscu\nc/whcqt1O/RPgZIdwBfGtiUZqtDK34p3fcAN5q6JFT9hRsBbP9aKikuP8jINvDMZ\nZD/aGOvuuaJb2CM7Swh2+EUpSbOTwd2TjHIitLD+UPvnNpvZdEA+L7/ePS5boL7K\nMc/he6omPmIVJuKxGAe6ayY2n/+1AKxxlcFWvK23AQKBgQDQ60ueLKOkT5djX1v2\nr8V16f4HqZOiyqh82hU6SAyU0xholaledZsgyuoKc5vhU/WvQ6LkMtwczdCYmvCz\nxd4Ua3CUHtyX+n/NkDHLz1bBeeUhCE4CVOZtzjReNrwEx31s0aEiBP0W+KXr8qzY\nlJih+Lq1r7NHArsuYhitgB2eoQKBgQDPesZv3oHHt9+U4aJxAoKc7M86iUotZC6A\nG7h7aky1f21+I4rRn/oMUV9XpcwNfu8Wbwbbqr7raRSEq+pvTLnc9RIEwJ8IB+Ju\nWHCyQMTvg4gzMMKzldBEtKOz7Ey+7bi/wACZx3NgZ5qxlKYagoUMKsmLbCD/tUoy\ncGj/hVPTxQKBgHMCdRhYXqWfoylzX38H+F4XOF8jfUDK68H/lFwHOdXb973rVdfI\nSmPdEMY8Kn366G9Zfpy9WusIamL4OLXeoYkANHN2Id4QarbRQHiAZbQQ1JBAsCEc\nd9XPBIkw/IRtBaEYLeo6cNFqhHzFlV2NQBE6ih5m4PyghkbcfdVVh/jBAoGBAJO6\nQGZQ0Kkqc8hm66l5dxRSzK5KKIWvSiivFCjTpDCqvYRNvD7LoFd67N7UTzjgw01+\n2iw4I94sII7idXav87quyBiYKeOm8YNN91gEI/TB+40vT8JcjkENOW4XdwGO87eb\n9xGHYNAolI2SYL6JZkAmiwB5ifln1J+bSDd/cBNdAoGALHti1gPz/CvrS/DK1SCz\nPiqbXx+OJMaUF4kyNWAY4D3q6Igtlo7trYuYyaVe9t7FGvImBUpab2gN1yaXovsO\n6OIEwwEVIvvjdTX/T+9QnpfZ4tvsGDqUzbv42GjavaZRRWAM3moq7JwtZ4+GVG61\nLGiLe8DTrLY2CD8/6jiIv5Q=\n-----END PRIVATE KEY-----\n",
            "client_email": process.env.STORAGE_CLIENT_EMAIL,
            "client_id": process.env.STORAGE_CLIENT_ID,
            "auth_uri": process.env.STORAGE_AUTH_URI,
            "token_uri": process.env.STORAGE_TOKEN_URI,
            "auth_provider_x509_cert_url": process.env.STORAGE_AUTH_PROVIDER_X509_CERT_URL,
            "client_x509_cert_url": process.env.STORAGE_CLIENT_X509_CERT_URL
          }
    
});
// Creates a client from a Google service account key.
// const storage = new Storage({keyFilename: "key.json"});

/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const bucketName = 'ad-auris-tts-app.appspot.com';

async function createBucket() {
  // Creates the new bucket
  await storage.createBucket(bucketName);
  console.log(`Bucket ${bucketName} created.`);
}

createBucket().catch(console.error);


// spare code v5
const express = require('express');
const bodyparser = require('body-parser');
const app = express();

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
const { pathToFileURL } = require('url');
const http = require('http');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.set('view engine','ejs');

// Home View
app.get('/', (req, res) => {
    res.render('index');
})

// TTS Function View
app.post('/convertText', (req, res) => {
    res.render('index');
    convertTextToSpeech(req, res)
    
})


// app.get('/convertText', (req, res) => {
//     res.render('index');
//     res.download(path, fileName, (err) => {
//         console.log(err);
//     });
    
// })
async function convertTextToSpeech(req, res) {
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
    const [response] = await client.synthesizeSpeech(request);
    const writeFile = util.promisify(fs.createWriteStream);
    await writeFile(fileName, response.audioContent, 'binary')
    response.save(fileName)
    .then(() => {
        console.log('Audio saved to file: ' + fileName);
        res.download(fileName);
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
}


const PORT = process.env.PORT || 80
app.listen(PORT, function () {
    console.log("Server is listening ${PORT}")
});

var path = require('path');
var filepath = path.join(__dirname, fileName);
        
writeFile.save(filepath, function (err, result) {
  if(err) { throw new Error(err) }
  console.log('Success! Open ' + fileName)
})
//PUSHED ON TO HEROKU DO NOT CHANGE
 // -----------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------

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
        var path = require('path');
        var filepath = path.join(__dirname, fileName);
                
        writeFile.save(filepath, function (err, result) {
        if(err) { throw new Error(err) }
        console.log('Success! Open ' + fileName)
        })
        .then(() => {
            console.log('Audio saved to file: ' + fileName);
            res.download(filepath, fileName)
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
    res.render('gtts-tool.ejs')
})

// GTTS Form POST
app.post('/convert-gtts-tool', (req, res) => {
    res.render('gtts-tool.ejs')
    var text = req.body.text
    const speech = new gtts(text)
    speech.save("output.mp3")
        .then(function () {
          res.download("output.mp3")
        }).catch(function (err) {
        
    })
});

// TTS Test View (Vue.js Tool)
app.get('/ttstest', (req, res) => {
    res.render('ttstest.ejs')
});

const PORT = process.env.PORT || 80
app.listen(PORT, function () {
    console.log("Server is listening ${PORT}")
});