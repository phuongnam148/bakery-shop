const productRouter = require('./product')
const siteRouter = require('./site');
const adminRouter = require('./admin');
const APIRouter = require('./API')
const loginRouter = require('./login')

function route(app) {
    app.use('/product', productRouter)
    app.use('/admin', adminRouter)
    app.use('/api', APIRouter)
    app.use('/login', loginRouter)
    app.use('/', siteRouter)

}

module.exports = route;
// export default route;
