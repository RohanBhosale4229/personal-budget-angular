const express = require('express');
const app = express();
const port = 3000;

app.use('/',express.static('public'));

<script type="text/javascript" src="budget.json"></script>

app.get('/hello', (req, res) => {
    res.send('Hello World')
});

app.get('/budget', (req, res) => {
    res.json(budget); 
});

app.listen(port, () => {
    console.log(`Example app listen at http://localhost:${port}`)
});
