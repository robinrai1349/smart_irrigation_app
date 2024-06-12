const mongoose = require('mongoose');

const weatherDataSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  temperature: { type: Number, required: true },
  rainChance: { type: Number, required: true },
  rainAmount: { type: Number, required: true }
});

module.exports = mongoose.model('WeatherData', weatherDataSchema);
