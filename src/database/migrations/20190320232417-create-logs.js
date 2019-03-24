/* eslint-disable no-unused-vars */

module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('Logs', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        searchText: {
            type: Sequelize.STRING,
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
        },
    }),
    down: (queryInterface) => queryInterface.dropTable('Logs'),
};
