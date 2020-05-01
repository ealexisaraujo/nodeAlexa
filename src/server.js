const express = require('express');
const helmet = require('helmet');
const app = express();
const { config } = require('../config/index');

const quotesApi = require('../routes/quotes');

// body parser
app.use(express.json());
app.use(helmet());

// Routes
quotesApi(app);

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});
