import Request from './../utils/request'

const uploadPatentDataApi = async ( userInfo ) => {
  let result = await Request.post({
    url: '/api/article/uploadPatentData.json',
    data: userInfo
  })
  return result
}

export  { uploadPatentDataApi }
