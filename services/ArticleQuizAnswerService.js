const { ArticleQuiz } = require("../models");
const Service = require("./Service");

class ArticleQuizService extends Service {
    constructor() {
        super(ArticleQuiz);
    }
}

module.exports = ArticleQuizService;
