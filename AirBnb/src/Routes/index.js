const express = require('express');
const rootRoutes = express.Router();
const phongRoute = require('./phongRoute');

rootRoutes.use(phongRoute);

module.exports = rootRoutes
