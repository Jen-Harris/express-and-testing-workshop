const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();
const bodyParser = require('body-parser');

app.use(routes);
app.use(bodyParser.json());

module.exports = app;
