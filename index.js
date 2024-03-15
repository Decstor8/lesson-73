const express = require('express');
const app = express();
const port = 8000;
const Vigenere = require('caesar-salad').Vigenere;

const password = 'makulaOnePassword'

app.get('/', (req, res) => {
    res.send('Hello, users');
});

app.get('/:name', (req, res) => {
    res.send(`Welcome, ${req.params.name}`)
});

app.get('/encode/:query', (req, res) => {
    const encode = Vigenere.Cipher(password).crypt(req.params.query);
    res.send(`${encode}`)
})

app.get('/decode/:query', (req, res) => {
    const decode = Vigenere.Decipher(password).crypt(req.params.query);
    res.send(`${decode}`)
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});


