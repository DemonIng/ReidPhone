<template>
	<div>
		<register  :text="'即刻注册获得免费试听课程'" :text2="'成功注册为会员后，您将可以免费获得一次试听瑞德课程的机会并在光临瑞德启蒙教育中心后得到一份精美礼物'" :text3="'点此确认'" :megs="[{m:'用户名：',inputBool:true,divBool:true},{m:'用户密码：',inputBool:true,divBool:true},{m:'重复密码：',inputBool:true,divBool:true},{m:'宝宝姓名：',inputBool:true,divBool:true},{m:'宝宝年龄：',inputBool:false,selects:[{date:''},{date:''},{date:''}],divBool:true},{m:'手机号码：',inputBool:true,divBool:true}]"  url="/register" :bool="true" ></register>
	</div>
</template>
<script lang="babel">
	import register from './register/registerMain.vue';
    export default{
        components:{
       	 	register
        },
        methods:{
        },
        mounted:function(){
        		
        }
    } 
</script>

