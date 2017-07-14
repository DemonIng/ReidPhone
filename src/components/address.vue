<template>
    <div>
    		<h1>{{meg1}}</h1>
    		<div class="main" >
    			<select name="" id="center">
    				<option value="">{{meg2}}</option>
    				<option value="">{{meg2}}</option>
    			</select>
    			<label for="center" ></label>
    			<dl class="text" v-for="item in items">
    				<dt>{{item.meg3}}&nbsp;{{item.symbol}}</dt>
    				<dd>{{item.meg4}}</dd>
    			</dl>
    		</div>
    		<div class="pic"><img src="../img/map.jpg" alt="" /></div>
    </div>
</template>
<script lang="babel">
    export default{
        data(){
            return{
                meg1:'中心位置查询',
                meg2:'选择你想要查询的瑞德启蒙的中心',
                items:[
                		{ 
                			meg3:'ADD',
                			symbol:':',
                			meg4:'深圳市宝安区'
                		},
                		{ 
                			meg3:'TEL',
                			symbol:':',
                			meg4:'86-755-9999999'
                		}
                ]  
            }
        },
        components:{
        },
        methods:{
        }
    }
</script>

<style lang="less" scoped>
	h1{
		width: 6.1rem; height: 0.71rem; padding-left: 0.3rem;background: url(../img/foot-bg.jpg) repeat-x;background-size: 0.02rem 1.2rem ; font-size: 0.3rem; line-height: 0.71rem;font-weight: 100;
	}
	.main{
		width: 100%;background: #f1f2f2; padding-bottom: 0.1rem;
		select{
			width: 4.75rem;height: 0.6rem; border:1px solid #d8d8d8; padding-left: 0.32rem; font-size: 0.2rem; line-height: 0.6rem; color: #c5c5c5; float: left; margin: 0.3rem 0 0.19rem 0.41rem; border-radius: 0;
		}
		label{
			width: 0.65rem; height: 0.62rem;background: #acacac;float: left;position: relative;margin-top: 0.3rem 
		}
		label:before,label:after{
			content:'';width: 0.03rem; height: 0.2rem; background: #fff;position: absolute;left: 50%; margin-left: -0.015rem;top: 0.2rem;transform-origin: 100% 100%;transform:rotate(-45deg)
		}
		label:after{transform-origin: 0 100%;transform:rotate(45deg)}
		.text{
		width: 6.05rem; font-size: 0.24rem; line-height: 0.36rem; overflow: hidden;padding-left: 0.35rem;
		dt{  color: #009bda;float: left;}
		dd{ font-style: normal; color: #787878; float: left; width: 5.13rem; float: left; margin-left: 0.1rem;}
	}
	}
.pic{
		margin: 0.18rem 0 ; width: 100%; height: 5.04rem;
		img{ width: 6.39rem; height: 5.04rem;}
	}
</style>