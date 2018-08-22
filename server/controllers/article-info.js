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
       * 获取指定作者文章列表
       *@param {object} ctx 上下文对象
       */
  async getArticleByUsername(ctx) {
    let url = ctx.request.url;
    let username =url.slice(url.indexOf('=')+1);
    let result = {
      success: false,
      message: 'userCode.FAIL_USER_NO_LOGIN',
      data: null,
      code: ''
    }
    let articleResult = await articleInfoService.getArticleByUsername(username);
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
  },
  /**
    *录入专利信息
    *@param   {object} ctx 上下文对象
    */
    async uploadPatentData(ctx){
      let formData=ctx.request.body;
      let result = {
        success: false,
        message: '',
        data: null
      }
      console.log(formData,'formData');

      let patentResult = await articleInfoService.createPatent(formData)
      if (patentResult) {
        result.success = true
      } else {
        result.message = userCode.ERROR_SYS
      }
      ctx.body=result
    },
    /**
      *录入软件著作权信息
      *@param   {object} ctx 上下文对象
      */
      async uploadCopyrightData(ctx){
        let formData=ctx.request.body;
        let result = {
          success: false,
          message: '',
          data: null
        }
        let copyrightResult = await articleInfoService.createCopyright(formData)
        if (copyrightResult) {
          result.success = true
        } else {
          result.message = userCode.ERROR_SYS
        }
        ctx.body=result
      },
      /**
       * 获取所有专利信息
       * @param    {obejct} ctx 上下文对象
       */
      async getPatentInfo(ctx){
        let result = {
          success: false,
          message: '',
          data: null
        };
        let patentInfoResult= await articleInfoService.getPatentInfo();
        if (patentInfoResult&&patentInfoResult.length!=0) {
          result.data=patentInfoResult;
          result.success=true;
        }
        ctx.body=result;
      },
      /**
       * 根据id删除专利信息
       * @param  {obejct} ctx 上下文对象
       */
       async deletePatentInfo(ctx){
         let formData = ctx.request.body
         let result = {
           success: false,
           message: '',
           data: null,
           code: ''
         }
         let deleteResult = await articleInfoService.deletePatentInfo(formData);
         if (deleteResult) {
           result = {
             success: true,
             message: '',
             data: deleteResult,
             code: ''
           }
           ctx.body = result;
         }
       },
       /**
        * 获取所有软件著作权信息
        * @param    {obejct} ctx 上下文对象
        */
       async getCopyrightInfo(ctx){
         let result = {
           success: false,
           message: '',
           data: null
         };
         let copyrightInfoResult= await articleInfoService.getCopyrightInfo();
         if (copyrightInfoResult&&copyrightInfoResult.length!=0) {
           result.data=copyrightInfoResult;
           result.success=true;
         }
         ctx.body=result;
       },
       /**
        * 根据id删除软件著作权信息
        * @param  {obejct} ctx 上下文对象
        */
        async deleteCopyRightInfo(ctx){
          let formData = ctx.request.body
          let result = {
            success: false,
            message: '',
            data: null,
            code: ''
          }
          let deleteResult = await articleInfoService.deleteCopyrightInfo(formData);
          if (deleteResult) {
            result = {
              success: true,
              message: '',
              data: deleteResult,
              code: ''
            }
            ctx.body = result;
          }
        }
}
