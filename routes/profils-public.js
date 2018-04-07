var express = require('express');
var router = express.Router();
var connection = require('../database');

var Users = require('../models/Users');

/* GET profils public listing. */
router.get('/', function(req, res, next) {
  
  res.render('profils-public');
});

module.exports = router;
