<template>
	<view class="container">
		<view class="section-main ">
			<text class="txt-location">深圳市 福田区</text>
			<text class="txt-api levell1">16<text>优</text></text>
			<text class="txt-temperature">33</text>
			<text class="txt-weather">多云</text>
			<view class="">
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower"
		        @scroll="scroll">
					<view id="demo1" class="scroll-view-item uni-bg-red">南风 2级</view>
					<view id="demo2" class="scroll-view-item uni-bg-green">湿度 61%</view>
				</scroll-view>
			</view>
			<text class="txt-info">天气太热了，吃个瓜</text>
			<view id="ct-landscape">
				<view class="layer" id="layer1">
					
				</view>
				 <view class="layer" id="layer2">
					
				</view>
				<view class="layer" id="layer3">
					
				</view>
			</view>
		</view>
		<text class="intro"></text>
		<text class="intro"></text>
	</view>
</template>

<script>
	let bmap = require('../../libs/bmap-wx.js');
	export default {
		data() {
			return {
				weatherData:null
				
			}
		},
		created(){
			this.initWear()
		},
		methods: {
			initWear() {
				let that = this;
				// 新建百度地图对象 
				let BMap = new bmap.BMapWX({
					ak: 'lv6eWcdyZhQfodHG8T23SQwsIG3eRN3Z'
				});
				let fail = function(data) {
					console.log(data)
				};
				let success = function(data) {
					let weatherData = data.currentWeather[0];
					weatherData = '城市：' + weatherData.currentCity + '\n' + 'PM2.5：' + weatherData.pm25 + '\n' + '日期：' + weatherData.date +
						'\n' + '温度：' + weatherData.temperature + '\n' + '天气：' + weatherData.weatherDesc + '\n' + '风力：' + weatherData.wind +
						'\n';
					that.weatherData = weatherData
				}
				// 发起weather请求 
				// BMap.weather({
				// 	fail: fail,
				// 	success: success
				// });
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		// padding: 20px;
		// font-size: 14px;
		// line-height: 24px;
		.section-main{
			position: relative;
			height: 500px;
			color:#FFFFFF;
			background-image: linear-gradient(-90deg,#50ade8,#7ae0fa);
			background-image: -webkit-linear-gradient(-90deg,#50ade8,#7ae0fa);
			uni-text{
				display: block;
				font-size: 16px;
				text-align: center;
				&.txt-weather{
					font-size: 14px;
				}
				&.txt-api{
					display: inline-block;
					margin:0 10px;
					height: 44px;
					padding: 8px 12px;
					border-radius: 8px;
					text-align: left;
					background: #ffbf62;
					box-shadow: 0 1px 1px 0 rgba(0,0,0,.12);
					&.levell1{
						background-color: #a3d765;
					}
				}
				&.txt-temperature{
					display: block;
					position: relative;
					font-size: 62px;
					&::after{
						content: '°';
						position: absolute;
						top: 0;
						text-align: left;
					}
				}
			}
			.scroll-Y{
				font-size: 12px;
				text-align: center;
			}
			#ct-landscape{
				position: absolute;
				bottom: 0px;
				top: 60px;
				width: 100%;
				overflow: hidden;
				z-index: 1;
				.layer{
					height: 100%;
					    content: "";
					    left: -6%;
					    right: -6%;
					    background-position: bottom;
					    background-repeat: no-repeat;
					    background-size: 100% auto;
						position: absolute;
						// top: 60px;
						// bottom:0;
						// transform: translate3d(0px, 0px, 0px);
						&#layer1{
							top: 10px;
							// bottom:0;
							z-index: 1;
							background-image:url(../../static/images/bg-top.png);
						}
						&#layer2{
							top: 15px;
							z-index: 2;
							background-image:url(../../static/images/bg-center.png);
						}
						&#layer3{
							bottom:0;
							z-index: 3;
							background-image:url(../../static/images/bg-bottom.png);
						}
				}
			}
		}
	}
</style>
