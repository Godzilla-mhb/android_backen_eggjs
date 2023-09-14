"use strict";
const { exec } = require("child_process");
const { Controller } = require("egg");

class StreamController extends Controller {
  async index() {
    const { ctx } = this;
    // 关闭火灾报警的摄像机占用
    const kill = new Promise((res, rej) => {
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
    exec("sudo ./home/mhb/src/stream_server/film");
    ctx.body = "推流打开！";
  }
}

module.exports = StreamController;
