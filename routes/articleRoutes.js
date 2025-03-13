const { Router } = require("express");
const authenticateToken = require("../middlewares/authMiddleware.js");
const pagination = require("../middlewares/paginationMiddleware.js");
const ArticleController = require("../controllers/ArticleController.js");

const articleController = new ArticleController();

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Articles
 *   description: User Role Management
 */

/**
 * @swagger
 *
 * /api/articles:
 *   post:
 *     summary: Create user role
 *     security:
 *       - bearerAuth: []
 *     tags: [Articles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: User role created successfully
 *       500:
 *         description: Failed to create user role
 */
router.post("/", authenticateToken, (req, res) =>
  articleController.create(req, res),
);

/**
 * @swagger
 * /api/articles:
 *   get:
 *     summary: Returns all Articles
 *     security:
 *       - bearerAuth: []
 *     tags: [Articles]
 *     responses:
 *       200:
 *         description: User role list returned successfully
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
 *                   created_at:
 *                     type: string
 *                   updated_at:
 *                     type: string
 *                   deleted_at:
 *                     type: string
 *       500:
 *         description: Failed to retrieve Articles
 */
router.get("/", authenticateToken, pagination, (req, res) =>
  articleController.findAll(req, res),
);

/**
 * @swagger
 * /api/articles/{id}:
 *   get:
 *     summary: Returns a user by id
 *     security:
 *       - bearerAuth: []
 *     tags: [Articles]
 *     responses:
 *       200:
 *         description: User role list returned successfully
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
 *                   created_at:
 *                     type: string
 *                   updated_at:
 *                     type: string
 *                   deleted_at:
 *                     type: string
 *       404:
 *         description: User role not found
 *       500:
 *         description: Failed to retrieve user role
 */
router.get("/:id", authenticateToken, (req, res) =>
  articleController.findById(req, res),
);

/**
 * @swagger
 * /api/articles/{id}:
 *   put:
 *     summary: Update a user role by id
 *     security:
 *       - bearerAuth: []
 *     tags: [Articles]
 *     responses:
 *       200:
 *         description: User role list returned successfully
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
 *                   created_at:
 *                     type: string
 *                   updated_at:
 *                     type: string
 *                   deleted_at:
 *                     type: string
 *       404:
 *         description: User role not found
 *       500:
 *         description: Failed to update user role
 */
router.put("/:id", authenticateToken, (req, res) =>
  articleController.update(req, res),
);

/**
 * @swagger
 * /api/articles/{id}:
 *   delete:
 *     summary: Remove a user role by id (soft delete)
 *     security:
 *       - bearerAuth: []
 *     tags: [Articles]
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
  articleController.delete(req, res),
);

/**
 * @swagger
 *
 * /api/articles/{id}:
 *   post:
 *     summary: Restore user by id
 *     security:
 *       - bearerAuth: []
 *     tags: [Articles]
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
  articleController.restore(req, res),
);

module.exports = router;
