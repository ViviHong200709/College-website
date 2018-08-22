import Request from './../utils/request'


const getCopyrightInfoApi = async (  ) => {
  let result = await Request.get({
    url: '/api/article/getCopyrightInfo'
  })
  return result
}

export  { getCopyrightInfoApi }
