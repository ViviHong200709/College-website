/**
 * restful user 子路由
 */

const router = require('koa-router')()
const userInfoController = require('./../controllers/user-info')

const routers = router
  .get('/getUserInfo.json', userInfoController.getLoginUserInfo)
  .post('/signIn.json', userInfoController.signIn)
  .post('/signUp.json', userInfoController.signUp)
  .post('/uploadUserData.json',userInfoController.uploadUserData)
  // .get('/isTeacherLogin', userInfoController.isTeacherLogin)
  // .get('/isAdminLogin', userInfoController.isAdminLogin)
  // .get('/isLeaderLogin', userInfoController.isLeaderLogin)
  .get('/getMembInfo', userInfoController.getMembInfo)
  .post('/deleteMembInfo.json', userInfoController.deleteMembInfo)
  .get('/isUserLogin', userInfoController.isUserLogin)
  .get('/signOut', userInfoController.signOut)
module.exports=routers
