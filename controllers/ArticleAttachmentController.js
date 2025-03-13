const Controller = require("./Controller");
const ArticleAttachmentService = require("../services/ArticleAttachmentService");

class ArticleAttachmentController extends Controller {
  constructor() {
    super(new ArticleAttachmentService());
  }
}

module.exports = ArticleAttachmentController;
