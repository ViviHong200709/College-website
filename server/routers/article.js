/**
 * restful article 子路由
 */

const router = require('koa-router')()
const articleInfoController = require('./../controllers/article-info')
const multer = require('koa-multer')

//上传配置
const storage = multer.diskStorage({
  //文件保存路径
  destination: function(req, file, cb) {
    cb(null, 'static/upload/')
  },
  //修改文件名称
  filename: function(req, file, cb) {
    var fileFormat = (file.originalname).split(".");
    cb(null, Date.now() + "." + fileFormat[fileFormat.length - 1]);
  }
})
const limits = {
  fieldSize: '2MB',
  files: 5
}
//加载配置
const upload = multer({storage: storage, limits: limits});

const routers = router
  .get('/getAllArticleData', articleInfoController.getAllArticleData)
  .get('/getApprovedArticleData', articleInfoController.getApprovedArticleData)
  .get('/getPatentInfo', articleInfoController.getPatentInfo)
  .get('/getCopyrightInfo', articleInfoController.getCopyrightInfo)
  .get('/getArticleByUsername',articleInfoController.getArticleByUsername)
  .post('/upload.json', articleInfoController.uploadData)
  .post('/uploadPatentData.json', articleInfoController.uploadPatentData)
  .post('/uploadCopyrightData.json', articleInfoController.uploadCopyrightData)
  .post('/deletePatentInfo.json', articleInfoController.deletePatentInfo)
  .post('/deleteCopyrightInfo.json', articleInfoController.deleteCopyRightInfo)
  .post('/approveArticleData.json', articleInfoController.approveArticleData)
  .post('/rejectArticleData.json', articleInfoController.rejectArticleData)
  .post('/fileupload.json', upload.single('file'),  articleInfoController.uploadData)
module.exports=routers
