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
