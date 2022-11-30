const express = require('express');
const datPhongRoute = express.Router();
const {getDatPhong, createDatPhong, getDatPhongById, getDatPhongByUserId} = require('../Controllers/datPhongController');

datPhongRoute.get('/dat-phong', getDatPhong);
datPhongRoute.get('/dat-phong/:id_nguoidung/:id_phong', getDatPhongById);
datPhongRoute.get('/dat-phong/:userId', getDatPhongByUserId);
datPhongRoute.post('/dat-phong', createDatPhong);


module.exports = datPhongRoute;