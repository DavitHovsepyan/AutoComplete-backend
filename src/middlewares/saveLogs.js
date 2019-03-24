const Logs = require('../database/models/log');

const saveInLogs = async (req, res, next) => {
    const searchText = req.query.searchBy || '';

    await Logs.findOrCreate({
        where: {
            searchText
        }
    })

    return next();
};

module.exports = {
    saveInLogs
}