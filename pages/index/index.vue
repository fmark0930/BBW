<template>
	<view class="Navigation_bar" @click="showDrawer('showLeft')">
		<image class="person_image" :src="person_image"></image>
	</view>
	<uni-drawer class="uni_drawer" ref="showLeft" mode="left" :width="320" @change="change($event,'showLeft')">
		<view class="uni_drawer_head">
			<image class="uni_drawer_person_image" :src="person_image"></image>
			<button   @click="UserLogin" open-type="getUserInfo" getuserinfo="test">测试按钮</button>
		</view>
	</uni-drawer>
	
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
		onMounted,
		ref,
		toRefs
	} from 'vue';

	onMounted(() => {

	});
	const showLeft = ref(false)

	let person_image = "/static/person/touxiang.png"

	const test = (e) => {
		uni.getUserInfo({
			success: (res) => {
				this.userInfo = res.userInfo;
				console.log(this.userInfo);
			},
			fail: () => {
				console.log("未授权");
			}
		})

	}



	const UserLogin = async () => {

		const userinfo = await uni.getUserProfile({
			desc: "获取用户信息",

			success(res) {
				person_image = res.userInfo.avatarUrl
				console.log(person_image)
				console.log("获取成功111", res.userInfo);
			},
		});

		const {
			code
		} = await uni.login({
			provider: 'weixin'
		});
		// 发送 code 到后端服务器进行登录验证
		// 这里可以使用uni.request或者axios等发送请求，将code发送到后端
		// 后端根据code获取用户的openid等信息，并进行登录处理
		// 示例使用uni.request发送请求
		const res = await uni.request({
			url: 'http://localhost:8080/user/login', // 替换成你的后端登录接口地址
			method: 'GET',
			data: {
				code: code,
				// 其他参数根据你的后端需求添加
			},
		});

		// 处理后端返回的数据
		const {
			data
		} = res;
		if (data.msg == "success") {
			// 登录成功，获取用户信息，存储到本地或全局状态管理中
			const userInfo = data.data;
			console.log('用户信息：', userInfo);
			// 这里可以将用户信息保存到本地存储或全局状态管理，以便其他页面使用
		} else {
			// 登录失败，处理失败逻辑
			console.error('登录失败：', data.message);
		}
	};

	const showDrawer = () => {
		if (showLeft.value) {
			showLeft.value.open(); // 调用 抽屉的 open 方法
		}
	};
	const change = (e, type) => {
		console.log((type === 'showLeft' ? '左窗口' : '右窗口') + (e ? '打开' : '关闭'));
	}

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

		.person_image {
			margin-top: 100rpx;
			margin-left: 20rpx;
			width: 70rpx;
			height: 70rpx;
		}
	}

	.uni_drawer {
		.uni_drawer_head {
			margin-top: 100rpx;
		}

		.uni_drawer_person_image {
			width: 150rpx;
			height: 150rpx;
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