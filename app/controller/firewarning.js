'use strict';
const { exec } = require('child_process');
const { Controller } = require('egg');

class FireController extends Controller {
  async index() {
    const { ctx } = this;
    // 关闭录像功能
    const kill = Promise(res => {
      exec(
        'python /home/mhb/src/stream_server/kill.py film',
        (stdout, stderr) => {
          console.log(stdout, stderr);
          res();
        }
      );
    });

    kill.then(res => {
      console.log('成功:', res);
    });
    exec('python /home/mhb/src/stream_server/fire.py');
    ctx.body = '火灾报警打开！';
  }
}

module.exports = FireController;
