const { Sequelize, Op } = require('sequelize');

const db = new Sequelize(
   'postgres://postgres:calimenio3125@localhost:5432/rickandmorty',
   {
      logging: false,
   }
);


module.exports = db