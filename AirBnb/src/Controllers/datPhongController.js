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

const getDatPhongById = async (req, res) =>{
    try{
        const {id_nguoidung, id_phong} = req.params;
        const result = await prisma.DatPhong.findFirst({where: {id_nguoidung: +id_nguoidung, id_phong: +id_phong}});
        if(result){
            successCode(res, result, "Lấy Phòng đặt thành công");
        }else{
            failCode(res, result, "Lấy đặt phòng thất bại");
        }
    }catch(err){
        errorCode(res, err, "Lỗi backend");
    }
}

const createDatPhong = async (req, res) =>{
    try{
        let data = req.body;
        const {id_nguoidung, id_phong, ngay_den, ngay_di} = data;
        console.log(id_nguoidung, id_phong);
        ngayDenFormat = new Date(ngay_den);
        ngayDiFormat = new Date(ngay_di);
        data = {...data, ngay_den: ngayDenFormat, ngay_di: ngayDiFormat};
        const checkIdUser = await prisma.NguoiDung.findFirst({where: {id_nguoidung: +id_nguoidung}});
        const checkIdPhong = await prisma.Phong.findFirst({where: {id_phong: +id_phong}});
        const isIdAlReadyExist = await prisma.DatPhong.findFirst({where: {id_nguoidung: +id_nguoidung, id_phong: +id_phong}});
        if(!isIdAlReadyExist){
            if(checkIdUser){
                if(checkIdPhong){
                    const result = await prisma.DatPhong.create({data});
                    createSuccessCode(res, result, "Thêm đặt phòng thành công");
                }else{
                    failCode(res, checkIdPhong, "Phòng có id: " + id_phong + " không tồn tại");
                }
            }else{
                failCode(res, checkIdUser, "Người Dùng có id: " + id_nguoidung + " không tồn tại");
            }
        }else{
            failCode(res, isIdAlReadyExist, "Đặt Phòng đã tồn tại");
        }
    }catch(err){
        errorCode(res, err, "Lỗi backend");
    }
}

module.exports = {getDatPhong, createDatPhong, getDatPhongById}