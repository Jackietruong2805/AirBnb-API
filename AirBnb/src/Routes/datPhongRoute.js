const express = require('express');
const datPhongRoute = express.Router();
const {getDatPhong, createDatPhong} = require('../Controllers/datPhongController');

datPhongRoute.get('/dat-phong', getDatPhong);
datPhongRoute.post('/dat-phong', createDatPhong);

module.exports = datPhongRoute;