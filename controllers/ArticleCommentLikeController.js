const Controller = require("./Controller");
const ArticleCommentLikeService = require("../services/ArticleCommentLikeService");

class ArticleCommentLikeController extends Controller {
  constructor() {
    super(new ArticleCommentLikeService());
  }
}

module.exports = ArticleCommentLikeController;
