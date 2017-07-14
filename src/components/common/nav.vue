<template>
	<div>
	    <div class="nav">
	      	<div class="nav-one"  @click="sideNav"></div>
	      	<router-link class="nav-third" to="/"></router-link>
	      	 <div class="side-nav" >
	      	 	<span><router-link :to="loginUrl">登录</router-link></span>
	      	 	<span><router-link :to="registerUrl">注册</router-link></span>
	      	 	<ul>
	      	 		<li v-for="item in items">
	      	 			<router-link :to="item.url">{{item.text}}</router-link>
	      	 		</li>
	      	 	</ul>
	      	 </div>
	      	 <div class="shadow" v-show="navBool" @click="shadow($event)" ></div>
	    </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
            		navBool:false,
            		loginUrl:'/login',
            		registerUrl:'/register',
                items:[
                    {
                    		text:'瑞德品牌',
                    		url:'/brand'
                    },
                    {
                    		text:'课程介绍',
                    		url:'/courseIntroduction'
                    },
                    {
                    		text:'活动资讯',
                    		url:'/activityPage'
                    },
                    {
                    		text:'父母MBA',
                    		url:'/parentsMBA'
                    },
                    {
                    		text:'新闻中心',
                    		url:'/newsCenter'
                    },
                    {
                    		text:'预约试听',
                    		url:'/appointment'
                    }
                ]
            }
        },
        methods:{
            		sideNav:function(){
            			var target = event.target;
            			//console.log(target.className)
            			if(!this.navBool){//显示侧边导航栏
            				document.querySelector('.side-nav').style.left=0;
            				this.navBool=true;
            			}
            			else{//隐藏侧边导航栏
            				document.querySelector('.side-nav').style.left='-2.84rem';
            				this.navBool=false;
            			}
            		},
            		shadow:function(event){
            			var target = event.target;
            			if(target.className == 'shadow'){
            				document.querySelector('.side-nav').style.left='-2.84rem';
            				this.navBool=false;
            			}
            		}
        }
    }
</script>
<style lang="less">
*{ margin: 0; padding: 0;}
html{ font-size: '625%';}
body{ max-width: 640px; min-width: 320px; font-family: "微软雅黑"; background: #fff;}
li{ list-style: none;}
a{ text-decoration: none; color: #fff;}
.clearfix{ *zoom:1}
.clearfix:after{ content:"."; display:block; visibility:hidden; clear:both;}
.nav{
	width: 100%; height: 0.84rem; background:url(../../img/nav_01.jpg) no-repeat; background-size:6.4rem 0.84rem ; position: relative;z-index: 99;
	.nav-one{ float: left;width: 0.97rem;height: 100%;}
	.nav-third{float: right;width: 0.9rem;height: 100%; }
	.side-nav{
		width: 2.84rem; height:100% ; position: fixed;left: -2.84rem; top: 0; background: #3c3535;transition:left 0.5s;padding-top: 0.84rem;z-index: 3;
		span{
			position: absolute ; left: 0.32rem; top: 0.42rem;font-size: 0.3rem; color:#fff;
		}
		span:nth-child(2){ left: 1.6rem;}
		ul{
			width: 1.87rem; background: url(../../img/side-nav.jpg) no-repeat; background-size:2.84rem 7rem;
			li{
				width:2.27rem;height: 1rem;font-size: 0.3rem; color:#fff; text-align: right; line-height:1rem
			}
		}
	}
}
.shadow{ position: fixed; width: 100%; height: 100%; background: #000; opacity: 0.6;}
</style>