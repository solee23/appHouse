
const errHandler = (error, req, res, next) => {
    const formatedMessage = error?.message?.replace(/\"/g, "");
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    return res.status(statusCode).json({
        success: false,
        message: formatedMessage
    });
}; 

const throwErrorWithStatus = (code, message, res, next) => {
    const formatedMessage = message?.replace(/\"/g, "");
    const error = new Error(formatedMessage);
    res.status(code);
    next(error); 
};

const badRequest = (req, res, next) => {
    const error = new Error(`Route ${req.originalUrl} not found.`);
    res.status(404);
    next(error)
}

module.exports = {
    errHandler,
    throwErrorWithStatus,
    badRequest

};