const router = require('express').Router();
const ctrls = require('../controllers/auth');
const { stringReq, numberReq } = require('../middlewares/joiSchema');
const validateDTO = require('../middlewares/validation');

router.post("/", validateDTO(Joi.object({
    password: stringReq,
    name: stringReq,
    phone: numberReq
})), ctrls.register);

