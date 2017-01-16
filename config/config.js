var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'passport-social-login-example-mysql'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://root:0000@192.168.1.104:3306/loginpractice'
  },

  test: {
    root: rootPath,
    app: {
      name: 'passport-social-login-example-mysql'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost/loginpractice'
  },

  production: {
    root: rootPath,
    app: {
      name: 'passport-social-login-example-mysql'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost/loginpractice'
  }
};

module.exports = config[env];
