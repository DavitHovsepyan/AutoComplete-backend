const { Router } = require('express');
const news = require('./news/index');

module.exports = new Router()
    .use('/news', news);