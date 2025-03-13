const { Article } = require("../models");
const Service = require("./Service");

class ArticleService extends Service {
  constructor() {
    super(Article);
  }
}

module.exports = ArticleService;
