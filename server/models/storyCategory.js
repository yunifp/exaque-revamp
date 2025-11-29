"use strict";
const { Model } = require("sequelize");

// Fungsi helper untuk slugify
const generateSlug = (name) => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

module.exports = (sequelize, DataTypes) => {
  class StoryCategory extends Model {
    static associate(models) {
      // Definisikan asosiasi di sini
      // Sebuah Kategori 'dimiliki oleh banyak' Story

      StoryCategory.belongsToMany(models.Story, {
        through: "StoryCategoryPivot", // Ini nama tabel pivotnya nanti
        foreignKey: "story_category_id",
        otherKey: "story_id",
        as: "stories",
      });
    }
  }

  StoryCategory.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      slug: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "StoryCategory",
      hooks: {
        // Hook ini berjalan saat 'create'
        beforeCreate: (category) => {
          if (category.name) {
            category.slug = generateSlug(category.name);
          }
        },
        // Hook ini berjalan saat 'update' (via .save() atau .update())
        beforeUpdate: (category) => {
          if (category.changed("name")) {
            // 'changed' bekerja di 'beforeUpdate'
            category.slug = generateSlug(category.name);
          }
        },
      },
    }
  );
  return StoryCategory;
};
