<template>
		<div class="main">
				<input type="text" v-for="text in texts" :placeholder="text.meg" />
				<router-link  v-for="item in items" :to="item.url"><span>{{item.meg}}</span></router-link>
		</div>
</template>
<script lang="babel">

    export default{
        data(){
            return{
                 texts:[
                 	{
                 		meg:'用户名：'
                 	},
                 	{
                 		meg:'密码：'
                 	}
                 ],
                 items:[
                 	{
                 		meg:'登录',
                 		url:'/login'
                 	},
                 	{
                 		meg:'注册',
                 		url:'/register'
                 	}
                 ]
            }
        },
        components:{
        }
    }
</script>

<style lang="less" scoped>
.main{
	width: 100%; height: 6.52rem; background: url(../img/login-bg.jpg) no-repeat;background-size:6.4rem 8.45rem ; padding-top: 1.93rem;
	input{
		width: 5.41rem; height: 0.86rem;border: 1px solid #d4d4d4; border-radius: 0.05rem; margin-left: 0.36rem; margin-bottom: 0.16rem; color: #646565; font-size: 0.3rem; padding-left: 0.33rem; line-height: 0.86rem;
	}
	input:nth-child(2){ margin-bottom: 0;}
	a{
		display: block; width: 4.9rem; height: 0.64rem; background: #da3229;text-align: center; margin: 0.31rem 0 0.18rem 0.73rem; border-radius: 0.05rem; font-size: 0.24rem;color: #fff;display: table;
		span{ display: table-cell;vertical-align: middle;}
	}
	a:nth-child(4){
		margin-top: 0.18rem; background: #696262;
	}
}
</style>