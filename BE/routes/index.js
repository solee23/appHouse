
const auth = require('./auth');
const {errHandler, badRequest} = require('../middlewares/errorHandler')

const initRoutes = (app) => {
    app.use('/api/auth', auth)

    app.use(badRequest)
    app.use(errHandler)
};

module.exports = initRoutes;