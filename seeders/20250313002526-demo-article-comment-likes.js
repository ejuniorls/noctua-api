/* eslint-disable no-unused-vars */
'use strict';

const db = require("../models");
const ArticleCommentLike = db.ArticleCommentLike;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await ArticleCommentLike.create({
      comment_id: 1,
      user_id: 3,
    });

    await ArticleCommentLike.create({
      comment_id: 2,
      user_id: 4,
    });

    await ArticleCommentLike.create({
      comment_id: 2,
      user_id: 3,
    });

    await ArticleCommentLike.create({
      comment_id: 3,
      user_id: 4,
    });

  },

  async down(queryInterface, Sequelize) {
    await ArticleCommentLike.destroy({ where: {}, truncate: true });
  }
};
