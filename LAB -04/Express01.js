// create a siple epress serer on html file using fs module has routes like /,/about,/contact .eah route should return a separte
// html file as response

const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
    fs.readFile('index.html', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading index.html');
        } else {
            res.send(data);
        }
    });
});

app.get('/about', (req, res) => {
    fs.readFile('about.html', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading about.html');
        } else {
            res.send(data);
        }
    });
});

app.get('/contact', (req, res) => {
    fs.readFile('contact.html', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading contact.html');
        } else {
            res.send(data);
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});