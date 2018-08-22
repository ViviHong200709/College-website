
const dbUtils = require('./../utils/db-util')

const article = {
  /**
   * 删除已知ID的软件著作权信息
   * @return {object|null}     查找结果
   */
    async deleteCopyrightInfo(model) {

      let result = await dbUtils.deleteDataById('software_copyright',model.id);
      if (result){
      } else {
        result = null
      }
      return result
    },
  /**
   * 查找所有软件著作权信息
   * @return {object|null}     查找结果
   */
  async getCopyrightInfo(  ) {

    let result = await dbUtils.select(
      'software_copyright',
      ['id', 'name', 'reg_id'])
    if ( Array.isArray(result) && result.length > 0 ) {
    } else {
      result = null
    }
    return result
  },
  /**
   * 删除已知ID的专利信息
   * @return {object|null}     查找结果
   */
    async deletePatentInfo(model) {

      let result = await dbUtils.deleteDataById('patent',model.id);
      if (result){
      } else {
        result = null
      }
      return result
    },
  /**
   * 查找所有专利信息
   * @return {object|null}     查找结果
   */
  async getPatentInfo(  ) {

    let result = await dbUtils.select(
      'patent',
      ['id', 'name', 'apl_id'])
    if ( Array.isArray(result) && result.length > 0 ) {
    } else {
      result = null
    }
    return result
  },

/**
 * 获取全部文章信息
 * @return {object|null}     查找结果
 */
  async getAllArticle() {

    let result = await dbUtils.select('article', [
      'id',
      'title',
      'description',
      'author',
      'status',
      'post_time',
      'src'
    ])
    if (Array.isArray(result) && result.length > 0) {
      console.log(result);
    } else {
      result = null
    }
    return result
  },
  /**
   * 获取已审核文章信息
   * @return {object|null}     查找结果
   */
    async getApprovedArticle() {

      let result = await dbUtils.selectDataByStatus('article', [
        'id',
        'title',
        'description',
        'author',
        'status',
        'post_time',
        'src',
      ],'approved')
      if (Array.isArray(result) && result.length > 0) {
        console.log(result);
      } else {
        result = null
      }
      return result
    },

/**
 * 获取已审核文章信息
 * @return {object|null}     查找结果
 */
  async getArticleByUsername(username) {
    let result = await dbUtils.selectDataByUsername('article', [
      'id',
      'title',
      'description',
      'author',
      'status',
      'post_time',
      'src',
    ],username)
    if (Array.isArray(result) && result.length > 0) {
      console.log(result);
    } else {
      result = null
    }
    return result
  },

  /**
   * 批准已知ID的文章
   * @return {object|null}     查找结果
   */
    async approveArticleData(model) {

      let result = await dbUtils.updateStatusById('article','approved',model.id);
      if (result && result.affectedRows === 1) {
      } else {
        result = null
      }
      return result
    },
    /**
     * 驳回已知ID的文章
     * @return {object|null}     查找结果
     */
      async rejectArticleData(model) {

        let result = await dbUtils.updateStatusById('article','unapproved',model.id);
        if (result && result.affectedRows === 1) {
        } else {
          result = null
        }
        return result
      },
      /**
       * 数据库录入专利数据
       * @param  {object} model 文章数据模型
       * @return {object}       mysql执行结果
       */
      async create ( table,model ) {
        let result = await dbUtils.insertData( table, model )
        return result
      }
}

module.exports = article;
