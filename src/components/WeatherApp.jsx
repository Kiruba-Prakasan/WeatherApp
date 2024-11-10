import { useNavigate } from 'react-router-dom';

function WeatherApp() {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleGetStarted = () => {
        navigate('/current-weather'); // Redirect to the CurrentWeather page
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-cover bg-center bg-no-repeat">
            <div className="bg-white bg-opacity-80 shadow-2xl p-10 rounded-xl max-w-lg w-full text-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
                <h1 className="text-6xl font-extrabold text-indigo-600 mb-6 animate-fade-in">
                    WeatherApp
                </h1>
                <p className="text-gray-700 mb-4 text-xl font-medium">
                    Stay updated with real-time weather updates and make informed plans.
                </p>
                <p className="text-gray-500 mb-8 text-lg">
                    Your trusted source for accurate forecasts!
                </p>
                
                <button 
                    className="bg-indigo-600 text-white py-3 px-6 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out hover:-translate-y-1"
                    onClick={handleGetStarted} // Call the handleGetStarted function on click
                >
                    Get Started
                </button>
            </div>
            <footer className="mt-10 text-gray-400 text-sm">
                <p>© 2024 WeatherApp. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default WeatherApp;
