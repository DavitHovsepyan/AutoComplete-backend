const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const api = require('./api');

const { CLIENT_URL } = process.env;

const app = express();

app.use(cors({
    origin: CLIENT_URL || 'http://localhost:3000',
    credentials: true,
    allowMethods: [ 'GET', 'POST' ],
    allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'Authorization',
    ],
}));
app.use(bodyParser.json());
app.use('/api', api);

module.exports = app;
