const validator = require('validator')
const articleModel = require('./../models/article-info')
// const articleCode = require('./../codes/article')

const article = {
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
    let resultData = await articleModel.create({
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
