const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const { Storage } = require('@google-cloud/storage');

const app = express();
const port = 5001;

const gc = new Storage({
  keyFilename: path.join(__dirname, './calhacks-403417-cae499d34727.json'), 
});

const bucket = gc.bucket('zoomcalhacksbucket');

app.use(cors());

const multerStorage = multer.memoryStorage();
const upload = multer({ storage: multerStorage });
app.get('/test', (req, res) => {
    res.send('Test route works!');
});

app.post('/upload', upload.single('file'), (req, res) => {
    console.log('Received upload request');
    console.log('File data:', req.file);

    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }
  
    const blob = bucket.file(req.file.originalname);
    const blobStream = blob.createWriteStream();
    console.log('Blob created with name:', req.file.originalname);
    console.log('Setting up blobStream events...');

    blobStream.on('error', err => {
        console.log('BlobStream error:', err);

      return res.status(500).send(err);
    });
  
    blobStream.on('finish', () => {
      res.status(200).send('File uploaded.');
    });
    blobStream.write(req.file.buffer);

    blobStream.end(req.file.buffer);
  });
  console.log('Ending the blobStream...');

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
