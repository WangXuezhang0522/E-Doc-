<template>
	<view class="overall">

		<!-- 金刚区轮滑 -->
		<view class="second-module-allicon">
		<!-- 	<text class="topTitle">热门疾病</text> -->
			<swiper class="nav-bar" indicator-dots>
				<swiper-item class="nav-bar-wrap" v-for="(item,index) in list" :key="index" >
					<!-- 金刚区内容 -->
					<view class="nav-bar-item" v-for="(item2,index2) in item.list2" :key="index2">
						<view class="imgclass" @click="getList(index2)">
							<image  :src="item2.src" />
						</view>
						<text>{{item2.name}}</text>
					</view>
				</swiper-item>
			</swiper>
		</view>
 
		<view class="restPart">
			<view class="leftPart">
				<ul class="ul">
					<li class="li">
						<view class="p" @click="reviseList('概述')">概述</view>
					</li>
					<li class="li">
						<view class="p" @click="reviseList('病因')">病因</view>
					</li>
					<li class="li">
						<view class="p" @click="reviseList('症状')">症状</view>
					</li>
				</ul>
			</view>
			<view class="rightPart">
				<view class="top">
					{{title}}
				</view>
				<view class="bottom">
					<p class="p">
					{{content}}
					</p>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
		import { toRaw } from 'vue'
	export default {
		data() {
			return {
				list: [{
					list2: [{
						src: 'https://pic.imgdb.cn/item/65632e1ac458853aeff46386.png',
						name: '肺结核'
					}, {
						src: 'https://pic.imgdb.cn/item/65632e53c458853aeff5267f.png',
						name: '抑郁症'
					}, {
						src: 'https://pic.imgdb.cn/item/65632e22c458853aeff47d34.png',
						name: '高血压'
					}, {
						src: 'https://pic.imgdb.cn/item/65632e47c458853aeff4fd31.png',
						name: '糖尿病'
					}, {
						src: 'https://pic.imgdb.cn/item/65632e34c458853aeff4b8f8.png',
						name: '白癜风'
					}, {
						src: 'https://pic.imgdb.cn/item/65632e53c458853aeff5261b.png',
						name: '白内障'
					}, {
						src: 'https://pic.imgdb.cn/item/65632e1ac458853aeff46313.png',
						name: '乙肝'
					}, {
						src: 'https://pic.imgdb.cn/item/65632e53c458853aeff5262d.png',
						name: '心脏病'
					}, {
						src: 'https://pic.imgdb.cn/item/65632e2ec458853aeff4a38e.png',
						name: '老年痴呆'
					}, {
						src: 'https://pic.imgdb.cn/item/65632e22c458853aeff47d81.png',
						name: '骨质疏松'
					}]
				}, {
					list2: [{
						src: 'https://pic.imgdb.cn/item/65632e64c458853aeff56080.png',
						name: '其他'
					}]
				}],
				contentList:[{
					
				}],
					
				specificList:[{
					
				}],
				// 疾病具体内容
				content:'',
				// 疾病标题
				title:'',
				// 当前列表索引
				listIndex:''
			}
		},
		onLoad() {
		        uni.request({
		            url: 'http://127.0.0.1:5000/selectdisdata',
		            // data: {},
		            header: {
		                'Content-Type': 'application/x-www-form-urlencoded',
		            },
		            method: 'POST',
		            success: response => {
		                this.contentList = JSON.parse(response.data.result)
		                console.log(this.contentList);
		            },
		            fail: error => {
		                console.error(error);
		            },
		        });
		    },
		methods: {
			getList(id){
				console.log('图标被点击了');
				this.listIndex =  id;
			    this.content = this.contentList[id].overview; 
				this.title = this.contentList[id].name
			},
			reviseList(type){
				if(type == '概述'){
					this.content = this.contentList[this.listIndex].overview;
				}else{
					type == '病因'?this.content = this.contentList[this.listIndex].cause : this.content = this.contentList[this.listIndex].symptoms;
				}
			},
			
		},
	}
</script>

