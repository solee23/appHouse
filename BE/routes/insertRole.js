const router = require('express').Router();
const ctrls = require('../controllers/insertRole');
const {verifyToken} = require('../middlewares/verifyToken');

router.post("/", ctrls.insertRole);


module.exports = router