const Sequelize = require('sequelize');

const sequelize = new Sequelize('posts', 'postgres', 'senhaBanco', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres'
});

module.exports = {
  sequelize: sequelize
}