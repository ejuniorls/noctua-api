"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PostCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PostCategory.hasMany(models.Post, { foreignKey: "categoryId" });
    }
  }
  PostCategory.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "PostCategory",
      tableName: "post_categories",
      timestamps: true,
      paranoid: true,
    },
  );
  return PostCategory;
};
