<template>
	<div>
		<activity-main :items="[{meg:'最新活动',url:'/latestActivity'},{meg:'活动预约',url:'/activityPage'},{meg:'往期回顾',url:'/activityPage'}]"></activity-main>
	</div>
</template>
<script>
	import activityMain from './brand/brandMain.vue';
	export default {
		components: {
			activityMain
		}
	}
</script>