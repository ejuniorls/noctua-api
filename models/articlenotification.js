"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ArticleNotification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ArticleNotification.belongsTo(models.User, { foreignKey: "user_id" });
    }
  }
  ArticleNotification.init(
    {
      user_id: DataTypes.INTEGER,
      message: DataTypes.STRING,
      is_read: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "ArticleNotification",
      tableName: "article_notifications",
      underscored: true,
      timestamps: true,
      paranoid: true,
    },
  );
  return ArticleNotification;
};
