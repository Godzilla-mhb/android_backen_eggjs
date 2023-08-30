"use strict";
const { exec } = require("child_process");
const { Controller } = require("egg");

class FireController extends Controller {
  async index() {
    // 获取 MySQL 客户端实例
    const { ctx, app } = this;
    const mysql = app.mysql;
    // 执行 SQL 查询
    const results = await mysql.query("SELECT * FROM pic");
    // 处理查询结果
    ctx.body = results;
  }
}

module.exports = FireController;
