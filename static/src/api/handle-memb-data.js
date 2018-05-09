import Request from './../utils/request'

const deleteMembInfoApi = async (id ) => {
  let result = await Request.post({
    url: '/api/user/deleteMembInfo.json',
    data: id
  })
  return result
}

export  { deleteMembInfoApi,changeMembInfoApi }
