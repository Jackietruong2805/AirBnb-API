const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { successCode, failCode, errorCode } = require("../ultis/response");

const getviTri = async (req, res) =>{
    try{
        const result = await prisma.ViTri.findMany();
        successCode(res, result, "Lấy thông tin thành công");
    }catch(err){
        errorCode(res, err, "Lỗi backend");
    }
}


module.exports = {getviTri}