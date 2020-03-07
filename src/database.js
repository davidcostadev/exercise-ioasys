const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const configs = require('../config/database.js');

const basename = path.basename(__filename);

const env = process.env.NODE_ENV || 'development';

const config = configs[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const modelBase = `${__dirname}/models`;

fs.readdirSync(modelBase)
  .filter(file => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
  .forEach(file => {
    const model = sequelize.import(path.join(modelBase, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
