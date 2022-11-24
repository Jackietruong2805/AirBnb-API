const express = require('express');
const rootRoutes = express.Router();
const phongRoute = require('./phongRoute');
const viTriRoute = require('./viTriRoute');

rootRoutes.use(phongRoute);
rootRoutes.use(viTriRoute);


module.exports = rootRoutes
