"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ArticleCommentLike extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ArticleCommentLike.belongsTo(models.ArticleComment, { foreignKey: "comment_id" });
      ArticleCommentLike.belongsTo(models.User, { foreignKey: "user_id" });
    }
  }
  ArticleCommentLike.init(
    {
      comment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "ArticleCommentLike",
      tableName: "article_comment_likes",
      underscored: true,
      timestamps: true,
      paranoid: true,
      unique: {
        fields: ['comment_id', 'user_id'],
      },
    },
  );
  return ArticleCommentLike;
};
