'use strict';
const { exec } = require('child_process');
const { Controller } = require('egg');

class StreamController extends Controller {
  async index() {
    const { ctx } = this;
    const key = ctx.query.key;
    const result = {};
    // 关闭火灾报警的摄像机占用
    if (key) {
      const kill = new Promise(res => {
        exec(
          'python /home/mhb/src/stream_server/kill.py fire.py',
          (stdout, stderr) => {
            if (stderr) {
              console.log('关闭fire错误', stderr);
              result.status = 503;
              result.msg = '关闭fire错误';
            }
            res();
          }
        );
      });
      kill.then(res => {
        console.log('关闭fire成功:', res);
        exec('sudo ./home/mhb/src/stream_server/film', (stdout, stderr) => {
          if (stderr) {
            console.log('打开film错误', stderr);
            result.msg = '打开film错误!';
            result.status = 503;
          } else {
            result.msg = '推流打开！';
            result.status = 200;
          }
        });
      });
    } else {
      // 关闭推流服务
      exec(
        'python /home/mhb/src/stream_server/kill.py fire.py',
        (stdout, stderr) => {
          if (stderr) {
            console.log('关闭fire错误', stderr);
            result.status = 503;
            result.msg = '关闭fire错误';
          } else {
            result.msg = '推流关闭！';
            result.status = 200;
          }
        }
      );
    }
    ctx.body = result;
    return ctx;
  }
}

module.exports = StreamController;
