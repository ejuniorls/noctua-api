const Controller = require("./Controller");
const ArticleQuizService = require("../services/ArticleQuizService");

class ArticleQuizController extends Controller {
    constructor() {
        super(new ArticleQuizService());
    }
}

module.exports = ArticleQuizController;
