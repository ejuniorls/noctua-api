/* eslint-disable no-unused-vars */
const express = require("express");
const authRoutes = require("./authRoutes");
const articleRoutes = require("./articleRoutes");
const articleAttachmentRoutes = require("./articleAttachmentRoutes");
const articleCategoryRoutes = require("./articleCategoryRoutes");
const articleCommentRoutes = require("./articleCommentRoutes");
const articleCommentLikeRoutes = require("./articleCommentLikeRoutes");
const articleLikeRoutes = require("./articleLikeRoutes");
const articleQuizRoutes = require("./articleQuizRoutes");
const articleQuizAnswerRoutes = require("./articleQuizAnswerRoutes");
const userRoutes = require("./userRoutes");
const userRoleRoutes = require("./userRoleRoutes");

const router = express.Router();

router.get("/", function (req, res, next) {
  res.render("index", { title: "Noctua" });
});

router.use("/api/", authRoutes);
router.use("/api/articles", articleRoutes);
router.use("/api/article_attachments", articleAttachmentRoutes);
router.use("/api/article_categories", articleCategoryRoutes);
router.use("/api/article_comments", articleCommentRoutes);
router.use("/api/article_comments_likes", articleCommentLikeRoutes);
router.use("/api/article_likes", articleLikeRoutes);
router.use("/api/article_quizzes", articleQuizRoutes);
router.use("/api/article_quizzes_answers", articleQuizAnswerRoutes);
router.use("/api/users", userRoutes);
router.use("/api/user_roles", userRoleRoutes);

module.exports = router;
