const { ArticleLike } = require("../models");
const Service = require("./Service");

class ArticleLikeService extends Service {
    constructor() {
        super(ArticleLike);
    }
}

module.exports = ArticleLikeService;
