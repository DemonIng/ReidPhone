<template>
	<div>
		<title-main :title="'最新活动'"></title-main>
		<div class="main" >
			<latest :iBool="false"></latest>
		</div>
		<title-main :title="'VIP活动区'"></title-main>
		<div class="main" >
			<latest :iBool="true"></latest>
			<latest :iBool="true"></latest>
			<latest :iBool="true"></latest>
		</div>
		<title-main :title="'会员活动区'"></title-main>
		<div class="main" >
			<latest :iBool="false"></latest>
			<latest :iBool="false"></latest>
			<latest :iBool="false"></latest>
		</div>
	</div>
</template>
<script>
	import titleMain from './course/title.vue';
	import latest from './latest/activity.vue';
	export default{
		components:{
			titleMain,
			latest
		}
	}
</script>
<style scoped>
	.main{
		padding: 0.2rem 0 0.18rem 0.25rem;background: #f1f2f2;
	}
</style>