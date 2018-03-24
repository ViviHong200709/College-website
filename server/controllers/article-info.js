const articleInfoService = require('./../services/article-info')

module.exports = {

  /**
       * 获取所有文章列表
       *@param {object} ctx 上下文对象
       */
  async getAllArticleData(ctx) {
    let result = {
      success: false,
      message: 'userCode.FAIL_USER_NO_LOGIN',
      data: null,
      code: 'FAIL_USER_NO_LOGIN'
    }
    let articleResult = await articleInfoService.getAllArticle();
    if (Array.isArray(articleResult) && articleResult.length > 0) {
      result = {
        success: true,
        message: '',
        data: articleResult,
        code: ''
      }
    }
    ctx.body = result
  },

  /**
       * 获取已被审核文章列表
       *@param {object} ctx 上下文对象
       */
  async getApprovedArticleData(ctx) {
    let result = {
      success: false,
      message: 'userCode.FAIL_USER_NO_LOGIN',
      data: null,
      code: 'FAIL_USER_NO_LOGIN'
    }
    let articleResult = await articleInfoService.getApprovedArticle();
    if (Array.isArray(articleResult) && articleResult.length > 0) {
      result = {
        success: true,
        message: '',
        data: articleResult,
        code: ''
      }
    }
    ctx.body = result
  },

  /**
       * 上传文章列表
       *@param {object} ctx 上下文对象
       */
  async uploadData(ctx) {
    let formData = ctx.req.body;
    let filename = ctx.req.file.filename
    formData.src = filename
    let uploadResult = await articleInfoService.uploadData(formData)
    if (uploadResult) {
      ctx.redirect('/upload_success');
    }
  },

  /**
       * 批准当前文章
       *@param {object} ctx 上下文对象
       */
  async approveArticleData(ctx) {
    let formData = ctx.request.body
    let result = {
      success: false,
      message: '',
      data: null,
      code: ''
    }
    let approveResult = await articleInfoService.approveArticleData(formData);
    if (approveResult) {
      result = {
        success: true,
        message: '',
        data: approveResult,
        code: ''
      }
      ctx.body = result;
    }
  },

  /**
       * 驳回当前文章
       *@param {object} ctx 上下文对象
       */
  async rejectArticleData(ctx) {
    let formData = ctx.request.body
    let result = {
      success: false,
      message: '',
      data: null,
      code: ''
    }
    let approveResult = await articleInfoService.rejectArticleData(formData);
    if (approveResult) {
      result = {
        success: true,
        message: '',
        data: approveResult,
        code: ''
      }
      ctx.body = result;
    }
  }
}
