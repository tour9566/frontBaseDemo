import request from '../service'

// post接口
export const postQuery = data => request.post('test/query', { data })

//get接口
export const getQuery = data => request.get(`test/query?param1=${data.param1}&param2=${data.param2}`)