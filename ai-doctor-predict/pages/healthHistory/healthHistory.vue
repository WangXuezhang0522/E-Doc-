<template>
	<view>

		<van-notice-bar
		  color="#1989fa"
		  background="#ecf9ff"
		  left-icon="info-o"
		  speed = "20"
		  text="每日健康小贴士:晚上熬夜其实就是在折磨你的身体，会让你的血压和胆固醇升高，这些都会给你心脏带来健康风险。如果你不想情况更糟，就抓紧去睡个好觉。"
		/>
		
		<view class="health" v-for="(item,index) in healthArray" :key="item">
			<text class="top">健康第{{++index}}次记录</text>
			<van-tag mark type="primary" size="medium" color="rgba(255, 85, 0, 0.7)">
				BMI
				{{(((10000.0 * item.weight) / (item.height * item.height)).toFixed(1))}}
				</van-tag>

			<ul class="ul">
				<li class="li">
					<view class="left">
						<text class="h1">体重</text>
						<text class="number">
							<text>{{item.weight}}</text>
							kg</text>
					</view>
			
				</li>
				<li class="li">
					<view class="left">
						<text class="h1">身高</text>
						<text class="number">
							<text>{{item.height}}</text>
							cm</text>
					</view>
					
				</li>
				<li class="li">
					<view class="left">
						<text class="h1">血糖</text>
						<text class="number">
							<text>{{item.bloodSugar}}</text>
							mmol/l</text>
					</view>
					
				</li>
				<li class="li">
					<view class="left">
						<text class="h1">血压</text>
						<text class="number">
							<text>{{item.bloodPressure}}</text>
							mmhg</text>
					</view>
				
				</li>
				<li class="li">
					<view class="left">
						<text class="h1">心率</text>
						<text class="number">
							<text>{{item.heartRate}}</text>
							次/每分</text>
					</view>
				
				
				</li>
				<li class="li">
					<view class="left">
						<text class="h1">睡眠</text>
						<text class="number">
							<text>{{item.sleep}}</text>
							小时</text>
					</view>
					
				</li>
			</ul>
	</view>
	</view>
</template>

<script>
	// 全局变量引入
	import helper from '../../common/helper.js';
	import Dialog from '../../wxcomponents/vant/dist/dialog/dialog'
	export default {
		data() {
			return {
				// 实时计算BMI值
				BMI: 0.0,
				// 健康档案对象数据
				healthArray: [
					{}
				],
			}
		},
		onLoad() {

		},
		onShow() {
			// 健康档案赋值
			this.healthArray = helper.healthArr || {
				userName: '用户',
				weight: 0,
				height: 0,
				bloodSugar: 0,
				bloodPressure: 0,
				heartRate: 0,
				sleep: 0
			};

		},
		methods: {
			
		}
	}
</script>

<style>
.health{
	margin-top: 8upx;
	background-color: rgba(255, 170, 0, 0.1);
}
.top{
	font-size: 30upx;
	margin-right: 12upx;
	font-style: italic;
	letter-spacing: 1upx;
}
.ul{
	margin-top: 8upx;
	border-bottom: 2upx solid rgba(68, 68, 68, 0.2);
	border-top: 2upx solid rgba(68, 68, 68, 0.2);
}
.ul .li{
	height: 60upx;
	margin-top: 4upx;
}

</style>
