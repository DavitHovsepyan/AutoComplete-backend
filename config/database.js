const {
    DB,
    DB_USER,
    DB_PASSWORD
} = process.env;

const pg = require('pg');
// ssl for heroku postgres
pg.defaults.ssl = true;

module.exports = {
    development: {
        username: DB_USER || 'postgres',
        password: DB_PASSWORD || 'postgres',
        database: DB || 'tidetest',
        host: '127.0.0.1',
        dialect: 'postgres',
        operatorsAliases: false,
        seederStorage: 'sequelize',
    },
    // heroku changes db credentials from time to time, be careful
    staging: {
        username: 'pnrqlhiygjzwda',
        password: 'de2947a8d2996068be9edc98cc08dd4c6c55e916413e90339208809da2ec737b',
        database: 'df75dblu8i4d3p',
        host: 'ec2-54-83-61-142.compute-1.amazonaws.com',
        dialect: 'postgres',
        operatorsAliases: false,
        ssl: true,
        seederStorage: 'sequelize',
    },
};
