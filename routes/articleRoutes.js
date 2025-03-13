const { Router } = require("express");
const authenticateToken = require("../middlewares/authMiddleware.js");
const pagination = require("../middlewares/paginationMiddleware.js");
const ArticleController = require("../controllers/ArticleController.js");

const articleController = new ArticleController();

const router = Router();

/**
 * @swagger
 * /articles:
 *   post:
 *     summary: Criar um novo artigo
 *     tags:
 *       - Articles
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *               - author_id
 *               - category_id
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               author_id:
 *                 type: integer
 *               category_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Artigo criado com sucesso
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Não autorizado
 */
router.post("/", authenticateToken, (req, res) =>
  articleController.create(req, res),
);

/**
 * @swagger
 * /articles:
 *   get:
 *     summary: Listar todos os artigos
 *     tags:
 *       - Articles
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
 *         description: Lista de artigos retornada com sucesso
 *       401:
 *         description: Não autorizado
 */
router.get("/", authenticateToken, pagination, (req, res) =>
  articleController.findAll(req, res),
);

/**
 * @swagger
 * /articles/{id}:
 *   get:
 *     summary: Buscar um artigo pelo ID
 *     tags:
 *       - Articles
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
 *         description: Artigo encontrado
 *       404:
 *         description: Artigo não encontrado
 *       401:
 *         description: Não autorizado
 */
router.get("/:id", authenticateToken, (req, res) =>
  articleController.findById(req, res),
);

/**
 * @swagger
 * /articles/{id}:
 *   put:
 *     summary: Atualizar um artigo
 *     tags:
 *       - Articles
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
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               author_id:
 *                 type: integer
 *               category_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Artigo atualizado com sucesso
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Não autorizado
 *       404:
 *         description: Artigo não encontrado
 */
router.put("/:id", authenticateToken, (req, res) =>
  articleController.update(req, res),
);

/**
 * @swagger
 * /articles/{id}:
 *   delete:
 *     summary: Remover um artigo
 *     tags:
 *       - Articles
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
 *         description: Artigo removido com sucesso
 *       401:
 *         description: Não autorizado
 *       404:
 *         description: Artigo não encontrado
 */
router.delete("/:id", authenticateToken, (req, res) =>
  articleController.delete(req, res),
);

/**
 * @swagger
 * /articles/restore/{id}:
 *   post:
 *     summary: Restaurar um artigo removido
 *     tags:
 *       - Articles
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
 *         description: Artigo restaurado com sucesso
 *       401:
 *         description: Não autorizado
 *       404:
 *         description: Artigo não encontrado
 */
router.post("/restore/:id", authenticateToken, (req, res) =>
  articleController.restore(req, res),
);

module.exports = router;
