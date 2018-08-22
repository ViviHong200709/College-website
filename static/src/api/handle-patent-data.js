import Request from './../utils/request'

const deletePatentInfoApi = async (id ) => {
  let result = await Request.post({
    url: '/api/article/deletePatentInfo.json',
    data: id
  })
  return result
}

export  { deletePatentInfoApi }
