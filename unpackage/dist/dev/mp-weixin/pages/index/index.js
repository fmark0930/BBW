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
    const person_image = "/static/person/touxiang.png";
    const showLeft = common_vendor.ref(false);
    common_vendor.onMounted(() => {
      console.log(showLeft.value);
    });
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
        a: person_image,
        b: common_vendor.o(($event) => showDrawer()),
        c: person_image,
        d: common_vendor.sr(showLeft, "6a3e4181-0", {
          "k": "showLeft"
        }),
        e: common_vendor.o(($event) => change($event, "showLeft")),
        f: common_vendor.p({
          mode: "left",
          width: 320
        }),
        g: common_vendor.f(imageList, (image, index, i0) => {
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
