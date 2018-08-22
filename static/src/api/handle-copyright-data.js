import Request from './../utils/request'

const deleteCopyrightInfoApi = async (id ) => {
  let result = await Request.post({
    url: '/api/article/deleteCopyrightInfo.json',
    data: id
  })
  return result
}

export  { deleteCopyrightInfoApi }
