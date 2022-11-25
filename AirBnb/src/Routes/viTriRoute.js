const express = require('express');
const viTriRoute = express.Router();
const {getviTri, createVitri, getVitriById, updateVitri, deleteVitri} = require('../Controllers/viTriController');

viTriRoute.get('/vi-tri', getviTri);
viTriRoute.post('/vi-tri', createVitri);
viTriRoute.get('/vi-tri/:id', getVitriById);
viTriRoute.put('/vi-tri/:id', updateVitri);
viTriRoute.delete('/vi-tri/:id', deleteVitri);

module.exports = viTriRoute;
