const { Router } = require('express');

const { saveInLogs } = require('../../middlewares/saveLogs');

const { getSuggestions, searchNews } = require('./get')


module.exports = new Router()
    .get('/', saveInLogs, searchNews)
    .get('/suggestions', getSuggestions)
