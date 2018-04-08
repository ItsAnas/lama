var express = require('express');
var router = express.Router();
var connection = require('../database');

var Users = require('../models/Users');

/* GET profils public listing. */
router.get('/:name', function(req, res, next) {
  const name = req.params.name;
  Users.findOne({name: name})
  .then(user => {
      res.render('public-profile', { user: user });
  });
});

module.exports = router;
