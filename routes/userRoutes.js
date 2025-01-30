const express = require("express");
const UserController = require("../controllers/UserController");
const autenticarToken = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", autenticarToken, UserController.createUser); // Criar usuário
router.get("/", autenticarToken, UserController.getAllUsers); // Listar usuários
router.get("/:id", autenticarToken, UserController.getUserById); // Buscar usuário por ID
router.put("/:id", autenticarToken, UserController.updateUser); // Atualizar usuário
router.delete("/:id", autenticarToken, UserController.deleteUser); // Deletar usuário (soft delete)
router.post("/restore/:id", autenticarToken, UserController.restoreUser); // Restaurar usuário deletado

module.exports = router;
