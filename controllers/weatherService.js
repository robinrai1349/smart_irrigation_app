const axios = require('axios');

const API_KEY = process.env.OPENWEATHERMAP_API_KEY;
const baseUrl = 'https://api.openweathermap.org/data/2.5/forecast';

const getWeather = async (lat, lon) => {
  try {
    const response = await axios.get(baseUrl, {
      params: {
        lat,
        lon,
        appid: API_KEY,
        units: 'metric'
      }
    });
    const weatherData = response.data.list.map(entry => {
        return {
            time: entry.dt_txt,
            rainChance: entry.pop * 100, // Convert to percentage
            rainAmount: entry.rain ? entry.rain['3h'] : 0 // Rain in last 3 hours if available
        };
    });

    return weatherData
  } catch (err) {
    throw new Error(`Failed to fetch weather data: ${err.message}`);
  }
};

module.exports = { getWeather };