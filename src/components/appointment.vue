<template>
	<div>
		<appointment :text="'课程试听预约'" :text2="'免费名额有限，现在就留下您的电话号码，我们的顾问会尽快联系您，并为您预约一个合适的时间。'" :text3="'点此确认'" :megs="[{m:'宝宝姓名：',inputBool:true,divBool:true},{inputBool:false,divBool:false},{inputBool:false,divBool:false},{inputBool:false,divBool:false},{m:'宝宝年龄：',inputBool:false,divBool:true,selects:[{date:''},{date:''},{date:''}]},{m:'联系电话：',divBool:true,inputBool:true},{m:'课程选择：',divBool:true,inputBool:true},{m:'最近中心：',divBool:true,inputBool:true},{m:'哪里知道：',divBool:true,inputBool:true}]" url="/appointment" :bool="true"></appointment>

	</div>
</template>
<script>
	import appointment from './register/registerMain.vue';
    export default{
        components:{
        		appointment
        }
    } 
</script>
