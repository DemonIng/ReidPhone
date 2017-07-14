<template>
	<div>
		<activity-registration :text="'活动报名'" :text2="'活动名称：活动名称文字内容'" :text3="'点此确认'" :megs="[{m:'宝宝姓名：',inputBool:true,divBool:true},{inputBool:false,divBool:false},{inputBool:false,divBool:false},{inputBool:false,divBool:false},{m:'宝宝年龄：',inputBool:false,divBool:true,selects:[{date:''},{date:''},{date:''}]},{m:'家长姓名：',divBool:true,inputBool:true},{m:'联系电话：',divBool:true,inputBool:true},{m:'最近中心：',divBool:true,inputBool:true},{m:'哪里知道：',divBool:true,inputBool:true}]" url="/activityRegistration" :bool="false">
			<div slot="partIn" class="part">
				<span>以前是否参加过我们的活动：</span>
				<input type="radio" name="part" id="partOne" value="shi"/>
				<label for="partOne">是</label>
				<input type="radio" name="part" id="partTwo"/>
				<label for="partTwo">否</label>
			</div>
		</activity-registration>
	</div>
</template>
<script>
	import activityRegistration from './register/registerMain.vue';
    export default{
        components:{
        		activityRegistration
        }
    } 
</script>
<style scoped lang="less">
	.part{
		width: 5.55rem; height: 0.42rem; padding-left: 0.41rem; margin-top: 0.23rem; font-size: 0.2rem;color: #353535;
		span,input,label{ float: left;}
		span{margin-left: 0.15rem;}
		label{margin-right:0.15rem ;}
	}
</style>