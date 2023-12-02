"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.onMounted(() => {
      console.log("11111111");
    });
    const person_image = "/static/person/touxiang.png";
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
        b: common_vendor.f(imageList, (image, index, i0) => {
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
