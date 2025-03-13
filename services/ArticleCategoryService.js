const { ArticleCategory } = require("../models");
const Service = require("./Service");

class ArticleCategoryService extends Service {
  constructor() {
    super(ArticleCategory);
  }
}

module.exports = ArticleCategoryService;
