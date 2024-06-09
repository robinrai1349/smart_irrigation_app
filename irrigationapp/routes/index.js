var express = require('express');
var router = express.Router();
const sensorController = require('../controllers/sensorController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CONTROL CENTRE' });
});


module.exports = router;
