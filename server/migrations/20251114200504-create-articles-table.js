"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Articles", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      slug: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true, // Penting untuk SEO
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      excerpt: {
        type: Sequelize.TEXT, // Ringkasan/Meta Description Fallback
        allowNull: true,
      },
      featured_image_url: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      status: {
        type: Sequelize.ENUM("draft", "published", "archived"),
        allowNull: false,
        defaultValue: "draft",
      },
      published_at: {
        type: Sequelize.DATE,
        allowNull: true, // Untuk scheduling
      },

      // === BAGIAN PENULIS ===
      author_id: {
        // Siapa yang mem-posting di sistem (Admin/Editor)
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users", // Merujuk ke tabel 'Users'
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT", // Jangan hapus artikel jika user-nya dihapus
      },
      author_override: {
        // Nama penulis yang bisa diganti (sesuai request)
        type: Sequelize.STRING,
        allowNull: true, // Default NULL
        defaultValue: null,
      },

      // === BAGIAN SEO "MUTAHIR" ===
      meta_title: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      meta_description: {
        type: Sequelize.TEXT, // Pakai TEXT agar bisa panjang
        allowNull: true,
      },
      canonical_url: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Articles");
  },
};
