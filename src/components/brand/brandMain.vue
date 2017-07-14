<template>
	<div class="brand">
		<div class="brand-main">
			<slot name="content"></slot>
			<ul>
				<router-link  v-for="item in items" :to="item.url"><li @touchstart="">{{item.meg}}<i></i></li></router-link>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		props:['items','url']
	}
</script>
<style lang="less">
.brand{
	width: 100%; height: 6.65rem; padding-top:1.82rem ; background: url(../../img/brand-pic.jpg) no-repeat; background-size: 6.4rem 1.82rem ;
	.brand-main{
		width: 100%;height: 100%; background: #f1f2f2;
		ul{
			padding: 0.47rem 0 0 0.34rem;
			li{
				width: 5.74rem; height: 0.86rem;background: #fafafa; border-radius: 0.05rem; border: 1px solid #d4d4d4;position: relative; margin-bottom: 0.03rem;text-align: center;line-height: 0.86rem;color: #3c3535; font-size: 0.3rem;
				i{
					position: absolute;width: 0.12rem; height: 0.2rem;right: 0.31rem; top: 0.33rem;
				}
				i:before,i:after{
					content: ''; position: absolute;width: 0.12rem; height: 0.04rem; background: #999;transform-origin: 100% 100%;transform: rotate(45deg);left: 0; top: 50%; margin-left: -0.02rem;
				}
				i:after{
					transform-origin: 100% 0;transform: rotate(-45deg)
				}
			}
		}
	}
}
</style>