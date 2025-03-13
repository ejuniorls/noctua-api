const { ArticleCommentLike } = require("../models");
const Service = require("./Service");

class ArticleCommentLikeService extends Service {
  constructor() {
    super(ArticleCommentLike);
  }
}

module.exports = ArticleCommentLikeService;
