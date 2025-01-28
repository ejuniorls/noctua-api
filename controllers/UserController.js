const chalk = require('chalk');
const { User } = require('../models'); // Importa o modelo de User
const bcrypt = require('bcrypt'); // Para hashing de senhas

class UserController {
    // Criar um novo usuário
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

            return res.status(201).json({ message: 'User created successfully', user: newUser });
        } catch (error) {
            console.error(chalk.bgRed.bold(error));
            return res.status(500).json({ error: 'Failed to create user' });
        }
    }

    // Listar todos os usuários
    static async getAllUsers(req, res) {
        try {
            const users = await User.findAll({ attributes: { exclude: ['password'] } }); // Exclui a senha da resposta
            return res.status(200).json(users);
        } catch (error) {
            console.error(chalk.bgRed.bold(error));
            return res.status(500).json({ error: 'Failed to retrieve users' });
        }
    }

    // Buscar um usuário pelo ID
    static async getUserById(req, res) {
        try {
            const { id } = req.params;

            const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            return res.status(200).json(user);
        } catch (error) {
            console.error(chalk.bgRed.bold(error));
            return res.status(500).json({ error: 'Failed to retrieve user' });
        }
    }

    // Atualizar um usuário
    static async updateUser(req, res) {
        try {
            const { id } = req.params;
            const { name, email, username, password, role } = req.body;

            const user = await User.findByPk(id);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            // Hash da senha se ela for atualizada
            const hashedPassword = password ? await bcrypt.hash(password, 10) : user.password;

            await user.update({
                name,
                email,
                username,
                password: hashedPassword,
                role,
            });

            return res.status(200).json({ message: 'User updated successfully', user });
        } catch (error) {
            console.error(chalk.bgRed.bold(error));
            return res.status(500).json({ error: 'Failed to update user' });
        }
    }

    // Deletar um usuário (soft delete)
    static async deleteUser(req, res) {
        try {
            const { id } = req.params;

            const user = await User.findByPk(id);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            await user.destroy(); // Soft delete devido à configuração `paranoid: true`

            return res.status(200).json({ message: 'User deleted successfully' });
        } catch (error) {
            console.error(chalk.bgRed.bold(error));
            return res.status(500).json({ error: 'Failed to delete user' });
        }
    }

    // Restaurar um usuário excluído
    static async restoreUser(req, res) {
        try {
            const { id } = req.params;

            const user = await User.findByPk(id, { paranoid: false }); // Inclui usuários "soft deleted"

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            await user.restore(); // Restaura o usuário

            return res.status(200).json({ message: 'User restored successfully', user });
        } catch (error) {
            console.error(chalk.bgRed.bold(error));
            return res.status(500).json({ error: 'Failed to restore user' });
        }
    }
}

module.exports = UserController;
