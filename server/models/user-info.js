const dbUtils = require('./../utils/db-util')

const user = {

  /**
   * 数据库创建用户
   * @param  {object} model 用户数据模型
   * @return {object}       mysql执行结果
   */
  async create ( table,model ) {
    let result = await dbUtils.insertData( table, model )
    return result
  },

  /**
   * 查找一个存在用户的数据
   * @param  {obejct} options 查找条件参数
   * @return {object|null}        查找结果
   */
  async getExistOne(options ) {
    let _sql = `
    SELECT * from user_info
      where email="${options.email}" or name="${options.name}"
      limit 1`
    let result = await dbUtils.query( _sql )
    if ( Array.isArray(result) && result.length > 0 ) {
      result = result[0]
    } else {
      result = null
    }
    return result
  },

  /**
   * 根据用户名和密码查找用户
   * @param  {object} options 用户名密码对象
   * @return {object|null}         查找结果
   */
  async getOneByUserNameAndPassword( options ) {
    let _sql = `
    SELECT * from user_info
      where password="${options.password}" and name="${options.name}"
      limit 1`
    let result = await dbUtils.query( _sql );
    if ( Array.isArray(result) && result.length > 0 ) {
      result = result[0]
    } else{
      result = null
    }
    return result
  },

  /**
   * 根据用户名查找用户信息
   * @param  {string} userName 用户账号名称
   * @return {object|null}     查找结果
   */
  async getUserInfoByUserName( userName ) {

    let result = await dbUtils.select(
      'user_info',
      ['id', 'email', 'name', 'detail_info', 'create_time', 'modified_time', 'modified_time' ])
    if ( Array.isArray(result) && result.length > 0 ) {
      result = result[0]
    } else {
      result = null
    }
    return result
  },
  /**
   * 查找所有成员信息
   * @return {object|null}     查找结果
   */
  async getMembInfo(  ) {

    let result = await dbUtils.select(
      'memb_info',
      ['id', 'name', 'research_area'])
    if ( Array.isArray(result) && result.length > 0 ) {
    } else {
      result = null
    }
    return result
  },
  /**
   * 查找所有成员信息
   * @return {object|null}     查找结果
   */
  async getProfessionTitle(  ) {

    let result = await dbUtils.select(
      'profession_title',
      ['id', 'profession_title'])
    if ( Array.isArray(result) && result.length > 0 ) {
    } else {
      result = null
    }
    return result
  },
  /**
   * 删除已知ID的成员信息
   * @return {object|null}     查找结果
   */
    async deleteMembInfo(model) {

      let result1 = await dbUtils.deleteDataById('memb_info',model.id);
      let result2 = await dbUtils.deleteDataById('profession_title',model.id);
      if (result1 && result2 ){
      } else {
        result1 = null
      }
      return result1
    }
}

module.exports = user
