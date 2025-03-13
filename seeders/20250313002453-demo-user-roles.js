/* eslint-disable no-unused-vars */
'use strict';

const db = require("../models");
const UserRole = db.UserRole;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await UserRole.create({ name: "admin" });

    await UserRole.create({ name: "coordinator" });

    await UserRole.create({ name: "teacher" });
 
    await UserRole.create({ name: "moderator" });

    await UserRole.create({ name: "student" });

    await UserRole.create({ name: "guest" });
  },

  async down(queryInterface, Sequelize) {
    await UserRole.destroy({ where: {}, truncate: true });
  },
};
