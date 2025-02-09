// const express = require("express");
// const UserController = require("../controllers/UserController");
// const authenticateToken = require("../middlewares/authMiddleware");

// const router = express.Router();
// const userController = new UserController();

// router.post("/", authenticateToken, userController.create); // Criar usuário
// router.get("/", authenticateToken, userController.findAll); // Listar usuários
// router.get("/:id", authenticateToken, userController.findById); // Buscar usuário por ID
// router.put("/:id", authenticateToken, userController.update); // Atualizar usuário
// router.delete("/:id", authenticateToken, userController.delete); // Deletar usuário (soft delete)
// // router.post("/restore/:id", authenticateToken, userController.restoreUser); // Restaurar usuário deletado

// module.exports = router;

const { Router } = require("express");
const authenticateToken = require("../middlewares/authMiddleware");
const UserController = require("../controllers/UserController.js");

const userController = new UserController();

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Gerenciamento de usuários
 */

/**
 * @swagger
 *
 * /users:
 *   post:
 *     summary: Create user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully
 *       500:
 *         description: Failed to create user
 */
router.post("/", authenticateToken, (req, res) =>
  userController.create(req, res),
);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Returns all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: User list returned successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *                   username:
 *                     type: string
 *                   role:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                   updatedAt:
 *                     type: string
 *                   deletedAt:
 *                     type: string
 *       500:
 *         description: Failed to retrieve users
 */
router.get("/", authenticateToken, (req, res) =>
  userController.findAll(req, res),
);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Returns a user by id
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: User list returned successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *                   username:
 *                     type: string
 *                   role:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                   updatedAt:
 *                     type: string
 *                   deletedAt:
 *                     type: string
 *       404:
 *         description: User not found
 *       500:
 *         description: Failed to retrieve user
 */
router.get("/:id", authenticateToken, (req, res) =>
  userController.findById(req, res),
);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update a user by id
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: User list returned successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *                   username:
 *                     type: string
 *                   role:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                   updatedAt:
 *                     type: string
 *                   deletedAt:
 *                     type: string
 *       404:
 *         description: User not found
 *       500:
 *         description: Failed to update user
 */
router.put("/:id", authenticateToken, (req, res) =>
  userController.update(req, res),
);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Remove a user by id (soft delete)
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do post a ser deletado
 *     responses:
 *       200:
 *         description: User deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: User not found
 *       500:
 *         description: Failed to delete user
 */
router.delete("/:id", authenticateToken, (req, res) =>
  userController.delete(req, res),
);

/**
 * @swagger
 *
 * /users/{id}:
 *   post:
 *     summary: Restore user by id
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: number
 *     responses:
 *       201:
 *         description: User restored successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Failed to restore user
 */
router.post("/restore/:id", authenticateToken, (req, res) =>
  userController.restore(req, res),
);

module.exports = router;
