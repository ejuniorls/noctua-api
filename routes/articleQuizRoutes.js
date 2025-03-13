const { Router } = require("express");
const authenticateToken = require("../middlewares/authMiddleware.js");
const pagination = require("../middlewares/paginationMiddleware.js");
const ArticleQuizController = require("../controllers/ArticleQuizController.js");

const articleQuizController = new ArticleQuizController();

const router = Router();

router.post("/", authenticateToken, (req, res) =>
    articleQuizController.create(req, res),
);

router.get("/", authenticateToken, pagination, (req, res) =>
    articleQuizController.findAll(req, res),
);

router.get("/:id", authenticateToken, (req, res) =>
    articleQuizController.findById(req, res),
);

router.put("/:id", authenticateToken, (req, res) =>
    articleQuizController.update(req, res),
);

router.delete("/:id", authenticateToken, (req, res) =>
    articleQuizController.delete(req, res),
);

router.post("/restore/:id", authenticateToken, (req, res) =>
    articleQuizController.restore(req, res),
);

module.exports = router;