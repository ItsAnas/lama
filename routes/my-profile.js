var express = require('express');
var router = express.Router();

/* GET my-profile listing. */
router.get('/', function(req, res, next) {
  res.render('my-profile');
});

module.exports = router;
