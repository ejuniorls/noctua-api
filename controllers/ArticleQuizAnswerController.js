const Controller = require("./Controller");
const ArticleQuizAnswerService = require("../services/ArticleQuizAnswerService");

class ArticleQuizAnswerController extends Controller {
    constructor() {
        super(new ArticleQuizAnswerService());
    }
}

module.exports = ArticleQuizAnswerController;
