const express = require('express');
const cors = require('cors');
const {add}=require('./arthimetica');
const app = express();

app.use(cors()) // accross origin resourse sharing - basically we accept requests from all domains
const port = 3000;

app.get('/', (req, res) => {
    res.send('Arithemetic service - Hello world!');
});

app.get('/add/:n/:m', (req, res) => {
    //let n=Number(req.params.n);
    //let m=Number(req.params.m);
    res.json(Number(req.params.n)+Number(req.params.m));
});

app.listen(port)