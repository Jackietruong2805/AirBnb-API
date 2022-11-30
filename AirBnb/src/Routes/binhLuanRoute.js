const express = require('express');
const binhLuanRoute = express.Router();
const {successCode, failCode, errorCode, createSuccessCode} = require('../ultis/response');
const {getBinhLuan, createBinhLuan} = require('../Controllers/binhLuanController');

binhLuanRoute.get('/binh-luan', getBinhLuan);
binhLuanRoute.post('/binh-luan', createBinhLuan);

module.exports = binhLuanRoute