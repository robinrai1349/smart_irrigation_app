import os
import requests
from dotenv import load_dotenv

# load environment variables from .env file:
load_dotenv()

#  weather data from OpenWeatherMap API:
def get_weather_data(latitude, longitude, date_time):
    # get API key:
    api_key = os.getenv('OPENWEATHERMAP_API_KEY')  
    api_url = f'https://api.openweathermap.org/data/2.5/onecall/timemachine?lat={latitude}&lon={longitude}&dt={date_time}&appid={api_key}'
    
    response = requests.get(api_url)
    if response.status_code == 200:
        weather_data = response.json()
        return weather_data
    else:
        print('Failed to fetch historical weather data')
        return None

# Pu Ngaol reference:
latitude = 12.4851  #  actual latitude of Pu Ngaol
longitude = 107.1188  #  actual longitude of Pu Ngaol
date_time = 1623234000  # UNIX timestamp for June 9, 2021, 12:00:00 UTC

weather_data = get_weather_data(latitude, longitude, date_time)
