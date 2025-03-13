/* eslint-disable no-unused-vars */
'use strict';

const db = require("../models");
const Article = db.Article;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await Article.create({
      title: "A Importância da Matemática no Cotidiano",
      content: "A matemática está presente em diversas situações do dia a dia, desde as compras no mercado até o planejamento financeiro pessoal. Na escola, aprender operações básicas, geometria e estatística ajuda os alunos a desenvolverem o raciocínio lógico e a resolverem problemas práticos. Além disso, a matemática é essencial para carreiras como engenharia, tecnologia e economia, mostrando sua relevância para o futuro profissional dos estudantes.",
      author_id: 2,
      category_id: 2
    });

    await Article.create({
      title: "A Importância da Leitura na Formação do Aluno",
      content: "A leitura é uma habilidade fundamental para o desenvolvimento acadêmico e pessoal dos estudantes. Ler regularmente melhora o vocabulário, a interpretação de textos e a capacidade de argumentação. Além disso, o contato com diferentes gêneros literários amplia a visão de mundo e estimula a criatividade. Na escola, o incentivo à leitura ajuda os alunos a se tornarem cidadãos mais críticos e preparados para enfrentar desafios intelectuais.",
      author_id: 2,
      category_id: 1
    });

    await Article.create({
      title: "A Ciência e a Exploração do Mundo",
      content: "O estudo das ciências permite que os alunos compreendam melhor o funcionamento do mundo ao seu redor. Disciplinas como biologia, química e física explicam fenômenos naturais e tecnológicos, incentivando a curiosidade e o pensamento crítico. Além disso, a ciência desempenha um papel fundamental no avanço da sociedade, contribuindo para a descoberta de novos medicamentos, fontes de energia e soluções para problemas ambientais.",
      author_id: 2,
      category_id: 4
    });

    await Article.create({
      title: "A Importância da Leitura no Ensino Médio",
      content: "A leitura é uma das ferramentas mais poderosas para o desenvolvimento intelectual e pessoal dos estudantes no Ensino Médio. Ao ler, os alunos não apenas adquirem conhecimento, mas também expandem sua capacidade crítica, aprendem a interpretar diferentes pontos de vista e melhoram suas habilidades de comunicação. Além disso, a leitura contribui para a formação de um repertório cultural e facilita a compreensão de outras disciplinas, como História e Ciências. Por isso, é essencial que os jovens se dediquem à leitura, tornando-a um hábito diário, não apenas para os estudos, mas também para a vida cotidiana.",
      author_id: 2,
      category_id: 1
    });
  },

  async down(queryInterface, Sequelize) {
    await Article.destroy({ where: {}, truncate: true });
  }
};
