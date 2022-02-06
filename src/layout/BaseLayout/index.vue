<template>
	<el-container class='base-layout'>
		<header-bar/>
		<el-container>
			<menu-aside/>
			<el-main class='content'>
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
import HeaderBar from '@/layout/BaseLayout/component/HeaderBar'
import MenuAside from '@/layout/BaseLayout/component/MenuAside'
	export default {
		name:'base-layout',
		components: {
			HeaderBar,
			MenuAside
		}
	}
</script>

<style lang="scss" scoped>
.base-layout{
	@include wh(100vw, 100vh);
	// overflow:hidden;
	.content{
		background-color:#f7f7f7;
	}
}
</style>