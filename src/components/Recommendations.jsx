import { useEffect, useState } from "react";
import Card from "./Card";

function Recommendations() {
    const [crops, setCrops] = useState([]);
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December",
    ];

    useEffect(() => {
        const fetchCrops = async () => {
            const month = new Date().getMonth();
            let season;
            if (month >= 5 && month <= 9) {
                season = "Kharif Season";
            } else if (month >= 10 || month <= 4) {
                season = "Rabi Season";
            } else {
                season = "Zaid Season";
            }

            try {
                const response = await fetch(`https://server-weather-rlon.onrender.com/crops/${season}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch crops");
                }
                const cropsData = await response.json();
                setCrops(cropsData);
            } catch (error) {
                console.log("Error fetching crops:", error);
            }
        };

        fetchCrops();
    }, []);

    return (
        <div className="m-5 text-center h-[100vh] overflow-auto your-scroll-container">
            <h1 className="font-bold text-3xl text-white">
                {`Plant these crops in ${months[new Date().getMonth()]} month.`}
            </h1>
            <div className="flex flex-wrap gap-x-4 gap-y-4 justify-around">
                {crops.length > 0 ? (
                    crops.map((crop, index) => (
                        <Card key={index} {...crop} />
                    ))
                ) : (
                    <p>Loading crop recommendations...</p>
                )}
            </div>
        </div>
    );
}

export default Recommendations;
