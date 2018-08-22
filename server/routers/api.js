/**
 * restful api 子路由
 */

const router = require('koa-router')()
const user = require('./user')
const article = require('./article')


const routers = router.use('/user', user.routes(), user.allowedMethods()).use('/article', article.routes(), article.allowedMethods())


module.exports = routers
