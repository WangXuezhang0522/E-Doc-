<template>
	<view class="wrapper">
		<image class="warn" src="../../static/警告2.png"></image>
		<view class="tips">所有药物的服用必须在医师的监督下,禁止私自服用处方药</view>
		<view class="formbox">
			<label class="labelBox">
				<p class="p">药品</p>
				<input @blur="checkMedicine" placeholder="药品名称" type="text" name="medicine" v-model="medicine" />
			</label>
			<view class="warnInput" v-if="ischeckName">
				<image src="../../static/警告图标svg.png"></image>
				<p class="p">输入错误,必须为中文</p>
			</view>

			<label class="labelBox">
				<p class="p">剂量</p>
				<input @blur="checkDosage" placeholder="请输入服用剂量" type="text" name="dosage" v-model="dosage" />
			</label>
			<view class="warnInput" v-if="ischeckWeight">
				<image src="../../static/警告图标svg.png"></image>
				<p class="p">输入错误,必须为中文</p>
			</view>

			<label class="labelBox">
				<p class="p">服用方式</p>
				<input @blur="checkManner" placeholder="请输入服用方式" type="text" name="manner" v-model="manner" />
			</label>
			<view class="warnInput" v-if="ischeckHeight">
				<image src="../../static/警告图标svg.png"></image>
				<p class="p">输入错误,必须为中文</p>
			</view>

			<label class="labelBox">
				<p class="p">注意事项</p>
				<input @blur="checkNote" placeholder="服用的注意事项" type="textarea" name="note" v-model="note" />
			</label>
			<view class="warnInput" v-if="ischeckBloodSugar">
				<image src="../../static/警告图标svg.png"></image>
				<p class="p">输入错误,必须为中文</p>
			</view>

			<label class="labelBox">
				<p class="p">提醒日期(时间)</p>
				<input @blur="checkTime" placeholder="每天服用药物的时间(小时/分钟)" type="text" name="time"
					v-model="time" />
			</label>

			<view class="warnInput" v-if="ischeckBloodPressure">
				<image src="../../static/警告图标svg.png"></image>
				<p class="p">输入错误,必须小时/分钟的格式(例:7/0)</p>
			</view>
			
		</view>
		<view class="buttonBox">
			<button @click="Subscribe" class="sumbitButton" form-type="submit" id="btn" >设置吃药提醒</button>
			
		</view>
		<van-notice-bar
		class="tipTwo"
		  color="#1989fa"
		  background="rgba(0, 170, 255, 0.00)"
		  left-icon="info-o"
		  text="智能医生提醒您。"
		/>
		<image class="aiImage" src="../../static/男医生-面.png"></image>
		<view class="text">在服用药物前必须仔细阅读药品说明书,药品说明书主要包括警示语、药品名称、适应证、
		用法用量、禁忌、注意事项、不良反应、药物相互作用和保存条件等，
		这些与患者用药有关的内容,在用药前都应该认真阅读。对其中不明白的内容应该及时咨询药师或医师.
		处方药(Rx)要严格遵医嘱,切勿擅自使用.任何药物(中、西药等)都有不良反应.药品不良反应是指合格药品在正常用法用量下,出现的与用药目的无关的有害反应。
		药品不良反应既不是药品质量问题,也不属于医疗事故.
非处方药虽然具有较高的安全性,严重不良反应发生率比较低，但长期、大量使用也可能会引起不
良反应。人与人之间存在个体差异,不同的人对同一种药的不良反应可能有很大差别.所以,非处方药也要
严格按照说明书的规定使用,并需密切观察用药后的反应.一旦在用药过程中出现不适症状,都要引起高度重视,
应立即停药并及时咨询医生或药师。 
</view>
	</view>
	<!-- 弹窗载体 -->
	<van-dialog id="van-dialog" />
</template>

