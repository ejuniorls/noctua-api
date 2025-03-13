const { ArticleQuizAnswer } = require("../models");
const Service = require("./Service");

class ArticleQuizAnswerService extends Service {
    constructor() {
        super(ArticleQuizAnswer);
    }
}

module.exports = ArticleQuizAnswerService;
