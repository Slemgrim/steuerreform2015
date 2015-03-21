var express = require('express');
var router = express.Router();
var sm = require('sitemap');

var min = 920;
var max = 100000;
var steps = 10;
var urls = [];

for(var i = min; i <= max; i += steps){
  urls.push({
    url: '/brutto/' + i
  })
}

var sitemap = sm.createSitemap ({
  hostname: 'http://steuerreform2015.at',
  urls: urls
});

router.get('/sitemap.xml', function(req, res) {
  sitemap.toXML( function (xml) {
      res.header('Content-Type', 'application/xml');
      res.send( xml );
  });
});

module.exports = router;
