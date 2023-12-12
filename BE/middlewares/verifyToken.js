const db = require("../models")
const { throwErrorWithStatus } = require("./errorHandler")
const jwt = require('jsonwebtoken')


const verifyToken = (req, res, next) => {



    const token = req.headers?.authorization?.startsWith("Bearer")
    if(!token) return throwErrorWithStatus(401, 'Không tìm thấy token.',res, next)

    const decodeToken =  req.headers?.authorization?.split(" ")[1]
    
    jwt.verify(decodeToken, process.env.JWT_SECRET, (err, decode) => {
        if(err) return throwErrorWithStatus(401, 'Lỗi xác thực.', res, next)
        req.user = decode
        next()
    })
}

const isAdim = async(req, res, next) => {
    const {roleCode} = req.user
    if(roleCode !== 'Role1'){
        return throwErrorWithStatus(401, 'Không có quyền truy cập.', res, next)
    }
    next()
}

const isAgent = async(req, res, next) => {
    const {roleCode} = req.user
    if(roleCode === 'Role7'){
        return throwErrorWithStatus(401, 'Không có quyền truy cập.', res, next)
    }
    next()
}

const isOwner = async(req, res, next) => {
    const {roleCode} = req.user
    if(roleCode === 'Role5' || roleCode === 'Role7'){
        return throwErrorWithStatus(401, 'Không có quyền truy cập.', res, next)
    }
    next()
}

module.exports = {
    verifyToken,
    isAgent,
    isAdim,
    isOwner
}