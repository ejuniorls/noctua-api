// /* eslint-disable no-unused-vars */
// const express = require("express");

// const userRoutes = require('./userRoutes'); // Importa as rotas de usuários

// const router = express.Router();

// /* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("index", { title: "Noctua" });
// });

// router.use("/users", userRoutes);

// module.exports = router;


const express = require('express');
const userRoutes = require('./userRoutes'); // Importa as rotas de usuários

const router = express.Router();

router.get("/", function (req, res, next) {
    res.render("index", { title: "Noctua" });
});

router.use('/users', userRoutes); // Rotas de usuários

module.exports = router;