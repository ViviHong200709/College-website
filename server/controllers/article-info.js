const articleInfoService = require('./../services/article-info')
// const articleCode = require('./../codes/article')

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
    let formData = ctx.request.body
    // console.log('formData：',formData);
    let result = {
      success: false,
      message: '',
      data: null,
      code: ''
    }
    let uploadResult = await articleInfoService.uploadData(formData)
    console.log('uploadResult:',uploadResult);

    ctx.body=uploadResult;
  },


/**
     * 上传文件列表
     *@param {object} ctx 上下文对象
     */
 fileUploadData(ctx) {
  console.log('ctx.request:',ctx.request);
  let formData = ctx.request.body
  console.log('formData',formData);
  // console.log(formData.get('files'));
  let result = {
    success: false,
    message: '',
    data: null,
    code: ''
  }
  // let uploadResult = await articleInfoService.uploadData(formData)
  // console.log('uploadResult:',uploadResult);

  ctx.body=result;
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
