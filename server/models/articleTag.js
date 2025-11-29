"use strict";
const { Model } = require("sequelize");

// (Nanti, fungsi 'generateSlug' ini bisa kita pindah ke satu file 'utility'
// agar tidak duplikat di setiap model)
const generateSlug = (name) => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

module.exports = (sequelize, DataTypes) => {
  class ArticleTag extends Model {
    static associate(models) {
      // Definisikan asosiasi di sini
      // Sebuah Tag 'dimiliki oleh banyak' Artikel

      ArticleTag.belongsToMany(models.Article, {
        through: "ArticleTagPivot", // Ini nama tabel pivotnya nanti
        foreignKey: "article_tag_id",
        otherKey: "article_id",
        as: "articles",
      });
    }
  }

  ArticleTag.init(
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
      modelName: "ArticleTag",
      hooks: {
        // Hook ini berjalan saat 'create'
        beforeCreate: (tag) => {
          if (tag.name) {
            tag.slug = generateSlug(tag.name);
          }
        },
        // Hook ini berjalan saat 'update' (via .save() atau .update())
        beforeUpdate: (tag) => {
          if (tag.changed("name")) {
            // 'changed' bekerja di 'beforeUpdate'
            tag.slug = generateSlug(tag.name);
          }
        },
      },
    }
  );
  return ArticleTag;
};

