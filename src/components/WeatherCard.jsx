import React from "react";

function WeatherCard({ weatherData, images }) {
  return (
    <div className="max-w-6xl mx-auto my-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
        Weather Summary
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"> {/* Increased gap */}
        {Object.keys(weatherData).map((key) => (
          <div
            key={key}
            className="p-8 bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105 flex flex-col items-center" // Increased padding and shadow
            style={{ minHeight: '200px', minWidth: '180px' }} // Added fixed dimensions
          >
            <img
              src={images[key]?.imageUrl}
              alt={key}
              className="w-20 h-20 mb-6" // Increased image size
            />
            <strong className="text-lg mb-2">{key}</strong> {/* Increased text size */}
            <p className="text-gray-600">{weatherData[key]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherCard;
