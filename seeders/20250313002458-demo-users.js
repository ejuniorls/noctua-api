/* eslint-disable no-unused-vars */
"use strict";

const db = require("../models");
const User = db.User;

const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const saltRounds = 10; // Definir o número de rounds para o hash
    const hashedPassword = await bcrypt.hash("senha123", saltRounds); // Senha criptografada

    await User.create({
      name: "noctua bot",
      email: "noctua_bot@noctua.com",
      username: "noctua_bot",
      password: hashedPassword,
      role_id: 1, // admin
    });

    await User.create({
      name: "Edmir Júnior",
      email: "edmir.junior@noctua.com",
      username: "edmir.junior",
      password: hashedPassword,
      role_id: 1, // admin
    });

    await User.create({
      name: "Ana Roberta",
      email: "ana.roberta@noctua.com",
      username: "ana.roberta",
      password: hashedPassword,
      role_id: 2, // user
    });

    await User.create({
      name: "André Nascimento",
      email: "andre.nascimento@noctua.com",
      username: "andre.nascimento",
      password: hashedPassword,
      role_id: 2, // user
    });

    await User.create({
      name: "Beatriz Coelho",
      email: "beatriz.coelho@noctua.com",
      username: "beatriz.coelho",
      password: hashedPassword,
      role_id: 2, // user
    });

  },

  async down(queryInterface, Sequelize) {
    await User.destroy({ where: {}, truncate: true });
  },
};
