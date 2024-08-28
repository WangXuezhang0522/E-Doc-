<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
	}
</script>

<style>
	/*每个页面公共css */
	/* vant-ui组件库的css组件 */
	@import url('/wxcomponents/vant/dist/common/index.wxss');

	.template {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.text-ellipsis-2 {
		overflow: hidden;
		-webkit-line-clamp: 2;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
	}
</style>