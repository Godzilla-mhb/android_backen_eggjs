/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1692512716213_1036';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // 文件上传限制
  config.multipart = {
    fileSize: '5mb', // 上传文件的最大大小
    mode: 'file', // 指定上传文件的模式
    whitelist: [ '.jpg', '.jpeg', '.png' ], // 允许上传的文件扩展名
  };

  config.mysql = {
    clients: {
      // 数据库 A
      dbA: {
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: 'mhb267364',
        database: 'watch',
      },

      // 数据库 B
      dbB: {
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: 'mhb267364',
        database: 'cloud_nas',
      },
    },

    // 默认数据库（不写 client 时用它）
    default: 'dbA',

    app: true,
    agent: false,
  };

  return {
    ...config,
    ...userConfig,
  };
};
