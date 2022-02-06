export default (Vue) => {
	const requireComponent = require.context(
		// 其组件目录的相对路径
		'@/components',
		// 是否查询其子目录
		true,
		// 匹配基础组件文件名的正则表达式
		/\.(vue|js)$/
	)
	// console.log(requireComponent.keys())
	// console.log(requireComponent("./FooterNav.vue"))
	requireComponent.keys().forEach(path => {
		const content = requireComponent(path).default
		if(content.name) {
			Vue.component(content.name,content)
		} else {
			Vue.use(content)
		}
	})
}