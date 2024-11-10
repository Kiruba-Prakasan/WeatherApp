import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import WeatherApp from "./components/WeatherApp";
import About from "./components/About";
import GetWeather from "./components/CurrentWeather";
import Contact from "./components/Contact";
import Recommendations from "./components/Recommendations";
import Services from "./components/Services";
import AirQuality from "./components/AirQuality";
import CurrentDisaster from "./components/CurrentDisaster";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<WeatherApp />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/current-weather" element={<GetWeather />} />
          <Route path="/air-quality" element={<AirQuality />} />
          <Route path="/disaster-detection" element={<CurrentDisaster />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recommendations" element={<Recommendations />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
