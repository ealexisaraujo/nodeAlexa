const express = require('express');
const QuotesService = require('../services/quotes');

function quotesApi(app) {
  const router = express.Router();
  app.use('/api/quotes', router);

  const quotesService = new QuotesService();

  router.get('/', async function (req, res, next) {
    const { categories } = req.query;
    try {
      const quotes = await quotesService.getQuotes({ categories });

      res.status(200).json({
        quotes,
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = quotesApi;
