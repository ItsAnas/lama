var express = require('express');
var router = express.Router();
var connection = require('../database');

var Ads = require('../models/Ads');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('signin');
});  

router.get('/in', function(req, res, next) {
    res.render('signin');
});

router.post('/api/form', function(req, res, next) {

});

module.exports = router;