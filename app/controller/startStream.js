'use strict';
const { exec } = require('child_process');
const { Controller } = require('egg');

class StreamController extends Controller {
  async index() {
    const { ctx } = this;
    exec('sudo ./home/mhb/src/stream_server/film')
    ctx.body = '推流打开！';
  }
}

module.exports = StreamController;