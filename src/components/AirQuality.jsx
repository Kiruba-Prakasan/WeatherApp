import React, { useState, useEffect } from "react";
import AirQualityCard from "./AirQualityCard";

function AirQuality() {
  const [airQuality, setAirQuality] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });

  const fetchAirQuality = async (lat, lng) => {
    setLoading(true);
    setError("");
    try {
      const url = `https://server-weather-rlon.onrender.com/air-quality?lat=${lat}&lng=${lng}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch air quality data");
      }

      const data = await response.json();
      setAirQuality(data.stations[0]);
    } catch (err) {
      setError("Error fetching air quality data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const getCoordinates = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCoordinates({ lat: latitude, lng: longitude });
          fetchAirQuality(latitude, longitude);
        },
        (error) => {
          setError("Unable to retrieve your location. Please enable location services.");
          console.error(error);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    getCoordinates();
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <main className="flex flex-col items-center pt-20">
        {loading && <p>Loading air quality data...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {airQuality && <AirQualityCard airQualityData={airQuality} />}
      </main>
    </div>
  );
}

export default AirQuality;
