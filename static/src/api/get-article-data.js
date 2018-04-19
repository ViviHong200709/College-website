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

const getArticleByUsername =async (userName)=>{
  let result = await Request.get({
    url: `/api/article/getArticleByUsername?username=${userName}`
    // data:userName
  })
  return result
}

export  { getApprovedArticleDataApi,getAllArticleDataApi,getArticleByUsername }
