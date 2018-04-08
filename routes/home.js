var express = require('express');
var router = express.Router();
var connection = require('../database');

var Ads = require('../models/Ads');

/* GET home page. */
router.get('/', function(req, res, next) {
  Ads.find()
  .then(data => {
      res.render('index', { data: data });
  });
});

module.exports = router;
