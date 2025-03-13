const Controller = require("./Controller");
const ArticleService = require("../services/ArticleService");

class ArticleController extends Controller {
  constructor() {
    super(new ArticleService());
  }
}

module.exports = ArticleController;
