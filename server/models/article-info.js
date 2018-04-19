
const dbUtils = require('./../utils/db-util')

const article = {

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
      'content',
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
        'content',
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
   * 数据库创建文章
   * @param  {object} model 文章数据模型
   * @return {object}       mysql执行结果
   */
  async create ( model ) {
    let result = await dbUtils.insertData( 'article', model )
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
      }
}

module.exports = article;
