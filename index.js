const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config()

const PORT = process.env.PORT || 5000;

app.use(express.static('/public/css'));

app.listen(PORT, () => {
    console.log(`Listening to Port ${ PORT }`);
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '.', 'public/', 'index.html'));
});

app.get('/cv', (req, res) => {
    res.sendFile(path.resolve(__dirname, '.', 'public/', 'cv.html'));
});

app.post('/cv', (req, res) => {
    res.send('POST /cv');
});

app.get('/docs', (req, res) => {
    res.sendFile(path.resolve(__dirname, '.', 'public/', 'docs.html'));
});

app.get('/disclaimer', (req, res) => {
    res.sendFile(path.resolve(__dirname, '.', 'public/', 'disclaimer.html'));
});

/* app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '.', 'public/', '404.html'));
}); */