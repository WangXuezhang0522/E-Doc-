<template>
	<view class="overall">
		<view class="wrapper">
			<ul class="ul">
				<view class="jump" type="default" @click="toList(1)">
					<li class="li">
						<h1 class="h1">热点</h1>
						<p class="p">实时热点话题</p>
						<image src="https://pic.imgdb.cn/item/65632e38c458853aeff4c591.png"></image>
					</li>
				</view>

				<view class="jump" type="default" @click="toList(2)">
					<li class="li">
						<h1 class="h1">生活</h1>
						<p class="p">生活小妙招</p>
						<image src="https://pic.imgdb.cn/item/65632e3cc458853aeff4d42d.png"></image>
					</li>
				</view>
				<view class="jump" type="default" @click="toList(3)">
					<li class="li">
						<h1 class="h1">饮食健康</h1>
						<p class="p">如何实现饮食养生</p>
						<image src="https://pic.imgdb.cn/item/65632e58c458853aeff5392d.png"></image>
					</li>
				</view>
				<view class="jump" type="default" @click="toList(4)">
					<li class="li">
						<h1 class="h1">母婴</h1>
						<p class="p">保障母亲和婴儿健康</p>
						<image src="https://pic.imgdb.cn/item/65632e36c458853aeff4bddd.png"></image>
					</li>
				</view>
				<view class="jump" type="default" @click="toList(5)">
					<li class="li">
						<h1 class="h1">医学</h1>
						<p class="p">这些新型病毒你了解吗？</p>
						<image src="https://pic.imgdb.cn/item/65632e27c458853aeff48cf7.png"></image>
					</li>
				</view>
				<view class="jump" type="default" @click="toList(6)">
					<li class="li">
						<h1 class="h1">防护</h1>
						<p class="p">该如何预防流感？</p>
						<image src="https://pic.imgdb.cn/item/65632e13c458853aeff44b36.png"></image>
					</li>
				</view>
			</ul>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			toList(id) {
				uni.navigateTo({
					url: '/pages/hotSpot/hotSpot?id=' +  id,
					// url:"../component/classdetails/classdetails?newsid="+ newsid,
					success: res => {console.log("调用成功")},
					fail: () => {console.log("调用失败")},
					complete: () => {console.log("调用完成")}
				});
			}
		}
	}
</script>

<style>
	/* 全局配置 */
	.overall {
		background-color: #f8f8f8;
		animation: overall 3s;
	}
	@keyframes overall{
	from{
		opacity: 0;
	}
	to{
		opacity: 1;
	}
	}
	.wrapper {
		margin: 20upx auto;
		height: 1260upx;
		width: 680upx;
		font-family: STXingkai;
	}

	.wrapper .ul  {
		display: flex;
		margin-top: -20upx;
		flex-wrap: wrap;
		background-color: #f8f8f8;
	}
    .wrapper .ul .jump{
		margin-left: 12upx;
	}
	.wrapper .ul .jump  .li {
		height: 360upx;
		width: 320upx;
		margin-top: 28upx;
		border-radius: 50upx;
		background-color: #ffffff;
	}

	.wrapper .ul .jump:nth-child(2n)   {
		margin-left: 20upx;
	}

	.wrapper .ul .jump  .li .h1 {
		width: 100%;
		height: 40upx;
		letter-spacing: 4upx;
		font-size: 40upx;
		margin-top: 40upx;
		margin-left: 16upx;
	}

	.wrapper .ul .jump  .li .p {
		width: 100%;
		height: 40upx;
		font-size: 28upx;
		margin-top: 16upx;
		letter-spacing: 4upx;
		margin-left: 16upx;
		color: #757575;
	}

	.wrapper .ul  .jump image {
		width: 120upx;
		height: 120upx;
		margin-top: 80upx;
		margin-left: 172upx;
	}
  /* 背景色 */
	.wrapper .ul .jump:nth-child(1) .li {
		background-image: linear-gradient(to bottom, rgba(255, 255, 255, 1) 30%, rgba(255, 0, 0, 0.6) 100%);
	}

	.wrapper .ul .jump:nth-child(2) .li {
		background-image: linear-gradient(to bottom, rgba(255, 255, 255, 1) 30%, rgba(0, 255, 255, 0.6) 100%);
	}

	.wrapper .ul .jump:nth-child(3) .li {
		background-image: linear-gradient(to bottom, rgba(255, 255, 255, 1) 30%, rgba(255, 170, 0, 0.6) 100%);
	}

	.wrapper .ul .jump:nth-child(4)  .li{
		background-image: linear-gradient(to bottom, rgba(255, 255, 255, 1) 30%, rgba(255, 255, 127, 0.4) 100%);
	}

	.wrapper .ul .jump:nth-child(5) .li {
		background-image: linear-gradient(to bottom, rgba(255, 255, 255, 1) 30%, rgba(214, 142, 106, 0.6) 100%);
	}

	.wrapper .ul .jump:nth-child(6) .li {
		background-image: linear-gradient(to bottom, rgba(255, 255, 255, 1) 30%, rgba(0, 255, 127, 0.6) 100%);
	}
</style>