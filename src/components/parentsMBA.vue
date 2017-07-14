<template>
	<div>
		<img src="../img/parentsMBA.jpg" alt="" />
		<parents :meg="'成长指标'" :items="[{meg:'两岁到两岁半的儿童如何运动？',url:'/parentsMBA'},{meg:'一岁半到两岁的宝宝如何运动？',url:'/parentsMBA'},{meg:'14-18个月的宝宝如何做运动？',url:'/parentsMBA'},{meg:'10-14个月的宝宝如何做运动？',url:'/parentsMBA'},{meg:'0-10个月的宝宝如何做运动？',url:'/parentsMBA'},{meg:'宝宝从小做运动有什么好处？',url:'/parentsMBA'}]" :bool="false"></parents>
		<parents :meg="'智力开发'" :items="[{meg:'如何提高孩子的记忆力？',url:'/parentsMBA'},{meg:'如何提高孩子注意力？',url:'/parentsMBA'},{meg:'学习障碍之注意力障碍',url:'/parentsMBA'},{meg:'学习障碍之空间知觉障碍',url:'/parentsMBA'},{meg:'学习障碍之触觉障碍',url:'/parentsMBA'},{meg:'什么是学习障碍？',url:'/parentsMBA'}]" :bool="true"></parents>
		<parents :meg="'情商培养'" :items="[{meg:'做个懒妈妈',url:'/parentsMBA'},{meg:'任性的孩子该如何教育',url:'/parentsMBA'},{meg:'如何纠正孩子咬人踢人的坏习惯',url:'/parentsMBA'},{meg:'为什么孩子老是喜欢顶嘴',url:'/parentsMBA'},{meg:'如何引导孩子纠正错误行为',url:'/parentsMBA'},{meg:'早期教育培养孩子好性格',url:'/parentsMBA'}]" :bool="true"></parents>
		<parents :meg="'语言能力'" :items="[{meg:'如何让孩子爱上英语？',url:'/parentsMBA'},{meg:'3-6岁宝宝应该阅读什么样的书',url:'/parentsMBA'},{meg:'如何提高孩子阅读能力',url:'/parentsMBA'},{meg:'如何培养孩子的阅读习惯',url:'/parentsMBA'},{meg:'英语阅读的重要性',url:'/parentsMBA'},{meg:'幼儿早教阅读的重要性',url:'/parentsMBA'}]" :bool="true"></parents>
		<parents :meg="'语言能力'" :items="[{meg:'两岁到两岁半的儿童如何运动？',url:'/parentsMBA'},{meg:'一岁半到两岁的宝宝如何运动？',url:'/parentsMBA'},{meg:'14-18个月的宝宝如何做运动？',url:'/parentsMBA'},{meg:'10-14个月的宝宝如何做运动？',url:'/parentsMBA'},{meg:'0-10个月的宝宝如何做运动',url:'/parentsMBA'},{meg:'宝宝从小做运动有什么好处',url:'/parentsMBA'}]" :bool="true"></parents>
		<parents :meg="'入学须知'" :items="[{meg:'如何帮助孩子适应幼儿园生活？',url:'/parentsMBA'},{meg:'3-6岁宝宝应该阅读什么样的书',url:'/parentsMBA'},{meg:'如何提高孩子阅读能力',url:'/parentsMBA'},{meg:'如何培养孩子的阅读习惯',url:'/parentsMBA'},{meg:'英语阅读的重要性',url:'/parentsMBA'},{meg:'幼儿早教阅读的重要性',url:'/parentsMBA'}]" :bool="true"></parents>
		<parents :meg="'入学须知'" :items="[{meg:'如何防止宝宝蛀牙',url:'/parentsMBA'},{meg:'怎样纠正孩子“吃手”',url:'/parentsMBA'},{meg:'习惯如何做好室内空气净化',url:'/parentsMBA'},{meg:'做好宝宝的健康防护',url:'/parentsMBA'},{meg:'宝宝用学步车好不好？',url:'/parentsMBA'},{meg:'宝宝打嗝',url:'/parentsMBA'}]" :bool="true"></parents>
		<parents :meg="'胎教宝典'" :items="[{meg:'音乐胎教提高宝宝智商运动',url:'/parentsMBA'},{meg:'胎教的好处',url:'/parentsMBA'},{meg:'胎教可以对宝宝说什么',url:'/parentsMBA'},{meg:'准妈妈如何对宝宝进行胎教呢',url:'/parentsMBA'},{meg:'胎教有什么用',url:'/parentsMBA'}]" :bool="true"></parents>
	</div>
</template>
<script>
	import parents from './parents/parents.vue'
	export default{
		components:{
			parents
		}
	}
</script>
<style scoped>
	img{
		width:6.4rem ; height: 1.84rem;
	}
</style>