# Smart Irrigation App README

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Overview
This project consisted of developing a smart irrigation control system prototype that optimises water usage based on real-time weather forecasts and sensor data. The system integrates with the OpenWeatherMap API to fetch weather data and triggers actions, such as delaying irrigation, based on upcoming rain events. Commands are sent to an external arduino hardware

The system sends UDP commands through an ESP connection to an external Arduino hardware, which manages the pumps. This setup ensures that the irrigation system is responsive and can effectively save water by not watering the crops when rain is imminent.
## Key Features:
- **Real-Time Weather Data Integration**: Utilised the OpenWeatherMap API to fetch and process weather forecasts.
- **Automated Decision-Making**: Implemented logic to delay irrigation based on rain predictions, optimising water usage.
- **Full-Stack Development**: Built with Node.js and Express on the backend, Pug templates and JavaScript on the frontend.
- **Database Management**: Stored and retrieved weather and sensor data using MongoDB.
- **Data Visualisation**: Created interactive charts using Chart.js to visualise weather data and rain events.
- **Error Handling**: Ensured robust error handling and resilience in data fetching and processing.
- **Scheduled Tasks**: Scheduled hourly checks for upcoming rain events to automate irrigation control.
- **Hardware Integration**: Sends UDP commands to Arduino hardware to control pumps.
- **Deployed on Heroku**: The application is live and can be accessed [here](https://irrigation-55-16f756d3978a.herokuapp.com/).
## Technologies Used:
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Frontend**: Pug (formerly Jade), JavaScript (ES6)
- **APIs**: OpenWeatherMap API
- **Charting**: Chart.js
- **Hardware Communication**: UDP, ESP, Arduino
- **Deployment**: Heroku
## Setup and Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/robinrai1349/smart_irrigation_app.git
   cd smart_irrigation_app
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Setup an environment variables**
   Create a `.env` file in the root directory and add your MongoDB URI and OpenWeatherMap API key:
   ```makefile
   MONGODB_URI=your_mongodb_uri
   OPENWEATHERMAP_API_KEY=your_openweathermap_api_key
   ```
6. **Start the application**
   ```bash
   npm start
   ```
## Usage
- Access the application at **`http://localhost:3000`**.
- View real-time weather data and sensor information on the dashboard.
- The system will automatically delay the pumps if rain is predicted within the next hour.

## Project Structure
```plaintext
.
├── controllers
│   ├── sensorController.js
│   └── weatherService.js
├── models
│   ├── sensor.js
│   ├── weather.js
│   └── rainEvent.js
├── routes
│   ├── index.js
│   └── users.js
├── views
│   ├── index.pug
│   └── layout.pug
├── .env
├── app.js
├── package.json
└── README.md
```
## Contributing
Contributions are welcome! Please create a pull request or open an issue to discuss any changes.

## License
This project is licensed under the MIT License.

## Acknowledgements
- [OpenWeatherMap](https://openweathermap.org/api) for providing the weather data API.
- [Chart.js](https://www.chartjs.org/) for the charting library.
- [Heroku](https://heroku.com/) for providing a deployment platform.
- All contributors and supporters of this project.
