<template>
	<div>
	<title-main :title="'新闻中心'"></title-main>
	<div class="newsCenter">
		<img src="../img/newsCenter.jpg"/>
		<p v-for="meg in megs">{{meg.m}}</p>
	</div>
	</div>
</template>
<script lang="babel">
	import titleMain from './course/title.vue';
	export default{
		data(){
			return {
				megs:[
					{m:'深圳瑞德启蒙教育投资有限公司（0-12岁美式启蒙教育专家）秉承“全球启蒙 卓越思维（Global Inspiration Fantastic Thinking）”的理念。源自美国百年教育出版社--美国麦格希教育集团。麦格希集团成立于1884，是全球领先的教育出版与服务品牌，在33个国家 设有分支机构，以65种语言提供儿童早期教育、中小学教育、高等教育、专业教育、测评与报告等领域的产品和服务。'},
					{m:"是全球领先的教育出版与服务品牌，在33个国家 设有分支机构，以65种语言提供儿童早期教育、中小学教育、高等教育、专业教育、测评与报告等领域的产品和服务。"}
				]
			}
		},
		components:{
			titleMain
		}
	}
</script>
<style lang="less" scoped>
	.newsCenter {
		background: #f1f2f2; padding: 0.32rem 0.28rem 0.26rem 0.29rem;
		img{ width: 5.84rem; height: 2.35rem;margin-bottom: 0.37rem ;}
		p{
			font-size: 0.24rem;color: #453d3d;line-height: 0.36rem;text-indent: 2em; margin-bottom: 0.26rem;
		}
	}
</style>