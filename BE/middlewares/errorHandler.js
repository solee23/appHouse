

const errHandler = (error, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    return res.status(statusCode).json({
        success: false,
        mes: error.message
    });
}; 

const throwErrorWithStatus = (code, mes, res, next) => {
    const error = new Error(mes);
    res.status(code);
    next(error); 
};

module.exports = {
    errHandler,
    throwErrorWithStatus

};