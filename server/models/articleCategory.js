"use strict";
const { Model } = require("sequelize");

// Fungsi helper untuk slugify (bisa di-refactor jadi file util nanti)
const generateSlug = (name) => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Hapus karakter non-alfanumerik
    .replace(/[\s_]+/g, "-") // Ganti spasi/underscore jadi strip
    .replace(/^-+|-+$/g, ""); // Hapus strip di awal/akhir
};

module.exports = (sequelize, DataTypes) => {
  class ArticleCategory extends Model {
    static associate(models) {
      // Definisikan asosiasi di sini
      // Sebuah Kategori 'dimiliki oleh banyak' Artikel
      // Kita akan definisikan ini melalui tabel pivot 'ArticleCategoryPivot'

      ArticleCategory.belongsToMany(models.Article, {
        through: "ArticleCategoryPivot", // Ini nama tabel pivotnya nanti
        foreignKey: "article_category_id",
        otherKey: "article_id",
        as: "articles",
      });
    }
  }

  ArticleCategory.init(
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
      modelName: "ArticleCategory",
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
  return ArticleCategory;
};
