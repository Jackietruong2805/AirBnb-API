const {PrismaClient} = require('@prisma/client');
const { successCode, failCode } = require('../ultis/response');
const prisma = new PrismaClient();

const getDatPhong = async (req, res) =>{
    try{
        const result = await prisma.DatPhong.findMany();
        if(result){
            successCode(res, result, "Lấy thông tin đặt phòng thành công");
        }else{
            failCode(res, result, "Lấy thông tin đặt phòng thất bại");
        }
    }catch(err){
        errorCode(res, err, "Lỗi backend");
    }
}

module.exports = {getDatPhong}