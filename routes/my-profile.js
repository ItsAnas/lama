var express = require('express');
var router = express.Router();
var connection = require('../database');

var Users = require('../models/Users');

/* GET my-profile listing. */
router.get('/', function(req, res, next) {
    Users.find({ name: "Lucy" })
    .then(data => {
        res.render('my-profile', { data_user: data[0] });
    });
});

module.exports = router;
