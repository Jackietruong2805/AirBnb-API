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

const createBinhLuan = async (req, res) =>{
    try{
        let data = req.body;
        let {id_nguoidung, id_phong, ngay_binh_luan} = data;
        ngay_binh_luan = new Date(ngay_binh_luan);
        data = {...data, ngay_binh_luan};
        const isUserExist = await prisma.NguoiDung.findFirst({where: {id_nguoidung: +id_nguoidung}});
        const isPhongExist = await prisma.Phong.findFirst({where: {id_phong: +id_phong}});
        if(isUserExist){
            if(isPhongExist){
                const result = await prisma.BinhLuan.create({data});
                createSuccessCode(res, result, "Thêm bình luận thành công");
            }else{
                failCode(res, isPhongExist, "Phòng có id: " + id_phong + " không tồn tại");
            }
        }else{
            failCode(res, isUserExist, "User có id: " + id_nguoidung + " không tồn tại");
        }
    }catch(err){
        errorCode(res, err, "Lỗi backend");
    }
}

module.exports = {getBinhLuan, createBinhLuan}