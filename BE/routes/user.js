const router = require('express').Router();
const ctrls = require('../controllers/user');
const {verifyToken} = require('../middlewares/verifyToken');

router.get("/detail", verifyToken, ctrls.getDetailUser);


module.exports = router