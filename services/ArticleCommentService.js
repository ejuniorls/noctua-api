const { ArticleComment } = require("../models");
const Service = require("./Service");

class ArticleCommentService extends Service {
    constructor() {
        super(ArticleComment);
    }
}

module.exports = ArticleCommentService;
