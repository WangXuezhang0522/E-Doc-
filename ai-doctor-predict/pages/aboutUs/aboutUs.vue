<template>
	<view class="backdrop">
		<view class="title">关于我们</view>
		<view class="context">
			<view class="p">随着人工智能（AI）技术的快速发展,它在医疗领域的应用也越来越广泛.其中,AI在疾病辅助早期诊断方面发挥着重要的作用.这是一个基于大语言模型（Large Language Model）的医疗辅助小程序.通过利用LLM模型进行疾病特征的分析做到疾病预测与早期诊断以及利用情景对话推测分析人的心理情况,使得尽可能的了解自身情况.我们可以期待在未来看到更多AI在诊断和治疗中的应用,使医疗变得更加科学和高效.</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.backdrop {
		position: relative;
		height: 1220upx;
		width: 764upx;
		background-image: url('../../static/about.jpg');
	}

	.title {
		position: absolute;
		top: 18%;
		text-align: center;
		color: #ffffff;
		font-size: 60upx;
		left: 34%;
	}

	.context {
		font-size: 28upx;
		text-align: center;
		top: 30%;
		position: absolute;
		color: #ffffff;
		line-height: 52upx;
		letter-spacing: 2upx;
		/* text-shadow: 0 0 10px white,0 0 20px white,0 0 30px white,0 0 40px white;	 */
	}
	
</style>