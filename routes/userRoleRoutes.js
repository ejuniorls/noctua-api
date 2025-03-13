const { Router } = require("express");
const authenticateToken = require("../middlewares/authMiddleware.js");
const pagination = require("../middlewares/paginationMiddleware.js");
const UserRoleContoller = require("../controllers/UserRoleContoller.js");

const userRoleContoller = new UserRoleContoller();

const router = Router();

/**
 * @swagger
 * tags:
 *   name: User Roles
 *   description: User Role Management
 */

/**
 * @swagger
 *
 * /api/user_roles:
 *   post:
 *     summary: Create user role
 *     security:
 *       - bearerAuth: []
 *     tags: [User Roles]
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
  userRoleContoller.create(req, res),
);

/**
 * @swagger
 * /api/user_roles:
 *   get:
 *     summary: Returns all user roles
 *     security:
 *       - bearerAuth: []
 *     tags: [User Roles]
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
 *         description: Failed to retrieve user roles
 */
router.get("/", authenticateToken, pagination, (req, res) =>
  userRoleContoller.findAll(req, res),
);

/**
 * @swagger
 * /api/user_roles/{id}:
 *   get:
 *     summary: Returns a user by id
 *     security:
 *       - bearerAuth: []
 *     tags: [User Roles]
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
  userRoleContoller.findById(req, res),
);

/**
 * @swagger
 * /api/user_roles/{id}:
 *   put:
 *     summary: Update a user role by id
 *     security:
 *       - bearerAuth: []
 *     tags: [User Roles]
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
  userRoleContoller.update(req, res),
);

/**
 * @swagger
 * /api/user_roles/{id}:
 *   delete:
 *     summary: Remove a user role by id (soft delete)
 *     security:
 *       - bearerAuth: []
 *     tags: [User Roles]
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
  userRoleContoller.delete(req, res),
);

/**
 * @swagger
 *
 * /api/user_roles/{id}:
 *   post:
 *     summary: Restore user by id
 *     security:
 *       - bearerAuth: []
 *     tags: [User Roles]
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
  userRoleContoller.restore(req, res),
);

module.exports = router;