<script>
	import Dialog from '../../wxcomponents/vant/dist/dialog/dialog'
	export default {
		data() {
			return {
           medicine:'',
		   dosage:'',
		   manner:'',
		   note:'',
		   time:'',
		   // 消息推送所需
		   appid:'wxb0d7b6c8d17b6d9d',
		   secret:'bc95d748cb89427778e0b871f88843fa',
		   code:'',
		   useropenId:'',
		   access_token:'',
		   ischeckName: false,
		   ischeckWeight: false,
		   ischeckHeight: false,
		   ischeckBloodSugar: false,
		   ischeckBloodPressure: false,
		   ischeckHeartRate: false,
		   ischeckSleep: false,
			}
		},
		onLoad() {
			this.user_login();
		},
		methods: {
			// 消息推送
			Subscribe() {
				if(this.ischeckName||
				this.ischeckWeight||
				this.ischeckHeight||
				this.ischeckBloodSugar||
				this.ischeckBloodPressure||
				this.ischeckHeartRate||
				this.ischeckSleep){
					uni.showToast({
						title: '请检查输入格式',
						duration: 2000,
						icon: "error"
					});
					return 
				}
				let self = this
				console.log('消息推送被点击了');
				uni.requestSubscribeMessage({
					//此处填写刚才申请模板的模板ID
					tmplIds: ['DxOajrggcFFYqSyEPhyu_bLQi_MUb7lHJavlmOxCBDE'],
					success(res) {
						console.log(res)
						self.notice();
					}
				})
			},
			get_wx_access_token() {
				let self = this
				return uni.request({
					method: 'get',
					// appip和secret需要去小程序管理界面查看
					url: `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${self.appid}&secret=${self.secret}`,
					dataType: 'json',
					timeout: 1000
				}).then(res => {
					console.log(res);
					console.log('access_taken  ' + res.data.access_token);
					this.access_token = res.data.access_token
					return res.data.access_token
					//    let [err, success] = res
					//  console.log(res);
					//    if (success.statusCode == 200) {

					//  console.log(success.data.access_token);
					//        return success.data.access_token
					//    }
				})
			},
			// 消息推送获取用户id
			// 在onload中被调用
			async user_login() {
				let self = this
				await uni.login({
					success(res) {
						if (res.code) {
							console.log('用户id获取成功');
							self.code = res.code;
							console.log('res.code ' + self.code);
							// wxappid wxsecret为小程序的appId和secretKey，登录小程序后台可查看，code就是user_login的那个code
							uni.request({
								url: `https://api.weixin.qq.com/sns/jscode2session?appid=${self.appid}&secret=${self.secret}&js_code=${self.code}&grant_type=authorization_code`,
								success(data) {
									self.useropenId = data.data.openid
									console.log('self.useropenId  ' + self.useropenId);
								}
							})

						} else {
							console.log('获取失败！' + res.errMsg)
						}
					}
				});
			},
			// 发送订阅消息
			notice() {
				let self = this
                // 获取当前时间
				let date = new Date()
				let hour = date.getHours();
				let minute =  date.getMinutes();
				let second =  date.getSeconds();
				let timeArr = this.time.split('/');
				console.log(hour + ',' + minute);
				console.log(timeArr[0]+'...'+timeArr[1]);
				console.log((hour == timeArr[0]) && (minute == timeArr[1]));
				if((hour == timeArr[0]) && (minute == timeArr[1]))
				{
				console.log('notice方法被触发');
				//下方的thing1，thing2和其他，对应的是你选取模板的模板详情中的字段名称(可在小程序后台模板查看对应的字段，要和上面的字段一样)，需要更改成你自己的
				let pushmsg = {
					"page": "index",
					"miniprogram_state": "developer",
					"lang": "zh_CN",
					"touser": self.useropenId,
					"template_id": "DxOajrggcFFYqSyEPhyu_bLQi_MUb7lHJavlmOxCBDE",
					"data": {
						"thing1": {
							"value": self.medicine
						},
						"thing3": {
							"value": self.dosage
						},
						"thing4": {
							"value": self.manner
						},
						"thing5": {
							"value": self.note
						}
					}
				}
				this.get_wx_access_token()
				console.log('notice方法中的self.access_token: ' + self.access_token);
				setTimeout(() => {
					console.log('定时器中的token' + self.access_token);
					uni.request({
						url: 'https://api.weixin.qq.com/cgi-bin/message/subscribe/send?access_token=' +
							self.access_token,
						data: JSON.stringify(pushmsg),
						method: 'POST',
						success: function(res) {
							console.log('推送消息的res ' + JSON.stringify(res));

							console.log('成功推送消息');
						}
					})
				}, 2000)
				// 弹窗
				setTimeout(()=>{
					Dialog.confirm({
					  message: '设置吃药提醒成功！',
					})
					  .then(() => {
					    // on confirm
					  })
					  .catch(() => {
					    // on cancel
					  });
				},1000)
				}
				}
			},
			// 检查输入格式
			checkMedicine(){
				this.ischeckName = false
				// 判断是否是中文
				if (!/^^[\u4e00-\u9fa5]{1,20}$/.test(this.medicine)) {
					this.ischeckName = true
				}
			},
			checkDosage(){
			
			},
			checkManner(){
				this.ischeckHeight = false
				// 判断是否是中文
				if (!/^^[\u4e00-\u9fa5]{1,20}$/.test(this.manner)) {
					this.ischeckHeight= true
				}
			},
			checkNote(){
				this.ischeckBloodSugar = false
				// 判断是否是中文
				if (!/^^[\u4e00-\u9fa5]{1,50}$/.test(this.note)) {
					this.ischeckBloodSugar = true
				}
			}
		
	}
