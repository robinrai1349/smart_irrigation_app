const request = require('supertest');
const app = require('../app');

describe('Pump Control', () => {
    it('should handle manual pump control command', async () => {
        const res = await request(app)
            .post('/send-command')
            .send({ command: 'START_PUMP' });
        
        expect(res.statusCode).toEqual(200);
        expect(res.text).toContain('Command sent: START_PUMP');
    });

    it('should return an error if no command is provided', async () => {
        const res = await request(app)
            .post('/send-command')
            .send({});

        expect(res.statusCode).toEqual(400);
        expect(res.text).toContain('No command provided');
    });
});