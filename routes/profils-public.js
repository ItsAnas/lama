var express = require('express');
var router = express.Router();

/* GET profils public listing. */
router.get('/', function(req, res, next) {
  res.render('profils-public');
});

module.exports = router;
