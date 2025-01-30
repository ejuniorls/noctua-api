/* eslint-disable no-unused-vars */
const express = require("express");
const userRoutes = require("./userRoutes"); // Importa as rotas de usuários
const authRoutes = require("./authRoutes"); // Importa as rotas de usuários

const router = express.Router();

router.get("/", function (req, res, next) {
  res.render("index", { title: "Noctua" });
});

router.use("/users", userRoutes); // Rotas de usuários
router.use("/api", authRoutes);

module.exports = router;
