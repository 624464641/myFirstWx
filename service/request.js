import { brasURL} from './config.js'

export default function( options){
  console.info(brasURL) 
   return new Promise ((resolve , reject) => {
     wx.request({
       url: brasURL + options.url,
       data: options.data || {},
       method: options.method || 'get',
       success: resolve,
       fail: reject
     })
   })
  
}