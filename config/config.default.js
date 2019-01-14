'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1547451821760_7318';

  // add your config here
  config.middleware = [];
  config.security = {
    // csrf: {
    //   ignoreJSON: false, // skip check JSON requests if ignoreJSON set to true
    //   cookieName: 'csrfToken', // csrf token's cookie name
    //   queryName: '_csrf', // 通过 query 传递 CSRF token 的默认字段为 _csrf
    //   bodyName: '_csrf', // 通过 body 传递 CSRF token 的默认字段为 _csrf
    //   headerName: 'x-csrf-token', // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
    // },
    csrf: false,
  };

  // add mysql config here
  exports.knex = {
    // database configuration
    client: {
      // database dialect
      dialect: 'mysql',
      connection: {
        // host
        host: '127.0.0.1',
        // port
        port: '3306',
        // username
        user: 'root',
        // password
        password: 'admin123',
        // database
        database: 'moosemall',
      },
      // connection pool
      pool: { min: 0, max: 5 },
      // acquire connection timeout, millisecond
      acquireConnectionTimeout: 30000,
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };

  return config;
};
