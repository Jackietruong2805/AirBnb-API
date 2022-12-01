const express = require('express');
const datPhongRoute = express.Router();
const {getDatPhong, createDatPhong, getDatPhongById, getDatPhongByUserId, updateDatPhong} = require('../Controllers/datPhongController');

datPhongRoute.get('/dat-phong', getDatPhong);
datPhongRoute.get('/dat-phong/lay-theo-nguoi-dung/:userId', getDatPhongByUserId);
datPhongRoute.get('/dat-phong/:id_nguoidung/:id_phong', getDatPhongById);
datPhongRoute.post('/dat-phong', createDatPhong);
datPhongRoute.put('/dat-phong/:id', updateDatPhong);


module.exports = datPhongRoute;