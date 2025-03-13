const chalk = require("chalk");
const AuthService = require("../services/AuthService"); // Caminho para o seu AuthService

// const { UserRole } = require("../models");

class AuthController {
  // sign up user
  static async signUp(req, res) {
    const { name, email, username, password, role_id } = req.body;

    try {
      // if (!role_id) {
      //   return res
      //     .status(400)
      //     .json({ status: false, message: "role_id is required" });
      // }

      // const roleExists = await UserRole.findByPk(role_id);
      // if (!roleExists) {
      //   return res
      //     .status(400)
      //     .json({ status: false, message: "role_id provided does not exist" });
      // }

      const user = await AuthService.signUp(
        name,
        email,
        username,
        password,
        role_id,
      );
      return res
        .status(201)
        .json({ status: true, message: "user created successfully", user });
    } catch (error) {
      console.log(chalk.bgRed.bold("Erro ao criar usuário:", error));

      return res.status(400).json({ status: false, message: error.message });
    }
  }

  // sign in user
  static async signIn(req, res) {
    const { username, password } = req.body;

    try {
      const { token } = await AuthService.signIn(username, password);
      return res
        .status(200)
        .json({ status: true, message: "successfully authenticated", token });
    } catch (error) {
      return res.status(400).json({ status: false, message: error.message });
    }
  }
}

module.exports = AuthController;
