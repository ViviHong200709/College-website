/**
 * restful article 子路由
 */

const router = require('koa-router')()
const articleInfoController = require('./../controllers/article-info')

const routers = router
  .get('/getAllArticleData', articleInfoController.getAllArticleData)
  .get('/getApprovedArticleData', articleInfoController.getApprovedArticleData)
  .post('/upload.json', articleInfoController.uploadData)
  // .post('/fileupload.json', upload.single('file'))
  .post('/approveArticleData.json', articleInfoController.approveArticleData)
  .post('/rejectArticleData.json', articleInfoController.rejectArticleData)
module.exports=routers
