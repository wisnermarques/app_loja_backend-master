const { DataTypes } = require("sequelize");
const connection = require("../database/connection");

const Categoria = connection.define("categorias", {
  categoria: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

Categoria.sync();

module.exports = Categoria;
