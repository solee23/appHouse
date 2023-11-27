const asyncHandler = require('express-async-handler');
const db = require('../models');
const { throwErrorWithStatus } = require('../middlewares/errorHandler');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const getDetailUser = asyncHandler( async(req,res) => {
    const { uid, role } = req.user;
    const response = await db.User.findByPk(uid,{
        attributes: {
            exclude: ['password', 'role']
        }
    })
    return res.json({
        success: Boolean(response),
        message: response ? 'Thành công.' : 'Thất bại',
        data: response
    });
});

module.exports = {
    getDetailUser
}