<style>
	page {
		background: #f5f5f5;
	}

	.overall {
		margin: 0;
		padding: 0;
		height: 1520upx;
		box-sizing: border-box;
		background-color: rgba(0, 170, 255, 0.02);
		animation: overall 3s;
	}
	@keyframes overall{
		from{
			opacity: 0;
		}
		to{
			opacity: 1;
		}
	}
	.nav-bar {
		height: 100%;
	}
    .topTitle{
		font-weight: 550;
		margin-left: 20upx;
	}
	/* 背景模块 */
	.second-module-allicon {
		background: white;
		border-radius: 24upx;
		position: relative;
		height: 384upx;
		overflow: hidden;
		background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(0, 170, 255, 0.06));
	}

	scroll-view {
		white-space: nowrap;
	}

	.nav-bar-wrap {
		display: flex;
		flex-flow: column wrap;
		/* 金刚区排序方式*/
		height: 330upx;
	}

	/* 图标区域 */
	.nav-bar-item {
		width: 152upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 20upx;
	}

	/* 图片盒子 */
	.nav-bar-item .imgclass {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 90upx;
		width: 90upx;
		border: 2upx solid rgba(184, 184, 184, 0.3);
		box-shadow: 2upx #bfbfbf;
		margin: 0;
		border-radius: 24upx;
	}
    .nav-bar-item .imgclass:active{
		transition: all 2s; 
		transform: scale(1.2);
	}
	.nav-bar-item .imgclass image {
		height: 64upx;
		width: 64upx;
	}
     .nav-bar-item:nth-child(1) .imgclass image{
		 height: 52upx;
		 width: 52upx;
		 
	 } 
	 .nav-bar-item:nth-child(7) .imgclass image{
		 height: 52upx;
		 width: 52upx;
	 }
	.nav-bar-item:nth-child(9) .imgclass image {
		height: 72upx;
		width: 72upx;
		margin-bottom: 20upx;
	}

	/* 文字 */
	.nav-bar-item text {
		margin-top: 12upx;
		line-height: 34upx;
		color: rgba(51, 51, 51, 1);
		font-size: 22upx;
		letter-spacing: 1.2upx;
	}

	/* 默认指示点的样式 */
	.nav-bar .wx-swiper-dot {
		width: 15upx;
		height: 15upx;
		background: #eee;
		border-radius: 15upx;
		margin-top: 30upx;
	}

	/* 选中指示点的样式 */
	.nav-bar .wx-swiper-dot.wx-swiper-dot-active {
		width: 30upx;
		height: 15upx;
		background: yellowgreen;
		border-radius: 15upx;
		margin-top: 30upx;
	}

	.restPart {
		display: flex;
		margin-top: 20upx;
	}

	/* 左半部分 */
	.leftPart {
		width: 170upx;
		height: 1000upx;
		/* 		border: 1upx solid black; */
		background-color: #f3f8f9;
	}

    .leftPart .ul{
		height: 100%;
		margin-top: 120upx;
	}
	.leftPart .li {
    height: 10%;
	display: flex;
	align-items: center;
	border-radius: 12upx;
	margin-top: 40upx;
	border-top: 2upx solid rgba(76, 76, 76, 0.02);
	border-bottom: 2upx solid rgba(76, 76, 76, 0.01);
	background-color: #f3f8f9;
	/* border-top: 3px solid rgba(0, 85, 255, 0.3); */
/*    box-shadow: 0px 10px 10px 0px solid rgba(0, 85, 255, 0.9); */

	}
    .leftPart .li .p{
		height: 44upx;
		font-size: 36upx;
		font-family: KaiTi;
		font-weight: 600;
		margin-left: 20upx;
		
	}

	/* 点击样式 */
	.leftPart .li:active {
	background-color: #ffffff;
	color: #117df4;
	}
	.leftPart .li:active .p{
		border-bottom: 4upx solid #117df4;
	}

	/* 右半部分 */
	.rightPart {
		width: 570upx;
		/* text-align: center; */
/* 		border: 1px solid black; */
		margin: 0 -2upx -2upx 0;
		font-family: KaiTi;
		background-color: #ffffff;
	    /* background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(0, 170, 255, 0.06)); */
	}

	.rightPart .top {
		height: 50upx;
		padding-top: 12upx;
		text-align: center;
		background-color: #ffffff;
		font-weight: 700;
		margin-left: 6upx;
		/* background-color: whitesmoke; */
		border-radius: 20upx;
        border-bottom: 4upx solid rgba(0, 170, 255, 0.3);
	}
    
	.rightPart .bottom {
		margin-top: 12upx;
		text-indent: 2em;
	}
</style>