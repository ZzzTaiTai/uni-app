<template>
	<view class="search-box" :class="{show:isShow}">
		<view class="top">
			<navigator url="" class="cancel">取消</navigator>
			<view class="input">
				<i class="search-icon"></i>
				<input class="search-input" type="text" value="" placeholder="搜索地区" />
			</view>
		</view>
		<view class="his-hot-city">
			<view class="history-city">
				<navigator url="" class="delete"></navigator>
				<h2 class="title">历史记录</h2>
				<ul class="city-lists">
					<li>北京</li>
				</ul>
			</view>
			<view class="hot-city">
				<h2 class="title">热门城市</h2>
				<ul class="city-lists">
					<li>北京</li>
				</ul>
			</view>	
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:{
			isShow:{
				type:Boolean
			}
		}
	}
</script>

<style lang="scss">
	.search-box{
		position: fixed;
		visibility: hidden;
		top:0;
		left:0;
		heigh:0;
		width: 100vw;
		background-color: #fff;
		z-index: 9999;
		&.show{
			height: 100vh;
			visibility: visible;
		}
		.top{
			height: 45px;
			padding: 7px 0;
			position: relative;
			border-bottom: 1px solid #eee;
			box-sizing: border-box;
			.input{
				position: relative;
				margin-right: 60px;
				margin-left: 13px;
				.search-icon{
					position: absolute;
					    height: 14px;
					    width: 14px;
					    top: 8px;
					    left: 10px;
					    background-size: 14px;
					    // background-image: url(../../static/images/serach.svg);
				}
				.search-input{
					width: 100%;
					height: 30px;
					padding: 5px 0 5px 32px;
					box-sizing: border-box;
					line-height: 24px;
					background: #f2f2f2;
					border-radius: 44px;
					font-size: 14px;
					color: #434343;
					-webkit-appearance: none;
					border-width: 0;
				}
			}
		}
		
		.cancel{
			float: right;
			font-size: 14px;
			color: #434343;
			width: 60px;
			line-height: 30px;
			text-align: center;
		}
		
		.his-hot-city{
			padding: 12px 13px 7px;
			position: absolute;
			top: 45px;
			bottom: 0;
			left: 0;
			right: 0;
			overflow: auto;
		}
		.title{
			font-size: 16px;
			color: #434343;
			height: 22px;
			line-height: 20px;
			margin: 10px 0;
		}
		.delete{
			display: block;
			float: right;
			// background-image: url(../../static/images/serach.svg);
			background-size: 17px 17px;
			height: 17px;
			width: 17px;
			margin-top: 21px;
		}
		.city-lists{
			&::after{
				content: "";
				display: block;
				height: 0;
				clear: both;
			}
			li{
				box-sizing: border-box;
				background: #f2f2f2;
				border-radius: 44px;
				padding: 0 16px;
				width: 32%;
				height: 32px;
				line-height: 32px;
				margin-bottom: 12px;
				font-size: 14px;
				color: #434343;
				text-align: center;
				float: left;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
	}
</style>
