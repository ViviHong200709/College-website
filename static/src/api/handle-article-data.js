import Request from './../utils/request'

const approveArticleDataApi = async (id ) => {
  let result = await Request.post({
    url: '/api/article/approveArticleData.json',
    data: id
  })
  return result
}

const rejectArticleDataApi = async (id) => {
  let result = await Request.post({
    url: '/api/article/rejectArticleData.json',
    data:id
  })
  return result
}

export  { approveArticleDataApi,rejectArticleDataApi }
