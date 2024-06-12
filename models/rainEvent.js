const mongoose = require('mongoose');

const rainEventSchema = new mongoose.Schema({
  time: { type: Date, required: true },
  duration: { type: Number, required: true }
});

const rainEventData = mongoose.model('rainEvents', rainEventSchema);

module.exports = rainEventData;
