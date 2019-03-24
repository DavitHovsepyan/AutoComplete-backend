const http = require('http');

const { PORT } = process.env;
const app = require('../app');


http.createServer(app).listen(PORT);
