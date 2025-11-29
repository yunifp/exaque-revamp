"use strict";
const { Model } = require("sequelize");

// Fungsi helper untuk slugify (mirip project lama)
const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Hapus karakter non-alfanumerik
    .replace(/[\s_]+/g, "-") // Ganti spasi/underscore jadi strip
    .replace(/^-+|-+$/g, ""); // Hapus strip di awal/akhir
};

module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    static associate(models) {
      // Artikel ini 'dimiliki oleh' satu User (Author)
      Article.belongsTo(models.User, {
        foreignKey: "author_id",
        as: "author",
      });

      // Artikel 'memiliki banyak' Kategori
      Article.belongsToMany(models.ArticleCategory, {
        through: "ArticleCategoryPivot", // Nama tabel pivot
        foreignKey: "article_id",
        otherKey: "article_category_id",
        as: "categories",
      });

      // Artikel 'memiliki banyak' Tag
      Article.belongsToMany(models.ArticleTag, {
        through: "ArticleTagPivot", // Nama tabel pivot
        foreignKey: "article_id",
        otherKey: "article_tag_id",
        as: "tags",
      });
    }
  }

  Article.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      slug: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      excerpt: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      featured_image_url: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status: {
        type: DataTypes.ENUM("draft", "published", "archived"),
        allowNull: false,
        defaultValue: "draft",
      },
      published_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      author_id: {
        // Foreign key
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      author_override: {
        // Nama penulis (bisa null)
        type: DataTypes.STRING,
        allowNull: true,
      },
      meta_title: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      meta_description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      canonical_url: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Article",
    }
  );
  return Article;
};
