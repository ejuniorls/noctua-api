const bcrypt = require("bcrypt");
const Controller = require("./Controller");
const UserService = require("../services/UserService");

class UserController extends Controller {
  constructor() {
    super(new UserService());
  }

  // Create new user
  async create(req, res) {
    try {
      const { name, email, username, password, role } = req.body;

      // Hash da senha antes de salvar no banco
      const hashedPassword = await bcrypt.hash(password, 10);

      const result = await this.service.create({
        name,
        email,
        username,
        password: hashedPassword,
        role,
      });
      res.status(201).json({ status: true, response: result });
    } catch (error) {
      res.status(400).json({ status: false, error: error.message });
    }
  }

  // Find all users
  async findAll(req, res) {
    try {
      const result = await this.service.findAll({
        attributes: { exclude: ["password"] },
      });
      res.status(200).json({ status: true, response: result });
    } catch (error) {
      res.status(400).json({ status: false, error: error.message });
    }
  }

  // Find users by id
  async findById(req, res) {
    try {
      const result = await this.service.findById(req.params.id, {
        attributes: { exclude: ["password"] },
      });
      res.status(200).json({ status: true, response: result });
    } catch (error) {
      // Tratamento de erro específico para registro não encontrado
      if (error.message === "record not found") {
        return res.status(404).json({ status: false, error: "user not found" });
      }
      res.status(400).json({ status: false, error: error.message });
    }
  }

  // Update user
  async update(req, res) {
    try {
      const { name, email, username, password, role } = req.body;
      const user = await this.service.findById(req.params.id);

      if (!user)
        return res.status(404).json({ status: false, error: "user not found" });

      // Hash da senha se ela for atualizada
      const hashedPassword = password
        ? await bcrypt.hash(password, 10)
        : user.password;

      const updatedData = {
        name,
        email,
        username,
        password: hashedPassword,
        role,
      };

      const result = await this.service.update(req.params.id, updatedData);
      res.status(200).json({ status: true, response: result });
    } catch (error) {
      if (error.message === "record not found") {
        return res.status(404).json({ status: false, error: "user not found" });
      }
      res.status(400).json({ status: false, error: error.message });
    }
  }
}

module.exports = UserController;
