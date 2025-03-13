"use strict";
const { Model } = require("sequelize");
const slugify = require("slugify");

module.exports = (sequelize, DataTypes) => {
  class ArticleCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ArticleCategory.hasMany(models.Article, { foreignKey: "category_id" });
    }
  }
  ArticleCategory.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: "the name field is already registred",
        },
        validate: {
          notNull: {
            msg: "the name field is required",
          },
          notEmpty: {
            msg: "the name field cannot be empty",
          },
        },
      },
      slug: {
        type: DataTypes.STRING,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "ArticleCategory",
      tableName: "article_categories",
      underscored: true,
      timestamps: true,
      paranoid: true,
      hooks: {
        beforeSave: async (category) => {
          if (category.name) {
            category.slug = slugify(category.name, {
              lower: true,
              strict: true,
            });
          }
        },
      },
    },
  );
  return ArticleCategory;
};
