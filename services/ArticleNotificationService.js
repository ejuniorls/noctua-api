const { ArticleNotification } = require("../models");
const Service = require("./Service");

class ArticleNotificationService extends Service {
    constructor() {
        super(ArticleNotification);
    }
}

module.exports = ArticleNotificationService;
