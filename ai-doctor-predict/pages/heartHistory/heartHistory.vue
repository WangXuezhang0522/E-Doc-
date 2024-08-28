<template>
	<view class="conversation">
		<view class="content1" v-for="log in logList" :key="log">
			<view class="right" v-if="log.humanin">
				
				<view class="message right">{{ log.humanin }}</view>
			</view>

			<view class="left" v-if="log.airesult">
				<img id="img" src="https://pic.imgdb.cn/item/65632e64c458853aeff5609e.png" alt="" />
				<view class="message left">{{ log.airesult }}</view>
			</view>
		</view>
		<view class="btn"><button @click="deleteHistory">删除</button></view>
		<van-dialog id="van-dialog" />
	</view>
</template>

<script>
		import Dialog from '../../wxcomponents/vant/dist/dialog/dialog'
	export default {
		data() {
			return {
				logList: [

				]
			}
		},
		onLoad() {
			uni.request({
				url: 'http://127.0.0.1:5000/getpsylogdata',
				header: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				method: 'POST',
				success: response => {
					this.logList = JSON.parse(response.data.result)
                    this.logList = this.logList.splice(1)
					console.log(this.logList);
				},
				fail: error => {
					console.error(error);
				},
			});
		},

		methods: {
        deleteHistory(){
			uni.request({
				url: 'http://127.0.0.1:5000/deletepsylogdata',
			
				header: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				method: 'POST',
				success: response => {
					Dialog.alert({
						confirmButtonText: '确认',
						context: this,
						title: '删除成功',
						overlay: 'false', 
						theme: 'round-button',
					}).then(()=>{
						this.$forceUpdate();
						
					})
				},
				fail: error => {
					console.error(error); 
				},
			});
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

	.right .message {
		padding: 10rpx;
		border-radius: 10rpx;
		background-color: #ffffff;
		width: 80%;
		margin-top: 5upx;
	}

	.left .message {
		background-image: linear-gradient(to bottom, rgba(255, 0, 0, 0.1), rgba(255, 255, 255, 1));
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
		background-image: linear-gradient(to bottom, rgba(255, 0, 0, 0.1), rgba(255, 255, 255, 1));
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