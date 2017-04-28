<template>
	<div class="header">
		<div> 
			<text class="title">电影 <image class="iconfont" src="https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg"></image></text>
		</div>
	</div>
</template>
<script>
	export default{
		name:'header'
	}
</script>

<style scoped>
	.header{
		width: 100%;
		height: 80px;
		background: rgb(35, 132, 232);
		padding: 0;
		margin: 0;
	}
	.title{
		height: 80px;
		width: 100%;
		font-size: 40px;
		padding-left: 20px;
		padding-right: 20px;
		color: #fff;
		line-height: 80px;
		float: left;
	}
	.iconfont{
		/*font-family:"iconfont";
		font-size:80px;
		font-style:normal;
		-webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale; 
        padding-left:20px;
        float:left;*/
        width: 80px;
        height: 80px;
        float: right;
	}
	@font-face {
	  font-family: 'iconfont';  /* project id 187897 */
	  src: url('//at.alicdn.com/t/font_dvbll8z02xwasjor.eot');
	  src: url('//at.alicdn.com/t/font_dvbll8z02xwasjor.eot?#iefix') format('embedded-opentype'),
	  url('//at.alicdn.com/t/font_dvbll8z02xwasjor.woff') format('woff'),
	  url('//at.alicdn.com/t/font_dvbll8z02xwasjor.ttf') format('truetype'),
	  url('//at.alicdn.com/t/font_dvbll8z02xwasjor.svg#iconfont') format('svg');
	}
</style>