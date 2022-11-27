const express = require('express');
const rootRoutes = express.Router();
const phongRoute = require('./phongRoute');
const viTriRoute = require('./viTriRoute');
const nguoiDungRoute = require('./nguoiDungRoute');
const datPhongRoute = require('./datPhongRoute');

rootRoutes.use(phongRoute);
rootRoutes.use(viTriRoute);
rootRoutes.use(nguoiDungRoute);
rootRoutes.use(datPhongRoute);



module.exports = rootRoutes
