var express = require('express');
var router = express.Router();
var connection = require('../database');

var Users = require('../models/Users');
var Ads = require('../models/Ads');

/* GET my-profile listing. */
router.get('/', function(req, res, next) {
    Users.find({ name: "lamateam" })
    .then(data => {
        console.log(data);
        res.render('my-profile', { data_user: data });
    });
});

module.exports = router;
