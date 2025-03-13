const Controller = require("./Controller");
const ArticleCommentService = require("../services/ArticleCommentService");

class ArticleCommentController extends Controller {
  constructor() {
    super(new ArticleCommentService());
  }
}

module.exports = ArticleCommentController;
