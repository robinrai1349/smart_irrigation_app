// __tests__/sensorController.test.js

const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');
const { getSensorData } = require('../controllers/sensorController');


describe('Sensor Data', () => {
  beforeAll(async () => {
    const url = process.env.MONGODB_URI;
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should return all sensors', async () => {
    const sensors = await getSensorData();
    
    sensors.forEach(sensor => {
        expect(sensor).toHaveProperty('_id');
        expect(sensor).toHaveProperty('sensorType');
        expect(sensor).toHaveProperty('timestamp');
        expect(sensor).toHaveProperty('value');
    })
  });
});
