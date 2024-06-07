var express = require('express');
var router = express.Router();
const sensorController = require('../controllers/sensorController');

/* GET home page. */
router.get('/', sensorController.getHomePage);

module.exports = router;