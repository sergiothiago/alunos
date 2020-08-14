const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const Aluno = sequelize.define("aluno", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  nome: {
    allowNull: false,
    type: Sequelize.STRING(255),
    validate: {
      len: [2, 255]
    }
  }
});

module.exports = Aluno;
