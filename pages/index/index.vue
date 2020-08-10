<template>
	<view class="container">
		<view class="section-main">
			<a href="javascript:;" class="back iconfont icon-fanhui fz18"></a>
			<a href="javascript:;" class="share iconfont icon-fenxiang fz18"></a>
			<view class="txt txt-location">
				<a class="location" href="javascript:;">
					<text class="iconfont icon-dingwei mr10"></text>
					深圳市 福田区
				</a>
			</view>
			<text class="txt txt-api levell1">20<text class="txt">优</text></text>
			<text class="txt txt-temperature">30</text>
			<text class="txt txt-weather">晴天</text>
			<view class="">
				<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :vertical="vertical"
				 :disable-touch="disableTouch" circular=true>
					<swiper-item>
						<view id="demo1" class="scroll-view-item uni-bg-red">东南风 2级</view>
					</swiper-item>
					<swiper-item>
						<view id="demo2" class="scroll-view-item uni-bg-green">湿度 88%</view>
					</swiper-item>
				</swiper>
			</view>
			<!-- 			<text class="txt txt-api levell1">{{airInfo.aqi}}<text class="txt">{{airInfo.category}}</text></text>
			<text class="txt txt-temperature">{{weatherInfo.temp}}</text>
			<text class="txt txt-weather">{{weatherInfo.text}}</text>
			<view class="">
				<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :vertical="vertical" :disable-touch="disableTouch" circular=true>
				<swiper-item>
					<view id="demo1" class="scroll-view-item uni-bg-red">{{weatherInfo.windDir}} {{weatherInfo.windScale}}级</view>
				</swiper-item>
				<swiper-item>
					<view id="demo2" class="scroll-view-item uni-bg-green">湿度 {{weatherInfo.humidity}}%</view>
				</swiper-item>
				</swiper>
			</view> -->
			<text class="txt txt-info mt50">天气太热了，吃个瓜</text>
			<view id="ct-landscape">
				<view class="layer" id="layer1">

				</view>
				<view class="layer" id="layer2">

				</view>
				<view class="layer" id="layer3">

				</view>
			</view>
		</view>
		<view class="section-box sec-tomorrow">
			<view class="item">
				<view class="top">
					<text class="date">今天</text>
					<text class="temperature">32/23°</text>
				</view>
				<view class="bottom">
					<text class="weather">明天</text>
					<image class="icon-weather" src="../../static/images/weather/101.svg" mode=""></image>
				</view>
			</view>
			<view class="item">
				<view class="top">
					<text class="date">今天</text>
					<text class="temperature">32/23°</text>
				</view>
				<view class="bottom">
					<text class="weather">明天</text>
					<image class="icon-weather" src="../../static/images/weather/101.svg" mode=""></image>
				</view>
			</view>
		</view>
		<view class="section-box sec-hours mt10">
			<scroll-view class="scroll-view_H" scroll-x="true" scroll-left="120">
				<view class="scroll-view-item_H">
					<text class="time">12:00</text>
					<image class="icon-weather" src="../../static/images/weather/101.svg" mode=""></image>
					<text class="time">30°</text>
				</view>
				<view class="scroll-view-item_H">
					<text class="time">13:00</text>
					<image class="icon-weather" src="../../static/images/weather/101.svg" mode=""></image>
					<text class="time">30°</text>
				</view>
				<view class="scroll-view-item_H">
					<text class="time">14:00</text>
					<image class="icon-weather" src="../../static/images/weather/101.svg" mode=""></image>
					<text class="time">30°</text>
				</view>
				<view class="scroll-view-item_H">
					<text class="time">12:00</text>
					<image class="icon-weather" src="../../static/images/weather/101.svg" mode=""></image>
					<text class="time">30°</text>
				</view>
				<view class="scroll-view-item_H">
					<text class="time">13:00</text>
					<image class="icon-weather" src="../../static/images/weather/101.svg" mode=""></image>
					<text class="time">30°</text>
				</view>
				<view class="scroll-view-item_H">
					<text class="time">14:00</text>
					<image class="icon-weather" src="../../static/images/weather/101.svg" mode=""></image>
					<text class="time">30°</text>
				</view>
				<view class="scroll-view-item_H">
					<text class="time">12:00</text>
					<image class="icon-weather" src="../../static/images/weather/101.svg" mode=""></image>
					<text class="time">30°</text>
				</view>
				<view class="scroll-view-item_H">
					<text class="time">13:00</text>
					<image class="icon-weather" src="../../static/images/weather/101.svg" mode=""></image>
					<text class="time">30°</text>
				</view>
				<view class="scroll-view-item_H">
					<text class="time">14:00</text>
					<image class="icon-weather" src="../../static/images/weather/101.svg" mode=""></image>
					<text class="time">30°</text>
				</view>
			</scroll-view>
		</view>
		<!-- 		<view class="section-box sec-hours mt10">
			<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120">
				<view class="scroll-view-item_H" v-for="(item,index) in hourInfo" :key="index">
					<text class="time">{{item.fxTime | weatherDate("hh")}}:00</text>
					<image class="icon-weather" src="../../static/images/weather/101.svg"></image>
					<text class="temp">{{item.temp}}°</text>
				</view>
			</scroll-view>
		</view> -->
		<view class="section-box sec-days mt10">
			<scroll-view class="scroll-view" scroll-x="true" scroll-left="120">
				<view class="scroll-view-item ml10 mr10">
					<view class="weather-item" v-for="(item,index) in dailyInfo" :key="index">
						<text class="time">{{item.fxDate | weatherDate("WW")}}\n<text>{{item.fxDate | weatherDate("MM/dd")}}</text></text>
						<text class="temp">{{item.textDay}}</text>
						<image class="icon-weather" :src="'../../static/images/weather/'+item.iconDay+'.svg'" mode=""></image>
					</view>
				</view>
				<view class="scroll-view-item canvasColumn" style="width: 1000rpx;height: 300rpx;background-color: #FFFFFF;">
					<canvas canvas-id="canvasColumn" id="canvasColumn" class="charts">
					</canvas>
				</view>
				<view class="scroll-view-item  ml10 mr10">
					<view class="weather-item" v-for="(item,index) in dailyInfo">
						<image class="icon-weather" :src="'../../static/images/weather/'+item.iconDay+'.svg'" mode=""></image>
						<text class="temp">{{item.textNight}}</text>
						<view class="wind">
							<text>{{item.WindDirNight}}</text>
							<text>{{item.windScaleNight}}级</text>
						</view>
					</view>
				</view>

			</scroll-view>
		</view>
		<uni-swiper-dot class="lifeDot" :info="newLifeInfo" :current="lifeIndex" mode="default" :dotsStyles="lifeDotsStyles">
		<view class="section-box sec-life mt10">
			
			<swiper class="life-swiper" v-if="newLifeInfo" circular="true" autoplay="true" interval="3000" duration="1000" indicator-color="#E3E3E3" indicator-active-color="#cecece" @change="changeCur">
				<swiper-item class="item" v-for="(items,itemIndex) in newLifeInfo" :key="itemIndex">
					<view class="swiper-item" v-for="(item,index) in items" @click="changeInfo(item)">
							<i class="iconfont" :class="'icon-'+indies[item.type].icon" :style="{color:indies[item.type].color}"></i>
							<text class="info">{{item.category}}</text>
							<text class="tips">{{item.name}}</text>
					</view>
				</swiper-item>
				<!-- <swiper-item>
					<view class="swiper-item">2</view>
				</swiper-item> -->
			</swiper>
			
			
		</view>
		</uni-swiper-dot>
		<weatherPop :isShow="lifePopShow" :info="lifePopInfo" :color="lifePopColor" @changeShow="changePop"></weatherPop>
		<search :isShow="searchShow"></search>
	</view>
