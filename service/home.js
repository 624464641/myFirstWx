import request from './request.js'

export function getMutilData(){
  return request({
    url:'/home/multidata'
  })
}