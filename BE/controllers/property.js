const asyncHandler = require('express-async-handler');
const db = require('../models');
const { throwErrorWithStatus } = require('../middlewares/errorHandler');

const create = asyncHandler( async(req,res) => {
    const { uid, role } = req.user;
    const response = await db.User.create()
    return res.json({
        success: Boolean(response),
        message: response ? 'Thành công.' : 'Thất bại',
        data: response
    });
});

module.exports = {
    getDetailUser
}