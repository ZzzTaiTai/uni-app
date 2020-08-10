<template>

	<view class="window" :class="{show:isShow}">
		<view class="pop" >
			<h2 class="title" :style="{backgroundColor:color}">{{ info.name }}</h2>
			<text class="info">{{ info.text }}</text>
			<button class="btn-close" :style="{backgroundColor:color}" @click="changeShow">我知道了</button>
		</view>
		<view class="bg-cover"></view>
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
				type:Boolean,
				required:true
			},
			info:{
				type:Object,
				required:true
			},
			color:{
				type:String
			}
		},
		created() {
			
		},
		computed:{
		},
		methods:{
			changeShow(){
				this.$emit('changeShow')
			}
		}
			
		
	}
</script>

<style lang="scss">
	.window{
		.pop{
			position: fixed;
			visibility: hidden;
			top:50%;
			left:50%;
			width: 250px;
			margin-left: -125px;
			transform: translateY(-30%);
			opacity: .8;
			z-index: 99;
			font-size: 18px;
			text-align: center;
			background-color: #fff;
			border-radius: 8px;
			padding-bottom: 15px;
			transition: all .2s;
			.title{
				height: 58px;
				 line-height: 58px;
				    font-size: 20px;
				    color: #fff;
				    border-top-right-radius: 8px;
				    border-top-left-radius: 8px;
			}
			.info{
				display: block;
				font-size: 14px;
				    color: #434343;
				    line-height: 22px;
				    padding: 27px 20px 20px;
				    text-align: left;
			}
			.btn-close{
					width: 200px;
				    height: 40px;
				    line-height: 40px;
				    border-radius: 6px;
				    font-size: 16px;
				    color: #fff;
				    border: none;
			}
		}
		.bg-cover{
					position: fixed;
					top: 0;
					bottom: 0;
					left: 0;
					right: 0;
					background-color: rgba(0,0,0,.43);
					z-index: 98;
					display: none;
					backdrop-filter: blur(2px);
				}
			&.show{
				.pop{
					visibility: visible;
					opacity: 1;
					transform: translateY(-50%);
				}
				.bg-cover{
					display: block;
				}
			}
			// .fade-enter-active, .fade-leave-active {
			//   transition: transform .5s;
			// }
			// .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
			//   transform: translateY(-40%);
			// }
	}
</style>
