const { throwErrorWithStatus } = require("./errorHandler");


const validateDTO = (schema) => (req, res, next) => {
    const {error} = schema.validate(req.body);
    if(error){
        const message = error.details[0].message?.replace(/\"/g, "")
        throwErrorWithStatus(401, message, res, next);
    }
       
       
    
    next();
};

module.exports = validateDTO;