<template>
	<view class="overall">
		<!-- 搜索框 -->
		<view class="search">
			<view class="font">
				<image src="../../static/智能搜索.png"></image>
			</view>
			<input v-model="inputMessage" type="text" confirm-type="search" @confirm="getSearchMessage" shape="round"
				background="#f8f8f8" placeholder="请输入搜索关键词" />
		</view>
		<view class="searchText">
			{{searchResults}}
		</view>

	</view>
	<!-- 搜索框为空时弹窗 -->
	<van-dialog id="van-dialog" />
</template>

<script>
	import helper from '../../common/helper.js'
	export default {
		data() {
			return {
				searchResults: '',
				inputMessage: ''
			}
		},
		methods: {
			getSearchMessage() {
				if (this.inputMessage !== '') {
					uni.request({
						url: 'http://127.0.0.1:5000/ddgsearch',
						data: {
							text: this.inputMessage
						},
						header: {
							'Content-Type': 'application/x-www-form-urlencoded',
						},
						method: 'POST',
						success: response => {
							this.searchResults = response.data
						},
						fail: error => {
							console.error(error);
						},
					});
				} else {
					// 弹窗
					Dialog.alert({
						confirmButtonText: '重新输入',
						context: this,
						title: '输入错误',
						overlay: 'false',
						message: '不能输入空的搜索词',
						theme: 'round-button',
					}).then(() => {});
				}
			}

		},
		onLoad() {
			this.searchResults = helper.searchResponse;
		},
	}
</script>

<style>
	/* 全局设置 */
	.overall {
		background-color: #f8f8f8;
		width: 100%;
	}

/* 搜索框 */
	.search {
		height: 64upx;
		width: 90%;
		display: flex;
		margin: 0px auto;
	}

	.search .font image {
		margin-top: 6upx;
		width: 32upx;
		height: 32upx;
	}

	.search input {
		font-size: 28upx;
		margin-left: 12upx;
	}

	/* 打印效果 */
	@keyframes typing {
		from {
			width: 0;
		}

		to {
			width: 21em;
		}
	}

	/* 光标 */
	@keyframes blink-caret {

		from,
		to {
			border-color: transparent;
		}

		50% {
			border-color: currentColor;
		}
	}

	.searchText {
		/* 		background-image: linear-gradient(to bottom, rgba(0, 255, 255, 0.1), rgba(0, 85, 255, 0.2)); */
		width: 92%;
		margin: auto;
		text-indent: 2em;
		animation: typing 3s steps(60, end), blink-caret .75s step-end infinite;
	}
</style>