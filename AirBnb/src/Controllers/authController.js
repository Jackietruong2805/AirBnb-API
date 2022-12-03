const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();
const { successCode, failCode, errorCode, createSuccessCode } = require('../ultis/response');

const bcrypt = require('bcrypt');

const signUp = (req, res) =>{
    
}

const login = (req, res) =>{

}

module.exports = {signUp, login}