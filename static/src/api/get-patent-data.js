import Request from './../utils/request'


const getPatentInfoApi = async (  ) => {
  let result = await Request.get({
    url: '/api/article/getPatentInfo'
  })
  return result
}

export  { getPatentInfoApi }
