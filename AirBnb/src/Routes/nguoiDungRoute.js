const express = require('express');
const nguoiDungRoute = express.Router();
const {getUsers, createUser, getUserById, updateUser} = require('../Controllers/nguoiDungController');

nguoiDungRoute.get('/users', getUsers);
nguoiDungRoute.get('/users/:id', getUserById);
nguoiDungRoute.post('/users', createUser);
nguoiDungRoute.put('/users/:id', updateUser);



module.exports = nguoiDungRoute; 