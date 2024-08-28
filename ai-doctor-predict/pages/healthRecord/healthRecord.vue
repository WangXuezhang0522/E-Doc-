<template>
	<view class="content">
		<text class="tips"><text class="star">*</text><text>以下为必填项</text></text>
		<form @submit="onSubmit">
			<view class="formbox">
				<label class="labelBox">
					<p class="p">姓名</p>
					<input @blur="checkName" placeholder="请输入姓名" type="text" name="userName" v-model="userName" />
				</label>
				<view class="warn" v-if="ischeckName">
					<image src="../../static/警告图标svg.png"></image>
					<p class="p">您输入的姓名有误(必须为中文且为2到4位)</p>
				</view>

				<label class="labelBox">
					<p class="p">体重</p>
					<input @blur="checkWeight" placeholder="请填写kg" type="text" name="weight" v-model="weight" />
				</label>
				<view class="warn" v-if="ischeckWeight">
					<image src="../../static/警告图标svg.png"></image>
					<p class="p">您输入的体重有误(范围为10到500,保留一位小数)</p>
				</view>

				<label class="labelBox">
					<p class="p">身高</p>
					<input @blur="checkHeight" placeholder="请输写cm" type="text" name="height" v-model="height" />
				</label>
				<view class="warn" v-if="ischeckHeight">
					<image src="../../static/警告图标svg.png"></image>
					<p class="p">您输入的身高有误(范围为50到230,保留一位小数)</p>
				</view>

				<label class="labelBox">
					<p class="p">血糖</p>
					<input @blur="checkBloodSugar" placeholder="请填写数值(mmol/l)" type="text" name="bloodSugar" v-model="bloodSugar" />
				</label>
				<view class="warn" v-if="ischeckBloodSugar">
					<image src="../../static/警告图标svg.png"></image>
					<p class="p">您输入的血糖有误(范围为0到100,保留一位小数)</p>
				</view>

				<label class="labelBox">
					<p class="p">血压</p>
					<input @blur="checkBloodPressure" placeholder="请填写数值(mmhg)" type="text" name="bloodPressure" v-model="bloodPressure" />
				</label>
				<view class="warn" v-if="ischeckBloodPressure">
					<image src="../../static/警告图标svg.png"></image>
					<p class="p">您输入的血压有误(范围为10到300,保留一位小数)</p>
				</view>

				<label class="labelBox">
					<p class="p">心率</p>
					<input @blur="checkHeartRate" placeholder="请填写心率" type="text" name="heartRate" v-model="heartRate" />
				</label>
				<view class="warn" v-if="ischeckHeartRate">
					<image src="../../static/警告图标svg.png"></image>
					<p class="p">您输入的心率次数有误(范围为10到300,保留一位小数)</p>
				</view>

				<label class="labelBox">
					<p class="p">睡眠</p>
					<input @blur="checkSleep" placeholder="请填写睡眠时长(小时)" type="text" name="sleep" v-model="sleep" />
				</label>
				<view class="warn" v-if="ischeckSleep">
					<image src="../../static/警告图标svg.png"></image>
					<p class="p">您输入的睡眠时长有误(范围为1到24,保留一位小数)</p>
				</view>

			</view>
			<view class="buttonBox">
				<button class="sumbitButton" form-type="submit" id="btn" type="primary">保存并返回</button>
			</view>
		</form>
		<!-- <form @submit="onUpdate">
			姓名：
			<input type="text" name="userName" v-model="userName"/>
			<button form-type="submit" >查询</button>
		</form> -->
	</view>
</template>


