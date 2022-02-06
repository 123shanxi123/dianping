const storage = {
	getItem(key) {
		const value = window.localStorage.getItem(key)
		if(value) {
			return JSON.parse(value).value
		} 
		return null
	},
	setItem(key,value) {
		const item = {
			time: +new Date(),
			value: value
		}
		window.localStorage.setItem(key,JSON.stringify(item))
	},
	removeItem(key) {
		window.localStorage.removeItem(key)
	},
	clear() {
		window.localStorage.clear()
	}
}

export default storage