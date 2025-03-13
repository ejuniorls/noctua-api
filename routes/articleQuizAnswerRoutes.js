const { Router } = require("express");
const authenticateToken = require("../middlewares/authMiddleware.js");
const pagination = require("../middlewares/paginationMiddleware.js");
const ArticleQuizAnswerController = require("../controllers/ArticleQuizAnswerController.js");

const articleQuizAnswerController = new ArticleQuizAnswerController();

const router = Router();

router.post("/", authenticateToken, (req, res) =>
    articleQuizAnswerController.create(req, res),
);

router.get("/", authenticateToken, pagination, (req, res) =>
    articleQuizAnswerController.findAll(req, res),
);

router.get("/:id", authenticateToken, (req, res) =>
    articleQuizAnswerController.findById(req, res),
);

router.put("/:id", authenticateToken, (req, res) =>
    articleQuizAnswerController.update(req, res),
);

router.delete("/:id", authenticateToken, (req, res) =>
    articleQuizAnswerController.delete(req, res),
);

router.post("/restore/:id", authenticateToken, (req, res) =>
    articleQuizAnswerController.restore(req, res),
);

module.exports = router;