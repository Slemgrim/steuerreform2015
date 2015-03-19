var express = require('express');
var router = express.Router();

router.get('/brutto/:brutto', function(req, res, next) {
  console.log(req.params);
  res.render('landingpage');
});

module.exports = router;
