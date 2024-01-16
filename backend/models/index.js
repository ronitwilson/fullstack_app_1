const Sequelize = require('sequelize')
const { DataTypes } = require('sequelize');
const fs = require('fs')
const path = require('path')
const config = require('../config')
const db = {}
// console.log(config.db)
const sequelize = new Sequelize(
'samble_db1',
'test',
'test',
{
    dialect: 'sqlite',
    host: 'localhost',
    storage: './tabtracker.sqlite'
}
)


fs.readdirSync(__dirname)
.filter((file) => {
    console.log('!!!!!!!!!!!!!!!' , file)
    return(file !== 'index.js')
}).forEach((file) => {
    console.log('----------------')
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);
    db[model.name] = model
})

db.sequelize = sequelize
db.Sequelize = Sequelize                                                                                 

module.exports = db