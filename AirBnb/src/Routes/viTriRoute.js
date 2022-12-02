const express = require('express');
const viTriRoute = express.Router();
const {getviTri, createVitri, getVitriById, updateVitri, deleteVitri, uploadVitriImg} = require('../Controllers/viTriController');
const upload = require("../Middlewares/upload");

viTriRoute.get('/vi-tri', getviTri);
viTriRoute.post('/vi-tri', createVitri);
viTriRoute.post('/vi-tri/upload-hinh-vitri', upload.single("imgVitri"), uploadVitriImg);
viTriRoute.get('/vi-tri/:id', getVitriById);
viTriRoute.put('/vi-tri/:id', updateVitri);
viTriRoute.delete('/vi-tri/:id', deleteVitri);

module.exports = viTriRoute;
