var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/mobile', function(req, res, next) {
  res.render('mobile', { title: 'Express' });
});
router.get('/love', function(req, res, next) {
  res.render('love', { title: 'Express', audioPath: '/audios/giacungnhauladuoc.mp3' });
});
module.exports = router;
