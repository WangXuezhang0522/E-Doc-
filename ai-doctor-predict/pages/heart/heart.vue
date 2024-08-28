<template>
	<view class="content">
		<view class="conversation">
			<view v-for="message in conversation" :key="message.id" class="message">
				<view v-if="message.type === 'resPsychology'" class="user-message">
					<view class="usertext">{{ message.text }}</view>
				</view>
				<view v-else class="robot-message">
					<img id="img" src="https://pic.imgdb.cn/item/65632e64c458853aeff5609e.png" alt="" />
					<view class="robottext">
						{{ message.text }}
						<!-- <audio id="audio" :src="audioSrc" controls :class="{ 'hidden-audio': hideAudio }"
							autoplay></audio> -->
					</view>
				</view>
			</view>
			<!-- <van-rate class="vant-heart" value="4" icon="like" void-icon="like-o" /> -->
		</view>
		<form @submit="onSubmit">
			<view class="formbox">
				<view class="box">
					<textarea v-model="userInput" name="human_input" id="text" cols="30" rows="10"
						placeholder="请输入你要咨询的内容...">
				</textarea>
					<button form-type="submit" id="btn" type="primary" >发送</button>
				</view>
			</view>
		</form>
		<van-loading class="searchLoad"  color = "#ff557f" v-if="predictLoad" size="40px">解答中...</van-loading>
	</view>
</template>
  
<script>
	export default {
		data() {
			return {
				userInput: '',
				conversation: [],
				audioSrc: '', // 音频文件的地址
				hideAudio: true, // 控制是否隐藏audio标签
                // 回答加载
				predictLoad: false
			}; 
		},
		onLoad() {
			uni.request({
				url: 'http://127.0.0.1:5000/AiPsychologysend',
				data: {
					// sendtype:'resPsychology',
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
			setTimeout(this.playAudio, 4000)
		},
		methods: {
			onSubmit(e) {
				e.preventDefault();
				const userMessage = {
					id: new Date().getTime(),
					type: 'resPsychology',
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
						url: 'http://127.0.0.1:5000/AiPsychologysend',
						data: {
							// sendtype:'resPsychology',
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
							// this.playAudio()

						},
						fail: error => {
							console.error(error);
						},
					});
				}
				setTimeout(this.playAudio,4000)

			},
			playAudio() {
			  uni.downloadFile({
			    url: 'http://127.0.0.1:5000/audio', // 后端返回的二进制流音频文件的API地址
			    success: (res) => {
			      if (res.statusCode === 200) {
			        const filePath = res.tempFilePath
			        this.audioSrc = filePath
			
			        // 创建audio上下文对象
			        const audioCtx = uni.createInnerAudioContext()
			        audioCtx.autoplay = true
			        audioCtx.src = filePath
			      }
			    }
			  })
			}

		},
	};
</script>

<style>
	.tips {
		text-align: center;
		font-size: 28rpx;
		margin: 0upx auto;
	}

	.tips .p {
		margin-top: 12upx;
		color: #5d5d5d;
		letter-spacing: 1upx;
	}

	.content {
		width: 96%;
		height: 100%;
		font-family: 宋体;
		margin: 0upx auto;
		margin-top: 12upx;
		font-size: 40rpx;
		background-image: linear-gradient(to bottom, rgba(255, 0, 0, 0.1), rgba(255, 170, 255, 0.15));
	}

	#img {
		width: 60rpx;
		height: 60rpx;
	}

	.conversation {
		width: 100%;
		margin-top: 0vmax;
		height: 87vmax;
		border-radius: 15rpx;
		/* border: 1rpx solid #00aaff; */
		/* background-image: linear-gradient(to bottom, rgba(255, 0, 0, 0.1), rgba(255, 170, 255,0.15)); */
		/* background-image: linear-gradient(to bottom, rgba(255, 0, 0, 0.1), rgba(255, 255, 255, 1)); */
		overflow-y: scroll;
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

	.usertext {
		padding: 16rpx;
		border-radius: 20upx;
		font-family: STXinwei;
		font-size: 32upx;
		font-weight: 400;
		letter-spacing: 0.8upx;
		margin-top: 20upx;
		background-color: rgba(255, 15, 31, 0.3);
	}

	.robot-message {
		display: flex;
		justify-content: flex-start;
		margin-top: 16upx;
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
		height: 100upx;
		width: 98%;
		margin: 0px auto;
		border-radius: 16upx;
		background-color: #ffffff;
		/* background-color: rgba(255, 0, 0, 0.1); */
		/* border-radius: 40upx; */
		/* border: 6upx solid rgba(255, 0, 0, 0.4); */
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
		width: 140upx;
		height: 80upx;
		background-color: rgba(255, 0, 0, 0.5);
		line-height: 2.2;
		margin-right: 20upx;
	}

	.vant-heart {
		margin-left: 70upx;
	}

	.hidden-audio {
		display: none;
	}
	/* 搜索加载 */
	.searchLoad {
		position: absolute;
		z-index: 99;
		top: 30%;
		left: 36%;
	}
</style>