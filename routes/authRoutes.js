// const express = require("express");
// const AuthController = require("../controllers/AuthController");

// const router = express.Router();

// router.post("/login", AuthController.login);
// module.exports = router;

const express = require("express");
const AuthController = require("../controllers/AuthController");

const router = express.Router();

// 📝 Rota para cadastro de usuário
router.post("/sign-up", AuthController.signUp);

// 🔑 Rota para login de usuário
router.post("/sign-in", AuthController.signIn);

module.exports = router;
