
const auth = require('./auth');
const user = require('./user');
const role = require('./insertRole');


const {errHandler, badRequest} = require('../middlewares/errorHandler')

const initRoutes = (app) => {
    app.use('/api/auth', auth)
    app.use('/api/user', user)
    app.use('/api/role', role)

    app.use(badRequest)
    app.use(errHandler)
};

module.exports = initRoutes;