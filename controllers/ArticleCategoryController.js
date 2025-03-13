const Controller = require("./Controller");
const ArticleCategoryService = require("../services/ArticleCategoryService");

class ArticleCategoryController extends Controller {
  constructor() {
    super(new ArticleCategoryService());
  }
}

module.exports = ArticleCategoryController;
