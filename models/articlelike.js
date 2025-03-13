"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ArticleLike extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ArticleLike.belongsTo(models.Article, { foreignKey: "article_id" });
      ArticleLike.belongsTo(models.User, { foreignKey: "user_id" });
    }
  }
  ArticleLike.init(
    {
      article_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ArticleLike",
      tableName: "article_likes",
      underscored: true,
      timestamps: true,
      paranoid: true,
    },
  );
  return ArticleLike;
};
