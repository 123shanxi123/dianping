import AMap from "AMap";
export default (Vue) => {
  Vue.prototype.$map = {
		geolocation() {		
			return new Promise((resolve,reject) => {
				AMap.plugin('AMap.Geolocation', () => {
					var geolocation = new AMap.Geolocation({
						// 设置定位超时时间，默认：无穷大
						timeout: 10000,
						extensions:'all'
					})
	
					geolocation.getCurrentPosition()
					AMap.event.addListener(geolocation, 'complete', (res) => {
						resolve(res)
					})
					AMap.event.addListener(geolocation, 'error', (res) => {
						reject(res)
					})
				})
			})
		}
  }
}
