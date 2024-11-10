import React from "react";

function AirQualityCard({ airQualityData }) {
  const station = airQualityData;

  // Function to determine the color based on AQI value
  const getAQIColor = (aqi) => {
    if (aqi <= 50) return "bg-green-500";
    if (aqi <= 100) return "bg-yellow-400";
    if (aqi <= 150) return "bg-orange-400";
    if (aqi <= 200) return "bg-red-500";
    if (aqi <= 300) return "bg-purple-500";
    return "bg-maroon-700";
  };

  // AQI percentage for the progress meter
  const aqiPercentage = Math.min((station.AQI / 300) * 100, 100);

  return (
    <div className="bg-white opacity-90 p-8 rounded-lg shadow-xl max-w-lg mx-auto my-6 transform transition-transform hover:scale-105">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Air Quality Summary</h2>
      
      <div className="text-lg text-gray-700 space-y-2 mb-6">
        <p><strong>Location:</strong> {station.placeName}, {station.city}, {station.state}, {station.countryCode}</p>
        <p><strong>Postal Code:</strong> {station.postalCode}</p>
        <p><strong>Latitude:</strong> {station.lat}</p>
        <p><strong>Longitude:</strong> {station.lng}</p>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-2">AQI: <span className="text-green-600">{station.AQI}</span></h3>
      
      {/* AQI Meter */}
      <div className="relative w-full h-6 bg-gray-200 rounded-full overflow-hidden">
        <div
          style={{ width: `${aqiPercentage}%` }}
          className={`h-full ${getAQIColor(station.AQI)}`}
        ></div>
      </div>
      <p className="text-center mt-2 text-lg font-semibold">{station.aqiInfo.category}</p>
      
      <p className="text-lg text-gray-600 mt-4"><strong>Concentration:</strong> {station.aqiInfo.concentration} µg/m³</p>
      <p className="text-lg text-gray-600"><strong>Last Updated:</strong> {new Date(station.updatedAt).toLocaleString()}</p>

      <h3 className="text-xl font-semibold mt-6 text-gray-800">Pollutant Levels:</h3>
      <ul className="text-gray-600 mt-4 space-y-1">
        <li><strong>CO:</strong> {station.CO} µg/m³</li>
        <li><strong>NO2:</strong> {station.NO2} µg/m³</li>
        <li><strong>Ozone:</strong> {station.OZONE} µg/m³</li>
        <li><strong>PM10:</strong> {station.PM10} µg/m³</li>
        <li><strong>PM2.5:</strong> {station.PM25} µg/m³</li>
        <li><strong>SO2:</strong> {station.SO2} µg/m³</li>
      </ul>
    </div>
  );
}

export default AirQualityCard;
