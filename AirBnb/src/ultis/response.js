const successCode = (res, data, message)=>{
    res.status(200).json({
        message,
        content: data
    })
}

const createSuccessCode = (res, data, message)=>{
    res.status(201).json({message, content: data});
}

const failCode = (res, data, message)=>{
    res.status(400).json({
        message,
        content: data
    })
}

const errorCode = (res, err, message)=>{
    res.status(500).send("Lỗi: " + err, message)
}


module.exports = {
    successCode,
    failCode,
    errorCode,
    createSuccessCode
}