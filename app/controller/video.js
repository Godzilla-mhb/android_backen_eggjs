"use strict";
const { exec } = require("child_process");
const { Controller } = require("egg");

class VideoController extends Controller {
  async index() {
    const { ctx } = this;
    // 关闭火灾报警的摄像机占用
    const kill = Promise((res, rej) => {
      exec(
        "python /home/mhb/src/stream_server/kill.py fire.py",
        (stdout, stderr) => {
          console.log(stdout, stderr);
          res();
        }
      );
    });

    kill.then((res) => {
      console.log("成功:", res);
    });
    // 开启
    exec("python /home/mhb/src/stream_server/recordVideo.py");
    ctx.body = "开始录制！";
  }
}

module.exports = VideoController;
