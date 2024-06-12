

const axios = require('axios');
require('dotenv').config();
// weather model:
const WeatherData = require('../models/weatherData'); 

const API_KEY = process.env.OPENWEATHERMAP_API_KEY;
const baseUrl = 'https://api.openweathermap.org/data/2.5/onecall';

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
    const weatherData = response.data.daily.map(entry => {
      return {
        // Convert UNIX timestamp to Date object:
        date: new Date(entry.dt * 1000), 
        temperature: entry.temp.day,
        rainChance: entry.pop * 100, 
        rainAmount: entry.rain ? entry.rain : 0 
      };
    });

    return weatherData;
  } catch (err) {
    throw new Error(`Failed to fetch weather data: ${err.message}`);
  }
};

const fetchAndSaveWeatherData = async () => {
  //latitude of Pu Ngaol:
  const latitude = 12.4851  
  //longitude of Pu Ngaol:
  const longitude = 107.1188 
  try {
    const weatherData = await getWeather(latitude, longitude);

    // Save weather data to MongoDB
    await WeatherData.insertMany(weatherData);
    console.log('Weather data saved to MongoDB');
  } catch (error) {
    console.error('Failed to fetch and save weather data', error);
  }
};

module.exports = { getWeather, fetchAndSaveWeatherData };
