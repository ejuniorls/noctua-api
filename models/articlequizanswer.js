"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ArticleQuizAnswer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ArticleQuizAnswer.belongsTo(models.ArticleQuiz, {
        foreignKey: "quiz_id",
      });
      ArticleQuizAnswer.belongsTo(models.User, { foreignKey: "user_id" });
    }
  }
  ArticleQuizAnswer.init(
    {
      quiz_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      answer: DataTypes.STRING,
      is_correct: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "ArticleQuizAnswer",
      tableName: "article_quiz_answers",
      underscored: true,
      timestamps: true,
      paranoid: true,
    },
  );
  return ArticleQuizAnswer;
};
