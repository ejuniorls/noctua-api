const { Router } = require("express");
const authenticateToken = require("../middlewares/authMiddleware.js");
const pagination = require("../middlewares/paginationMiddleware.js");
const ArticleCommentController = require("../controllers/ArticleCommentController.js");

const articleCommentController = new ArticleCommentController();

const router = Router();

router.post("/", authenticateToken, (req, res) =>
    articleCommentController.create(req, res),
);

router.get("/", authenticateToken, pagination, (req, res) =>
    articleCommentController.findAll(req, res),
);

router.get("/:id", authenticateToken, (req, res) =>
    articleCommentController.findById(req, res),
);

router.put("/:id", authenticateToken, (req, res) =>
    articleCommentController.update(req, res),
);

router.delete("/:id", authenticateToken, (req, res) =>
    articleCommentController.delete(req, res),
);

router.post("/restore/:id", authenticateToken, (req, res) =>
    articleCommentController.restore(req, res),
);

module.exports = router;