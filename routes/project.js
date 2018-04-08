var express = require('express');
var router = express.Router();
var connection = require('../database');

var Users = require('../models/Users');

/* GET profils public listing. */
router.get('/', function(req, res, next) {
  Users.find()
  .then(data => {
      res.render('project', { data_users: data });
  });
});

module.exports = router;
