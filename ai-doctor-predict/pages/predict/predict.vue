<template>
	<view class="content">
		<view class="conversation">
			<view v-for="message in conversation" :key="message.id" class="message">
				<view v-if="message.type === 'prediction'" class="user-message">
					<view class="usertext">{{ message.text }}</view>
				</view>
				<view v-else class="robot-message">
					<img class="img" src="../../static/男医生-面.png" alt="" />
					<view class="robottext">
						{{ message.text }}
					</view>
				</view>
			</view>
		</view>
		<form @submit="onSubmit">
			<view class="formbox">
				<view class="box">
					<!-- 语音识别 -->
				<!-- 	<button @touchstart="streamRecord" @touchend="endStreamRecord" form-type="submit"
						class="voice"></button> -->
					<textarea v-model="userInput" name="human_input" id="text" cols="30" rows="10"
						placeholder="请输入你的问题..."></textarea>
					<button form-type="submit" id="btn" type="primary">发送</button>
				</view>
			</view>
		</form>
		<van-loading class="searchLoad" color = "#55ff00" v-if="predictLoad" size="40px">解答中...</van-loading>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInput: '',
				conversation: [],
				// 语音识别内容
				currentText: "",
				// 回答加载
				predictLoad: false
			};
		},
		onLoad() {
			uni.request({
				url: 'http://127.0.0.1:5000/AiPredictionsend',
				data: {
					// sendtype:'prediction',
					text: "你好"
				},
				header: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				method: 'POST',
				success: response => {
					const robotMessage = {
						id: new Date().getTime(),
						type: 'robot',
						text: response.data,
					};
					this.conversation.push(robotMessage);
				},
				fail: error => {
					console.error(error);
				},
			});
		},
		methods: {
			onSubmit(e) {
				e.preventDefault();
				const userMessage = {
					id: new Date().getTime(),
					type: 'prediction',
					text: this.userInput,
				};

				if (this.userInput == '') {

					uni.showToast({
						title: '请输入点什么呗！', //显示的文字
						duration: 2000, //显示多少毫秒，默认1500毫秒，时间到自动隐藏
						icon: "error" //自定义显示的图标，默认成功success，错误error,加载loading，不显示图标是none
					})
				} else {
					let _this = this
					this.conversation.push(userMessage);
					this.userInput = '';
					this.predictLoad = true;
					// 发送用户消息给后端
					uni.request({
						url: 'http://127.0.0.1:5000/AiPredictionsend',
						data: {
							text: userMessage.text,
						},
						header: {
							'Content-Type': 'application/x-www-form-urlencoded',
						},
						method: 'POST',
						success: response => {
							_this.predictLoad = false
							const robotMessage = {
								id: new Date().getTime(),
								type: 'robot',
								text: response.data,
							};
							this.conversation.push(robotMessage);

						},
						fail: error => {
							console.error(error);
						},
					});
				}

			},
			// 语音识别
			streamRecord: function() {
				console.log('=======开始====')
				manager.start({
					lang: 'zh_CN',
				})
			},
			endStreamRecord: function() {
				console.log('=======结束====')
				manager.stop()
			},
			initRecord: function() {
				//有新的识别内容返回，则会调用此事件
				manager.onRecognize = (res) => {
					let text = res.result
					this.currentText = text
				}
				// 识别结束事件
				manager.onStop = (res) => {
					let text = res.result
					if (text == '') {
						console.log('没有说话')
						return
					}
					this.currentText = text
					this.userInput = text
					console.log(this.userInput);
				}
			},
		},
	};
</script>

<style>
	.content {
		position: relative;
		width: 100%;
		height: 100%;
		font-family: 宋体;
		font-size: 32rpx;
	}

	.conversation {
		width: 100%;
		margin-top: 0vmax;
		height: 87vmax;
		border-radius: 15rpx;
		background-image: linear-gradient(to bottom, rgba(0, 255, 127, 0.1), rgba(255, 255, 255, 1));
		overflow-y: scroll
	}

	.user-message {
		margin-left: 128upx;
		display: flex;
		min-height: 80upx;
		min-width: 20%;
		margin-right: 24upx;
		color: rgba(72, 72, 72, 0.9);
		justify-content: flex-end;
	}

	.img {
		width: 60rpx;
		height: 60rpx;
	}

	.usertext {
		padding: 16rpx;
		border-radius: 20upx;
		font-family: STXinwei;
		font-size: 32upx;
		font-weight: 400;
		letter-spacing: 0.8upx;
		background-color: rgba(0, 255, 127, 0.1);
	}

	.robot-message {
		display: flex;
		justify-content: flex-start;
		margin-top: 32upx;
		margin-left: 12upx;
	}

	.robottext {
		background-color: #ffffff;
		width: 70%;
		margin-left: 6upx;
		margin-top: 4upx;
		font-family: STXinwei;
		font-size: 32upx;
		padding: 16rpx;
		border-radius: 20upx;
	}


	.formbox {
		/* margin-top: 10rpx; */
		height: 160upx;
		width: 100%;
		background-color: #ffffff;
		border-radius: 10rpx;
	}

	/* 边框 */
	.formbox .box {
		display: flex;
		align-items: center;

		height: 90upx;
		width: 90%;
		margin: 0px auto;
		border-radius: 40upx;
		border: 6upx solid rgba(172, 257, 231);
	}

	#text {
		font-size: 36upx;
		font-family: STXinwei;
		width: 80%;
		height: 60upx;
		padding: 20upx;
	}

	#btn {
		display: block;
		border-radius: 36upx;
		font-family: STXinwei;
		width: 170upx;
		height: 80upx;
		/* 		background: url('../../static/请柬.png') center/100% no-repeat; */
		background-color: rgba(123, 227, 187);
		line-height: 2.2;
		margin-right: 20upx;
	}

	.vant-heart {
		margin-left: 70upx;
	}

	/* 	语音识别按钮 */
	.voice {
		width: 46upx;
		height: 64upx;
		margin-bottom: 8upx;
		margin-left: 8upx;
		background-image: url('../../static/语音 (1).png');
		background-repeat: no-repeat;
		background-size: cover;
		border-style: none;
		background-color: rgba(255, 0, 0, 0.0);
		border: 0.2upx solid rgba(255, 0, 0, 0.0);
	}

	/* 搜索加载 */
	.searchLoad {
		position: absolute;
		z-index: 99;
		top: 30%;
		left: 36%;
	}
</style>