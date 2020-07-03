const Sequelize = require('sequelize');
const petProductsModel = require('./models/petProductsModel');

const sequelize = new Sequelize('pet_store_mirey_morales', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });
  
  const petProducts = petProductsModel(sequelize, Sequelize);

  module.exports = petProducts;