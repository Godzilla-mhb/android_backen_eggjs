"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.get("/", controller.home.index);
  // 录制视频
  router.get("/Android/recordvideo", controller.video.index);
  // 打开火灾警报
  router.get("/Android/firewarning", controller.firewarning.index);
  // 获取火灾数据
  router.get("/Android/firewarnlist", controller.firewarnlist.index);
  // 获取全部电影信息列表
  router.get("/Android/filmlist", controller.filmlist.index);
  // 开启推流
  router.get("/Android/startstream", controller.startStream.index);
  // 保存图片服务器,笔记
  router.get("/Android/savePic", controller.savePic.index);
};
