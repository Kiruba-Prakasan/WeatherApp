import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

function Services() {
    return (
        <div className="flex space-x-10 text-center items-center justify-center mt-52">
            {/* Current Weather Card */}
            <motion.div
                className="service-card w-2/12 bg-transparent p-10 rounded-[10px] border border-black opacity-70" // Added border for visibility
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, x: -100 }} // Starts off-screen from the left
                animate={{ opacity: 1, x: 0 }} // Animates to its original position
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-2xl font-bold">Current Weather</h1>
                <p style={{ color: 'black' }}>Get the real-time current weather.</p>
                <button className="outline outline-black rounded-md p-5 m-5">
                    <Link to="/current-weather">Current Weather</Link>
                </button>
            </motion.div>

            {/* Air Quality Card */}
            <motion.div
                className="service-card w-2/12 bg-transparent p-10 rounded-[10px] border border-black opacity-70" // Added border for visibility
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 100 }} // Starts off-screen from the bottom
                animate={{ opacity: 1, y: 0 }} // Animates to its original position
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <h1 className="text-2xl font-bold">Air Quality</h1>
                <p style={{ color: 'black' }}>Get the real-time air quality.</p>
                <button className="outline outline-black rounded-md p-5 m-5">
                    <Link to="/air-quality">Air Quality</Link>
                </button>
            </motion.div>

            {/* Disaster Detection Card */}
            <motion.div
                className="service-card w-2/12 bg-transparent p-10 rounded-[10px] border border-black opacity-70" // Added border for visibility
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, x: 100 }} // Starts off-screen from the right
                animate={{ opacity: 1, x: 0 }} // Animates to its original position
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <h1 className="text-2xl font-bold">Disaster Detection</h1>
                <p style={{ color: 'black' }}>Get the real-time disaster data.</p>
                <button className="outline outline-black rounded-md p-5 m-5">
                    <Link to="/disaster-detection">Disaster Detection</Link>
                </button>
            </motion.div>
        </div>
    );
}

export default Services;
