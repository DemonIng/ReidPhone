<template>
	<div class="latest">
		<i v-show="iBool"></i>
		<img src="../../img/latest.jpg" alt="" />
		<p v-for="meg in megs">{{meg.m}}</p>
		<router-link to="/activityRegistration">{{text}}</router-link>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				megs:[
					{m:'活动时间: 2013.8.19 (11:00-12:00)'},
					{m:'活动对象: 7-12岁宝宝'},
					{m:'活动地点: 宝安瑞德启蒙中心教室'}
				],
				text:'报名参加'
			}
		},
		props:['iBool']
	}
	


</script>
<style lang="less">
	.latest{
		width: 5.91rem; height: 5.13rem;border-radius: 5px; background: #fff;margin-bottom: 0.38rem;position: relative;
		i{
			width: 0.64rem; height: 0.64rem;position: absolute;left: 0; top: 0.03rem;background: url(../../img/latest-icon.png);background-size:0.64rem 0.64rem;
		}
		img{
			margin: 0.09rem 0 0.09rem 0.08rem;width: 5.75rem;height: 2.78rem;
		}
		p{
			font-size: 0.24rem; color: #453d3d; margin-left: 0.3rem;line-height: 0.36rem;
		}
		a{
			display: block;width: 5.65rem; height: 0.72rem;margin: 0.23rem 0 0 0.13rem;background: #1aaef5; text-align: center;line-height: 0.72rem;color: #fff;font-size: 0.28rem;border-radius: 5px;
		}
	}
</style>