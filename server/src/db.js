const { Sequelize } = require("sequelize");
require("dotenv").config();
const fs = require('fs');
const path = require('path');
const DriverModels = require("./models/DriverModels");
const TeamsModels = require("./models/TeamsModels");



const {DB_USER, DB_PASSWORD, DB_HOST,DB_NAME} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  logging: false,
 //native: false
});

DriverModels(sequelize);
TeamsModels(sequelize);
console.log(DriverModels)
const {drivers , alospits } = sequelize.models;

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });


//modelDefiners.forEach(model => model(sequelize));
//let entries = Object.entries(sequelize.models);
//let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() //+ entry[0].slice(1), entry[1]]);
//sequelize.models = Object.fromEntries(capsEntries);





drivers.belongsToMany(alospits, {through: "drivers_alospits"});
alospits.belongsToMany(drivers, {through: "drivers_alospits"});



module.exports = {
  ...sequelize.models, 
  conn: sequelize
};