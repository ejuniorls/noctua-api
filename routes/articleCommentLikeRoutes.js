const { Router } = require("express");
const authenticateToken = require("../middlewares/authMiddleware.js");
const pagination = require("../middlewares/paginationMiddleware.js");
const ArticleCommentLikeController = require("../controllers/ArticleCommentLikeController.js");

const articleCommentLikeController = new ArticleCommentLikeController();

const router = Router();

router.post("/", authenticateToken, (req, res) =>
    articleCommentLikeController.create(req, res),
);

router.get("/", authenticateToken, pagination, (req, res) =>
    articleCommentLikeController.findAll(req, res),
);

router.get("/:id", authenticateToken, (req, res) =>
    articleCommentLikeController.findById(req, res),
);

router.put("/:id", authenticateToken, (req, res) =>
    articleCommentLikeController.update(req, res),
);

router.delete("/:id", authenticateToken, (req, res) =>
    articleCommentLikeController.delete(req, res),
);

router.post("/restore/:id", authenticateToken, (req, res) =>
    articleCommentLikeController.restore(req, res),
);

module.exports = router;