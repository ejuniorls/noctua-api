const { Router } = require("express");
const authenticateToken = require("../middlewares/authMiddleware.js");
const pagination = require("../middlewares/paginationMiddleware.js");
const ArticleCategoryController = require("../controllers/ArticleCategoryController.js");

const articleCategoryController = new ArticleCategoryController();

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Article Categories
 *   description: User Role Management
 */

/**
 * @swagger
 *
 * /api/article_categories:
 *   post:
 *     summary: Create article categort
 *     security:
 *       - bearerAuth: []
 *     tags: [Article Categories]
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
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 response:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     name:
 *                       type: string
 *                     slug:
 *                       type: string
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: false
 *                 error:
 *                   type: string
 */
router.post("/", authenticateToken, (req, res) =>
  articleCategoryController.create(req, res),
);

/**
 * @swagger
 * /api/article_categories:
 *   get:
 *     summary: Returns all article categorie
 *     description: Gets the list of available article categories
 *     tags: [Article Categories]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of article categories
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 response:
 *                   type: object
 *                   properties:
 *                     count:
 *                       type: integer
 *                       example: 2
 *                     rows:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: integer
 *                             example: 1
 *                           name:
 *                             type: string
 *                             example: "matemática"
 *                           slug:
 *                             type: string
 *                             example: "matematica"
 *                           createdAt:
 *                             type: string
 *                             format: date-time
 *                             example: "2025-02-15T01:08:03.000Z"
 *                           updatedAt:
 *                             type: string
 *                             format: date-time
 *                             example: "2025-02-15T01:08:03.000Z"
 *                           deletedAt:
 *                             type: string
 *                             nullable: true
 *                             example: null
 *       401:
 *         description: Unauthorized, missing or invalid token
 *       500:
 *         description: Internal Server Error
 */
router.get("/", authenticateToken, pagination, (req, res) =>
  articleCategoryController.findAll(req, res),
);

/**
 * @swagger
 * /api/article_categories/{id}:
 *   get:
 *     summary: Returns an article category by ID
 *     description: Gets the details of a specific article category by its ID
 *     tags: [Article Categories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Article Category ID
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Article category data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 response:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     name:
 *                       type: string
 *                       example: "matemática"
 *                     slug:
 *                       type: string
 *                       example: "matematica"
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2025-02-15T01:08:03.000Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2025-02-15T01:08:03.000Z"
 *                     deletedAt:
 *                       type: string
 *                       nullable: true
 *                       example: null
 *       400:
 *         description: Invalid request, poorly formatted ID
 *       401:
 *         description: Unauthorized, missing or invalid token
 *       404:
 *         description: Article category not found
 *       500:
 *         description: Internal Server Error
 */
router.get("/:id", authenticateToken, (req, res) =>
  articleCategoryController.findById(req, res),
);

/**
 * @swagger
 * /api/article_categories/{id}:
 *   put:
 *     summary: Update an article category by ID
 *     description: Updates the details of a specific article category
 *     tags:
 *       - Article Categories
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the article category to be updated
 *         schema:
 *           type: integer
 *           example: 2
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "portuguese"
 *     responses:
 *       200:
 *         description: Article category successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 response:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 2
 *                     name:
 *                       type: string
 *                       example: "portuguese"
 *                     slug:
 *                       type: string
 *                       example: "portuguese"
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2025-02-15T22:46:13.000Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2025-02-15T23:17:05.366Z"
 *                     deletedAt:
 *                       type: string
 *                       nullable: true
 *                       example: null
 *       400:
 *         description: Invalid request, validation error
 *       401:
 *         description: Unauthorized, missing or invalid token
 *       404:
 *         description: Article category not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: false
 *                 error:
 *                   type: string
 *                   example: "record not found"
 *       500:
 *         description: Internal server error
 */

router.put("/:id", authenticateToken, (req, res) =>
  articleCategoryController.update(req, res),
);

/**
 * @swagger
 * /api/article_categories/{id}:
 *   delete:
 *     summary: Remove a user role by id (soft delete)
 *     security:
 *       - bearerAuth: []
 *     tags: [Article Categories]
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
  articleCategoryController.delete(req, res),
);

/**
 * @swagger
 *
 * /api/article_categories/{id}:
 *   post:
 *     summary: Restore user by id
 *     security:
 *       - bearerAuth: []
 *     tags: [Article Categories]
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
  articleCategoryController.restore(req, res),
);

module.exports = router;
