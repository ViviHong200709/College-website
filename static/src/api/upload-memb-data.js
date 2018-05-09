import Request from './../utils/request'

const uploadUserDataApi = async ( userInfo ) => {
  let result = await Request.post({
    url: '/api/user/uploadUserData.json',
    data: userInfo
  })
  return result
}

export  { uploadUserDataApi }
