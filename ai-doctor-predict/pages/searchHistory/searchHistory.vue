<template>
		<view class="conversation">
			<view class="content1" v-for = "item in searchHistoryList" :key="item">
				<view class="right" v-if="item.humanin">
					<view class="message right">{{item.humanin}}</view>
				</view>
				<view class="left" v-if="item.airesult">
					<img id="img"  alt="" />
					<view class="message left">{{item.airesult}}</view>
				</view>
			</view>
			<view class="btn"><button @click="deleteHistory">删除</button></view>
			<van-dialog id="van-dialog" />
			</view>
</template>

<script>
	export default {
		data() {
			return {
				searchHistoryList:[]
			}
		},
		onShow() {
			uni.request({
				url: 'http://127.0.0.1:5000/getsearchlogdata',
				header: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				method: 'POST',
				success: response => {
					this.searchHistoryList =JSON.parse(response.data.result)
				},
				fail: error => {
					console.error(error);
				},
			})
		},
		methods: {
			deleteHistory(){
				uni.request({
					url: 'http://127.0.0.1:5000/deletesearchdata',
					header: {
						'Content-Type': 'application/x-www-form-urlencoded',
					},
					method: 'POST',
					success: response => {
						
					},
					fail: error => {
						console.error(error);
					},
				})
			}
		}
	}
</script>

<style>
.right {
		display: flex;
		justify-content: flex-end;
	}

	#img {
		width: 60rpx;
		height: 60rpx;
	}

	.left {
		display: flex;
		justify-content: flex-start;
	}
    .right{
		margin: 0 auto;
	}
	.right .message {
		padding: 10rpx;
		border-radius: 10rpx;
		background-color: #ffffff;
		width: 80%;
		margin-top: 5upx;
		
	}

	.left .message {
		background-image: linear-gradient(to bottom, rgba(0, 255, 255, 0.1), rgba(255, 255, 255, 1));
		width: 80%;
		padding: 10rpx;
		border-radius: 10rpx;
		margin-top: 5upx;
	}

	.conversation {
		width: 100%;
		margin-top: 0vmax;
		height: 87vmax;
		border-radius: 15rpx;
		/* border: 1rpx solid #00aaff; */
		background-image: linear-gradient(to bottom, rgba(0, 255, 255, 0.1), rgba(255, 255, 255, 1));
		overflow-y: scroll
	}
	.btn{
	/* 	position: absolute;
		bottom: 0px;
		display: block; */
		position: absolute;
		bottom: 0upx;
		width: 100%;
	}
</style>
