const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { successCode, failCode, errorCode } = require("../ultis/response");

const getPhong = async (req, res) => {
    try {
        const result = await prisma.Phong.findMany();

        successCode(res, result, "Lấy thông tin thành công");
    } catch (err) {
        errorCode(res, err, "Lỗi backend");
    }
};

const createPhong = async (req, res) => {
    try {
        const data = req.body;
        const {id_phong} = req.body;
        const checkPhong = await prisma.Phong.findMany({where: {id_phong}})
        if(checkPhong){
            failCode(res, !checkPhong, "Phòng đã tồn tại");
        }else{
            const result = await prisma.Phong.create({data});
            successCode(res, result, "Thêm Phòng Thành công");
        }

    } catch (err) {
        errorCode(res, err, "Lỗi backend");
     }
};

const getPhongByVitri = async (req, res) =>{
    try{
        const {id_vitri} = req.body;
        const result = await prisma.Phong.findMany({where: {id_vitri}})
        successCode(res, result, "Lấy thông tin  thành công");
        
    }catch(err){
        errorCode(res, err, "Lỗi backend");

    }
}

const getPhongById = async (req, res) =>{
    try{
        const {id} = req.params;
        const result = await prisma.Phong.findFirst({where: {id_phong: +id}})
        successCode(res, result, "Lấy thông tin thành công");
    }catch(err){
        errorCode(res, err, "Lỗi backend");

    }
}

const updatePhong = async (req, res) =>{
    try{
        const {id} = req.params;
        const {ten_phong, khach, phong_ngu, giuong, phong_tam, mo_ta, gia_tien, may_giat, ban_la, tivi, dieu_hoa, wifi, bep, do_xe, ho_boi, ban_ui, hinh_anh, id_vitri} = req.body;
        const checkPhong = await prisma.Phong.findFirst({where: {id_phong: +id}});
        if(checkPhong){
            const result = await prisma.Phong.update({
                where: {
                    id_phong: +id
                },
                data: {
                    ten_phong, khach, phong_ngu, giuong, phong_tam, mo_ta, gia_tien, may_giat, ban_la, tivi, dieu_hoa, wifi, bep, do_xe, ho_boi, ban_ui, hinh_anh, id_vitri
            }});

            successCode(res, result, "Cập nhật thông tin thành công");
        } else{
            failCode(res, checkPhong, "Phòng không tồn tại");
        }
    }catch(err){
        errorCode(res, err, "Lỗi backend");
    }
}

const deletePhong = async (req, res) =>{
    try{
        const {id} = req.params;
        const checkPhong = await prisma.Phong.findFirst({where: {id_phong: +id}});
        if(checkPhong){
            const result = await prisma.Phong.delete({where: {id_phong: +id}});
            successCode(res, result, "Xóa thông tin thành công");
        }else{
            failCode(res, checkPhong, "không tồn tại id: " + id);
        }
    }catch(err){
        errorCode(res, err, "Lỗi backend");
    }
}





module.exports = { getPhong, createPhong, getPhongByVitri, getPhongById, updatePhong, deletePhong};
