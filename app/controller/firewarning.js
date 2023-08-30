'use strict';
const { exec } = require('child_process');
const { Controller } = require('egg');

class FireController extends Controller {
  async index() {
    const { ctx } = this;
    exec('python /home/mhb/src/stream_server/fire.py')
    ctx.body = '火灾报警打开！';
  }
}

module.exports = FireController;