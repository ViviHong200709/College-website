import Request from './../utils/request'

const uploadApi = async ( userInfo ) => {
  console.log('UPLOADING');
  let result = await Request.post({
    url: '/api/article/upload.json',
    data: userInfo
  })
  return result
}

export  { uploadApi , signInForm }
