<template>
	<div>
		<p class="title">{{title}}</p>
	</div>
</template>
<script>
	export default{
		props:['title']
	}
</script>
<style lang="less" scopd>
	.title{
		width: 100%; height: 0.71rem; background: url(../../img/foot-bg.jpg) repeat-x; background-size: 0.02rem 1.2rem;text-align: center; color:#008dce; font-size: 0.3rem; line-height: 0.71rem;
	}
</style>