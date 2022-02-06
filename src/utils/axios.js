import axios from 'axios'
// import cookie from 'js-cookie'
const service = axios.create({
	baseURL: process.env.NODE_ENV === 'development' ? '/api' : ''
})

service.interceptors.response.use(function (response){
	// 处理响应数据
	return response.data;
	},function (error){
	// 处理响应失败
	const response = error.response
  const data = response.data
	// if(response.status === 401) {
	// 	cookie.remove('token')
	// }
	// if(data.message === 'token失效') {
	// 	cookie.remove('token')
	// }
	alert(data.message)
	return Promise.reject(error) 

	});
	
export default {
	...service,
	get(url,params){
		return service.get(url,{params})
	} 
}