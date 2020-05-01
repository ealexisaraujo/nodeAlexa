const MongoLib = require('../lib/mongo');

class QuotesService {
  constructor() {
    this.collection = 'quotes';
    this.mogoDB = new MongoLib();
  }

  async getQuotes() {
    const quotes = await this.mogoDB.getAll(this.collection);
    return quotes || [];
  }
}

module.exports = QuotesService;
