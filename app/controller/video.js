'use strict';
const { exec } = require('child_process');
const { Controller } = require('egg');

class VideoController extends Controller {
  async index() {
    const { ctx } = this;
    exec('python /home/mhb/src/stream_server/recordVideo.py')
    ctx.body = '开始录制！';
  }
}

module.exports = VideoController;
