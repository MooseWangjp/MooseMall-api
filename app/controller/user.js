'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async login() {
    const ctx = this.ctx;
    console.log('body: %j', ctx.request.body);
    const { username, password } = ctx.request.body;
    const loginRes = await ctx.service.user.login(username, password);
    ctx.set(loginRes.header);
    ctx.body = loginRes;
  }
}

module.exports = UserController;
