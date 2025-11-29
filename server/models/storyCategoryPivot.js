"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class StoryCategoryPivot extends Model {
    static associate(models) {
      // Definisikan relasi 'belongsTo'
      StoryCategoryPivot.belongsTo(models.Story, { foreignKey: "story_id" });
      StoryCategoryPivot.belongsTo(models.StoryCategory, {
        foreignKey: "story_category_id",
      });
    }
  }

  StoryCategoryPivot.init(
    {
      story_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: "Stories",
          key: "id",
        },
      },
      story_category_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: "StoryCategories",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "StoryCategoryPivot",
      tableName: "StoryCategoryPivot",
    }
  );
  return StoryCategoryPivot;
};
