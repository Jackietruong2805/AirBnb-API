const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();
const { successCode, failCode, errorCode, createSuccessCode } = require('../ultis/response');


const getBinhLuan = async (req, res) =>{
    try{
        const result = await prisma.BinhLuan.findMany();
        if(result){
            successCode(res, result, "Lấy bình luận thành công");
        }else{
            failCode(res, result, "Lấy bình luận thất bại");
        }
    }catch(err){
        errorCode(res, err, "Lỗi backend");
    }
}

module.exports = {getBinhLuan}