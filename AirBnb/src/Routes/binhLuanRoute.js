const express = require('express');
const binhLuanRoute = express.Router();
const {successCode, failCode, errorCode, createSuccessCode} = require('../ultis/response');
const {getBinhLuan} = require('../Controllers/binhLuanController');

binhLuanRoute.get('/binh-luan', getBinhLuan);

module.exports = binhLuanRoute