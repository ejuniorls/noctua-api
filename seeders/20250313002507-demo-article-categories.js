/* eslint-disable no-unused-vars */
"use strict";

const db = require("../models");
const ArticleCategory = db.ArticleCategory;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await ArticleCategory.create({
      name: "língua portuguesa",
    });

    await ArticleCategory.create({
      name: "matemática",
    });

    await ArticleCategory.create({
      name: "física",
    });

    await ArticleCategory.create({
      name: "química",
    });

    await ArticleCategory.create({
      name: "história",
    });

    await ArticleCategory.create({
      name: "geografia",
    });
  },

  async down(queryInterface, Sequelize) {
    await ArticleCategory.destroy({ where: {}, truncate: true });
  },
};
