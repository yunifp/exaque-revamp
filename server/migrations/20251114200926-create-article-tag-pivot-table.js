"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ArticleTagPivot", {
      article_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true, // Bagian dari composite primary key
        references: {
          model: "Articles", // Nama tabel 'Articles'
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      article_tag_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true, // Bagian dari composite primary key
        references: {
          model: "ArticleTags", // Nama tabel 'ArticleTags'
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
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
    await queryInterface.dropTable("ArticleTagPivot");
  },
};
