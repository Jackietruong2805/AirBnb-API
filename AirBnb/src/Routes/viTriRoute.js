const express = require('express');
const viTriRoute = express.Router();
const {getviTri} = require('../Controllers/viTriController');

viTriRoute.get('/vi-tri', getviTri);

module.exports = viTriRoute;
