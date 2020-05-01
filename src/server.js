const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { config } = require('../config/index');

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

app.post('/slackQuotes', (request, response) => {
  //TODO generate templates
});

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});
