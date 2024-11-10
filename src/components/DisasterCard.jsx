import React from "react";

function DisasterCard({ disasterData }) {
  return (
    <div className="grid gap-6 p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      {disasterData.map((disaster, index) => (
        <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <h2 className="text-xl font-bold mb-2 text-gray-800">{disaster.event_name}</h2>
          <p><strong>Type:</strong> {disaster.event_type}</p>
          <p><strong>Date:</strong> {new Date(disaster.date).toLocaleString()}</p>
          <p><strong>Continent:</strong> {disaster.continent}</p>
          <p><strong>Latitude:</strong> {disaster.lat}</p>
          <p><strong>Longitude:</strong> {disaster.lng}</p>
          <p><strong>Source Event ID:</strong> {disaster.source_event_id}</p>
          <p><strong>Event ID:</strong> {disaster.event_id}</p>
          <p className="text-xs text-gray-500">Reported on: {new Date(disaster.created_time).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}

export default DisasterCard;
