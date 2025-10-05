'use strict';

const { Service } = require('egg');
const fs = require('fs');
const path = require('path');

class MusicService extends Service {
  /**
   * 读取指定目录下的所有.mp3文件
   * @param {string} musicPath - 音乐文件目录路径
   * @return {Array} 返回.mp3文件名列表
   */
  async getMusicList(musicPath = '/home/mhb/files/music/') {
    try {
      // 检查目录是否存在
      if (!fs.existsSync(musicPath)) {
        this.logger.warn(`音乐目录不存在: ${musicPath}`);
        return [];
      }

      // 读取目录内容
      const files = fs.readdirSync(musicPath);

      // 过滤出.mp3文件
      const musicFiles = files.filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ext === '.mp3';
      });

      this.logger.info(`找到 ${musicFiles.length} 个音乐文件`);
      return musicFiles;
    } catch (error) {
      this.logger.error('读取音乐文件列表失败:', error);
      throw error;
    }
  }
}

module.exports = MusicService;
