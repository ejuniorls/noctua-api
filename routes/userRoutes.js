const express = require('express');
const UserController = require('../controllers/UserController');

const router = express.Router();

router.post('/', UserController.createUser); // Criar usuário
router.get('/', UserController.getAllUsers); // Listar usuários
router.get('/:id', UserController.getUserById); // Buscar usuário por ID
router.put('/:id', UserController.updateUser); // Atualizar usuário
router.delete('/:id', UserController.deleteUser); // Deletar usuário (soft delete)
router.post('/restore/:id', UserController.restoreUser); // Restaurar usuário deletado

module.exports = router;