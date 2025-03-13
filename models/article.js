"use strict";
const { Model } = require("sequelize");
const slugify = require("slugify");

module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Article.belongsTo(models.User, { foreignKey: "author_id", onDelete: "CASCADE", onUpdate: "CASCADE", });
      Article.belongsTo(models.ArticleCategory, { foreignKey: "category_id" });
      Article.hasMany(models.ArticleComment, { foreignKey: "article_id" });
      Article.hasMany(models.ArticleLike, { foreignKey: "article_id" });
      Article.hasMany(models.ArticleAttachment, { foreignKey: "article_id" });
      Article.hasMany(models.ArticleQuiz, { foreignKey: "article_id" });
    }
  }
  Article.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: "the title field is already registred",
        },
        validate: {
          notNull: {
            msg: "the title field is required",
          },
          notEmpty: {
            msg: "the title field cannot be empty",
          },
        },
      },
      slug: {
        type: DataTypes.STRING,
        unique: true,
      },
      content: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      author_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      category_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      published_at: DataTypes.DATE,
      views: DataTypes.INTEGER,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Article",
      tableName: "articles",
      underscored: true,
      timestamps: true,
      paranoid: true,
      hooks: {
        beforeSave: async (article) => {
          if (article.title) {
            article.slug = slugify(article.title, {
              lower: true,
              strict: true,
            });
          }
        },
      },
    },
  );
  return Article;
};
