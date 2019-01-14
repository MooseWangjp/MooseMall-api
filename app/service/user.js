'use strict';

module.exports = app => {
  class UserService extends app.Service {
    async login(username, password) {
      this.ctx.logger.info('username, password: ', username, password);
      let result = {};
      const [ ret ] = await app.knex('t_users_info').where('username', username).select('username', 'password', 'gender');
      this.ctx.logger.info('****: %j', ret);
      if (!ret.username) {
        result = {
          retCode: 200,
          retMsg: '用户不存在',
        };
      } else if (ret.password !== password) {
        result = {
          retCode: 200,
          retMsg: '用户名或密码错误',
        };
      } else {
        result = ret;
      }
      return result;
    }
  }
  return UserService;
};
