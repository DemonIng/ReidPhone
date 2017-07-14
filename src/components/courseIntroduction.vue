<template>
	<div>
		<course :items="[{meg:'脑神经课程',url:'/courseIntroduction'},{meg:'环球音乐之旅',url:'/courseIntroduction'},{meg:'天才艺术',url:'/courseIntroduction'},{meg:'瑞德英语',url:'/courseIntroduction'}]">
			<title-main slot="content" :title="'特色课程'"></title-main>
		</course>
		<title-main :title="'启蒙基础课程'"></title-main>
		<course :items="[{meg:'毛毛虫班',url:'/courseIntroduction'},{meg:'小乌龟班',url:'/courseIntroduction'},{meg:'小企鹅班',url:'/courseIntroduction'},{meg:'小猴子班',url:'/courseIntroduction'},{meg:'小袋鼠班',url:'/courseIntroduction'}]">
		</course>
	</div>
</template>
<script>
	import	course from './brand/brandMain.vue';
	import  titleMain from './course/title.vue';
	export default{
		components:{
			course,
			titleMain
		}
	}
</script>
<style  scoped>
	.brand { height: 5.5rem;}
	.brand:nth-child(3){
		padding-top: 0;height: 6rem;
	}
</style>
