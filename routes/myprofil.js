var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('../views/myprofil', function(req, res, next) {
  res.render('respond with a resource');
});

module.exports = router;