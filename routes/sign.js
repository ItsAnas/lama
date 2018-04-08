var express = require('express');
var router = express.Router();
var connection = require('../database');
var crypto = require('crypto');

var Ads = require('../models/Ads');
var Users = require('../models/Users');

/* GET home page. */
router.get('/', function(req, res, next) {
console.log("lol");
    res.render('signin', { globalMessage: {} });
});  

router.get('/up', function(req, res, next) {
    res.render('signup');
});

router.post('/api-connection', function(req, res) {
    console.log(req.body);
    var user = req.body;
    Users.findOne({ email: user.email })
    .then(data => {
        var pass = crypto.createHash('md5').update(user.password).digest("hex");
        if (data.password == pass) {
            res.redirect('/home');
        } else {
            var messageData = {
                message : "Bad password",
                class : "failureMessage"
            };
            console.log("ici");
            res.render('signin', { globalMessage: messageData });
        }
    });
});

router.post('/api-subscribe', function(req, res) {

});

module.exports = router;
