"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_drawer2 = common_vendor.resolveComponent("uni-drawer");
  _easycom_uni_drawer2();
}
const _easycom_uni_drawer = () => "../../uni_modules/uni-drawer/components/uni-drawer/uni-drawer.js";
if (!Math) {
  _easycom_uni_drawer();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.onMounted(() => {
    });
    const showLeft = common_vendor.ref(false);
    let person_image = "/static/person/touxiang.png";
    const UserLogin = async () => {
      await common_vendor.index.getUserProfile({
        desc: "获取用户信息",
        success(res2) {
          person_image = res2.userInfo.avatarUrl;
          console.log(person_image);
          console.log("获取成功111", res2.userInfo);
        }
      });
      const {
        code
      } = await common_vendor.index.login({
        provider: "weixin"
      });
      const res = await common_vendor.index.request({
        url: "http://localhost:8080/user/login",
        // 替换成你的后端登录接口地址
        method: "GET",
        data: {
          code
          // 其他参数根据你的后端需求添加
        }
      });
      const {
        data
      } = res;
      if (data.msg == "success") {
        const userInfo = data.data;
        console.log("用户信息：", userInfo);
      } else {
        console.error("登录失败：", data.message);
      }
    };
    const showDrawer = () => {
      if (showLeft.value) {
        showLeft.value.open();
      }
    };
    const change = (e, type) => {
      console.log((type === "showLeft" ? "左窗口" : "右窗口") + (e ? "打开" : "关闭"));
    };
    const imageList = [
      //轮播图路径
      "/static/banners/banner1.jpg",
      "/static/banners/banner2.jpg",
      "/static/banners/banner3.jpg",
      "/static/banners/banner4.jpg",
      "/static/banners/banner5.jpg"
    ];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(person_image),
        b: common_vendor.o(($event) => showDrawer()),
        c: common_vendor.unref(person_image),
        d: common_vendor.o(UserLogin),
        e: common_vendor.sr(showLeft, "6a3e4181-0", {
          "k": "showLeft"
        }),
        f: common_vendor.o(($event) => change($event, "showLeft")),
        g: common_vendor.p({
          mode: "left",
          width: 320
        }),
        h: common_vendor.f(imageList, (image, index, i0) => {
          return {
            a: image,
            b: index
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/uni-app-projects/BBW/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
