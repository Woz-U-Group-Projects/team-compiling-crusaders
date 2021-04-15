/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('blogposts', {
    blog_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    iduser: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    academic: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    lifestyle: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    professional: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    opinion: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    entertainment: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    blogPosts: {
      type: DataTypes.STRING(5000),
      allowNull: true
    }
  }, {
    tableName: 'blogposts'
  });
};
