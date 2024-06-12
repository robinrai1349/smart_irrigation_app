const request = require('supertest');
const app = require('../app'); 
const { getSensorData} = require('../controllers/sensorController');


describe('Sensor Data', () => {
    it('should display sensor data on the dashboard', async () => {
        const sensors = await getSensorData();

        sensors.forEach(entry => {
            expect(entry).toHaveProperty('_id');
            expect(entry).toHaveProperty('sensorType');
            expect(entry).toHaveProperty('timestamp');
            expect(entry).toHaveProperty('value')
        });
    });
});
