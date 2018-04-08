var express = require('express');
var router = express.Router();
var connection = require('../database');

var Ads = require('../models/Ads');

/* GET index page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;