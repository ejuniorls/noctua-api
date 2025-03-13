const { ArticleAttachment } = require("../models");
const Service = require("./Service");

class ArticleAttachmentService extends Service {
  constructor() {
    super(ArticleAttachment);
  }
}

module.exports = ArticleAttachmentService;
