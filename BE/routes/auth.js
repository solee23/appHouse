const router = require('express').Router();
const Joi = require('joi');
const ctrls = require('../controllers/auth');
const { stringReq, numberReq, string } = require('../middlewares/joiSchema');
const validateDTO = require('../middlewares/validation');

router.post("/register", validateDTO(Joi.object({
    name: stringReq,
    phone: numberReq,
    password: stringReq,
    roleCode: string
})), ctrls.register);

router.post("/login", validateDTO(Joi.object({
    phone: numberReq,
    password: stringReq
})), ctrls.login);

module.exports = router;

