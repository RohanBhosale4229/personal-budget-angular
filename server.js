const express = require('express');
const app = express();
const port = 3000;

app.use('/',express.static('public'));

const fs= require('fs');
let a=fs.readFileSync('budget.json');
let b = JSON.parse(a);

app.get('/hello', (req, res) => {
    res.send('Hello World')
});

app.get('/budget', (req, res) => {
    res.json(b); 
});

app.listen(port, () => {
    console.log(`Example app listen at http://localhost:${port}`)
});
