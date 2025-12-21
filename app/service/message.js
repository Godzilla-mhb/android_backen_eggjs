'use strict'

const { Service } = require('egg')

class MsgService extends Service {
  /**
   * 读取指定目录下的所有.mp3文件
   * @param {string} musicPath - 音乐文件目录路径
   * @return {Array} 返回.mp3文件名列表
   */
  async getMessage() {
    const { ctx, app } = this
    const mysqlA = app.mysql.get('dbB')
    const results = await mysqlA.query(
      'SELECT * FROM normalmsg where content like %新设备上线% order by id'
    )
    ctx.body = results
  }
}

module.exports = MsgService
