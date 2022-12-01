const express = require('express');
const binhLuanRoute = express.Router();
const {getBinhLuan, createBinhLuan, updateBinhLuan, deleteBinhLuan, getBinhLuanbyIdPhong} = require('../Controllers/binhLuanController');

binhLuanRoute.get('/binh-luan', getBinhLuan);
binhLuanRoute.get('/binh-luan/lay-binh-luan-theo-phong/:roomId', getBinhLuanbyIdPhong);
binhLuanRoute.post('/binh-luan', createBinhLuan);
binhLuanRoute.put('/binh-luan/:userId', updateBinhLuan);
binhLuanRoute.delete('/binh-luan/:userId/:roomId', deleteBinhLuan);

module.exports = binhLuanRoute