import Request from './../utils/request'

const uploadCopyrightDataApi = async ( userInfo ) => {
  let result = await Request.post({
    url: '/api/article/uploadCopyrightData.json',
    data: userInfo
  })
  return result
}

export  { uploadCopyrightDataApi }
