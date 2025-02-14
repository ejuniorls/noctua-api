const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models"); // Ajuste conforme seu modelo de usuário

class AuthService {
  // sign up user
  static async signUp(name, email, username, password, role) {
    try {
      // Verifica se já existe um usuário com o mesmo email
      const emailExists = await User.findOne({ where: { email } });
      if (emailExists) {
        throw new Error("email is already in use");
      }

      // Verifica se já existe um usuário com o mesmo username
      const usernameExists = await User.findOne({ where: { username } });
      if (usernameExists) {
        throw new Error("username is already in use");
      }

      // Criptografa a senha antes de salvar
      const hashedPassword = await bcrypt.hash(password, 10);

      // Criação do novo usuário
      const user = await User.create({
        name,
        email,
        username,
        password: hashedPassword,
        role,
      });

      return user;
    } catch (error) {
      throw new Error(error.message || "error creating user");
    }
  }

  // sign in user
  static async signIn(username, password) {
    try {
      const user = await User.findOne({ where: { username } });
      if (!user) {
        throw new Error("user not found");
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        throw new Error("invalid password");
      }

      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRATION,
      });

      return { token };
    } catch (error) {
      throw new Error(error.message || "error logging in");
    }
  }
}

module.exports = AuthService;
