<template>
	<view class="main">
		<view class="container">
		  <image class="avatar" src="../../static/男医生-面.png"></image>
		  <text class="motto">大模型智能疾病预测</text>
		</view>
		<van-loading class="searchLoad" color = "#00aaff" size="40px"></van-loading>
	</view>
</template>

<script>
	export default {
		data() {
			return {
	
			}
		},
		onLoad() {
			setTimeout(() => {
				uni.reLaunch({
					url: '/pages/index/index'
				})
			}, 1200)
		},
		methods: {

		}
	}
</script>

<style>
	.main{
		position: relative;
	}
.container {
	height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(to bottom, rgba(0, 170, 255, 0.2),rgba(255,255,255,1));
}

.avatar {
  width: 200rpx;
  height: 200rpx;
  margin-top: 160rpx;
}

.motto {
  margin-top: 100rpx;
  font-size: 32rpx;
  font-weight: bold;
}
.searchLoad {
		position: absolute;
		z-index: 99;
		top: 38%;
		left: 44%;
	}
	
</style>