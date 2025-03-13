const { Router } = require("express");
const authenticateToken = require("../middlewares/authMiddleware.js");
const pagination = require("../middlewares/paginationMiddleware.js");
const ArticleLikeController = require("../controllers/ArticleLikeController.js");

const articleLikeController = new ArticleLikeController();

const router = Router();

router.post("/", authenticateToken, (req, res) =>
    articleLikeController.create(req, res),
);

router.get("/", authenticateToken, pagination, (req, res) =>
    articleLikeController.findAll(req, res),
);

router.get("/:id", authenticateToken, (req, res) =>
    articleLikeController.findById(req, res),
);

router.put("/:id", authenticateToken, (req, res) =>
    articleLikeController.update(req, res),
);

router.delete("/:id", authenticateToken, (req, res) =>
    articleLikeController.delete(req, res),
);

router.post("/restore/:id", authenticateToken, (req, res) =>
    articleLikeController.restore(req, res),
);

module.exports = router;