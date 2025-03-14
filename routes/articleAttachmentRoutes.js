const { Router } = require("express");
const authenticateToken = require("../middlewares/authMiddleware.js");
const pagination = require("../middlewares/paginationMiddleware.js");
const ArticleAttachmentController = require("../controllers/ArticleAttachmentController.js");

const articleAttachmentController = new ArticleAttachmentController();

const router = Router();

router.post("/", authenticateToken, (req, res) =>
  articleAttachmentController.create(req, res),
);

router.get("/", authenticateToken, pagination, (req, res) =>
  articleAttachmentController.findAll(req, res),
);

router.get("/:id", authenticateToken, (req, res) =>
  articleAttachmentController.findById(req, res),
);

router.put("/:id", authenticateToken, (req, res) =>
  articleAttachmentController.update(req, res),
);

router.delete("/:id", authenticateToken, (req, res) =>
  articleAttachmentController.delete(req, res),
);

router.post("/restore/:id", authenticateToken, (req, res) =>
  articleAttachmentController.restore(req, res),
);

module.exports = router;
