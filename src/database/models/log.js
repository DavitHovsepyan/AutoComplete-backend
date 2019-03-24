const {
    STRING, UUID, DATE,
} = require('sequelize');
const sequelize = require('../index');


const Log = sequelize.define('Log', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: UUID,
    },
    searchText: {
        type: STRING,
    },
    createdAt: {
        allowNull: false,
        type: DATE,
    },
    updatedAt: {
        allowNull: false,
        type: DATE,
    },
});

module.exports = Log;