</script>

<style>
	.wrapper {
		background-image: linear-gradient(to top, #ffffff 0%, rgba(0, 255, 255, 0.1) 100%);
		width: 100%;
		height: 1280upx;
		position: relative;
	}

	/* 警告图片 */
	.warn {
		position: absolute;
		left: 7%;
		top: 4%;
		width: 40upx;
		height: 40upx;
	}

	.tips {
		position: absolute;
		font-size: 24upx;
		left: 14%;
		top: 4.5%;
		color: #ff0000;
	}

	/* 输入框 */
	.formbox {
		position: absolute;
		top: 8%;
		background-color: #ffffff;
		width: 94%;
		margin-left: 28upx;
	}

	.labelBox {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 4upx solid #f5f5f5;
	}

	.labelBox .p {
		font-family: PingFang SC;
		font-size: 26upx;
		margin-left: 28upx;
		color: #515151;
		font-weight: 550;
	}

	input {
		/* width: 60%; */
		/* 	background-color: #ff5e2e; */
		/* 	border: 1px solid salmon ; */
		font-family: PingFang SC;
		font-size: 26upx;
		color: #4b4b4b;
		text-align: end;
		display: inline-block;
		min-width: 8upx;
		height: 24upx;
		width: 400upx;
		max-width: 400upx;
		margin-left: 20upx;
		margin-top: 12upx;
		margin-right: 20upx;
		margin-bottom: 8upx;
		font-weight: 500;
		letter-spacing: 1upx;
	}

	/* 警告信息 */
	.warnInput {
		margin-left: 24upx;
		display: flex;
		height: 40upx;
		margin-bottom: -12upx;
	}

	.warnInput image {
		margin-top: 3upx;
		width: 26upx;
		height: 26upx;
	}

	.warnInput .p {
		color: #ff0000;
		font-size: 24upx;
		height: 24upx;
		width: 600upx;
	}

	/* 提交按钮 */
	.buttonBox {
		position: absolute;
		top: 44%;
		left: 5%;
		margin: auto;
		width: 90%;
	}

	.sumbitButton {
	
		color: #000;
		background-image: linear-gradient(to right, rgba(0, 170, 255, 0.3) 0%, rgba(170, 85, 255, 0.2) 100%);
		font-size: 32upx;
		font-family: STZhongsong;
		margin-top: 40upx;
	}
	.aiImage{
		width: 100upx;
		height: 92upx;
		position: absolute;
		top: 57%;
		left: 3%;
		border-radius: 100;
	}
	.text{
		font-size: 26upx;
		width: 80%;
		text-indent: 2em;
		position: absolute;
		line-height: 38upx;
		top: 60%;
		left: 17%;
	}
	.tipTwo{
		position: absolute;
		width: 750upx;
		top: 55%;
		left: 12%;
		z-index: 99;
	}
</style>