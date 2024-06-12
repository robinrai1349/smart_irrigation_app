const axios = require('axios');
const WeatherData = require('../models/weather');

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
            time: new Date(entry.dt_txt),
            rainChance: entry.pop * 100, // Convert to percentage
            rainAmount: entry.rain ? entry.rain['3h'] : 0 // Rain in last 3 hours if available
        };
    });

    return weatherData;
  } catch (err) {
    throw new Error(`Failed to fetch weather data: ${err.message}`);
  }
};

const sendWeatherData = async (lat, lon) => {
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
            time: new Date(entry.dt_txt),
            rainChance: entry.pop * 100, // Convert to percentage
            rainAmount: entry.rain ? entry.rain['3h'] : 0 // Rain in last 3 hours if available
        };
    });

    // save weatherData to MongoDB
    await WeatherData.insertMany(weatherData);

    return weatherData;
  } catch (err) {
    throw new Error(`Failed to send weather data: ${err.message}`);
  }
};

const fetchWeatherData = async () => {
  try {
    const weatherData = await WeatherData.find();

    const formattedData = weatherData.map(data => ({
      time: new Date(data.time).toLocaleString(),
      rainChance: data.rainChance,
      rainAmount: data.rainAmount
    }));

    return formattedData;
    
  } catch (err) {
    console.error('Failed to fetch weather data:', err.message);
    throw err;
  }
};

module.exports = { getWeather, fetchWeatherData, sendWeatherData };