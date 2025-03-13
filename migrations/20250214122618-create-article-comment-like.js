/* eslint-disable no-unused-vars */
"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("article_comment_likes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      comment_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'article_comments',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deleted_at: {
        type: Sequelize.DATE,
      },
    });

    // Adicionando a chave única composta para comment_id e user_id
    await queryInterface.addConstraint('article_comment_likes', {
      fields: ['comment_id', 'user_id'],
      type: 'unique',
      name: 'unique_comment_user_like',
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('article_comment_likes', 'unique_comment_user_like');
    await queryInterface.dropTable("article_comment_likes");
  },
};
