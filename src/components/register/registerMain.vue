<template>
	<div class="register">
		<div class="main">
			<i v-show="bool"></i>
			<h2 v-html="">{{text}}</h2>
			<div class="confirm">
				<p>{{text2}}</p>
				<div class="meg" v-for="(meg,index) in megs" v-show="meg.divBool">
					<span>{{meg.m}}</span>
					<input type="text" v-show="meg.inputBool"/>
					<div class="select" v-if="index==4">
						<div v-for="(select,index) in meg.selects">
							<select  :id="index" >
								<option value="" >{{select.date}}</option>
							</select>
							<label :for="index"></label>
						</div>
					</div>
				</div>
				<slot name="partIn"></slot>
				<router-link :to="url"><span>{{text3}}</span></router-link>
			</div>
			<div class="register-bottom"></div>
		</div>
	</div>
</template>
<script>
	export default{
		props:['text','text2','megs','url','text3','bool']
	}
</script>
<style lang="less">
.register{
	width: 100%; height: 8.48rem; background: #f1f2f2; overflow: hidden;
	.main{
		width: 5.96rem; height: 7.83rem; margin: 0.24rem 0 0 0.22rem; position: relative; 
		i{ position: absolute;width: 2.06rem; height: 2.02rem; background: url(../../img/register-pic.png) no-repeat; background-size: 2.06rem 2.02rem ; left: 4.02rem; top: -0.13rem; z-index: 90;}
		h2{
			width: 5.63rem; height: 1.04rem; background: #443c3c; padding-left: 0.33rem; line-height: 1.04rem; font-size: 0.36rem; color: #fff; font-weight: 100;
		}
		.confirm{
			width: 5.94rem; height: 6.69rem; border: 1px solid #d0d0d0;background: #fff;position: relative;
			p{
				width: 5.15rem; border-radius: 5px; background: #f0f0f0; margin: 0.14rem 0 0 0.13rem; padding:0.1rem 0.24rem 0.17rem 0.28rem ; color: #666; line-height: 0.34rem;  font-size: 0.18rem;
			}
			a{
			display: block; width: 4.9rem; height: 0.64rem; background: #da3229;text-align: center;  border-radius: 0.05rem; font-size: 0.24rem;color: #fff;display: table; position: absolute; left: 0.5rem; bottom: 0.38rem;
			span{ display: table-cell;vertical-align: middle;}
	      	}
		}
		.register-bottom{
			width: 100%; height: 0.09rem; background: #443c3c; border-radius: 0 0 0.05rem 0.05rem;
		}
		.meg{
			width: 5.55rem; height: 0.42rem; padding-left: 0.41rem; margin-top: 0.23rem;
			span{
				float: left;width: 1.2rem; height: 100%; text-align: right; font-size: 0.2rem; color: #353535; line-height: 0.42rem;
			}
			input{
				width: 3.71rem; height: 0.4rem; border: 1px solid #e3e3e3; margin-left: 0.17rem; float: left;
			}
		}
	}
}
.meg .select{
		float:left;width:3.71rem ; height: 0.42rem; margin-left: 0.17rem;
		div:nth-child(1) select,div:nth-child(2) select,div:nth-child(3) select{
			width: 1.01rem; height: 0.4rem;border: 1px solid #e8e8e8; float: left;border-radius: 0;background: #fff; font-size: 0.2rem; color: #c5c5c5;
		}
		div:nth-child(2) select,div:nth-child(3) select{
			width: 0.56rem; height: 0.4rem;
		}
		label{
			width: 0.44rem; height: 0.4rem; background: #acacac;float: left;margin-right: 0.11rem;position: relative;
		}
		label:before,label:after{
			content:'';width: 0.03rem; height: 0.13rem; background: #fff;position: absolute;left: 50%; margin-left: -0.015rem;top: 0.1rem;transform-origin: 100% 100%;transform:rotate(-45deg)
		}
		label:after{transform-origin: 0 100%;transform:rotate(45deg)}
		div:nth-child(3) label:last-child{margin: 0;}
	}
</style>