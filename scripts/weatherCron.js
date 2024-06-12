const cron = require('node-cron');
const { sendWeatherData } = require('../controllers/weatherService');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

// Schedule task every 5 days
cron.schedule('0 0 */5 * *', async () => {
    try {
        // Fixed coordinates for Pu Ngaol
        const lat = 12.5657; // Replace with actual latitude
        const lon = 104.9910; // Replace with actual longitude
        const weatherData = await sendWeatherData(lat, lon);

        console.log('Weather data sent:', weatherData);
    } catch (error) {
        console.error('Error sending weather data:', error);
    }
}, {
    scheduled: true,
    timezone: 'Europe/London' // to be changed to 'Asia/Phnom_Penh' in final version
})


// testing purposes:
cron.schedule('*/5 * * * *', () => {
    console.log('Running every 5 minutes');
});