<template>
	<el-card class="box-card">
		<div slot="header" class="clearfix">
			<span>卡片名称</span>
			<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
		</div>
		<div v-for="o in 4" :key="o" class="text item">
			内容
		</div>
	</el-card>
</template>

<script>
	export default {
		name: 'operation-staff'
	}
</script>

<style lang="scss" scoped>
.box-card{
	margin-top: 20px;
}
</style>