/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1692512716213_1036";

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // 文件上传限制
  config.multipart = {
    fileSize: "5mb", // 上传文件的最大大小
    mode: "file", // 指定上传文件的模式
    whitelist: [".jpg", ".jpeg", ".png"], // 允许上传的文件扩展名
  };

  // 数据库设置
  config.mysql = {
    // MySQL 数据库配置
    client: {
      host: "localhost", // 数据库地址
      port: "3306", // 数据库端口
      user: "root", // 数据库用户名
      password: "zlskj", // 数据库密码
      database: "watch", // 数据库名称
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  return {
    ...config,
    ...userConfig,
  };
};
