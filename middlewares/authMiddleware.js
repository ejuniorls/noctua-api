const chalk = require("chalk");
const jwt = require("jsonwebtoken");

const autenticarToken = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. Token not provided." });
  }

  try {
    const tokenSemBearer = token.replace("Bearer ", "");
    const usuarioDecodificado = jwt.verify(
      tokenSemBearer,
      process.env.JWT_SECRET,
    );
    req.usuario = usuarioDecodificado; // Adiciona os dados do usuário ao request
    next();
  } catch (error) {
    console.error(chalk.bgRed.bold(error));
    return res.status(403).json({ message: "Invalid or expired token." });
  }
};

module.exports = autenticarToken;
