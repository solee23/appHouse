const asyncHandler = require('express-async-handler');
const db = require('../models');
const { throwErrorWithStatus } = require('../middlewares/errorHandler');
const { roles } = require('../utils/constant');

const insertRole = asyncHandler( async(req,res) => {
    const response = await db.Role.bulkCreate(roles)
    return res.json({
        success: Boolean(response),
        message: response ? 'Thành công.' : 'Thất bại.',
    });
});

module.exports = {
    insertRole
}