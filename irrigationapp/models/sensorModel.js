const mongoose = require('mongoose')

const sensorSchema = new mongoose.Schema({
    sensorType: String,
    value: Number,
    timestamp: { type: Date, default: Date.now}
});

const Sensor = mongoose.model('Sensor', sensorSchema);

module.exports = Sensor;