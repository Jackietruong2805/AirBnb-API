const express = require('express');
const phongRoute = express.Router();
const {getPhong, createPhong, getPhongByVitri, getPhongById, updatePhong, deletePhong, uploadPhongImg} = require('../Controllers/phongController');
const upload = require("../Middlewares/upload");

phongRoute.get('/phong-thue', getPhong);
phongRoute.post('/phong-thue', createPhong);
phongRoute.post('/phong-thue/upload-hinh-phong', upload.single("imgPhong"), uploadPhongImg);
phongRoute.get('/phong-thue/lay-phong-theo-vi-tri', getPhongByVitri);
phongRoute.get('/phong-thue/:id', getPhongById);
phongRoute.put('/phong-thue/:id', updatePhong);
phongRoute.delete('/phong-thue/:id', deletePhong);



module.exports = phongRoute;