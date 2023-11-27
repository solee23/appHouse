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

module.exports = {
    verifyToken
}