<script>
	import helper from '../../common/helper.js';
	export default {
		data() {
			return {
				userName: '',
				weight: '',
				height: '',
				bloodSugar: '',
				bloodPressure: '',
				heartRate: '',
				sleep: '',
				healthObject: {},
				conversation: [],
				ischeckName: false,
				ischeckWeight: false,
				ischeckHeight: false,
				ischeckBloodSugar: false,
				ischeckBloodPressure: false,
				ischeckHeartRate: false,
				ischeckSleep: false,
			};
		},
		methods: {

			onSubmit(e) {
				if (
					this.userName === '' &&
					this.weight === '' &&
					this.height === '' &&
					this.bloodSugar === '' &&
					this.bloodPressure === '' &&
					this.heartRate === '' &&
					this.sleep === ''
				) {
					uni.showToast({
						title: '请输入点什么呗！',
						duration: 2000,
						icon: "error"
					});
				} else {
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
					this.healthObject = {
						userName: this.userName,
						weight: this.weight,
						height: this.height,
						bloodSugar: this.bloodSugar,
						bloodPressure: this.bloodPressure,
						heartRate: this.heartRate,
						sleep: this.sleep
					}
					// 将当前数据存储到全局变量当中
					this.conversation.unshift(this.healthObject)
					console.log('健康档案数据保存成功');
					helper.healthArr = this.conversation
					uni.request({
						url: 'http://127.0.0.1:5000/insertuser',
						data: {
							name: this.userName,
							weight: this.weight,
							height: this.height,
							bloodSugar: this.bloodSugar,
							bloodPressure: this.bloodPressure,
							heartRate: this.heartRate,
							sleep: this.sleep,
						},
						header: {
							'Content-Type': 'application/x-www-form-urlencoded',
						},
						method: 'POST',
						success: response => {
							console.log("发送成功");
							// 跳转回个人中心
							uni.navigateBack({
								delta: 1
							});
						},
						fail: error => {
							console.error(error);
						},
					});
				}
			},
			// 检查姓名
			checkName() {
				this.ischeckName = false
				// 判断姓名是否是中文
				if (!/^^[\u4e00-\u9fa5]{2,4}$/.test(this.userName)) {
					this.ischeckName = true

				}
			},
			// 检查体重
			checkWeight(){
				this.ischeckWeight = false;
				if(!/^([1-9]{0,2}|[1-4][0-9]{0,2}|500)$/.test(this.weight)){
					this.ischeckWeight =true;
				}
			},
			// 检查身高
			checkHeight(){
				this.ischeckHeight = false;
				if(!/^([5-9][0-9]|[5-9][0-9](\.\d{1})?|[1][0-9][0-9]|[1][0-9][0-9](\.\d{1})?|[2][0-2][0-9]|230)$/.test(this.height)){
					this.ischeckHeight =true;
				}
			},
			// 检查血糖
			checkBloodSugar(){
				this.ischeckBloodSugar = false;
				if(!/^(([0-9]{0,2})|([0-9][0-9](\.\d{1})?)|([0-9](\.\d{1})?)|100)$/.test(this.bloodSugar)){
					this.ischeckBloodSugar =true;
				}
			},
			// 检查血压
			checkBloodPressure(){
				this.ischeckBloodPressure = false;
				if(!/^([1-9][0-9](\.\d{1})?|[1-9][0-9]|[1-2][0-9][0-9](\.\d{1})?|[1-2][0-9][0-9]|300)$/.test(this.bloodPressure)){
					this.ischeckBloodPressure =true;
				}
			},
			// 检查心率
			checkHeartRate(){
				this.ischeckHeartRate = false;
				if(!/^([1-9][0-9]|[1-9][0-9](\.\d{1})?|[1-2][0-9][0-9]|[1-2][0-9][0-9](\.\d{1})?|300)$/.test(this.heartRate)){
					this.ischeckHeartRate =true;
				}
			},
			// 检查睡眠
			checkSleep(){
				this.ischeckSleep = false;
				if(!/^([0-9]|[0-9](\.\d{1})?|[1][0-9]|[1][0-9](\.\d{1})?|[2][0-4]|[2][0-4](\.\d{1})?)$/.test(this.sleep)){
					this.ischeckSleep =true;
				}
			}
		},
	};
</script>

<style>
	/* 背景 */
	.content {
		width: 100%;
		height: 1200upx;
		font-family: 宋体;
		font-size: 40rpx;
		background-color: #f1f1f1;
	}

	/* 提示 */
	.tips {
		height: 40upx;
		font-size: 24upx;
		color: #b3b3b3;
		font-family: SimHei;
		font-weight: 550;
		margin-left: 14upx;
	}

	.tips .star {
		display: inline-block;
		color: #ff5e2e;
		font-size: 16upx;
		margin-right: 6upx;
		padding-bottom: 8upx;
	}

	.formbox {
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

	.labelBox:nth-child(7) {
		border: none;
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
		max-width: 400upx;
		margin-left: 20upx;
		margin-top: 12upx;
		margin-right: 20upx;
		margin-bottom: 8upx;
		font-weight: 500;
		letter-spacing: 1upx;
	}

	input::placeholder {
		/* 	color: rgba(170, 255, 255, 0.5);
		letter-spacing: 1px; */
	}

	.buttonBox {
		margin: auto;
		width: 90%;
	}

	.sumbitButton {
		font-size: 32upx;
		font-family: STZhongsong;
		margin-top: 40upx;
	}

	/* 警告信息 */
	.warn {
		margin-left: 24upx;
		display: flex;
		height: 40upx;
		margin-bottom: -12upx;
	}

	.warn image {
		width: 26upx;
		height: 26upx;
	}

	.warn .p {
		color: #ff0000;
		font-size: 24upx;
		height: 24upx;
		width: 300px;
	}
</style>