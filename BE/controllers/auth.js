const asyncHandler = require('express-async-handler');
const db = require('../models');
const { throwErrorWithStatus } = require('../middlewares/errorHandler');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = asyncHandler( async(req,res) => {
    const { phone } = req.body;
    const response = await db.User.findOrCreate({
        where: { phone: phone},
        defaults: req.body
    });
    return res.json({
        success: response[1],
        mes: response[1] ? 'Register is successfully.' : 'Phone number already had exists.',
    });
});

const login = asyncHandler( async(req,res) => {
    const { phone, password } = req.body;
    const user = await db.User.findOne({
        where: {phone},
        defaults: req.body
    });
    const comparePass = bcrypt.compareSync(password, user.password)
    if(!user || ! comparePass) throwErrorWithStatus(401, 'Login failed.', res, next);
    const token = jwt.sign({uid: user.id, role: user.role}, process.env.JWT_SECRET, { expiresIn: '7d'})

    return res.json({
        success: true,
        message: 'Login is successfully.',
        accessToken: token
    });
});

module.exports = {
    register,
    login
};