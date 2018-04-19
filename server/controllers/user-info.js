const userInfoService = require('./../services/user-info')
const userCode = require('./../codes/user')

module.exports = {

  /**
   * 登录操作
   * @param  {obejct} ctx 上下文对象
   */
  async signIn(ctx) {
    let formData = ctx.request.body
    let result = {
      success: false,
      message: '',
      data: null,
      code: ''
    }

    let userResult = await userInfoService.signIn(formData)
    console.log('userResult',userResult);
    if (userResult) {
        result.success = true
    } else {
      result.message = userCode.FAIL_USER_NAME_OR_PASSWORD_ERROR
      result.code = 'FAIL_USER_NAME_OR_PASSWORD_ERROR'
    }

    if (formData.source === 'form' && result.success === true) {
      let session = ctx.session
      session.isLogin = true
      session.userName = userResult.name
      session.userId = userResult.id;
      session.role = userResult.role;
      if (userResult.role=='admin') {
        ctx.redirect('/verify');
      }else if (userResult.role=='teacher') {
        ctx.redirect('/upload');
      }else if (userResult.role=='leader') {
        ctx.redirect('/check');
      }
    } else {
      ctx.body = result;
    }
  },

  /**
   * 注册操作
   * @param   {obejct} ctx 上下文对象
   */
  async signUp(ctx) {
    let formData = ctx.request.body
    let result = {
      success: false,
      message: '',
      data: null
    }

    let validateResult = userInfoService.validatorSignUp(formData)

    if (validateResult.success === false) {
      result = validateResult
      ctx.body = result
      return
    }

    let existOne = await userInfoService.getExistOne(formData)
    console.log(existOne)

    if (existOne) {
      if (existOne.name === formData.userName) {
        result.message = userCode.FAIL_USER_NAME_IS_EXIST
        ctx.body = result
        return
      }
      if (existOne.email === formData.email) {
        result.message = userCode.FAIL_EMAIL_IS_EXIST
        ctx.body = result
        return
      }
    }

    let userResult = await userInfoService.create({email: formData.email, password: formData.password, name: formData.userName, create_time: new Date().getTime(), level: 1})

    console.log(userResult)

    if (userResult && userResult.insertId * 1 > 0) {
      result.success = true
    } else {
      result.message = userCode.ERROR_SYS
    }

    ctx.body = result
  },

  /**
   * 获取用户信息
   * @param    {obejct} ctx 上下文对象
   */
  async getLoginUserInfo(ctx) {
    let session = ctx.session
    let isLogin = session.isLogin
    let userName = session.userName

    console.log('session=', session)

    let result = {
      success: false,
      message: '',
      data: null
    }
    if (isLogin === true && userName) {
      let userInfo = await userInfoService.getUserInfoByUserName(userName)
      if (userInfo) {
        result.data = userInfo
        result.success = true
      } else {
        result.message = userCode.FAIL_USER_NO_LOGIN
      }
    } else {
      // TODO
    }

    ctx.body = result
  },

  /**
   * 校验用户是否登录
   * @param  {obejct} ctx 上下文对象
   */
   isUserLogin(ctx) {
    let result = {
      success: false,
      message: userCode.FAIL_USER_NO_LOGIN,
      data: null,
      code: 'FAIL_USER_NO_LOGIN'
    }
    let session = ctx.session
    let userName = session.userName
    if (session && session.isLogin === true) {
      result.success = true
      result.message = ''
      result.data=session;
      result.code = ''
    }
    ctx.body = result;
  },

  /**
   * 退出登录
   * @param  {obejct} ctx 上下文对象
   */
   signOut(ctx) {
     console.log('signOut.....');
    let result = {
      success: false,
      message: userCode.FAIL_USER_NO_LOGIN,
      data: null,
      code: 'FAIL_USER_NO_LOGIN'
    }
    ctx.session=null;
    let session=ctx.session;
    if (!session ) {
      result.success = true
      result.message = ''
      result.data='';
      result.code = ''
    }
    ctx.body = result;
  },
 //  /**
 // * 校验管理员是否登录
 // *@param {object} ctx 上下文对象
 // */
 //  isAdminLogin(ctx) {
 //    let result = {
 //      success: false,
 //      message: userCode.FAIL_USER_NO_LOGIN,
 //      data: null,
 //      code: 'FAIL_USER_NO_LOGIN'
 //    }
 //    let session = ctx.session
 //    if (session && session.isLogin === true && session.role === 'admin') {
 //      result.success = true
 //      result.message = ''
 //      result.code = ''
 //    }
 //    ctx.body = result
 //  },
 //
 //  /**
 //   * 校验领导是否登录
 //   *@param {object} ctx 上下文对象
 //   */
 //  isLeaderLogin(ctx) {
 //    let result = {
 //      success: false,
 //      message: userCode.FAIL_USER_NO_LOGIN,
 //      data: null,
 //      code: 'FAIL_USER_NO_LOGIN'
 //    }
 //    let session = ctx.session
 //    if (session && session.isLogin === true && session.role === 'leader') {
 //      result.success = true
 //      result.message = ''
 //      result.code = ''
 //    }
 //    ctx.body = result
 //  },
 //  /**
 //   * 校验老师是否登录
 //   *@param {object} ctx 上下文对象
 //   */
 //  isTeacherLogin(ctx) {
 //    let result = {
 //      success: false,
 //      message: userCode.FAIL_USER_NO_LOGIN,
 //      data: null,
 //      code: 'FAIL_USER_NO_LOGIN'
 //    }
 //    let session = ctx.session
 //    if (session && session.isLogin === true && session.role === 'teacher') {
 //      result.success = true
 //      result.message = ''
 //      result.code = ''
 //    }
 //    ctx.body = result
 //  },

}
