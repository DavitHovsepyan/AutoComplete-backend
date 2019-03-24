/* eslint-disable no-console */
const path = require('path');
const Sequelize = require('sequelize');

const environment = process.env.NODE_ENV || 'development';
const { DATABASE_URL } = process.env; // heroku connection
const {
    database,
    username,
    password,
    host,
    dialect,
    operatorsAliases,
} = require(`../../config/database.js`)[environment];

let sequelize;

if (DATABASE_URL) {
    sequelize = new Sequelize(DATABASE_URL);
} else {
    sequelize = new Sequelize(database, username, password, {
        host,
        dialect,
        operatorsAliases,

        pool: {
            max: 5,
            min: 0,
            acquire: 100000,
            idle: 100000,
        },
    });
}

sequelize.authenticate()
    .then(() => {
        console.log('Database connection has been established successfully.');
    })

    .catch(err => console.error('Unable to connect to the database:', err));

module.exports = sequelize;
