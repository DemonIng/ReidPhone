<template>
	<div>
	   <div class="footer">
	   		<div class="footer-top clearfix">
	   			<div class="tel">
	   				<h1>{{telH1}}</h1>
	   				<p>{{telP}}</p>
	   			</div>
	   			<div class="address">
	   				<router-link :to="url"><h1>{{addressH1}}</h1>
	   				<p>{{addressP}}</p></router-link>
	   			</div>
	   			<span>移动版&nbsp;&nbsp;&nbsp;&nbsp;标准版</span>
	   		</div>
	   		<div class="footer-bottom">
	   			<span>{{bottomSpan}}</span>
	   		</div>
	   </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
              telH1:'免费咨询热线',
              telP:'Consultation ',
              addressH1:'查看瑞德中心的位置',
              addressP:'OUR ADDress',
              bottomSpan:'瑞德启蒙教育© 2013 版权所有',
              url:'/address'
            }
        }
    }
</script>
<style lang="less">
.footer{
	width: 100%; height: 1.53rem; padding-top: 0.13rem;
	.footer-top{
		width: 100%; height: 1.2rem; background: url(../../img/foot-bg.jpg) repeat-x;text-align: center;  background-size:0.02rem 1.2rem ; line-height: 0;
		.tel,.address{
			float: left; height: 0.42rem; margin-left: 0.55rem; padding-left:0.56rem ;background: url(../../img/footer-top_75.png) no-repeat; background-size:0.56rem 0.42rem ; line-height: 0.22rem; text-align: left;
			h1{
				font-weight: 100; font-size: 0.18rem; color: #3a3a3a;
			}
			p{
				font-size: 0.14rem; color: #909090;
			}
		}
		.address{
			float: right; margin-right: 0.45rem;background: url(../../img/foot-top2.png) no-repeat;background-size:0.56rem 0.42rem 
		}
		span{ display: inline-block; font-size: 0.18rem;color: #747474; margin-top: 0.5rem;}
		p{ margin-top: 0.05rem;}
	}
}
.footer-bottom{
	width: 100%; height: 0.46rem; text-align: center;line-height: 0;
	span{
		font-size: 0.18rem; color: #858585; 
	}
}
</style>