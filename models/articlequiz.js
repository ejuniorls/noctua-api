"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ArticleQuiz extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ArticleQuiz.belongsTo(models.Article, { foreignKey: "article_id" });
      ArticleQuiz.hasMany(models.ArticleQuizAnswer, { foreignKey: "quiz_id" });
    }
  }
  ArticleQuiz.init(
    {
      article_id: DataTypes.INTEGER,
      question: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ArticleQuiz",
      tableName: "article_quizzes",
      underscored: true,
      timestamps: true,
      paranoid: true,
    },
  );
  return ArticleQuiz;
};
