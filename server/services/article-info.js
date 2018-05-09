const validator = require('validator')
const articleModel = require('./../models/article-info')
// const articleCode = require('./../codes/article')

const article = {
  /**
   * 删除指定软件著作权的信息
   * @return {object}          校验结果
   */
  async deleteCopyrightInfo(formData){
    let resultData = await articleModel.deleteCopyrightInfo(formData);
    return resultData
  },
  /**
   * 获取软件著作权数据
   * @return {object}      创建结果
   */
  async  getCopyrightInfo() {
    let result = await articleModel.getCopyrightInfo()
    return result
  },
  /**
   * 删除指定专利的信息
   * @param  {object} userInfo 用户注册数据
   * @return {object}          校验结果
   */
  async deletePatentInfo(formData){
    let resultData = await articleModel.deletePatentInfo(formData);
    return resultData
  },
  /**
   * 获取专利数据
   * @return {object}      创建结果
   */
  async  getPatentInfo() {
    let result = await articleModel.getPatentInfo()
    return result
  },

  /**
   * 录入专利数据
   * @param  {object} patent 专利信息
   * @return {object}      创建结果
   */
  async createPatent( patent ) {
    let result = await articleModel.create('patent',patent)
    return result
  },

  /**
   * 录入软件著作权数据
   * @param  {object} copyright 软件著作权信息
   * @return {object}      创建结果
   */
  async createCopyright( copyright ) {
    let result = await articleModel.create('software_copyright',copyright)
    return result
  },
  async getAllArticle() {
    let resultData = await articleModel.getAllArticle();
    return resultData
  },

  async getApprovedArticle() {
    let resultData = await articleModel.getApprovedArticle();
    return resultData
  },

  async getArticleByUsername(formData) {
    let resultData = await articleModel.getArticleByUsername(formData);
    return resultData
  },

  async uploadData(formData) {
    let resultData = await articleModel.create('article',{
      'title': formData.title,
      'description': formData.description,
      'author':formData.author,
      'content':formData.content,
      'src':formData.src,
      'status':'unapproved'
    });
    return resultData
  },

  async approveArticleData(formData){
    let resultData = await articleModel.approveArticleData(formData);
    return resultData
  },

  async rejectArticleData(formData){
    let resultData = await articleModel.rejectArticleData(formData);
    return resultData
  }
}
module.exports = article;
