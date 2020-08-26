import request from '../service'

// post 接口
export const postQuery= data => request.post('home/queryByObj', { data })

//get 接口
export const getQuery = data => request.get(`home/queryByParam?param1=${data.param1}&param2=${data.param2}`)
