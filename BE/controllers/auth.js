const asyncHandler = require('express-async-handler');

const register = asyncHandler( async(req,res) => {
    const {name, phone, password, role} = req.body;

    return res.status(200).json({
        sucess: true,
        data: {name, phone, password, role}
    });
});

module.exports = {
    register
};