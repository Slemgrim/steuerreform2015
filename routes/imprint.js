var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('imprint', {
    noCalc: true
  });
});

module.exports = router;
