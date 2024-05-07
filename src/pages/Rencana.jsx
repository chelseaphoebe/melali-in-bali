import React, { useState, useEffect } from 'react';
import Footer from "../components/Footer";
import './Rencana.css';
import { WeatherBox } from '../components/Footer';

const Rencana = () => {
  const [itinerary, setItinerary] = useState([]);
  const [tips, setTips] = useState([]);

  useEffect(() => {
    setItinerary([
    ]);

    setTips([

    ]);
  }, []);

  return (
    <div id="rencana">
    <h1 className="title">Rencana Perjalanan ke Bali</h1>
    <div className="content">
      <div className="itinerary-box">
        <div className="itinerary">
          {itinerary.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        </div>
        <div className="tips-box">
          <div className="tips">
            <ul>
              {tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
        <WeatherBox /> {/* Using the WeatherBox component */}
      </div>

      <Footer />
    </div>
  );
};

export default Rencana;
