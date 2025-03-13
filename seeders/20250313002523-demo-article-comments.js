/* eslint-disable no-unused-vars */
'use strict';

const db = require("../models");
const ArticleComment = db.ArticleComment;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await ArticleComment.create({
      article_id: 1,
      user_id: 3,
      content: "Eu nunca gostei muito de ler, mas comecei a perceber como os livros ajudam na minha visão de mundo. Agora, estou mais interessado em ler histórias e entender mais sobre o que acontece ao meu redor.",
    });

    await ArticleComment.create({
      article_id: 1,
      user_id: 4,
      content: "Achei que a leitura era só para a escola, mas depois que comecei a ler mais por conta própria, vi que ela pode ser divertida e muito útil para entender temas que a gente não aprende em sala de aula.",
    });

    await ArticleComment.create({
      article_id: 1,
      user_id: 5,
      content: "Eu gosto de ler, mas às vezes falta tempo. Esse texto me fez pensar na importância de fazer a leitura parte da minha rotina, porque realmente faz a diferença no aprendizado.",
    });

    await ArticleComment.create({
      article_id: 2,
      user_id: 3,
      content: "A leitura não só melhora o vocabulário, mas também nos ensina a argumentar de forma mais clara e objetiva. É um bom exercício para a vida acadêmica e profissional.",
    });

    await ArticleComment.create({
      article_id: 2,
      user_id: 4,
      content: "Nunca pensei que ler mais pudesse me ajudar tanto em outras matérias. Depois que comecei a ler mais livros de diferentes áreas, minha compreensão de tudo melhorou.",
    });

  },

  async down(queryInterface, Sequelize) {
    await ArticleComment.destroy({ where: {}, truncate: true });
  }
};
