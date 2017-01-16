var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  res.send(req.user);

});


router.get('/logout', function (req, res, next) {
    req.logout();
  res.redirect('/');

});