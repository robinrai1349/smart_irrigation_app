var express = require('express');
var router = express.Router();
const sensorController = require('../controllers/sensorController');

/* GET home page. */
<<<<<<< HEAD
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CONTROL CENTRE' });
});
=======
router.get('/', sensorController.getHomePage);
>>>>>>> main


module.exports = router;
