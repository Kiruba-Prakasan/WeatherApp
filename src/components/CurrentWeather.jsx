import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";
import humidityImage from "../assets/humidity.png";
import latitudeImage from "../assets/latitude.png";
import longitudeImage from "../assets/longitude.png";
import pressureImage from "../assets/pressure.png";
import temperatureImage from "../assets/temperature.png";
import timezoneImage from "../assets/timezone.png";
import windspeedImage from "../assets/windspeed.png";

function CurrentWeather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [city, setCity] = useState("");
  
  const images = {
    Humidity: { imageUrl: humidityImage },
    Latitude: { imageUrl: latitudeImage },
    Longitude: { imageUrl: longitudeImage },
    Pressure: { imageUrl: pressureImage },
    Temperature: { imageUrl: temperatureImage },
    Timezone: { imageUrl: timezoneImage },
    WindSpeed: { imageUrl: windspeedImage },
  };

  useEffect(() => {
    const fetchCoordinatesAndWeather = () => {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const url = `https://server-weather-rlon.onrender.com/current-weather?lat=${latitude}&lng=${longitude}`;
            const result = await fetch(url);
            const data = await result.json();

            if (data.error) {
              setError("Weather data not found for the current location.");
              setWeather(null);
            } else {
              const weatherData = {
                Humidity: data.data.humidity,
                Latitude: data.data.lat,
                Longitude: data.data.lon,
                Pressure: data.data.pressure,
                Temperature: data.data.temperature,
                Timezone: data.data.timezone,
                WindSpeed: data.data.windSpeed,
              };
              setWeather(weatherData);
              setError("");
            }
          } catch (err) {
            setError("Error fetching data. Please try again.");
            setWeather(null);
          }
          setLoading(false);
        },
        (err) => {
          setError("Unable to retrieve location. Please enable location services.");
          setLoading(false);
        }
      );
    };
    fetchCoordinatesAndWeather();
  }, []);

  const fetchWeatherByCity = async () => {
    setLoading(true);
    setError("");

    try {
      const url = `https://api.weatherapi.com/v1/current.json?key=8868e7d431964dd89a265801230604&q=${city}&aqi=no`;
      const result = await fetch(url);
      const data = await result.json();
      if (data.error) {
        setError("City not found.");
        setWeather(null);
      } else {
        const weatherData = {
          Humidity: data.current.humidity,
          Latitude: data.location.lat,
          Longitude: data.location.lon,
          Pressure: data.current.pressure_mb,
          Temperature: data.current.temp_f,
          Timezone: data.location.tz_id,
          WindSpeed: data.current.wind_kph,
        };
        setWeather(weatherData);
        setError("");
      }
    } catch (err) {
      setError("Error fetching data. Please try again.");
      setWeather(null);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen overflow-hidden">
      <main className="flex flex-col items-center pt-20">
        <div className="flex space-x-4 mb-10">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            className="w-64 h-10 px-5 rounded-full bg-white opacity-70 border border-gray-300"
          />
          <button
            onClick={fetchWeatherByCity}
            className="w-auto h-10 px-5 rounded-full bg-white opacity-70 text-black cursor-pointer"
          >
            Search
          </button>
        </div>

        {loading ? (
          <p>Loading weather data...</p>
        ) : error ? (
          <p className="text-red-500 mt-4">{error}</p>
        ) : (
          weather && <WeatherCard weatherData={weather} images={images} />
        )}
      </main>
    </div>
  );
}

export default CurrentWeather;
