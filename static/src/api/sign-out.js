import Request from './../utils/request'

const signOutApi = async (  ) => {
  console.log('hhh');
  let result = await Request.get({
    url: '/api/user/signOut'
  })
  return result
}

export  { signOutApi }
