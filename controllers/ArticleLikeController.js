const Controller = require("./Controller");
const ArticleLikesService = require("../services/ArticleLikeService");

class ArticleLikeController extends Controller {
  constructor() {
    super(new ArticleLikesService());
  }
}

module.exports = ArticleLikeController;
