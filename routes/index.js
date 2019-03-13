var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/david', function(req, res, next) {
  res.render('index', { title: 'David' });
});

router.get('/index2', function(req, res, next) {
  res.render('index2', { title: 'David' });
});

module.exports = router;
