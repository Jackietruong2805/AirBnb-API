const express = require('express');
const nguoiDungRoute = express.Router();
const {getUsers, createUsers} = require('../Controllers/nguoiDungController');

nguoiDungRoute.get('/users', getUsers);
nguoiDungRoute.post('/users', createUsers);



module.exports = nguoiDungRoute; 