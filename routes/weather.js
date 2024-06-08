const express = require('express');
const router = express.Router();
const { getWeather } = require('../controllers/weatherService');

// Fixed coordinates for Pu Ngaol
const lat = 12.5657; // Replace with actual latitude
const lon = 104.9910; // Replace with actual longitude

router.get('/', async (req, res) => {
  try {
    
    const weatherData = await getWeather(lat, lon);
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;