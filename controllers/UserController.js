const chalk = require("chalk");
const { User } = require("../models"); // Importa o modelo de User
const bcrypt = require("bcrypt"); // Para hashing de senhas

class UserController {
  /**
   * @swagger
   * tags:
   *   name: Users
   *   description: Users endpoint
   */

  // Criar um novo usuário
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
  static async createUser(req, res) {
    try {
      const { name, email, username, password, role } = req.body;

      // Hash da senha antes de salvar no banco
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await User.create({
        name,
        email,
        username,
        password: hashedPassword,
        role,
      });

      return res
        .status(201)
        .json({ message: "User created successfully", user: newUser });
    } catch (error) {
      console.error(chalk.bgRed.bold(error));
      return res.status(500).json({ error: "Failed to create user" });
    }
  }

  // Listar todos os usuários
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
  static async getAllUsers(req, res) {
    try {
      const users = await User.findAll({
        attributes: { exclude: ["password"] },
      }); // Exclui a senha da resposta
      return res.status(200).json(users);
    } catch (error) {
      console.error(chalk.bgRed.bold(error));
      return res.status(500).json({ error: "Failed to retrieve users" });
    }
  }

  // Buscar um usuário pelo ID
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
  static async getUserById(req, res) {
    try {
      const { id } = req.params;

      const user = await User.findByPk(id, {
        attributes: { exclude: ["password"] },
      });

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      return res.status(200).json(user);
    } catch (error) {
      console.error(chalk.bgRed.bold(error));
      return res.status(500).json({ error: "Failed to retrieve user" });
    }
  }

  // Atualizar um usuário
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
  static async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { name, email, username, password, role } = req.body;

      const user = await User.findByPk(id);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      // Hash da senha se ela for atualizada
      const hashedPassword = password
        ? await bcrypt.hash(password, 10)
        : user.password;

      await user.update({
        name,
        email,
        username,
        password: hashedPassword,
        role,
      });

      return res
        .status(200)
        .json({ message: "User updated successfully", user });
    } catch (error) {
      console.error(chalk.bgRed.bold(error));
      return res.status(500).json({ error: "Failed to update user" });
    }
  }

  // Deletar um usuário (soft delete)
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
  static async deleteUser(req, res) {
    try {
      const { id } = req.params;

      const user = await User.findByPk(id);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      await user.destroy(); // Soft delete devido à configuração `paranoid: true`

      return res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      console.error(chalk.bgRed.bold(error));
      return res.status(500).json({ error: "Failed to delete user" });
    }
  }

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
  static async restoreUser(req, res) {
    try {
      const { id } = req.params;

      const user = await User.findByPk(id, { paranoid: false }); // Inclui usuários "soft deleted"

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      await user.restore(); // Restaura o usuário

      return res
        .status(200)
        .json({ message: "User restored successfully", user });
    } catch (error) {
      console.error(chalk.bgRed.bold(error));
      return res.status(500).json({ error: "Failed to restore user" });
    }
  }
}

module.exports = UserController;
