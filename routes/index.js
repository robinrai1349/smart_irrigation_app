var express = require('express');
var router = express.Router();
const { getSensorData} = require('../controllers/sensorController');
const { fetchWeatherData, fetchRainEvents } = require('../controllers/weatherService');

// Fixed coordinates for Pu Ngaol
const lat = 12.5657; // Replace with actual latitude
const lon = 104.9910; // Replace with actual longitude
/* GET home page. */
router.get('/', async (req, res) => {
    try {
      const sensors = await getSensorData();
      const weatherData = await fetchWeatherData();
      const rainEvents = await fetchRainEvents();
      res.render('index', { title: 'CONTROL CENTRE', sensors, weatherData, rainEvents});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


  
module.exports = router;