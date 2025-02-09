const AuthService = require("../services/AuthService"); // Caminho para o seu AuthService

class AuthController {
  // sign up user
  static async signUp(req, res) {
    const { name, email, username, password, role } = req.body;

    try {
      const user = await AuthService.signUp(
        name,
        email,
        username,
        password,
        role,
      );
      return res
        .status(201)
        .json({ status: true, message: "user created successfully", user });
    } catch (error) {
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

// const { User } = require("../models"); // Importa o modelo de User

// const login = async (req, res) => {
//   try {
//     const { username, password } = req.body;
//     const user = await User.findOne({ where: { username } });

//     if (!user || !(await bcrypt.compare(password, user.password))) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     const token = jwt.sign(
//       { id: user.id, username: user.username },
//       process.env.JWT_SECRET,
//       { expiresIn: "1h" },
//     );

//     res.json({ token });
//   } catch (error) {
//     console.error(chalk.bgRed.bold(error));
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// module.exports = { login };
