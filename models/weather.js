const mongoose = require('mongoose');

const weatherDataSchema = new mongoose.Schema({
  time: { type: Date, required: true },
  rainChance: { type: Number, required: true },
  rainAmount: { type: Number, required: true }
});

const WeatherData = mongoose.model('Weather', weatherDataSchema);

module.exports = WeatherData;
