'use strict';

const { Controller } = require('egg');

class MusicController extends Controller {
  /**
   * 获取音乐文件列表
   * GET /Android/music
   */
  async index() {
    const { ctx, service } = this;

    try {
      // 调用service获取音乐文件列表
      const musicList = await service.music.getMusicList();

      // 返回成功响应
      ctx.body = {
        success: true,
        data: musicList,
        message: '获取音乐列表成功',
        count: musicList.length,
      };

      ctx.status = 200;
    } catch (error) {
      // 返回错误响应
      ctx.logger.error('获取音乐列表失败:', error);

      ctx.body = {
        success: false,
        data: [],
        message: '获取音乐列表失败',
        error: error.message,
      };

      ctx.status = 500;
    }
  }
}

module.exports = MusicController;
