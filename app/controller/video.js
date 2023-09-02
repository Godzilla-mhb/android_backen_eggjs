'use strict';
const { exec } = require('child_process');
const { Controller } = require('egg');

class VideoController extends Controller {
  async index() {
    const { ctx } = this;
    // 关闭火灾报警的摄像机占用
    exec('python /home/mhb/src/stream_server/kill.py fire.py')
    // 开启
    exec('python /home/mhb/src/stream_server/recordVideo.py')
    ctx.body = '开始录制！';
  }
}

module.exports = VideoController;
