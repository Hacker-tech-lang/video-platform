const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const multer = require('multer');
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.static('public'));

// Setup Multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Upload video endpoint
app.post('/upload', upload.single('video'), (req, res) => {
    res.send('Video uploaded successfully!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
