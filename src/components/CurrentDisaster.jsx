import React, { useEffect, useState } from "react";
import DisasterCard from "./DisasterCard"; // Adjust the path as necessary

function CurrentDisaster() {
  const [disasterData, setDisasterData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDisasterData = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(`https://server-weather-rlon.onrender.com/disaster-detection?lat=${latitude}&lng=${longitude}`);
            if (!response.ok) {
              throw new Error("Failed to fetch disaster data");
            }
            const data = await response.json();
            console.log(data.data);
            
            setDisasterData(data.data); // Set the full data instead of length
          } catch (error) {
            setError("Error fetching disaster data: " + error.message);
          }
          setLoading(false);
        });
      } else {
        setError("Geolocation is not supported by this browser.");
        setLoading(false);
      }
    };

    fetchDisasterData();
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <main className="flex flex-col items-center pt-20">
        {loading && <p>Loading disaster information...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {disasterData.length === 0 && !loading && !error && (
  <p style={{ color: 'darkgreen' }} className="font-bold text-3xl">No disasters reported for your location.</p>
)}

        {disasterData.length > 0 && <DisasterCard disasterData={disasterData} />}
      </main>
    </div>
  );
}

export default CurrentDisaster;
