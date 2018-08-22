import Request from './../utils/request'

// const isTeacherLoginApi = async () => {
//   let result = await Request.get({url: '/api/user/isTeacherLogin'})
//   return result
// }
//
// const isAdminLoginApi = async () => {
//   let result = await Request.get({url: '/api/user/isAdminLogin'})
//   return result
// }
//
// const isLeaderLoginApi = async () => {
//   let result = await Request.get({url: '/api/user/isLeaderLogin'})
//   return result
// }

const isUserLoginApi = async () => {
  let result = await Request.get({url: '/api/user/isUserLogin'})
  return result
}
export {
  isAdminLoginApi,
  isTeacherLoginApi,
  isLeaderLoginApi,
  isUserLoginApi
}
