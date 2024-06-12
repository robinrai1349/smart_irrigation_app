const request = require('supertest');
const app = require('../app');
const { getWeather } = require('../controllers/weatherService');

jest.mock('../controllers/weatherService');

describe('Weather Forecast', () => {
    beforeEach(() => {
        getWeather.mockResolvedValue([
            {
                date: 1623234000,
                temperature: 30,
                rainChance: 20,
                rainAmount: 5
            }
        ]);
    });

    it('should display weather forecast data', async () => {
        const res = await request(app)
            .get('/weather');

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([
            {
                date: 1623234000,
                temperature: 30,
                rainChance: 20,
                rainAmount: 5
            }
        ]);
    });
});