<template>
	<view class="overall">
	<view class="wrapper">
		<swiper class="banner" indicator-dots :autoplay="true" circular interval="2400">
			<swiper-item v-for="item in newsList" :key="item.id">
				<image :src="item.image"></image>
			</swiper-item>
		</swiper>
		<view class="box" v-for = "(item,index) in newsList" :key = "item">
			<!-- 左侧 -->
			<view class="left">
				<image :src="item.image"></image>
			</view>
			<!-- 右侧 -->
			<view class="right">
				<h1 class="h1">{{item.title}}</h1>
				<p class="p">{{item.data}}</p>
			</view>
		</view>
		<view class="more">
			<view class="p">没有更多内容了~</view>
		</view>
	</view>
	</view>
</template>
<script>
	import { toRaw } from 'vue'
	import healthList from '../../static/data/health.js'
	
	export default {
	  data() {
	    return {
	      newsList: []
	    }
	  },
	  onLoad(id) {
	    this.getList(id);
	  },
	  methods: {
	    getList(id){
	      const realId = toRaw(id).id;
	      switch(realId){
	        case "1": {this.newsList = toRaw(healthList.hotList); break;}
	        case "2": {this.newsList = toRaw(healthList.lifeList); break;}
	        case "3": {this.newsList = toRaw(healthList.foodList); break;}
	        case "4": {this.newsList = toRaw(healthList.babyList); break;}
	        case "5": {this.newsList = toRaw(healthList.diseaseList); break;}
	        case "6": {this.newsList = toRaw(healthList.protectionList); break;}
	      }
	    }
	  }
	}
</script>

<style>
	.overall{
		 background-color: #f8f8f8;
	}
	/* 轮播图 */
	.banner,
	.banner image {
		height: 360upx;
		width: 700upx;
		margin: auto;
		border-radius: 16upx;
		background-size: contain;
	}
  .wrapper{
	  width: 92%;
	  margin: 0 auto;
	  height: 1600upx;
	  background-color: #ffffff;
  }
  .wrapper .box:nth-child(1){
	  border-top: 4upx solid #e7e7e7;
  }
  .wrapper .box:nth-child(1) .left{
	  margin-top: 20upx;
  }
    .wrapper .box:nth-child(1) .right{
	margin-top: 20upx;
	}
  .wrapper .box{
	  display: flex;
	  width: 100%;
	  margin: 20upx auto;
	  height: 200upx;
	  border-bottom: 2px solid #e7e7e7;
  }
  .wrapper .box .left{
	  margin-top: 12upx;
	  margin-left: 24upx;
  }
  .wrapper .box .left image{
	  height: 160upx;
	  width:  200upx;
  }
  .wrapper .box .right{
	  margin-top: 12upx;
	  height: 100%;
	  margin-left: 24upx;
  }
  .wrapper .box .right .h1{
	  font-size: 28upx;
	  margin-top: 12upx;
	  font-weight: 550;
  }
  .wrapper .box .right .p{
	  margin-top: 64upx;
	  font-size: 24upx;
	  color: #848484;
  }
  .more{
  	height: 32upx;
  	width: 100%;
  }
  .more .p{
  	width: 50%;
  	margin: 20upx auto;
  	text-align: center;
  	font-size: 24upx;
  }
</style>
