import Request from './../utils/request'

const getApprovedArticleDataApi = async (  ) => {
  let result = await Request.get({
    url: '/api/article/getApprovedArticleData'
  })
  return result
}

const getAllArticleDataApi = async (  ) => {
  let result = await Request.get({
    url: '/api/article/getAllArticleData'
  })
  return result
}

export  { getApprovedArticleDataApi,getAllArticleDataApi }
