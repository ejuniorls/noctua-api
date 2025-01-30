const jwt = require("jsonwebtoken");

const login = (req, res) => {
  const { username, password } = req.body;

  // Simulação de usuário autenticado (substitua por verificação no banco de dados)
  if (username === "admin" && password === "123456") {
    const usuario = { id: 1, username }; // Payload do token

    // Gera um token válido por 1 hora
    const token = jwt.sign(usuario, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRATION,
    });

    return res.json({ token });
  }

  res.status(401).json({ message: "Credenciais inválidas" });
};

module.exports = { login };
