<template>
	<view>
		<button @touchstart="streamRecord" @touchend="endStreamRecord" form-type="submit" type="primary" class="fc-white">语音识别按钮</button>
		语音识别内容：{{currentText}}
	</view>
</template>


<script>
	var plugin = requirePlugin("WechatSI")
	let manager = plugin.getRecordRecognitionManager()
	export default {
		data() {
			return {
				currentText: "",
			}
		},
		 
		onLoad() {
		            this.initRecord()
		        },
		methods: {
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
				}
			},
		}
	}
</script>

<style>

</style>