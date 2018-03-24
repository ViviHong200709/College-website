/**
 * restful api 子路由
 */

const router = require('koa-router')()
const user = require('./user')
const multer = require('koa-multer')
const article = require('./article')

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
const routers = router.use('/user', user.routes(), user.allowedMethods()).use('/article', article.routes(), article.allowedMethods())
.post('/fileupload.json', upload.single('file'), (ctx) => {
  console.log('fileUpload...');
  try {
      let fileName = ctx.req.file
      console.log('fileName',fileName);
      // let resData = {}
      // resData.fileName = fileName
      // resData.filePath = 'uploads/' + fileName
      ctx.body = {
        title: 'fileuploading... success'
      };
  } catch (e){
    console.log(e.toString());
    ctx.body = {
      title: 'fileuploading... fail'
    };
  }
});

module.exports = routers
