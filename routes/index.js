var express = require('express');
var router = express.Router();
const { getSensorData} = require('../controllers/sensorController');
const { getWeather } = require('../controllers/weatherService');

// Fixed coordinates for Pu Ngaol
const lat = 12.5657; // Replace with actual latitude
const lon = 104.9910; // Replace with actual longitude
/* GET home page. */
router.get('/', async (req, res) => {
    try {
      const weatherData = await getWeather(lat, lon);
      const sensors = await getSensorData();
      
      console.log("heloo")
      res.render('index', { title: 'Smart Irrigation System', weatherData, sensors});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;