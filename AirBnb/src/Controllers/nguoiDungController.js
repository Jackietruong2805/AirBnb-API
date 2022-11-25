const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { successCode, failCode, errorCode } = require("../ultis/response");

const getUsers = async (req, res) => {
    try{
        const result = await prisma.NguoiDung.findMany();
        if(result){
            successCode(res, result, "Lấy danh sách users thành công");
        }else{
            failCode(res, result, "Lấy danh sách users thất bại");
        }
    }catch(err){
        errorCode(res, err, "Lỗi backend");
    }
};

const createUsers = async (req, res) =>{
    try{
        const data = req.body;
        const {email, phone} = data;
        const checkEmail = await prisma.NguoiDung.findFirst({where: {email}});
        const checkPhone = await prisma.NguoiDung.findFirst({where: {phone}});
        if(!checkEmail){
            if(!checkPhone){
                const result = await prisma.NguoiDung.create({data});
                if(result){
                    successCode(res, result, "Thêm user thành công");
                }else{
                    failCode(res, result, "thêm user thất bại");
                }
            }else{
                failCode(res, !checkPhone, "Số điện thoại này đã tồn tại");
            }
        }else{
            failCode(res, !checkEmail, "Email này đã tồn tại");
        }
    }catch(err){
        errorCode(res, err, "Lỗi backend");
    }
}



module.exports = {getUsers, createUsers}