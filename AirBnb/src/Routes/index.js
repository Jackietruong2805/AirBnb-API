const express = require('express');
const rootRoutes = express.Router();
const phongRoute = require('./phongRoute');
const viTriRoute = require('./viTriRoute');
const nguoiDungRoute = require('./nguoiDungRoute');

rootRoutes.use(phongRoute);
rootRoutes.use(viTriRoute);
rootRoutes.use(nguoiDungRoute);



module.exports = rootRoutes
