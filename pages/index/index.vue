<template>
	<view class="Navigation_bar">
		<image class="person_image" :src="person_image"></image>
	</view>
	<scroll-view scroll-y class="scroll_index">
		<view>
			<!-- Swiper Section -->
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :circular="true" class="swiper-container">
				<swiper-item v-for="(image, index) in imageList" :key="index">
					<image :src="image" class="swiper-image" mode="aspectFit"></image>
				</swiper-item>
			</swiper>

			<!-- Functionality Module Section -->
			<view class="function-module">
				<view class="Receiving_orders">
					<image src="/static/Functions_Icon/接单.png" class="Receiving_orders_image" mode="aspectFit"></image>
					<text class="Receiving_orders_text">接单</text>
				</view>
				<view class="place_an_order">
					<image src="/static/Functions_Icon/下单.png" class="place_an_order_image" mode="aspectFit"></image>
					<text class="place_an_order_text">下单</text>
				</view>
			</view>

			<!-- 页面其他内容 -->
		</view>

	</scroll-view>
</template>

<script setup>
	import {
		onMounted
	} from 'vue';

	onMounted(() => {
		// 在页面显示时设置导航栏按钮
		console.log("11111111")
	});
	const person_image = "/static/person/touxiang.png"

	const imageList = [ //轮播图路径
		'/static/banners/banner1.jpg',
		'/static/banners/banner2.jpg',
		'/static/banners/banner3.jpg',
		'/static/banners/banner4.jpg',
		'/static/banners/banner5.jpg',
	];
</script>

<style lang="scss">
	.Navigation_bar {
	background-color: #ffe4c4;
		.person_image{
			margin-top: 100rpx;
			margin-left: 20rpx;
			width: 70rpx;
			height: 70rpx;
		}
	}

	.scroll_index {
		background: #ffe4c4;
		height: 100vh;

		.swiper-container {
			//轮播图
			margin: 0 auto; // 居中
		}

		.swiper-image {
			//
			width: 100%;
			height: 100%;
		}

		.function-module {
			//接单下单功能模块
			display: flex;
			justify-content: space-between;
			margin-top: 50rpx;

			.Receiving_orders,
			.place_an_order {
				//接单下单统一部分
				display: block;
				justify-content: center; // 水平居中

				.Receiving_orders_image,
				.place_an_order_image {
					//接单下单图标统一部分
					width: 150rpx;
					height: 150rpx;
				}

				.Receiving_orders_text,
				.place_an_order_text {
					//接单下单文字统一部分
					display: flex;
					justify-content: center; //水平居中
					font-size: 30rpx;
					color: black;
				}
			}

			.Receiving_orders {
				//接单部分
				margin-left: 100rpx;
			}

			.place_an_order {
				//下单部分
				margin-right: 100rpx;
			}

			.place_an_order_image {
				opacity: 0.7;
			}
		}
	}
</style>