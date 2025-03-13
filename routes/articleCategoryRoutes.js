const { Router } = require("express");
const authenticateToken = require("../middlewares/authMiddleware.js");
const pagination = require("../middlewares/paginationMiddleware.js");
const ArticleCategoryController = require("../controllers/ArticleCategoryController.js");

const articleCategoryController = new ArticleCategoryController();

const router = Router();

/**
 * @swagger
 * /article-categories:
 *   post:
 *     summary: Criar uma nova categoria de artigo
 *     tags:
 *       - Article Categories
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Categoria criada com sucesso
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Não autorizado
 */
router.post("/", authenticateToken, (req, res) =>
  articleCategoryController.create(req, res),
);

/**
 * @swagger
 * /article-categories:
 *   get:
 *     summary: Listar todas as categorias de artigos
 *     tags:
 *       - Article Categories
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: page
 *         in: query
 *         description: Número da página
 *         schema:
 *           type: integer
 *       - name: limit
 *         in: query
 *         description: Quantidade de itens por página
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de categorias retornada com sucesso
 *       401:
 *         description: Não autorizado
 */
router.get("/", authenticateToken, pagination, (req, res) =>
  articleCategoryController.findAll(req, res),
);

/**
 * @swagger
 * /article-categories/{id}:
 *   get:
 *     summary: Buscar uma categoria pelo ID
 *     tags:
 *       - Article Categories
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Categoria encontrada
 *       404:
 *         description: Categoria não encontrada
 *       401:
 *         description: Não autorizado
 */
router.get("/:id", authenticateToken, (req, res) =>
  articleCategoryController.findById(req, res),
);

/**
 * @swagger
 * /article-categories/{id}:
 *   put:
 *     summary: Atualizar uma categoria de artigo
 *     tags:
 *       - Article Categories
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
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
 *       200:
 *         description: Categoria atualizada com sucesso
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Não autorizado
 *       404:
 *         description: Categoria não encontrada
 */
router.put("/:id", authenticateToken, (req, res) =>
  articleCategoryController.update(req, res),
);

/**
 * @swagger
 * /article-categories/{id}:
 *   delete:
 *     summary: Remover uma categoria de artigo
 *     tags:
 *       - Article Categories
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Categoria removida com sucesso
 *       401:
 *         description: Não autorizado
 *       404:
 *         description: Categoria não encontrada
 */
router.delete("/:id", authenticateToken, (req, res) =>
  articleCategoryController.delete(req, res),
);

/**
 * @swagger
 * /article-categories/restore/{id}:
 *   post:
 *     summary: Restaurar uma categoria removida
 *     tags:
 *       - Article Categories
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Categoria restaurada com sucesso
 *       401:
 *         description: Não autorizado
 *       404:
 *         description: Categoria não encontrada
 */
router.post("/restore/:id", authenticateToken, (req, res) =>
  articleCategoryController.restore(req, res),
);

module.exports = router;
