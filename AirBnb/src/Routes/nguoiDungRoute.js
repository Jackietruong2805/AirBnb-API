const express = require('express');
const nguoiDungRoute = express.Router();
const {getUsers, createUser, getUserById, updateUser, deleteUser, searchUserName, uploadUserAvatar} = require('../Controllers/nguoiDungController');
const upload = require("../Middlewares/upload");

nguoiDungRoute.get('/users', getUsers);
nguoiDungRoute.get('/users/:id', getUserById);
nguoiDungRoute.get('/users/search/:userName', searchUserName);
nguoiDungRoute.post('/users/upload-avatar', upload.single("avatar"), uploadUserAvatar);
nguoiDungRoute.post('/users', createUser);
nguoiDungRoute.put('/users/:id', updateUser);
nguoiDungRoute.delete('/users', deleteUser);



module.exports = nguoiDungRoute; 