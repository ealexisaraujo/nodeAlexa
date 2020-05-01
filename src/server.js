const express = require('express');
const bodyParser = require('body-parser');
const app = express();

if (process.env.NODE_ENV !== 'production') require('morgan').morgan();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('!Hola mundo cruel!');
});

app.get('/quotes', (req, res) => {
  res.json({
    Hola: 'Hola',
  });
});

app.post('/addquotes', (req, res) => {
  console.log(request.body);
  res.json(req.body);
});

app.listen('3000', function () {
  console.log('Servidor funcionando http://localhost:3000');
});
