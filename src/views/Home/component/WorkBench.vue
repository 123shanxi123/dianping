<template>
	<div class='work-bench'>
		<el-row :gutter='50'>
			<el-col :span='12'>
				<h1 class='title'>山西省长治市</h1>
			</el-col>
		</el-row>
		<el-row :gutter='50'>
			<el-col :span='12'>
				<h2 class='small-title'>快捷验券</h2>
				<el-input placeholder="请输入内容">
					<el-button slot="append" type='primary'>标签</el-button>
				</el-input>
			</el-col>
			<el-col :span='12'>
				<h2 class='small-title'>常用功能</h2>
				<div class='search-group'>
					<router-link to='/home'>
						<img src='https://p1.meituan.net/dpmerchantpic/6cc4adc31881aacaefc519babb1bb77a3724.png' />
						<span>我的推广</span>
					</router-link>
					<router-link to='/home'>
						<img src='https://p1.meituan.net/dpmerchantpic/6cc4adc31881aacaefc519babb1bb77a3724.png' />
						<span>我的推广</span>
					</router-link>
					<router-link to='/home'>
						<img src='https://p1.meituan.net/dpmerchantpic/6cc4adc31881aacaefc519babb1bb77a3724.png' />
						<span>我的推广</span>
					</router-link>
					<router-link to='/home'>
						<img src='https://p1.meituan.net/dpmerchantpic/6cc4adc31881aacaefc519babb1bb77a3724.png' />
						<span>我的推广</span>
					</router-link>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name:'work-bench'
	}
</script>

<style lang="scss" scoped>
.work-bench{
	height:305px;
	background-image:url(https://awp-assets.meituan.net/dianpingbmw/merchant-workbench/img/head-bg.a0c46567.png);
	background-size:cover;
	padding:25px;
	.title{
		padding:15px 0 25px;
		font-size:24px;
		color:white;
		line-height: 44px;
	}
	.small-title{
		font-size: 14px;
		color:white;
		margin-top: 20px;
		margin-bottom: 20px;
	}
	.search-group{
		@include flex(row);
		a{
			@include wh(69px, 69px);
			@include flex(column, center, center);
			font-size: 12px;
			color:white;
			text-decoration:none;
			margin-right: 10px;
			img{
				@include wh(28px, 28px);
				margin-bottom: 10px;
			}
		}
	}
	v-deep .el-input__inner{
		height:60px;
		line-height: 60px;
  }
}
</style>