<template>
	<div>
		<navRR></navRR>
    		<router-view></router-view>
    		<footRR></footRR>
    </div>
</template>

<script>
	import navRR from './components/common/nav.vue';
	import footRR from './components/common/foot.vue';
	
	export default{
        components:{
        		navRR,
        		footRR
        }
    }
</script>

