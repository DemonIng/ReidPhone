<template>
	<div>
		<p>{{meg}}<i></i></p>
		<ul>
			<router-link v-for="item in items" :to="item.url"><li>{{item.meg}}<em v-show="bool"></em></li></router-link>
		</ul>
	</div>
</template>
<script>
	export default{
		props:['meg','items','bool']
	}
</script>
<style lang="less" scoped>
	p{
		width: 5.8rem; height: 0.71rem; background: url(../../img/foot-bg.jpg) repeat-x; background-size: 0.02rem 1.2rem; color:#454545; font-size: 0.3rem; line-height: 0.71rem;position: relative; padding-left: 0.6rem;
		i{
			position: absolute;background: url(../../img/MBA-pic.png) no-repeat; width:0.04rem; height:0.32rem ; left:0.4rem ; top:0.22rem ;
		}
	}
	li{
		width: 5.87rem; height: 0.66rem; line-height: 0.66rem; padding-left: 0.53rem; border-bottom: 1px solid #d4d4d4; margin-bottom: 1px; font-size: 0.24rem; color: #3c3535;background: #f1f2f2;position: relative;
		em{
			position: absolute;width: 0.12rem; height: 0.2rem;right: 0.31rem; top: 0.23rem;
		}
		em:before,em:after{
			content: ''; position: absolute;width: 0.12rem; height: 0.04rem; background: #999;transform-origin: 100% 100%;transform: rotate(45deg);left: 0; top: 50%; margin-left: -0.02rem;
		}
		em:after{
			transform-origin: 100% 0;transform: rotate(-45deg)
		}
	}
</style>