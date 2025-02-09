/* eslint-disable no-unused-vars */
const express = require("express");
const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");

const router = express.Router();

router.get("/", function (req, res, next) {
  res.render("index", { title: "Noctua" });
});

router.use("/api/", authRoutes);
router.use("/api/users", userRoutes);

module.exports = router;
