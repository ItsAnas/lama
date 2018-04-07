var express = require('express');
var router = express.Router();
var connection = require('../database');

var Users = require('../models/Users');
var Ads = require('../models/Ads');

/* GET home page. */
router.get('/', function(req, res, next) {
  Users.find({ name: "test" })
  .then(res => console.log("youpi"));
  res.render('index', { title: 'Express' });
});

module.exports = router;
