var express = require('express');
var router = express.Router();
var connection = require('../database');

var Users = require('../models/Users');

/* GET my-profile listing. */
router.get('/', function(req, res, next) {
    Users.find({ name: "lucy" })
    .then(data => {
        console.log("lol");
        res.render('my-profile', { data_user: data });
    });
});

module.exports = router;
