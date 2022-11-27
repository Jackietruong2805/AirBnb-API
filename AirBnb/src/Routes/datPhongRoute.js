const express = require('express');
const datPhongRoute = express.Router();
const {getDatPhong} = require('../Controllers/datPhongController');

datPhongRoute.get('/dat-phong', getDatPhong);

module.exports = datPhongRoute;