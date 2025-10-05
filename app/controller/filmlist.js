'use strict';

const { Controller } = require('egg');

class FilmController extends Controller {
  async index() {
    const { ctx } = this;

    ctx.body = 'hi, egg';
  }
}

module.exports = FilmController;
