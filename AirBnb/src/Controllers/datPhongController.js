const {PrismaClient} = require('@prisma/client');
const { successCode, failCode, errorCode, createSuccessCode } = require('../ultis/response');
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

const createDatPhong = async (req, res) =>{
    try{
        let data = req.body;
        const {id_nguoidung, id_phong, ngay_den, ngay_di} = data;
        ngay_den_format = new Date(ngay_den);
        ngay_di_format = new Date(ngay_di);
        data = {...data, ngay_den: ngay_den_format, ngay_di: ngay_di_format};
        const checkIdUser = await prisma.NguoiDung.findFirst({where: {id_nguoidung: +id_nguoidung}})
        const checkIdPhong = await prisma.Phong.findFirst({where: {id_phong: +id_phong}})
        if(checkIdUser){
            if(checkIdPhong){
                const result = await prisma.DatPhong.create({data});
                if(result){
                    createSuccessCode(res, result, "Thêm đặt phòng thành công");
                }else{
                    failCode(res, result, "Thêm phòng đặt thất bại");
                }
            }else{
                failCode(res, checkIdPhong, "Phòng có id: " + id_phong + " không tồn tại");
            }
        }else{
            failCode(res, checkIdUser, "Người Dùng có id: " + id_nguoidung + " không tồn tại");
        }
    }catch(err){
        errorCode(res, err, "Lỗi backend");
    }
}


module.exports = {getDatPhong, createDatPhong}