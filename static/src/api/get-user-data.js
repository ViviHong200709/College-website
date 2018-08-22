import Request from './../utils/request'


const getMembInfoApi = async (  ) => {
  let result = await Request.get({
    url: '/api/user/getMembInfo'
  })
  return result
}

export  { getMembInfoApi }
