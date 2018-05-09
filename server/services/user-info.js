/**
 * 用户业务操作
 */

const validator = require('validator')
const userModel = require('./../models/user-info')
const userCode = require('./../codes/user')

const user = {

  /**
   * 录入成员数据
   * @param  {object} user 用户信息
   * @return {object}      创建结果
   */
  async create( user ) {
    let result = await userModel.create('memb_info',user)
    return result
  },

  /**
   * 录入成员职称
   * @param  {object} user 用户信息
   * @return {object}      创建结果
   */
  async createProfessionTitle( user ) {
    let result = await userModel.create('profession_title',user)
    return result
  },


  /**
   * 获取成员数据
   * @param  {object} user 用户信息
   * @return {object}      创建结果
   */
  async  getMembInfo() {
    let result = await userModel.getMembInfo()
    return result
  },

  /**
   * 获取成员职称数据
   * @param  {object} user 用户信息
   * @return {object}      创建结果
   */
  async  getProfessionTitle() {
    let result = await userModel.getProfessionTitle()
    return result
  },

  /**
   * 查找存在用户信息
   * @param  {object} formData 查找的表单数据
   * @return {object|null}      查找结果
   */
  async getExistOne( formData ) {
    let resultData = await userModel.getExistOne({
      'email': formData.email,
      'name': formData.userName
    })
    return resultData
  },



  /**
   * 登录业务操作
   * @param  {object} formData 登录表单信息
   * @return {object}          登录业务操作结果
   */
  async signIn( formData ) {
    let resultData = await userModel.getOneByUserNameAndPassword({
      'password': formData.password,
      'name': formData.userName})
    return resultData
  },


  /**
   * 根据用户名查找用户业务操作
   * @param  {string} userName 用户名
   * @return {object|null}     查找结果
   */
  async getUserInfoByUserName( userName ) {

    let resultData = await userModel.getUserInfoByUserName( userName ) || {}
    // let userInfo = {
    //   // id: resultData.id,
    //   email: resultData.email,
    //   userName: resultData.name,
    //   detailInfo: resultData.detail_info,
    //   createTime: resultData.create_time
    // }
    return userInfo
  },


  /**
   * 检验用户注册数据
   * @param  {object} userInfo 用户注册数据
   * @return {object}          校验结果
   */
  validatorSignUp( userInfo ) {
    let result = {
      success: false,
      message: '',
    }

    if ( /[a-z0-9\_\-]{6,16}/.test(userInfo.userName) === false ) {
      result.message = userCode.ERROR_USER_NAME
      return result
    }
    if ( !validator.isEmail( userInfo.email ) ) {
      result.message = userCode.ERROR_EMAIL
      return result
    }
    if ( !/[\w+]{6,16}/.test( userInfo.password )  ) {
      result.message = userCode.ERROR_PASSWORD
      return result
    }
    if ( userInfo.password !== userInfo.confirmPassword ) {
      result.message = userCode.ERROR_PASSWORD_CONFORM
      return result
    }

    result.success = true

    return result
  },
  /**
   * 删除制定成员的信息
   * @param  {object} userInfo 用户注册数据
   * @return {object}          校验结果
   */
  async deleteMembInfo(formData){
    let resultData = await userModel.deleteMembInfo(formData);
    return resultData
  }
}

module.exports = user
