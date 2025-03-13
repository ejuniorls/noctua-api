const { Router } = require("express");
const authenticateToken = require("../middlewares/authMiddleware.js");
const pagination = require("../middlewares/paginationMiddleware.js");
const ArticleAttachmentController = require("../controllers/ArticleAttachmentController.js");

const articleAttachmentController = new ArticleAttachmentController();

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Article Attachments
 *   description: User Role Management
 */

/**
 * @swagger
 *
 * /api/article_attachments:
 *   post:
 *     summary: Create user role
 *     security:
 *       - bearerAuth: []
 *     tags: [Article Attachments]
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
  articleAttachmentController.create(req, res),
);

/**
 * @swagger
 * /api/article_attachments:
 *   get:
 *     summary: Returns all Article Attachments
 *     security:
 *       - bearerAuth: []
 *     tags: [Article Attachments]
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
 *         description: Failed to retrieve Article Attachments
 */
router.get("/", authenticateToken, pagination, (req, res) =>
  articleAttachmentController.findAll(req, res),
);

/**
 * @swagger
 * /api/article_attachments/{id}:
 *   get:
 *     summary: Returns a user by id
 *     security:
 *       - bearerAuth: []
 *     tags: [Article Attachments]
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
  articleAttachmentController.findById(req, res),
);

/**
 * @swagger
 * /api/article_attachments/{id}:
 *   put:
 *     summary: Update a user role by id
 *     security:
 *       - bearerAuth: []
 *     tags: [Article Attachments]
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
  articleAttachmentController.update(req, res),
);

/**
 * @swagger
 * /api/article_attachments/{id}:
 *   delete:
 *     summary: Remove a user role by id (soft delete)
 *     security:
 *       - bearerAuth: []
 *     tags: [Article Attachments]
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
  articleAttachmentController.delete(req, res),
);

/**
 * @swagger
 *
 * /api/article_attachments/{id}:
 *   post:
 *     summary: Restore user by id
 *     security:
 *       - bearerAuth: []
 *     tags: [Article Attachments]
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
  articleAttachmentController.restore(req, res),
);

module.exports = router;
