"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ArticleAttachment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ArticleAttachment.belongsTo(models.Article, { foreignKey: "article_id" });
    }
  }
  ArticleAttachment.init(
    {
      article_id: DataTypes.INTEGER,
      file_url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ArticleAttachment",
      tableName: "article_attachments",
      underscored: true,
      timestamps: true,
      paranoid: true,
    },
  );
  return ArticleAttachment;
};
