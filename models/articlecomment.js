"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ArticleComment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ArticleComment.belongsTo(models.Article, { foreignKey: "article_id" });
      ArticleComment.belongsTo(models.User, { foreignKey: "user_id" });
      ArticleComment.hasMany(models.ArticleCommentLike, {
        foreignKey: "comment_id",
      });
    }
  }
  ArticleComment.init(
    {
      article_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "ArticleComment",
      tableName: "article_comments",
      underscored: true,
      timestamps: true,
      paranoid: true,
    },
  );
  return ArticleComment;
};
