'use strict';
const { Controller } = require('egg');
const fs = require('fs');

class savePicController extends Controller {
  async index() {
    const { ctx } = this;
    const file = ctx.request.files[0]; // 获取上传的文件

    if (!file) {
      ctx.status = 400;
      ctx.body = '未检测到文件.';
      return;
    }
    // 文件流服务器地址
    const targetPath = '/home/mhb/src/cloud_img/' + file.filename;
    const writeStream = fs.createWriteStream(targetPath);

    // 将上传的文件流写入到服务器的目标路径
    const stream = fs.createReadStream(file.filepath);
    stream.pipe(writeStream);

    // 删除临时文件
    fs.unlinkSync(file.filepath);

    ctx.status = 200;
    ctx.body = {
      message: '文件上传成功',
      imageUrl: `/home/mhb/src/cloud_img/${file.filename}`,
    };
  }
}

module.exports = savePicController;