</template>

<script>
	import uCharts from '../../static/js/u-charts.js';
	import weatherPop from "@/components/weatherPop.vue" 
	import search from "@/components/search/search.vue"
	const key = "1e732354397c4d31afea935c736e6df0";
	let _self,
		canvaCandle = null;
	export default {
		data() {
			return {
				curLocation: 1,
				weatherInfo: null,
				airInfo: null,
				hourInfo: [],
				dailyInfo: [],
				lifeInfo:[],
				indicatorDots: false,
				autoplay: true,
				interval: 2000,
				vertical: true,
				disableTouch: true,
				cWidth: '',
				cHeight: '',
				pixelRatio: 1,
				serverData: {},
				lifeIndex:0,
				lifePopShow:false,
				lifePopInfo:{},
				lifePopColor:"",
				searchShow:true,
				indies:{
					//1 运动
					1: {
						color: "rgb(230, 217, 157)",
						icon: "yundong"
					},
					//2 洗车
					2: {
						color: "rgb(77, 93, 168)",
						icon: "xichefuwu"
					},
					//3 穿衣
					3: {
						color: "rgb(225, 164, 196)",
						icon: "yifu"
					},
					//4 钓鱼
					4: {
						color: "rgb(163, 223, 212)",
						icon: "yu"
					},
					//5 紫外线
					5: {
						color: "rgb(164, 173, 224)",
						icon: "ziwaixian"
					},
					//6 旅游
					6: {
						color: "rgb(237, 172, 150)",
						icon: "hanglixiang"
					},
					//7 花粉过敏
					7: {
						color: "rgb(164, 173, 224)",
						icon: "huaduo"
					},
					//8 舒适度
					8: {
						color: "rgb(158, 196, 140)",
						icon: "xiaolian"
					},
					//9 感冒
					9: {
						color: "rgb(223, 199, 156)",
						icon: "icon-test"
					},
					//10 空气污染扩散条件
					10: {
						color: "rgb(178, 138, 144)",
						icon: "kongqizhiyiban"
					},
					//11 空调开启
					11: {
						color: "rgb(135, 197, 221)",
						icon: "kongtiao"
					},
					//12 太阳镜
					12: {
						color: "rgb(149, 163, 219)",
						icon: "yanjing"
					},
					//13 化妆
					13: {
						color: "rgb(224, 144, 144)",
						icon: "huazhuangpin"
					},
					//14 晾晒
					14: {
						color: "rgb(166, 186, 204)",
						icon: "yijia"
					},
					//15 交通
					15: {
						color: "rgb(139, 165, 175)",
						icon: "jiaotongtraffic9"
					},
					//16 防晒
					16: {
						color: "rgb(219, 173, 160)",
						icon: "rishai"
					}
				},
				lifeDotsStyles:{
					bottom:5,
					backgroundColor:"#e3e3e3",
					border:"0",
					selectedBackgroundColor:"#cecece"
				}
			}
		},
		components:{
			weatherPop,
			search
		},
		filters: {
			/**
			 * @description: 格式化日期时间
			 * @param {string} formatDate 日期时间格式：
			 * 年 YYYY , 月 MM , 日 DD , 季度 q
			 * 周 WW , 星期 WW
			 * 时 hh , 分 mm , 秒 ss , 毫秒 hs
			 * @param {value} value  new Date()对象
			 * @return {string} format 格式化的日期时间
			 * ('yyyy-MM-dd WW hh:mm:ss')
			 */
			weatherDate: function(value, format) {
				if (!value) return '';
				let getDate,
					nowDate,
					dateY,
					dateH;
				const week = ['日', '一', '二', '三', '四', '五', '六'];
				if (typeof value !== "number" && !(/\+/g.test(value))) {
					dateY = value.split(/-|\/|T|\s/);
					let date = new Date();
					date.setUTCFullYear(dateY[0], dateY[1] - 1, dateY[2]);
					if (/:/g.test(value)) {
						dateH = dateY[dateY.length - 1].split(/:/);
						date.setUTCHours(dateH[0], dateH[1], dateH[2].substring(0, 2), 0);
					}
					value = date;
				}
				getDate = new Date(value);
				nowDate = new Date();
				let fmt;
				let obj = {
					'M+': getDate.getMonth() + 1,
					'd+': getDate.getDate(),
					'h+': getDate.getHours(),
					'm+': getDate.getMinutes(),
					's+': getDate.getSeconds(),
					'q+': Math.floor((getDate.getMonth() + 3) / 3),
					'S': getDate.getMilliseconds()
				};
				if (/(y+)/.test(format)) {
					// RegExp.$1...$9属性的值为String类型，返回上一次正则表达式匹配中，第n个子表达式所匹配的文本。此属性只保存最前面的9个匹配文本。
					fmt = format.replace(RegExp.$1, (getDate.getFullYear() + '').substr(4 - RegExp.$1.length));
				}
				fmt = fmt ? fmt : format;
				if (/(W+)/.test(fmt)) {
					let newWeek = null;
					switch (getDate.getDate() - nowDate.getDate()) {
						case -1:
							newWeek = '昨天';
							break;
						case 0:
							newWeek = '今天';
							break;
						case 1:
							newWeek = '明天';
							break;
						case 2:
							newWeek = '后天';
							break;
						default:
							newWeek = "周" + week[getDate.getDay()];
					}
					fmt = fmt.replace(RegExp.$1, newWeek);
				}

				for (let k in obj) {
					if (new RegExp('(' + k + ')').test(fmt)) {
						fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (obj[k]) : (('00' + obj[k]).substr(('' + obj[k]).length)));
					}
				}
				return fmt
			}
		},
		created() {
			_self = this;
			// #ifdef MP-WEIXIN 
			this.authorize();
			// #endif
			// #ifdef H5 
			this.initWeather();
			// #endif 

			this.serverData = {
				categories: [],
				series: [{
					name: '最高温度',
					data: [],
					color: "#f8bd59",
					format: (val => {
						return val + '°'
					})
				}, {
					name: '最底温度',
					data: [],
					color: "#59c5ec",
					format: (val => {
						return val + '°'
					})
				}]
			}
		},
		computed:{
			newLifeInfo(){
				const subLength = 8 ;
				let newArray = [],
					index = 0;
				while(index < this.lifeInfo.length){
					newArray.push(this.lifeInfo.slice(index,index += subLength));
				}
				return newArray
			},
		},
		methods: {
			authorize() {
				let that = this;
				uni.authorize({
					scope: 'scope.userLocation',
					success() {
						that.initWeather();
					}
				})
			},
			initWeather() {
				let that = this;
				uni.getLocation({
					success: function(res) {
						let lifeData = {}
						that.curLocation = res.longitude + ',' + res.latitude;
						lifeData = {location: that.curLocation,key: key,type:0};
						// that.reqHeweather('weather/now').then(res => that.weatherInfo = {...res.now});
						// that.reqHeweather('air/now').then(res => that.airInfo = {...res.now});
						// that.reqHeweather('weather/24h').then(res => that.hourInfo = res.hourly);
						// that.reqHeweather('weather/7d').then(res => {
						// 	let daily = _self.dailyInfo = res.daily;
						// 	daily.forEach((item) => {
						// 		_self.serverData.categories.push(item.fxDate);
						// 		_self.serverData.series[0].data.push(parseInt(item.tempMax));
						// 		_self.serverData.series[1].data.push(parseInt(item.tempMin));
						// 	})
						// 	_self.cWidth = uni.upx2px(1000);
						// 	_self.cHeight = uni.upx2px(300);
						// 	_self.getServerData();
						// });
						that.reqHeweather('indices/1d',lifeData).then(res => that.lifeInfo = res.daily);
					}
				})

			},
			reqHeweather(url,data) {
				let that = this,
					newUrl = url;
				data ? data : {location: that.curLocation,key: key}
				// #ifdef MP-WEIXIN 
				newUrl = 'https://devapi.heweather.net/v7/' + url;
				// #endif
				return new Promise((resolve, reject) => {
					uni.request({
						url: newUrl,
						data: data,
						success(res) {
							resolve(res.data);
						},
						fail(error) {
							reject(error);
						}
					})
				})
			},

			// reqcity() {

			// },
			getServerData() {
				_self.showLineA("canvasColumn", _self.serverData);
			},
			showLineA(canvasId, chartData) {
				let max = Math.max.apply(null, chartData.series[0].data) + 1.5,
					min = Math.min.apply(null, chartData.series[1].data) - 1.5;
				canvaCandle = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'line',
					fontSize: 14,
					legend: {
						show: false
					},
					dataLabel: true,
					dataPointShape: true,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					// enableScroll:true,
					animation: true,
					xAxis: {
						disabled: true,
						disableGrid: true,
						axisLine: false,
						itemCount: 6, //x轴单屏显示数据的数量，默认为5个
						// boundaryGap:"justify"
						dashLength: 6
					},
					yAxis: {
						disabled: true,
						disableGrid: true,
						max: max,
						min: min
					},
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					extra: {
						line: {
							type: 'curve'
						}
					}
				});

			},
			touchLineA(e) {
				canvaCandle.showToolTip(e, {
					format: function(item, category) {
						return category + ' ' + item.name + ':' + item.data
					}
				});
			},
			changeCur(e){
				this.lifeIndex = e.detail.current;
			},
			changeInfo(item){
				this.lifePopInfo = item;
				this.lifePopColor = this.indies[item.type].color;
				this.changePop();
			},
			changePop(){
				this.lifePopShow = !this.lifePopShow;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.mt10 {
		margin-top: 10px;
	}

	.mt50 {
		margin-top: 50px;
	}

	.ml10 {
		margin-left: 10px;
	}

	.mr10 {
		margin-right: 10px;
	}

	/* #ifdef MP-WEIXIN */
	.container {
		position: relative;
		.section-main {
			// margin-top: 50px;
		}
	}

	/* #endif */
	.container {
		.section-main {
			position: relative;
			height: 1000upx;
			color: #FFFFFF;
			background-image: linear-gradient(-90deg, #50ade8, #7ae0fa);
			background-image: -webkit-linear-gradient(-90deg, #50ade8, #7ae0fa);

			.back,
			.share {
				position: absolute;
				top: 5px;
				font-size: 24px;
				z-index: 3;
			}

			.back {
				left: 10px;
			}

			.share {
				right: 10px;
			}

			.txt {
				display: block;
				font-size: 16px;
				text-align: center;

				&.txt-location {
					line-height: 40px;
				}

				&.txt-weather {
					font-size: 14px;
				}

				&.txt-api {
					display: inline-block;
					margin: 5px 10px;
					height: 44px;
					padding: 8px 12px;
					border-radius: 8px;
					text-align: left;
					background: #ffbf62;
					box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .12);

					&.levell1 {
						background-color: #a3d765;
					}
				}

				&.txt-temperature {
					display: block;
					position: relative;
					font-size: 62px;

					&::after {
						content: '°';
						position: absolute;
						top: 0;
						text-align: left;
					}
				}
			}

			.swiper {
				height: 18px;
				font-size: 12px;
				text-align: center;
			}

			#ct-landscape {
				position: absolute;
				bottom: 0px;
				top: 60px;
				width: 100%;
				overflow: hidden;
				z-index: 1;

				.layer {
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
					&#layer1 {
						top: 10px;
						// bottom:0;
						z-index: 1;
						background-image: url(../../static/images/bg-top.png);
					}

					&#layer2 {
						top: 15px;
						z-index: 2;
						background-image: url(../../static/images/bg-center.png);
					}

					&#layer3 {
						bottom: 0;
						z-index: 3;
						background-image: url(../../static/images/bg-bottom.png);
					}
				}
			}
		}

		.section-box {
			margin: 15px 0;
			background-color: #fff;
			border-bottom: 1px solid rgba(0, 0, 0, .2);

			.scroll-view-item_H {
				display: inline-block;
				text-align: center;

			}

			.icon-weather {
				display: block;
				width: 22px;
				height: 22px;
				margin: 30rpx 46rpx;
			}


			&.sec-tomorrow {
				display: flex;
				align-items: center;
				padding: 25px 0;
				color: #434343;

				.item {
					flex: 1;
					padding: 0 15px;

					.top,
					.bottom {
						display: flex;
						justify-content: space-between;
						align-items: center;
					}

					.top {
						margin-bottom: 10px;
					}

					&:first-child {
						border-right: 1px solid rgba(0, 0, 0, .1);
					}
				}
			}

			&.sec-hours {
				padding: 20px 0;
				border-top: 1px solid rgba(0, 0, 0, .2);
				height: 100px;

				.scroll-view_H {
					white-space: nowrap;
					width: 100%;
				}

				.scroll-view-item_H {
					display: inline-block;
				}
			}

			&.sec-days {
				border-top: 1px solid rgba(0, 0, 0, .2);
				padding: 20px 0;

				.scroll-view-item {
					.weather-item {
						display: inline-block;
						text-align: center;
						white-space: nowrap;

						.time,
						.temp {
							display: block;
						}
					}
				}
			}
			&.sec-life {
				background-color: transparent;
				border-bottom:0;
				.life-swiper{
					height:230px;
					background: #fff;
					border-bottom: 1px solid rgba(0,0,0,.3);
					
				}
				.item{
					display: flex;
					flex-wrap: wrap;
					text-align: center;
					border:1px solid rgba(0,0,0,.2);
					border-bottom:0;
					&:nth-child(2n){
						border-left:0;
					}
				}
				.swiper-item{
					flex:0 0 25%;
					height:115px;
					padding:10px 2px;
					border-right:1px solid rgba(0,0,0,.2);
					border-bottom:1px solid rgba(0,0,0,.2);
					box-sizing: border-box;
					&:nth-child(4n){
						border-right:0;
					}
					.info,.tips{
						display: block;
						font-size: 14px;
					}
					.info{
						margin:10px 0;
					}
					.tips{
						
						color:#999;
						font-size: 12px;
						line-height: 12px;
					}
					.iconfont{
						font-size:24px;
					}
				}
			}

			.canvasColumn {}

			.charts {
				width: 1000rpx;
				height: 300rpx;
				background-color: #FFFFFF;
			}
			.lifeDot{
				height: 20px;
			}
		}
	}
	.life-swiper{
		/* wx */
		  wx-swiper .wx-swiper-dot {
		  	width: 10px;
		  	height: 3px;
		  }
		  wx-swiper .wx-swiper-dot-active {
			background-color: #000;
			width: 20px;
			border-radius: 5px;
		  }	
	}
	
</style>
