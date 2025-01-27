'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PostComment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PostComment.belongsTo(models.Post, { foreignKey: 'postId' });
      PostComment.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  PostComment.init({
    postId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    content: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'PostComment',
    tableName: 'post_comments',
    timestamps: true,
    paranoid: true,
  });
  return PostComment;
};