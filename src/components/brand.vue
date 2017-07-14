<template>
	<div>
		<brand-main :items="[{meg:'品牌故事',url:'/brand'},{meg:'品牌历史',url:'/brand'},{meg:'师资团队',url:'/brand'},{meg:'中心掠影',url:'/brand'}]" ></brand-main>
	</div>
</template>
<script>
	import brandMain from './brand/brandMain.vue';
	export default{
		components:{
        		brandMain
      }
	}
</script>