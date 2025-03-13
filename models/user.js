"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.UserRole, { foreignKey: "id" });
      User.hasMany(models.Article, { foreignKey: "author_id" });
      User.hasMany(models.ArticleComment, { foreignKey: "user_id" });
      User.hasMany(models.ArticleLike, { foreignKey: "user_id" });
      User.hasMany(models.ArticleCommentLike, { foreignKey: "user_id" });
      User.hasMany(models.ArticleNotification, { foreignKey: "user_id" });
      User.hasMany(models.ArticleQuizAnswer, { foreignKey: "user_id" });
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
      underscored: true,
      timestamps: true,
      paranoid: true,
    },
  );
  return User;
};
