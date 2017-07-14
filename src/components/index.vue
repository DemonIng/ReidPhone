<template>
    <div>
    		<div class="lunbo">
    			<ul>
    				<li v-for="(img,index) in imgs"  @touchstart="move($event,index)" @touchmove="move($event,index)" @touchend="move($event,index)"><img :src="img.imgUrl" alt="" /></li>
    			</ul>
    			<div class="lunbo-button">
	    				<span class="current"></span>
	    				<span></span>
	    				<span></span>
	    				<span></span>
    			</div>
    		</div>
    		<div class="index-main">
    			<ul>
    				<li v-for='item in items'>
    					<router-link :to="item.url"><img :src="item.imgUrl" alt="" /></router-link><br/>
    					<span>{{item.text}}</span>
    				</li>
    			</ul>
    		</div>
    </div>
</template>

<script lang="babel">
    export default{
        data(){
            return{
            	 	startX:null,
            	 	moveX:null,
            	 	marginLeft:null,
            	 	timer:null,
            	 	imgs:[],
                items:[
                		{
                			imgUrl:require('../img/index-pic2-01.png'),
                			text:'瑞德品牌',
                			url:'/brand'
                		},
                		{
                			imgUrl:require('../img/index-pic2-02.png'),
                			text:'课程介绍',
                			url:'/courseIntroduction'
                		},
                		{
                			imgUrl:require('../img/index-pic2-03.png'),
                			text:'活动资讯',
                			url:'/activityPage'
                		},
                		{
                			imgUrl:require('../img/index-pic2-04.png'),
                			text:'父母MBA',
                			url:'/parentsMBA'
                		},
                		{
                			imgUrl:require('../img/index-pic2-05.png'),
                			text:'新闻中心',
                			url:'/newsCenter'
                		},
                		{
                			imgUrl:require('../img/index-pic2-06.png'),
                			text:'预约试听',
                			url:'/appointment'
                		}
                		
                ],
                imgs:[
                		{imgUrl:require('../img/index-pic.jpg')},
                		{imgUrl:require('../img/index-pic.jpg')},
                		{imgUrl:require('../img/index-pic.jpg')},
                		{imgUrl:require('../img/index-pic.jpg')}
                ]
            }
        },
        components:{
        	
        },
        methods:{
        		move:function(event,index){
        			if(event.type=='touchstart'){
        				this.startX = event.targetTouches[0].pageX;
        				var str = document.querySelector('.lunbo ul').style.marginLeft;
     				this.marginLeft = Number(str.slice(0,-2));
        			}
        			if(event.type=='touchmove'){
        				event.preventDefault();
        				var endX;
        				endX = event.targetTouches[0].pageX;
        				this.moveX = endX - this.startX;
   					document.querySelector('.lunbo ul').style.marginLeft=(this.marginLeft+this.moveX)+'px';
      				//console.log('move',(this.marginLeft+this.moveX),'111');
      				
        			}
        			
        			if(event.type=='touchend'){
        				var width = document.documentElement.clientWidth;//屏幕宽度
        				//console.log(width);
        				if(this.moveX<0){//向左移
        					if(index==3){
        						this.moveX=-50;
        					}
        					if(this.moveX>-100){//未向左翻页
        						document.querySelector('.lunbo ul').style.marginLeft=-index*width+'px';
        					}
        					else{//向左翻页
        						document.querySelector('.lunbo ul').style.marginLeft=-(index+1)*width+'px';
        						var spanNodes = document.getElementsByTagName('span');
        						for(var i=0;i<spanNodes.length;i++){
		        					if(spanNodes[i].hasAttribute('class','current')){
		        						var index = i;
		        					}
		        				}
        						spanNodes[index].removeAttribute('class','current');
							spanNodes[index+1].setAttribute('class','current');
        						
        					}
        				}
        				else{//向右移
        					if(index==0){
        						this.moveX=50;
        					}
        					if(this.moveX<100){//向右未翻页
        						document.querySelector('.lunbo ul').style.marginLeft=-index*width+'px';
        					}
        					else{//向右翻页
        						document.querySelector('.lunbo ul').style.marginLeft=-(index-1)*width+'px';
        						var spanNodes = document.getElementsByTagName('span');
        						for(var i=0;i<spanNodes.length;i++){
		        					if(spanNodes[i].hasAttribute('class','current')){
		        						var index = i;
		        					}
		        				}
        						
        						spanNodes[index].removeAttribute('class','current');
        						spanNodes[index-1].setAttribute('class','current');
        					}
        				}
        				
        			}
        		},
//      		setInter:function(){
//      			var width = document.documentElement.clientWidth;//屏幕宽度
//      			this.timer = setInterval(function(){
//      				var spanNodes = document.getElementsByTagName('span');
//      				for(var i=0;i<spanNodes.length;i++){
//      					if(spanNodes[i].hasAttribute('class','current')){
//      						var index = i;
//      					}
//      				}
//      				console.log(index)
//      				if(index==3){
//      					index=0;
//      					document.querySelector('.lunbo ul').style.marginLeft=0;
//      				}
//      				else{
//	        				document.querySelector('.lunbo ul').style.marginLeft=-(index+1)*width+'px';
//						
//						spanNodes[index].removeAttribute('class','current');
//						spanNodes[index+1].setAttribute('class','current');
//					}
//      			},2000)
//      		}
        },
        mounted:function(){
        		
        		//this.setInter();
        },
        created:function(){
//			this.$http.get('/src/json/a.json').then(function(json){
//				console.log(json);
//    			this.imgs = json.body.imgs;
//			}, function(error){
//				console.log(error);
//			});
        }
    }
    
</script>

//scoped表示局部使用
<style lang="less" scoped>
.lunbo{
	width: 100%; height: 3.72rem; position: relative; overflow: hidden;
	ul{
		width: 400%;height: 100%; transition: margin-left 0.5s;
		li{
			width: 25%;height: 100%; float: left;
			img{ width: 6.4rem; height: 3.72rem;}
		}
	}
	
	.lunbo-button{
		position: absolute;bottom: 0;left: 0; width: 100%; height: 0.44rem; background: rgba(241,242,242,0.6) ;text-align: center; line-height: 0;
			span{ display: inline-block; width: 0.16rem; height: 0.16rem; background: #fff; border-radius: 50%; margin-left: -0.18rem;}
		.current{ background: #6a6060;}
		
	}
}
.index-main{
	width: 100%; height: 4.64rem; background: #f1f2f2; padding-top: 0.13rem;
	ul{
		width: 103%; overflow: hidden;
		li{
			float: left; width: 1.92rem; height: 1.18rem; margin:0 0.11rem 0.24rem; background: #0bbebb; border-radius:0.05rem; font-size: 0.18rem; color: #fff; text-align: center; padding-top: 0.3rem;
			img{ margin-bottom: 0.12rem; width:0.65rem ; height: 0.74rem;}
		}
		li:nth-child(2){background: #afd23a;}
		li:nth-child(3){background: #f48221;}
		li:nth-child(4){background: #de0000;}
		li:nth-child(5){background: #3eb7ee;}
		li:nth-child(6){background: #6eb943;}
	}
}
</style>