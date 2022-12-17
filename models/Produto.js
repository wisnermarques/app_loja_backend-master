const { DataTypes } = require("sequelize");
const connection = require("../database/connection");
const Categoria = require("./Categoria");

const Produto = connection.define("produtos", {
  produto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  detalhes: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  preco: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  img: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Categoria.hasMany(Produto);
Produto.belongsTo(Categoria);

Produto.sync();

module.exports = Produto;
